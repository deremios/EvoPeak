import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { Product, SortOption } from "@/types/product";

export function getAllProducts(): Product[] {
  return products.filter((p) => p.published);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.published);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = getCategoryBySlug(categorySlug);
  return products.filter(
    (p) => p.categoryId === (category?.id ?? categorySlug) && p.published
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.published);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.published &&
      (p.name.toLowerCase().includes(q) ||
        p.alternateName?.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)))
  );
}

export function sortProducts(items: Product[], sort: SortOption): Product[] {
  const sorted = [...items];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.variants[0].price - b.variants[0].price);
    case "price-desc":
      return sorted.sort((a, b) => b.variants[0].price - a.variants[0].price);
    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "popular":
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}

export function getAllCategories() {
  return categories.sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getLowestPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price));
}

const PLACEHOLDER_IMAGE = "/images/product-placeholder.png";

export function getProductImages(product: Product): string[] {
  if (product.galleryImages?.length) return product.galleryImages;
  return [product.imageUrl];
}

export function getProductImageFallback(): string {
  return PLACEHOLDER_IMAGE;
}
