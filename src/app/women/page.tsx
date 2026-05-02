import type { Metadata } from "next";
import { AudienceLanding } from "@/components/audience/audience-landing";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Women's Research Peptides Australia — EvoPeak",
  description:
    "Browse EvoPeak research compounds organized for female physiology research models, including metabolic, recovery, skin, cognitive, longevity, and specialty pathways. Laboratory research use only.",
  path: "/women",
  keywords: [
    "women research peptides Australia",
    "skin research peptides",
    "metabolic research peptides",
    "longevity research peptides",
  ],
});

export default function WomenPage() {
  return <AudienceLanding audience="women" />;
}
