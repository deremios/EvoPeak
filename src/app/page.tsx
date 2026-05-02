import type { Metadata } from "next";
import Link from "next/link";
import { CollectionCard } from "@/components/collections/collection-card";
import { QualityProof } from "@/components/collections/quality-proof";
import { ProductCard } from "@/components/shop/product-card";
import { region } from "@/config";
import { getAllCollections } from "@/lib/collections";
import { getFeaturedProducts } from "@/lib/products";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `${region.brandName} — Research Peptides Organized by Pathway`,
  description:
    "Shop third-party tested research peptides in Australia by audience and use case, including metabolic, recovery, GH-axis, cognitive, appearance, blends, and supplies pathways.",
  path: "/",
  keywords: [
    "research peptides Australia",
    "metabolic research peptides",
    "recovery research peptides",
    "third-party tested peptides",
    "buy research peptides Australia",
  ],
});

const processSteps = [
  {
    step: "01",
    title: "Choose a pathway",
    body: "Start with the research goal: metabolic, recovery, GH-axis, cognitive, appearance, stacks, or supplies.",
  },
  {
    step: "02",
    title: "Compare compounds",
    body: "Review mechanism summaries, variants, tags, and related products before narrowing your selection.",
  },
  {
    step: "03",
    title: "Verify quality",
    body: "Check HPLC/MS, endotoxin screening, COA documentation, storage context, and batch signals.",
  },
  {
    step: "04",
    title: "Order locally",
    body: "Checkout through the existing EvoPeak flow with Australian fulfilment and research-only disclaimers.",
  },
];

const researchSignals = [
  "Metabolic",
  "Recovery",
  "GH Axis",
  "Cognitive",
  "Skin",
  "Longevity",
  "Blends",
  "Supplies",
];

export default function HomePage() {
  const collections = getAllCollections();
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <div className="bg-bg-primary">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="border-b border-white/10 bg-black/20 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Third-party tested research compounds | Australia shipped | Laboratory research use only
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,200,120,0.26),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,140,65,0.20),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">
              Research pathways, redesigned
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
              Peptide research organized around what you study.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              EvoPeak now helps researchers shop by audience, pathway, and
              mechanism while keeping product data, quality signals, and
              research-only context close to every decision.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/men"
                className="inline-flex justify-center rounded-full bg-brand-green px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-light"
              >
                Shop Men&apos;s Research
              </Link>
              <Link
                href="/women"
                className="inline-flex justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-white/90"
              >
                Shop Women&apos;s Research
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-5 text-brand-navy">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
                Find the right formula
              </p>
              <div className="mt-5 grid gap-3">
                {collections.slice(0, 5).map((collection) => (
                  <Link
                    key={collection.slug}
                    href={`/collections/${collection.slug}`}
                    className="rounded-2xl border border-border-default p-4 transition-colors hover:border-brand-green/40 hover:bg-brand-green/5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-text-primary">
                          {collection.shortName}
                        </p>
                        <p className="mt-1 text-sm text-text-secondary">
                          {collection.eyebrow}
                        </p>
                      </div>
                      <span className="text-brand-green">-&gt;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {researchSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/75"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
              Understand the process
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Product discovery built for research decisions.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-border-default bg-bg-primary p-6"
              >
                <p className="text-sm font-bold text-brand-orange">
                  Step {item.step}.
                </p>
                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/men"
              className="group overflow-hidden rounded-[2rem] bg-brand-navy p-8 text-white transition-transform hover:-translate-y-1 sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
                Men&apos;s Research
              </p>
              <h2 className="mt-5 text-4xl font-bold">
                Performance, recovery, metabolism, and longevity pathways.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                A cleaner way to browse compounds often studied in male
                physiology, GH-axis, metabolic, and specialty research models.
              </p>
              <span className="mt-8 inline-flex font-bold text-brand-orange">
                Explore men&apos;s pathways -&gt;
              </span>
            </Link>
            <Link
              href="/women"
              className="group overflow-hidden rounded-[2rem] bg-white p-8 text-text-primary shadow-sm transition-transform hover:-translate-y-1 sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                Women&apos;s Research
              </p>
              <h2 className="mt-5 text-4xl font-bold">
                Metabolic, recovery, skin, cognitive, and longevity pathways.
              </h2>
              <p className="mt-4 max-w-xl text-text-secondary">
                Browse the same EvoPeak catalog through female-focused research
                contexts while preserving research-only compliance.
              </p>
              <span className="mt-8 inline-flex font-bold text-brand-green">
                Explore women&apos;s pathways -&gt;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                Find the right research pathway
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
                Use cases first. Products second.
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-bold text-brand-green hover:underline"
            >
              View all products
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.slug}
                collection={collection}
                cta="Shop collection"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                Featured compounds
              </p>
              <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-5xl">
                Popular products, now easier to place in context.
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-bold text-brand-green hover:underline"
            >
              Browse catalog
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <QualityProof />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-brand-navy p-8 text-white sm:p-12 lg:grid lg:grid-cols-[1fr_0.8fr] lg:gap-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
                Research hub
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Learn before you compare.
              </h2>
              <p className="mt-5 text-white/70">
                Use the research hub to understand COAs, storage, compound
                mechanisms, and compliant research-only handling before moving
                through the catalog.
              </p>
            </div>
            <div className="mt-8 grid gap-3 lg:mt-0">
              {[
                { href: "/guide", label: "New researcher guide" },
                { href: "/blog", label: "Research insights" },
                { href: "/faq", label: "Frequently asked questions" },
                { href: "/disclaimers", label: "Research-only disclaimers" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold text-white transition-colors hover:bg-white/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
