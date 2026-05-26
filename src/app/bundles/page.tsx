import { Metadata } from "next";
import { region } from "@/config";
import { BundlesHero } from "@/components/bundles/bundles-hero";
import { BundlesGrid } from "@/components/bundles/bundles-grid";
import { BundlesCta } from "@/components/bundles/bundles-cta";
import { TrustIconStrip } from "@/components/home/medvi/primitives";
import { trustItems } from "@/components/home/home-data";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Research Peptide Stacks & Bundles Australia — ${region.brandName}`,
  description:
    "Curated research peptide bundles for beginner, metabolic, and recovery-focused laboratory research. Triple-tested with COAs and shipped from Australia.",
  path: "/bundles",
  keywords: [
    "research peptide bundles Australia",
    "peptide stacks Australia",
    "BPC-157 TB-500 bundle",
    "GLP-1 research stack",
  ],
});

export default function BundlesPage() {
  return (
    <div className="home-medvi min-h-screen bg-white">
      <BundlesHero />
      <TrustIconStrip items={trustItems} />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <BundlesGrid />
      </div>

      <BundlesCta />
    </div>
  );
}
