export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  sortOrder: number;
}

export interface ProductVariant {
  id: string;
  productId: string;
  size: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  alternateName?: string;
  shortDescription: string;
  description: string;
  researchSummary: string;
  variants: ProductVariant[];
  imageUrl: string;
  coaUrl?: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  createdAt: string;
}

export type SortOption = "popular" | "price-asc" | "price-desc" | "newest";
