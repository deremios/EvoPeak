"use client";

import { use, useState } from "react";
import Link from "next/link";
import { bundles } from "@/data/bundles";
import { products } from "@/data/products";
import { formatPrice, region } from "@/config";
import { useCart } from "@/lib/cart-context";
import { TripleTestedBadge } from "@/components/shared/triple-tested-badge";

export default function BundleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const bundle = bundles.find((b) => b.slug === slug);

  if (!bundle) {
    return (
      <div className="bg-bg-primary min-h-screen py-16 text-center">
        <p className="text-lg font-bold text-text-primary">Bundle not found</p>
        <Link
          href="/bundles"
          className="mt-4 inline-block text-sm text-brand-green font-medium hover:underline"
        >
          Back to Bundles
        </Link>
      </div>
    );
  }

  return <BundleContent bundle={bundle} />;
}

function BundleContent({ bundle }: { bundle: (typeof bundles)[number] }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const bundleProducts = bundle.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  let fullPrice = 0;
  for (const vid of bundle.variantIds) {
    for (const p of products) {
      const v = p.variants.find((v) => v.id === vid);
      if (v) {
        fullPrice += v.price;
        break;
      }
    }
  }
  const discounted = fullPrice * (1 - bundle.discountPercent / 100);

  function handleAddBundle() {
    for (const p of bundleProducts) {
      if (!p) continue;
      const v = p.variants.find((v) => bundle.variantIds.includes(v.id));
      if (!v) continue;
      addItem({
        productId: p.id,
        variantId: v.id,
        name: `${p.name} (${bundle.name})`,
        variantSize: v.size,
        price: Math.round(v.price * (1 - bundle.discountPercent / 100) * 100) / 100,
        imageUrl: p.imageUrl,
        slug: p.slug,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link href="/bundles" className="hover:text-brand-green transition-colors">
            Bundles
          </Link>
          <span>/</span>
          <span className="text-text-primary font-medium">{bundle.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-3">
            <div className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              SAVE {bundle.discountPercent}%
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {bundle.name}
            </h1>
            <p className="mt-3 text-lg text-text-secondary leading-relaxed">
              {bundle.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TripleTestedBadge size="sm" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
                🇦🇺 {region.shipping.domesticEstimate}
              </span>
            </div>

            {/* Included products */}
            <div className="mt-8 space-y-4">
              <h2 className="text-lg font-bold text-text-primary">
                What&apos;s Included
              </h2>
              {bundleProducts.map((p) => {
                if (!p) return null;
                const v = p.variants.find((v) =>
                  bundle.variantIds.includes(v.id)
                );
                return (
                  <div
                    key={p.id}
                    className="flex items-center gap-4 bg-white rounded-xl border border-border-default p-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
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
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/shop/${p.slug}`}
                        className="text-sm font-semibold text-text-primary hover:text-brand-green transition-colors"
                      >
                        {p.name}
                      </Link>
                      <p className="text-xs text-text-muted">
                        {v?.size} — {p.shortDescription}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm text-text-muted line-through">
                        {formatPrice(v?.price ?? 0)}
                      </p>
                      <p className="text-sm font-bold text-brand-green">
                        {formatPrice(
                          Math.round(
                            (v?.price ?? 0) *
                              (1 - bundle.discountPercent / 100) *
                              100
                          ) / 100
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — purchase card */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 bg-white rounded-2xl border border-border-default p-6">
              <div className="text-center mb-4">
                <p className="text-sm text-text-muted">Bundle Price</p>
                <div className="flex items-baseline justify-center gap-2 mt-1">
                  <span className="text-3xl font-bold text-text-primary">
                    {formatPrice(discounted)}
                  </span>
                  <span className="text-lg text-text-muted line-through">
                    {formatPrice(fullPrice)}
                  </span>
                </div>
                <p className="text-xs text-green-700 font-semibold mt-1">
                  You save {formatPrice(fullPrice - discounted)}
                </p>
              </div>

              <button
                onClick={handleAddBundle}
                className={`w-full rounded-lg py-3.5 text-base font-semibold text-white transition-colors ${
                  added
                    ? "bg-green-600"
                    : "bg-brand-green hover:bg-brand-green-light"
                }`}
              >
                {added ? "Bundle Added!" : "Add Bundle to Cart"}
              </button>

              <div className="mt-4 space-y-2.5">
                <BenefitRow text={`Save ${bundle.discountPercent}% vs individual`} />
                <BenefitRow text="All items triple-tested with COAs" />
                <BenefitRow
                  text={`Free shipping over ${formatPrice(200)}`}
                />
                <BenefitRow text="Same-day dispatch available" />
              </div>

              <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-3">
                <p className="text-xs text-amber-800">
                  <strong>Research Use Only:</strong>{" "}
                  {region.legal.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-text-secondary">
      <svg
        className="w-4 h-4 text-brand-green flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      {text}
    </div>
  );
}
