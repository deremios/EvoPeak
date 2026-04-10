import { region } from "@/config";
import type { Product } from "@/types/product";
import type { BlogPost } from "@/types/blog";

export function productSchema(product: Product, variantIndex = 0) {
  const variant = product.variants[variantIndex];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: `https://evopeak.io${product.imageUrl}`,
    sku: variant.sku,
    brand: {
      "@type": "Brand",
      name: region.brandName,
    },
    offers: product.variants.map((v) => ({
      "@type": "Offer",
      price: v.price.toFixed(2),
      priceCurrency: region.currency.code,
      availability: v.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://evopeak.io/shop/${product.slug}`,
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: region.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: region.brandName,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: region.brandName,
    url: "https://evopeak.io",
    description: region.meta.defaultDescription,
    contactPoint: {
      "@type": "ContactPoint",
      email: region.support.email,
      contactType: "customer support",
    },
  };
}
