import type { Metadata } from "next";
import { region } from "@/config";
import { getAllCollections } from "@/lib/collections";
import { createSeoMetadata } from "@/lib/seo";
import { HomeClient } from "@/components/home/home-client";

export const metadata: Metadata = createSeoMetadata({
  title: `${region.brandName} — Research Peptides Organized by Pathway`,
  description:
    "Shop third-party tested research peptides in Australia by men, women, and use-case pathways including metabolic, recovery, GH-axis, cognitive, skin, stacks, and supplies research.",
  path: "/",
  keywords: [
    "research peptides Australia",
    "metabolic research peptides",
    "recovery research peptides",
    "third-party tested peptides",
    "buy research peptides Australia",
  ],
});

export default function HomePage() {
  const collections = getAllCollections();
  return <HomeClient collections={collections} />;
}
