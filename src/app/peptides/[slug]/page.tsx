import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PeptideLanding } from "@/components/peptides/peptide-landing";
import { region } from "@/config";
import {
  getAllLandingSlugs,
  getLandingByPeptideSlug,
  getLandingPath,
} from "@/data/peptide-landings";
import { getProductById } from "@/lib/products";
import {
  breadcrumbSchema,
  faqSchema,
  peptideLandingPageSchema,
} from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLandingByPeptideSlug(slug);
  if (!landing) {
    return createSeoMetadata({
      title: `Peptide Guide Not Found — ${region.brandName}`,
      description: "This peptide research guide could not be found.",
      path: `/peptides/${slug}`,
      noIndex: true,
    });
  }

  return createSeoMetadata({
    title: `${landing.seoTitle} — ${region.brandName}`,
    description: landing.seoDescription,
    path: getLandingPath(slug),
    keywords: landing.keywords,
    image: landing.ogImage,
  });
}

export default async function PeptideLandingPage({ params }: Props) {
  const { slug } = await params;
  const landing = getLandingByPeptideSlug(slug);
  if (!landing) notFound();

  const product = getProductById(landing.productId);
  if (!product) notFound();

  const relatedProducts = landing.relatedProductIds
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const path = getLandingPath(slug);

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
              { name: "Peptide Guides", path: "/peptides" },
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
