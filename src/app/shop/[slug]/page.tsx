import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import { region } from "@/config";
import { productSchema } from "@/lib/schema";
import { ProductDetail } from "@/components/shop/product-detail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — ${region.brandName}`,
    description: product.shortDescription,
    keywords: product.tags,
    openGraph: {
      title: `${product.name} — ${region.brandName}`,
      description: product.shortDescription,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${product.name} — ${region.brandName}`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema(product)),
        }}
      />
      <ProductDetail product={product} />
    </>
  );
}
