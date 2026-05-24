import { Metadata } from "next";
import { region } from "@/config";
import { PeptidesHubContent } from "@/components/peptides/peptides-hub-content";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Peptide Guides Australia — Research Peptide Information — ${region.brandName}`,
  description:
    "Browse in-depth Australia peptide guides covering mechanism, dosage, side effects, reconstitution, and ordering. Guides for Retatrutide and more research peptides from EvoPeak.",
  path: "/peptides",
  keywords: [
    "peptide guides australia",
    "research peptides australia",
    "retatrutide australia",
    "peptide dosage guide",
    "peptide side effects",
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
