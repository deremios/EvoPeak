import Link from "next/link";
import { CollectionCard } from "@/components/collections/collection-card";
import { ProductCard } from "@/components/shop/product-card";
import { TrustIconStrip } from "@/components/home/medvi/primitives";
import { trustItems } from "@/components/home/home-data";
import { AudienceHero, getAudienceLabel } from "@/components/audience/audience-hero";
import type { Audience } from "@/data/collections";
import {
  getAudiencePathways,
  getCollectionsByAudience,
  getProductsForCollection,
} from "@/lib/collections";

export function AudienceLanding({ audience }: { audience: Audience }) {
  const label = getAudienceLabel(audience);
  const collections = getCollectionsByAudience(audience);
  const pathways = getAudiencePathways(audience);
  const featuredProducts = pathways
    .flatMap((pathway) => getProductsForCollection(pathway.collectionSlug))
    .filter((product, index, list) => list.findIndex((p) => p.id === product.id) === index)
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <div className="home-medvi min-h-screen bg-white">
      <AudienceHero audience={audience} />
      <TrustIconStrip items={trustItems} />

      <section className="border-b border-black/6 bg-[#fafafa] py-14 text-center sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
            Find the Right Formula
          </p>
          <h2 className="mx-auto mt-4 max-w-5xl text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight text-home-charcoal">
            {label.replace("'s Research", "")} research pathways, organized by what you{" "}
            <span className="text-home-mint">study.</span>
          </h2>
        </div>
      </section>

      <section id="pathways" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
              Shop by research pathway
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
              Choose the goal, then compare{" "}
              <span className="text-home-mint">compounds.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="border-t border-black/6 bg-[#fafafa] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                  Popular compounds
                </p>
                <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
                  Featured in {label.toLowerCase()}
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-sm font-medium text-[#1b3d32] hover:underline"
              >
                View all products
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "HPLC/MS verified", body: "Purity and identity analysis on every batch." },
              { title: "Endotoxin screened", body: "Quality review extends beyond purity data." },
              { title: "COA documented", body: "Batch-specific certificates close to every purchase." },
              { title: "Australia shipped", body: "Local fulfilment for predictable research delivery." },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/6 bg-[#fafafa] p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F3EC] text-[#1b3d32]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751" />
                  </svg>
                </div>
                <h3 className="text-lg font-normal text-home-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-home-charcoal/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-home-hero py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-4xl text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight">
            Audience pages are browsing aids, not{" "}
            <span className="text-home-mint">medical advice.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80">
            Product selection should be based on compound data, batch documentation, and controlled
            laboratory requirements.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[#1b3d32] transition hover:bg-white/90"
            >
              Browse all products
            </Link>
            <Link
              href="/disclaimers"
              className="inline-flex justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Read disclaimers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
