import { Metadata } from "next";
import Link from "next/link";
import { region } from "@/config";
import { bundles } from "@/data/bundles";
import { products } from "@/data/products";
import { formatPrice } from "@/config";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Research Peptide Stacks & Bundles Australia — ${region.brandName}`,
  description:
    "Curated research peptide bundles for beginner, metabolic, and recovery-focused laboratory research. Triple-tested with COAs and shipped from Australia.",
  path: "/bundles",
  keywords: [
    "research peptide bundles Australia",
    "peptide stacks Australia",
    "BPC-157 TB-500 bundle",
    "GLP-1 research stack",
  ],
});

function getBundlePrice(variantIds: string[]) {
  let total = 0;
  for (const vid of variantIds) {
    for (const p of products) {
      const v = p.variants.find((v) => v.id === vid);
      if (v) {
        total += v.price;
        break;
      }
    }
  }
  return total;
}

export default function BundlesPage() {
  return (
    <div className="bg-bg-primary min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Research Stacks & Bundles
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Curated peptide combinations for specific research goals. Save 15%
            compared to purchasing individually.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => {
            const fullPrice = getBundlePrice(bundle.variantIds);
            const discounted =
              fullPrice * (1 - bundle.discountPercent / 100);
            const savings = fullPrice - discounted;
            const bundleProducts = bundle.productIds
              .map((id) => products.find((p) => p.id === id))
              .filter(Boolean);

            return (
              <Link
                key={bundle.id}
                href={`/bundles/${bundle.slug}`}
                className="group bg-white rounded-2xl border border-border-default overflow-hidden hover:shadow-lg hover:border-brand-green/20 transition-all"
              >
                {/* Header gradient */}
                <div
                  className={`h-40 bg-gradient-to-br ${bundle.imageColor} flex items-center justify-center relative`}
                >
                  <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    SAVE {bundle.discountPercent}%
                  </div>
                  <div className="flex -space-x-3">
                    {bundleProducts.map((p) => (
                      <div
                        key={p!.id}
                        className="w-14 h-14 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center"
                      >
                        <svg
                          className="w-6 h-6 text-brand-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold text-brand-orange uppercase tracking-wide mb-1">
                    {bundle.tagline}
                  </p>
                  <h2 className="text-lg font-bold text-text-primary group-hover:text-brand-green transition-colors">
                    {bundle.name}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                    {bundle.description}
                  </p>

                  {/* Included items */}
                  <div className="mt-4 space-y-1">
                    {bundleProducts.map((p) => {
                      const v = p!.variants.find((v) =>
                        bundle.variantIds.includes(v.id)
                      );
                      return (
                        <p
                          key={p!.id}
                          className="text-xs text-text-muted flex justify-between"
                        >
                          <span>
                            {p!.name} {v?.size}
                          </span>
                          <span className="line-through">
                            {formatPrice(v?.price ?? 0)}
                          </span>
                        </p>
                      );
                    })}
                  </div>

                  {/* Price */}
                  <div className="mt-4 pt-4 border-t border-border-default flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-bold text-text-primary">
                        {formatPrice(discounted)}
                      </span>
                      <span className="ml-2 text-sm text-text-muted line-through">
                        {formatPrice(fullPrice)}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2 py-0.5">
                      Save {formatPrice(savings)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
