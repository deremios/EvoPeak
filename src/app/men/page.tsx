import type { Metadata } from "next";
import { AudienceLanding } from "@/components/audience/audience-landing";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Men's Research Peptides Australia — EvoPeak",
  description:
    "Browse EvoPeak research compounds organized for male physiology research models, including metabolic, recovery, GH-axis, cognitive, and appearance pathways. Laboratory research use only.",
  path: "/men",
  keywords: [
    "men research peptides Australia",
    "GH axis research peptides",
    "metabolic research peptides",
    "recovery research peptides",
  ],
});

export default function MenPage() {
  return <AudienceLanding audience="men" />;
}
