import Link from "next/link";
import { bundles } from "@/data/bundles";
import { products } from "@/data/products";
import { formatPrice } from "@/config";

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

export function BundlesSection() {
  return (
    <section className="bg-white border-y border-border-default">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Research Stacks
            </h2>
            <p className="mt-2 text-text-secondary">
              Save 15% with curated bundles for specific research goals
            </p>
          </div>
          <Link
            href="/bundles"
            className="hidden sm:inline-flex text-sm font-medium text-brand-green hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map((bundle) => {
            const full = getBundlePrice(bundle.variantIds);
            const discounted = full * (1 - bundle.discountPercent / 100);

            return (
              <Link
                key={bundle.id}
                href={`/bundles/${bundle.slug}`}
                className="group relative rounded-2xl border border-border-default bg-bg-primary p-6 hover:shadow-md hover:border-brand-green/20 transition-all"
              >
                <div className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  -{bundle.discountPercent}%
                </div>
                <p className="text-xs font-semibold text-brand-orange uppercase tracking-wide">
                  {bundle.tagline}
                </p>
                <h3 className="text-lg font-bold text-text-primary mt-1 group-hover:text-brand-green transition-colors">
                  {bundle.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                  {bundle.description}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-text-primary">
                    {formatPrice(discounted)}
                  </span>
                  <span className="text-sm text-text-muted line-through">
                    {formatPrice(full)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          href="/bundles"
          className="mt-6 sm:hidden inline-flex text-sm font-medium text-brand-green hover:underline"
        >
          View all bundles →
        </Link>
      </div>
    </section>
  );
}
