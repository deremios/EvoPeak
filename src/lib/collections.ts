import { bundles } from "@/data/bundles";
import { audiencePathways, researchCollections, type Audience } from "@/data/collections";
import { getAllProducts } from "@/lib/products";
import type { Bundle } from "@/data/bundles";
import type { Product } from "@/types/product";

export function getAllCollections() {
  return researchCollections;
}

export function getCollectionBySlug(slug: string) {
  return researchCollections.find((collection) => collection.slug === slug);
}

export function getCollectionsByAudience(audience: Audience) {
  return researchCollections.filter((collection) =>
    collection.audiences.includes(audience)
  );
}

export function getAudiencePathways(audience: Audience) {
  return audiencePathways[audience];
}

export function getProductsForCollection(slug: string) {
  const collection = getCollectionBySlug(slug);
  if (!collection) return [];

  const products = getAllProducts();
  return collection.productIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

export function getBundlesForCollection(slug: string) {
  const collection = getCollectionBySlug(slug);
  if (!collection?.bundleIds) return [];

  return collection.bundleIds
    .map((id) => bundles.find((bundle) => bundle.id === id))
    .filter((bundle): bundle is Bundle => Boolean(bundle));
}
