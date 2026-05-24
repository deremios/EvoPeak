import type { PeptideLandingContent } from "@/types/peptide-landing";
import { products } from "@/data/products";
import { buildLandingFromProduct, getRelatedInCategory } from "./_builder";
import { landingOverrides } from "./overrides";
import { retatrutideLanding } from "./retatrutide";

const builtLandings: PeptideLandingContent[] = products
  .filter((p) => p.published && p.slug !== "retatrutide")
  .map((product) => {
    const overrides = landingOverrides[product.id] ?? landingOverrides[product.slug] ?? {};
    const landing = buildLandingFromProduct(product, overrides);

    if (!overrides.relatedProductIds?.length) {
      landing.relatedProductIds = getRelatedInCategory(product, products, 3);
    }

    return landing;
  });

const landings: PeptideLandingContent[] = [retatrutideLanding, ...builtLandings];

export function getAllLandingSlugs(): string[] {
  return landings.map((l) => l.peptideSlug);
}

export function getLandingByPeptideSlug(
  slug: string
): PeptideLandingContent | undefined {
  return landings.find((l) => l.peptideSlug === slug);
}

export function getAllLandings(): PeptideLandingContent[] {
  return landings;
}

export function getLandingPath(slug: string): string {
  return `/${slug}-australia`;
}

/** Compact single-line labels for nav menus */
export function getPeptideNavLabel(slug: string, fullName: string): string {
  const short: Record<string, string> = {
    "cjc-1295-ipamorelin-blend": "CJC-1295 + Ipamorelin",
    "hgh-fragment-176-191": "HGH Frag 176-191",
    "bacteriostatic-water": "Bacteriostatic Water",
  };
  return short[slug] ?? fullName;
}
