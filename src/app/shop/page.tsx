import { Suspense } from "react";
import { Metadata } from "next";
import { region } from "@/config";
import { ShopContent } from "@/components/shop/shop-content";
import { ShopHero } from "@/components/shop/shop-hero";
import { TrustIconStrip } from "@/components/home/medvi/primitives";
import { trustItems } from "@/components/home/home-data";
import { getAllProducts } from "@/lib/products";
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
  const productCount = getAllProducts().length;

  return (
    <div className="home-medvi min-h-screen bg-white">
      <ShopHero productCount={productCount} />
      <TrustIconStrip items={trustItems} />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Suspense
          fallback={
            <div className="py-16 text-center text-home-charcoal/65">Loading products...</div>
          }
        >
          <ShopContent />
        </Suspense>
      </div>
    </div>
  );
}
