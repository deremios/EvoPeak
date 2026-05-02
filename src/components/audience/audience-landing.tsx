import Link from "next/link";
import { CollectionCard } from "@/components/collections/collection-card";
import { ProductCard } from "@/components/shop/product-card";
import type { Audience } from "@/data/collections";
import {
  getAudiencePathways,
  getCollectionsByAudience,
  getProductsForCollection,
} from "@/lib/collections";

const pageCopy = {
  men: {
    label: "Men's Research",
    eyebrow: "EvoPeak — Men's Research Pathways",
    title: "Research organized around male physiology models.",
    description:
      "Browse metabolic, GH-axis, recovery, cognitive, and appearance-focused compounds through a cleaner framework. Built for product discovery, not medical advice.",
    primary: "Browse men's pathways",
    image: "/images/hero-men.jpg",
    accent: "from-slate-950/80 via-slate-900/60 to-slate-950/85",
  },
  women: {
    label: "Women's Research",
    eyebrow: "EvoPeak — Women's Research Pathways",
    title: "Research organized around female physiology models.",
    description:
      "Explore metabolic, recovery, skin, cognitive, longevity, and specialty compounds through a use-case structure that keeps quality and research-only context visible.",
    primary: "Browse women's pathways",
    image: "/images/hero-women.jpg",
    accent: "from-stone-950/80 via-stone-900/60 to-stone-950/85",
  },
} satisfies Record<Audience, {
  label: string; eyebrow: string; title: string;
  description: string; primary: string; image: string; accent: string;
}>;

const qualityBadges = [
  "HPLC/MS verified",
  "Endotoxin screened",
  "COA documented",
  "Australia shipped",
  "Research use only",
];

export function AudienceLanding({ audience }: { audience: Audience }) {
  const copy = pageCopy[audience];
  const collections = getCollectionsByAudience(audience);
  const pathways = getAudiencePathways(audience);
  const featuredProducts = pathways
    .flatMap((pathway) => getProductsForCollection(pathway.collectionSlug))
    .filter((product, index, list) => list.findIndex((p) => p.id === product.id) === index)
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <div className="bg-[#f5f1e8]">
      {/* Full-bleed hero with image */}
      <section className="relative min-h-[680px] overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${copy.image}')` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${copy.accent}`} />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col items-start justify-end px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-brand-orange">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.04em] sm:text-7xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            {copy.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pathways"
              className="rounded-full bg-brand-green px-7 py-3.5 text-sm font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-green-light"
            >
              {copy.primary}
            </Link>
            <Link
              href="/guide"
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
            >
              Research guide
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {qualityBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* "Find the Right Formula" intro */}
      <section className="bg-brand-navy py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange">
            Find the Right Formula
          </p>
          <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
            {copy.label.replace("'s Research", "")} research pathways, organized by what you study.
          </h2>
        </div>
      </section>

      {/* Pathway cards */}
      <section id="pathways" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">
              Shop by research pathway
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-brand-navy sm:text-5xl">
              Choose the goal, then compare compounds.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      {featuredProducts.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">
                  Popular compounds
                </p>
                <h2 className="mt-3 text-3xl font-black text-brand-navy sm:text-5xl">
                  Featured in {copy.label.toLowerCase()}
                </h2>
              </div>
              <Link href="/shop" className="text-sm font-bold text-brand-green hover:underline">
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

      {/* Quality proof strip */}
      <section className="bg-[#f5f1e8] py-16 sm:py-20">
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
                className="rounded-[2rem] border border-black/10 bg-white p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-navy py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
            Audience pages are browsing aids, not medical advice.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Product selection should be based on compound data, batch documentation, and
            controlled laboratory requirements.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-brand-navy hover:bg-white/90"
            >
              Browse all products
            </Link>
            <Link
              href="/disclaimers"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"
            >
              Read disclaimers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
