import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PeptideLanding } from "@/components/peptides/peptide-landing";
import { region } from "@/config";
import {
  getAllLandingSlugs,
  getLandingByPeptideSlug,
  getLandingPath,
} from "@/data/peptide-landings";
import { getProductBySlug } from "@/lib/products";
import {
  breadcrumbSchema,
  faqSchema,
  peptideLandingPageSchema,
} from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ peptide: string }>;
}

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ peptide: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { peptide } = await params;
  const landing = getLandingByPeptideSlug(peptide);
  if (!landing) return { title: "Not Found" };

  return createSeoMetadata({
    title: `${landing.seoTitle} — ${region.brandName}`,
    description: landing.seoDescription,
    path: getLandingPath(peptide),
    keywords: landing.keywords,
    image: landing.ogImage,
  });
}

export default async function PeptideLandingPage({ params }: Props) {
  const { peptide } = await params;
  const landing = getLandingByPeptideSlug(peptide);
  if (!landing) notFound();

  const product = getProductBySlug(landing.productId);
  if (!product) notFound();

  const relatedProducts = landing.relatedProductIds
    .map((id) => getProductBySlug(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const path = getLandingPath(peptide);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            peptideLandingPageSchema({
              name: landing.heroHeadline,
              description: landing.seoDescription,
              path,
              image: landing.heroImage,
            }),
            faqSchema(landing.faqs),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: landing.heroHeadline, path },
            ]),
          ]),
        }}
      />
      <PeptideLanding
        landing={landing}
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
