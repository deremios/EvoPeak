import type { Metadata } from "next";
import { region } from "@/config";
import { getAllCollections } from "@/lib/collections";
import { createSeoMetadata } from "@/lib/seo";
import { HomeClient } from "@/components/home/home-client";

export const metadata: Metadata = createSeoMetadata({
  title: `${region.brandName} — Research Peptides Australia`,
  description:
    "Buy third-party tested research peptides in Australia. Shop by pathway — metabolic, recovery, GH-axis, cognitive, skin, and stacks. HPLC/MS verified, COAs, PayID checkout, and local AU dispatch.",
  path: "/",
  keywords: [
    "peptides australia",
    "research peptides Australia",
    "buy peptides australia",
    "buy research peptides Australia",
    "australia research peptides",
    "peptides au",
    "third-party tested peptides",
  ],
});

export default function HomePage() {
  const collections = getAllCollections();
  return <HomeClient collections={collections} />;
}
