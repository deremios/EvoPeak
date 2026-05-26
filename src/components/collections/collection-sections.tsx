import Link from "next/link";
import { formatPrice } from "@/config";
import type { Bundle } from "@/data/bundles";
import { products } from "@/data/products";

function getBundlePrice(bundle: Bundle) {
  let total = 0;
  for (const vid of bundle.variantIds) {
    for (const p of products) {
      const v = p.variants.find((variant) => variant.id === vid);
      if (v) {
        total += v.price;
        break;
      }
    }
  }
  return total * (1 - bundle.discountPercent / 100);
}

export function CollectionBundles({ bundles }: { bundles: Bundle[] }) {
  if (bundles.length === 0) return null;

  return (
    <section className="border-t border-black/6 bg-[#fafafa] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
            Curated stacks
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
            Bundles connected to this <span className="text-home-mint">pathway.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bundles.map((bundle) => {
            const bundleProducts = bundle.productIds
              .map((id) => products.find((p) => p.id === id))
              .filter(Boolean);

            return (
              <Link
                key={bundle.id}
                href={`/bundles/${bundle.slug}`}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/6 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-center gap-2 rounded-2xl bg-[#E8F3EC] p-4">
                  {bundleProducts.slice(0, 3).map((p) => (
                    <img
                      key={p!.id}
                      src={p!.imageUrl}
                      alt={p!.name}
                      className="max-h-16 max-w-[72px] object-contain drop-shadow-sm"
                    />
                  ))}
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-home-charcoal/55">
                  {bundle.discountPercent}% bundle saving
                </p>
                <h3 className="mt-2 text-xl font-normal text-home-charcoal group-hover:text-[#1b3d32]">
                  {bundle.name}
                </h3>
                <p className="mt-1 text-sm text-home-charcoal/60">{bundle.tagline}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-home-charcoal/65">
                  {bundle.description}
                </p>
                <p className="mt-5 text-2xl font-normal text-home-charcoal">
                  From {formatPrice(getBundlePrice(bundle))}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#1b3d32]">
                  View stack →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CollectionCta() {
  return (
    <section className="border-t border-black/6 bg-[#fafafa] py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-home-charcoal">Explore the full catalogue</p>
          <p className="mt-1 text-sm text-home-charcoal/65">
            Browse all HPLC/MS-verified research peptides across every pathway.
          </p>
        </div>
        <Link
          href="/shop"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-home-cta px-8 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          Browse all products →
        </Link>
      </div>
    </section>
  );
}
