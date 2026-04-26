import { Suspense } from "react";
import { Metadata } from "next";
import { region } from "@/config";
import { ShopContent } from "@/components/shop/shop-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Research Peptides Australia — Shop ${region.brandName}`,
  description: `Browse ${region.brandName}'s curated range of third-party tested research peptides in Australia. HPLC/MS verified, endotoxin screened, COAs available, and shipped locally.`,
  path: "/shop",
  keywords: [
    "research peptides Australia",
    "buy research peptides Australia",
    "peptide supplier Australia",
    "HPLC tested peptides",
  ],
});

export default function ShopPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Research Peptides
          </h1>
          <p className="mt-2 text-text-secondary">
            All products are 3rd-party tested with downloadable Certificates of
            Analysis. For laboratory research use only.
          </p>
        </div>
        <Suspense
          fallback={
            <div className="text-center py-16 text-text-muted">
              Loading products...
            </div>
          }
        >
          <ShopContent />
        </Suspense>
      </div>
    </div>
  );
}
