import { Metadata } from "next";
import { notFound } from "next/navigation";
import { bundles } from "@/data/bundles";
import { region } from "@/config";
import { BundleDetail } from "@/components/bundles/bundle-detail";
import { breadcrumbSchema } from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return bundles.map((bundle) => ({ slug: bundle.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bundle = bundles.find((b) => b.slug === slug);

  if (!bundle) {
    return createSeoMetadata({
      title: `Research Bundle Not Found — ${region.brandName}`,
      description: "This EvoPeak research bundle could not be found.",
      path: `/bundles/${slug}`,
      noIndex: true,
    });
  }

  return createSeoMetadata({
    title: `${bundle.name} — Research Peptide Bundle Australia`,
    description: `${bundle.description} Triple-tested research peptides with COA documentation and local Australian shipping. For laboratory research use only.`,
    path: `/bundles/${bundle.slug}`,
    keywords: [
      bundle.name,
      "research peptide bundle Australia",
      "peptide stacks Australia",
      "third-party tested peptides",
    ],
  });
}

export default async function BundleDetailPage({ params }: Props) {
  const { slug } = await params;
  const bundle = bundles.find((b) => b.slug === slug);
  if (!bundle) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Bundles", path: "/bundles" },
              { name: bundle.name, path: `/bundles/${bundle.slug}` },
            ])
          ),
        }}
      />
      <BundleDetail bundle={bundle} />
    </>
  );
}
