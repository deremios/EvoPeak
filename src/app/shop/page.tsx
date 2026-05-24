import { Suspense } from "react";
import { Metadata } from "next";
import { region } from "@/config";
import { ShopContent } from "@/components/shop/shop-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Buy Research Peptides Australia by Use Case — ${region.brandName}`,
  description: `Buy third-party tested research peptides in Australia from ${region.brandName}. Browse by audience, use case, category, and mechanism. HPLC/MS verified, COA documented, PayID checkout, and local AU shipping.`,
  path: "/shop",
  keywords: [
    "buy peptides australia",
    "peptides australia",
    "research peptides Australia",
    "buy research peptides Australia",
    "australia research peptides",
    "HPLC tested peptides",
  ],
});

export default function ShopPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 sm:mb-10 rounded-2xl sm:rounded-[2rem] bg-brand-navy p-5 sm:p-8 lg:p-10 text-white">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
            All Research Compounds
          </p>
          <h1 className="mt-3 sm:mt-4 max-w-3xl text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
            Buy research peptides in Australia
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base text-white/70 hidden sm:block">
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
