import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getProductBySlug,
  getAllProducts,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/products";
import { region } from "@/config";
import {
  breadcrumbSchema,
  collectionPageSchema,
  itemListSchema,
  productSchema,
} from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";
import { ProductDetail } from "@/components/shop/product-detail";
import { CategoryLanding } from "@/components/shop/category-landing";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    ...getAllProducts().map((p) => ({ slug: p.slug })),
    ...getAllCategories().map((category) => ({ slug: category.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const category = getCategoryBySlug(slug);

  if (category) {
    return createSeoMetadata({
      title: `${category.name} Research Peptides Australia — ${region.brandName}`,
      description: `${category.description}. Browse third-party tested ${category.name.toLowerCase()} research peptides with HPLC/MS verification, COA documentation, and local Australian shipping.`,
      path: `/shop/${category.slug}`,
      keywords: [
        `${category.name} research peptides`,
        `${category.name} peptides Australia`,
        "research peptides Australia",
        "third-party tested peptides",
      ],
    });
  }

  if (!product) {
    return createSeoMetadata({
      title: `Product Not Found — ${region.brandName}`,
      description: "This research product could not be found.",
      path: `/shop/${slug}`,
      noIndex: true,
    });
  }

  return createSeoMetadata({
    title: `${product.name} Research Peptide Australia — ${region.brandName}`,
    description: `${product.shortDescription} Third-party HPLC/MS tested with COA documentation. For laboratory research use only. Shipped from Australia.`,
    path: `/shop/${product.slug}`,
    keywords: [
      product.name,
      `${product.name} Australia`,
      `${product.name} research peptide`,
      ...product.tags,
    ],
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (category) {
    const categoryProducts = getProductsByCategory(category.slug);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              collectionPageSchema({
                category,
                path: `/shop/${category.slug}`,
              }),
              itemListSchema({
                name: `${category.name} Research Peptides`,
                description: category.description,
                path: `/shop/${category.slug}`,
                products: categoryProducts,
              }),
              breadcrumbSchema([
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
                { name: category.name, path: `/shop/${category.slug}` },
              ]),
            ]),
          }}
        />
        <CategoryLanding category={category} products={categoryProducts} />
      </>
    );
  }

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productCategory = getCategoryBySlug(product.categoryId);
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    ...(productCategory
      ? [{ name: productCategory.name, path: `/shop/${productCategory.slug}` }]
      : []),
    { name: product.name, path: `/shop/${product.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)),
        }}
      />
      <ProductDetail product={product} />
    </>
  );
}
