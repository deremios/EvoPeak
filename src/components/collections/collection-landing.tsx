import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { TrustIconStrip } from "@/components/home/medvi/primitives";
import { trustItems } from "@/components/home/home-data";
import { CollectionHero } from "@/components/collections/collection-hero";
import { CollectionBundles, CollectionCta } from "@/components/collections/collection-sections";
import type { Bundle } from "@/data/bundles";
import type { ResearchCollection } from "@/data/collections";
import type { Product } from "@/types/product";

export function CollectionLanding({
  collection,
  products,
  bundles,
}: {
  collection: ResearchCollection;
  products: Product[];
  bundles: Bundle[];
}) {
  return (
    <div className="home-medvi min-h-screen bg-white">
      <CollectionHero collection={collection} productCount={products.length} />
      <TrustIconStrip items={trustItems} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside>
              <div className="sticky top-24 rounded-[2rem] border border-black/6 bg-[#fafafa] p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                  Research context
                </p>
                <h2 className="mt-3 text-xl font-normal text-home-charcoal">Compare by mechanism</h2>
                <p className="mt-3 text-sm leading-6 text-home-charcoal/65">
                  This collection is a browsing aid. Review each compound page, variant, quality
                  documentation, and handling notes before purchase.
                </p>
                <Link
                  href="/blog"
                  className="mt-5 inline-flex text-sm font-medium text-[#1b3d32] hover:underline"
                >
                  Open Research Hub
                </Link>
                <div className="mt-6 border-t border-black/6 pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                    Audience
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {collection.audiences.map((audience) => (
                      <Link
                        key={audience}
                        href={`/${audience}`}
                        className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-home-charcoal hover:border-[#1b3d32]/30 hover:text-[#1b3d32]"
                      >
                        {audience === "men" ? "Men" : "Women"}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                    Available compounds
                  </p>
                  <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
                    {products.length} products in this pathway
                  </h2>
                </div>
                <Link
                  href="/shop"
                  className="text-sm font-medium text-[#1b3d32] hover:underline"
                >
                  View all products
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CollectionBundles bundles={bundles} />

      <section className="border-t border-black/6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                Quality Standard
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight text-home-charcoal">
                Research compounds need evidence, not{" "}
                <span className="text-home-mint">guesswork.</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-home-charcoal/70">
                Every shopping path leads back to the same core standard: research-use positioning,
                third-party quality signals, transparent documentation, and careful handling
                guidance.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "HPLC/MS verified",
                  body: "Purity and identity checks support confident compound selection for controlled research.",
                },
                {
                  title: "Endotoxin screened",
                  body: "Quality review extends beyond purity so researchers can evaluate handling risk.",
                },
                {
                  title: "Batch documentation",
                  body: "COA-first product pages keep quality signals close to every purchase decision.",
                },
                {
                  title: "Australia shipped",
                  body: "Local fulfilment keeps delivery predictable for Australian research customers.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/6 bg-[#fafafa] p-5"
                >
                  <h3 className="text-sm font-medium text-home-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-home-charcoal/65">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
            Any Questions? We&apos;ve got answers.
          </h2>
          <div className="mt-10 divide-y divide-black/8">
            {collection.faqs.map((item) => (
              <article key={item.q} className="py-7">
                <h3 className="text-lg font-medium text-home-charcoal">{item.q}</h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-home-charcoal/70">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CollectionCta />
    </div>
  );
}
