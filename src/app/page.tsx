import type { Metadata } from "next";
import { region } from "@/config";
import { createSeoMetadata } from "@/lib/seo";
import { HomeClient } from "@/components/home/home-client";

export const metadata: Metadata = createSeoMetadata({
  title: `${region.brandName} — Peptides Australia`,
  description:
    "Buy third-party tested peptides in Australia. Shop weight loss, recovery, skin, performance, and curated stacks. HPLC/MS verified, batch COAs, PayID checkout, and local AU dispatch.",
  path: "/",
  keywords: [
    "peptides australia",
    "buy peptides australia",
    "retatrutide australia",
    "weight loss peptides",
    "peptides au",
    "third-party tested peptides",
  ],
});

export default function HomePage() {
  return <HomeClient />;
}
