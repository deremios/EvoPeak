import { Suspense } from "react";
import { Metadata } from "next";
import { region } from "@/config";
import { ShopContent } from "@/components/shop/shop-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Research Peptides Australia by Use Case — ${region.brandName}`,
  description: `Browse ${region.brandName}'s third-party tested research peptides by audience, use case, product category, and mechanism. HPLC/MS verified, COA documented, and shipped locally in Australia.`,
  path: "/shop",
  keywords: [
    "research peptides Australia",
    "buy research peptides Australia",
    "metabolic research peptides",
    "recovery research peptides",
    "HPLC tested peptides",
  ],
});

export default function ShopPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-10 rounded-[2rem] bg-brand-navy p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
            All Research Compounds
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-6xl font-bold tracking-tight">
            Browse products by pathway, category, or compound name.
          </h1>
          <p className="mt-5 max-w-2xl text-white/70">
            Use the filters below to compare EvoPeak&apos;s existing catalog by
            research use case, product family, price, and popularity. For
            laboratory research use only.
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
