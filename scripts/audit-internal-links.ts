/**
 * Validates internal route references across EvoPeak data and config.
 * Run: npx tsx scripts/audit-internal-links.ts
 */
import { products } from "../src/data/products";
import { categories } from "../src/data/categories";
import { bundles } from "../src/data/bundles";
import { researchCollections } from "../src/data/collections";
import { seedPosts } from "../src/data/blog-posts";
import {
  getAllLandings,
  getLandingPath,
} from "../src/data/peptide-landings";
import { BLOG_TAG_TO_PRODUCT } from "../src/lib/blog-product-links";

const productById = new Map(products.map((p) => [p.id, p]));
const productBySlug = new Map(
  products.filter((p) => p.published).map((p) => [p.slug, p])
);
const categorySlugs = new Set(categories.map((c) => c.slug));
const collectionSlugs = new Set(researchCollections.map((c) => c.slug));
const bundleSlugs = new Set(bundles.map((b) => b.slug));
const blogSlugs = new Set(
  seedPosts.filter((p) => p.published).map((p) => p.slug)
);

const errors: string[] = [];

function err(msg: string) {
  errors.push(msg);
}

// ─── Peptide landings ───────────────────────────────────────────
for (const landing of getAllLandings()) {
  const path = getLandingPath(landing.peptideSlug);

  if (!productById.get(landing.productId)) {
    err(`Landing ${landing.peptideSlug}: productId "${landing.productId}" not found`);
  }

  const product = productById.get(landing.productId);
  if (product && product.slug !== landing.peptideSlug) {
    err(
      `Landing ${landing.peptideSlug}: peptideSlug mismatch with product slug "${product.slug}"`
    );
  }

  if (!productBySlug.get(landing.peptideSlug)) {
    err(`Landing ${landing.peptideSlug}: no published product with matching slug`);
  }

  for (const id of landing.relatedProductIds) {
    if (!productById.get(id)) {
      err(`Landing ${landing.peptideSlug}: relatedProductId "${id}" not found`);
    }
  }

  for (const slug of landing.relatedBlogSlugs ?? []) {
    if (!blogSlugs.has(slug)) {
      err(`Landing ${landing.peptideSlug}: relatedBlogSlug "${slug}" not found`);
    }
  }

  // shopPath should match product slug
  const expectedShop = `/shop/${landing.peptideSlug}`;
  if (landing.shopPath !== expectedShop) {
    err(
      `Landing ${landing.peptideSlug}: shopPath "${landing.shopPath}" expected "${expectedShop}"`
    );
  }
}

// ─── Collections ────────────────────────────────────────────────
for (const collection of researchCollections) {
  for (const id of collection.productIds) {
    if (!productById.get(id)) {
      err(`Collection ${collection.slug}: productId "${id}" not found`);
    }
  }
  for (const id of collection.bundleIds ?? []) {
    if (!bundles.find((b) => b.id === id)) {
      err(`Collection ${collection.slug}: bundleId "${id}" not found`);
    }
  }
}

// ─── Bundles ────────────────────────────────────────────────────
for (const bundle of bundles) {
  for (const id of bundle.productIds) {
    if (!productById.get(id)) {
      err(`Bundle ${bundle.slug}: productId "${id}" not found`);
    }
  }
  for (const vid of bundle.variantIds) {
    const found = products.some((p) => p.variants.some((v) => v.id === vid));
    if (!found) {
      err(`Bundle ${bundle.slug}: variantId "${vid}" not found`);
    }
  }
}

// ─── Blog tag → product links ───────────────────────────────────
for (const [tag, { slug }] of Object.entries(BLOG_TAG_TO_PRODUCT)) {
  if (!productBySlug.get(slug)) {
    err(`Blog TAG_TO_PRODUCT tag "${tag}" → /shop/${slug} (product slug not found)`);
  }
}

// ─── Static nav paths (header, footer, home) ────────────────────
const staticPaths = [
  "/",
  "/shop",
  "/peptides",
  "/men",
  "/women",
  "/bundles",
  "/blog",
  "/about",
  "/guide",
  "/faq",
  "/terms",
  "/privacy",
  "/refund-policy",
  "/disclaimers",
  "/collections/metabolic-research",
  "/collections/recovery-repair",
  "/collections/performance-gh-axis",
  "/collections/cognitive-longevity",
  "/collections/skin-appearance",
  "/collections/supplies",
  "/collections/blends-stacks",
  "/blog/understanding-certificates-of-analysis",
  "/blog/peptide-storage-guide",
  "/shop/bacteriostatic-water",
];

for (const path of staticPaths) {
  if (path.startsWith("/shop/") && path !== "/shop") {
    const slug = path.replace("/shop/", "");
    if (!productBySlug.get(slug) && !categorySlugs.has(slug)) {
      err(`Static path ${path}: no product or category`);
    }
  } else if (path.startsWith("/collections/")) {
    const slug = path.replace("/collections/", "");
    if (!collectionSlugs.has(slug)) err(`Static path ${path}: collection not found`);
  } else if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "");
    if (!blogSlugs.has(slug)) err(`Static path ${path}: blog post not found`);
  }
}

// ─── All sitemap-style URLs ─────────────────────────────────────
const allUrls: string[] = [
  ...getAllLandings().map((l) => getLandingPath(l.peptideSlug)),
  ...products.filter((p) => p.published).map((p) => `/shop/${p.slug}`),
  ...categories.map((c) => `/shop/${c.slug}`),
  ...researchCollections.map((c) => `/collections/${c.slug}`),
  ...bundles.map((b) => `/bundles/${b.slug}`),
  ...seedPosts.filter((p) => p.published).map((p) => `/blog/${p.slug}`),
];

console.log(`Checked ${allUrls.length} internal routes.\n`);

if (errors.length === 0) {
  console.log("✓ No broken internal references found.");
} else {
  console.log(`✗ ${errors.length} issue(s) found:\n`);
  for (const e of errors) console.log(`  - ${e}`);
  process.exit(1);
}
