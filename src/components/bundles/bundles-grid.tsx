import Link from "next/link";
import { bundles } from "@/data/bundles";
import { products } from "@/data/products";
import { formatPrice } from "@/config";

const CARD_TINTS = [
  "bg-[#E8EEF5]",
  "bg-[#E8F3EC]",
  "bg-[#F0EBF5]",
] as const;

function getBundlePrice(variantIds: string[]) {
  let total = 0;
  for (const vid of variantIds) {
    for (const p of products) {
      const v = p.variants.find((variant) => variant.id === vid);
      if (v) {
        total += v.price;
        break;
      }
    }
  }
  return total;
}

export function BundlesGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {bundles.map((bundle, index) => {
        const fullPrice = getBundlePrice(bundle.variantIds);
        const discounted = fullPrice * (1 - bundle.discountPercent / 100);
        const savings = fullPrice - discounted;
        const bundleProducts = bundle.productIds
          .map((id) => products.find((p) => p.id === id))
          .filter(Boolean);
        const tint = CARD_TINTS[index % CARD_TINTS.length];

        return (
          <Link
            key={bundle.id}
            href={`/bundles/${bundle.slug}`}
            className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
          >
            <div className={`relative flex aspect-[4/3] items-center justify-center gap-2 p-4 sm:p-6 ${tint}`}>
              <span className="absolute right-4 top-4 rounded-full bg-home-cta px-3 py-1 text-xs font-medium text-white">
                SAVE {bundle.discountPercent}%
              </span>
              <div className="flex flex-wrap items-end justify-center gap-2">
                {bundleProducts.map((p) => (
                  <img
                    key={p!.id}
                    src={p!.imageUrl}
                    alt={p!.name}
                    className="max-h-[100px] max-w-[88px] object-contain drop-shadow-md transition-transform group-hover:scale-105 sm:max-h-[120px] sm:max-w-[100px]"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-home-charcoal/55">
                {bundle.tagline}
              </p>
              <h2 className="mt-2 text-xl font-normal text-home-charcoal transition-colors group-hover:text-[#1b3d32]">
                {bundle.name}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-home-charcoal/65">
                {bundle.description}
              </p>

              <div className="mt-4 space-y-1.5">
                {bundleProducts.map((p) => {
                  const v = p!.variants.find((variant) => bundle.variantIds.includes(variant.id));
                  return (
                    <p
                      key={p!.id}
                      className="flex justify-between text-xs text-home-charcoal/50"
                    >
                      <span>
                        {p!.name} {v?.size}
                      </span>
                      <span className="line-through">{formatPrice(v?.price ?? 0)}</span>
                    </p>
                  );
                })}
              </div>

              <div className="mt-auto flex items-end justify-between border-t border-black/6 pt-5">
                <div>
                  <span className="text-2xl font-normal text-home-charcoal">
                    {formatPrice(discounted)}
                  </span>
                  <span className="ml-2 text-sm text-home-charcoal/45 line-through">
                    {formatPrice(fullPrice)}
                  </span>
                </div>
                <span className="rounded-full border border-[#1b3d32]/15 bg-[#E8F3EC]/80 px-3 py-1 text-xs font-medium text-[#1b3d32]">
                  Save {formatPrice(savings)}
                </span>
              </div>

              <span className="mt-5 inline-flex items-center justify-center rounded-full bg-home-cta py-2.5 text-sm font-medium text-white transition group-hover:opacity-90">
                View stack →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
