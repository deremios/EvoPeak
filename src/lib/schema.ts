import { region } from "@/config";
import type { Product } from "@/types/product";
import type { ProductCategory } from "@/types/product";
import type { BlogPost } from "@/types/blog";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

export function productSchema(product: Product, variantIndex = 0) {
  const variant = product.variants[variantIndex];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${absoluteUrl(`/shop/${product.slug}`)}#product`,
    name: product.name,
    alternateName: product.alternateName,
    description: product.description,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    sku: variant.sku,
    category: product.categoryId,
    brand: {
      "@type": "Brand",
      name: region.brandName,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Research use",
        value: "For laboratory research use only. Not for human consumption.",
      },
      {
        "@type": "PropertyValue",
        name: "Testing",
        value: "HPLC/MS purity analysis, identity verification, and endotoxin screening",
      },
      {
        "@type": "PropertyValue",
        name: "Form",
        value: "Lyophilised powder",
      },
    ],
    offers: product.variants.map((v) => ({
      "@type": "Offer",
      price: v.price.toFixed(2),
      priceCurrency: region.currency.code,
      availability: v.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      sku: v.sku,
      url: absoluteUrl(`/shop/${product.slug}`),
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    image: post.ogImage ? absoluteUrl(post.ogImage) : absoluteUrl("/images/og/evopeak-og.jpg"),
    inLanguage: region.locale,
    author: {
      "@type": "Organization",
      name: region.brandName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: region.brandName,
      url: SITE_URL,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: region.brandName,
    url: SITE_URL,
    description: region.meta.defaultDescription,
    contactPoint: {
      "@type": "ContactPoint",
      email: region.support.email,
      contactType: "customer support",
      areaServed: region.countryCode,
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: region.brandName,
    url: SITE_URL,
    description: region.meta.defaultDescription,
    inLanguage: region.locale,
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/shop?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function itemListSchema({
  name,
  description,
  path,
  products,
}: {
  name: string;
  description: string;
  path: string;
  products: Product[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}#itemlist`,
    name,
    description,
    url: absoluteUrl(path),
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/shop/${product.slug}`),
      name: product.name,
    })),
  };
}

export function collectionPageSchema({
  category,
  path,
}: {
  category: ProductCategory;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: `${category.name} Research Peptides`,
    description: category.description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": `${SITE_URL}#website`,
    },
  };
}

export function peptideLandingPageSchema({
  name,
  description,
  path,
  image,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: region.locale,
    isPartOf: {
      "@id": `${SITE_URL}#website`,
    },
    about: {
      "@type": "Thing",
      name,
      description,
    },
    ...(image && {
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(image),
      },
    }),
  };
}
