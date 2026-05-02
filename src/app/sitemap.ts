import type { MetadataRoute } from "next";
import { getAllCategories, getAllProducts } from "@/lib/products";
import { seedPosts } from "@/data/blog-posts";
import { bundles } from "@/data/bundles";
import { getAllCollections } from "@/lib/collections";
import { SITE_URL } from "@/lib/seo";

const SITE_UPDATED_AT = new Date("2026-04-26");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/men`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/women`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/shop`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/bundles`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.75 },
    { url: `${SITE_URL}/guide`, lastModified: SITE_UPDATED_AT, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified: SITE_UPDATED_AT, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/about`, lastModified: SITE_UPDATED_AT, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/terms`, lastModified: SITE_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: SITE_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/refund-policy`, lastModified: SITE_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/disclaimers`, lastModified: SITE_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productPages: MetadataRoute.Sitemap = getAllProducts().map((p) => ({
    url: `${SITE_URL}/shop/${p.slug}`,
    lastModified: new Date(p.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = getAllCategories().map((category) => ({
    url: `${SITE_URL}/shop/${category.slug}`,
    lastModified: SITE_UPDATED_AT,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = seedPosts
    .filter((p) => p.published)
    .map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const bundlePages: MetadataRoute.Sitemap = bundles.map((b) => ({
    url: `${SITE_URL}/bundles/${b.slug}`,
    lastModified: SITE_UPDATED_AT,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const collectionPages: MetadataRoute.Sitemap = getAllCollections().map((collection) => ({
    url: `${SITE_URL}/collections/${collection.slug}`,
    lastModified: SITE_UPDATED_AT,
    changeFrequency: "weekly" as const,
    priority: 0.86,
  }));

  return [
    ...staticPages,
    ...collectionPages,
    ...categoryPages,
    ...productPages,
    ...blogPages,
    ...bundlePages,
  ];
}
