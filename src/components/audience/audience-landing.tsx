import Link from "next/link";
import { CollectionCard } from "@/components/collections/collection-card";
import { QualityProof } from "@/components/collections/quality-proof";
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
    title: "Research pathways organized for male physiology models.",
    description:
      "Browse metabolic, GH-axis, recovery, cognitive, and appearance-focused compounds through a cleaner research framework. Built for product discovery, not medical advice.",
    primary: "Shop men's pathways",
    accent: "Performance, recovery, metabolism, and longevity research",
  },
  women: {
    label: "Women's Research",
    title: "Research pathways organized for female physiology models.",
    description:
      "Explore metabolic, recovery, skin, cognitive, longevity, and specialty compounds through a use-case structure that keeps quality documentation and research-only context visible.",
    primary: "Shop women's pathways",
    accent: "Metabolism, recovery, skin, cognition, and longevity research",
  },
} satisfies Record<Audience, Record<string, string>>;

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
    <div className="bg-bg-primary">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,200,120,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,140,65,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {copy.label}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {copy.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#pathways"
                className="inline-flex justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-light"
              >
                {copy.primary}
              </Link>
              <Link
                href="/guide"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Read the research guide
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold text-brand-orange">
              {copy.accent}
            </p>
            <div className="mt-6 grid gap-3">
              {pathways.slice(0, 5).map((pathway) => (
                <Link
                  key={pathway.collectionSlug}
                  href={`/collections/${pathway.collectionSlug}`}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 transition-colors hover:bg-white/15"
                >
                  <p className="font-semibold text-white">{pathway.title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    {pathway.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
              Shop by research pathway
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Choose the goal, then compare compounds.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                  Popular compounds
                </p>
                <h2 className="mt-3 text-3xl font-bold text-text-primary">
                  Featured in {copy.label.toLowerCase()}
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-sm font-bold text-brand-green hover:underline"
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

      <QualityProof />

      <section className="bg-bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-brand-navy p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold">
                Keep the research-only standard clear.
              </h2>
              <p className="mt-3 text-white/70">
                Audience pages are browsing aids. Product selection should still
                be based on compound data, batch documentation, and controlled
                laboratory requirements.
              </p>
            </div>
            <Link
              href="/disclaimers"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-navy lg:mt-0"
            >
              Read disclaimers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
