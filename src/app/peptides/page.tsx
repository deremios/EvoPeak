import { Metadata } from "next";
import { region } from "@/config";
import { PeptidesHubContent } from "@/components/peptides/peptides-hub-content";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Peptides Australia — Research Peptide Guides & Information — ${region.brandName}`,
  description:
    "Peptides Australia guides from EvoPeak — in-depth compound information covering mechanism, dosage, side effects, reconstitution, and ordering. Retatrutide, BPC-157, GHK-Cu, and more.",
  path: "/peptides",
  keywords: [
    "peptides australia",
    "australia research peptides",
    "peptide guides australia",
    "research peptides australia",
    "retatrutide australia",
    "peptide dosage guide",
  ],
});

export default function PeptidesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            collectionPageSchema({
              category: {
                id: "peptide-guides",
                name: "Peptide Guides",
                slug: "peptides",
                description:
                  "In-depth research peptide guides for the Australian market.",
                sortOrder: 0,
              },
              path: "/peptides",
            }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Peptide Guides", path: "/peptides" },
            ]),
          ]),
        }}
      />
      <PeptidesHubContent />
    </>
  );
}
