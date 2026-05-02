import type { Metadata } from "next";
import Link from "next/link";
import { region } from "@/config";
import { getAllCollections } from "@/lib/collections";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `${region.brandName} — Research Peptides Organized by Pathway`,
  description:
    "Shop third-party tested research peptides in Australia by men, women, and use-case pathways including metabolic, recovery, GH-axis, cognitive, skin, stacks, and supplies research.",
  path: "/",
  keywords: [
    "research peptides Australia",
    "metabolic research peptides",
    "recovery research peptides",
    "third-party tested peptides",
    "buy research peptides Australia",
  ],
});

const tickerItems = [
  "Metabolic",
  "Recovery",
  "GH Axis",
  "Cognition",
  "Skin",
  "Longevity",
  "Blends",
  "Supplies",
];

const steps = [
  {
    number: "01.",
    title: "Map the pathway",
    body: "Start with the research area you are studying, then compare compounds by mechanism rather than browsing one long product grid.",
  },
  {
    number: "02.",
    title: "Review the compound",
    body: "Read the research summary, variants, pricing, and related pathways before selecting a product page.",
  },
  {
    number: "03.",
    title: "Check the standard",
    body: "Use COA documentation, HPLC/MS verification, endotoxin screening, and storage context as the quality baseline.",
  },
  {
    number: "04.",
    title: "Order for research",
    body: "Checkout with local Australian fulfilment and research-only positioning visible through the buying flow.",
  },
];

const menCards = [
  {
    title: "Explore Metabolic Pathways",
    body: "GLP-1, GIP, amylin, and lipolysis compounds organized for metabolic research models.",
    href: "/collections/metabolic-research",
  },
  {
    title: "Study GH Axis Signaling",
    body: "Compare GHRH, GHRP, and growth-hormone-fragment research compounds by mechanism.",
    href: "/collections/performance-gh-axis",
  },
  {
    title: "Review Recovery Models",
    body: "BPC-157, TB-500, GHK-Cu, and recovery stacks for tissue-remodeling research.",
    href: "/collections/recovery-repair",
  },
  {
    title: "Compare Cognitive Compounds",
    body: "Selank, Semax, and Epithalon grouped around neuropeptide and longevity literature.",
    href: "/collections/cognitive-longevity",
  },
  {
    title: "Browse Appearance Research",
    body: "Copper peptide, collagen, and melanocortin pathways in one focused collection.",
    href: "/collections/skin-appearance",
  },
];

const womenCards = [
  {
    title: "Explore Metabolic Pathways",
    body: "Incretin, amylin, and lipolysis compounds organized for female-focused research browsing.",
    href: "/collections/metabolic-research",
  },
  {
    title: "Review Recovery Models",
    body: "Tissue-repair, collagen, and cytoprotective compounds grouped for easy comparison.",
    href: "/collections/recovery-repair",
  },
  {
    title: "Browse Skin Research",
    body: "GHK-Cu, GLOW Blend, and melanocortin compounds connected to appearance pathways.",
    href: "/collections/skin-appearance",
  },
  {
    title: "Compare Longevity Compounds",
    body: "Specialty peptides researched in cognitive, neuroprotective, and cellular-aging models.",
    href: "/collections/cognitive-longevity",
  },
  {
    title: "Select Supplies",
    body: "Bacteriostatic water and handling essentials that support controlled laboratory work.",
    href: "/collections/supplies",
  },
];

const qualityTiers = [
  {
    tier: "Tier 01.",
    title: "EvoPeak Essential",
    subtitle: "Simple. Verified. Research-ready.",
    body: "A clean pathway for researchers who know the compound they need and want direct access to core quality signals.",
    features: [
      "HPLC/MS verification and batch documentation",
      "Research-only product pages and checkout copy",
      "Local Australian fulfilment",
    ],
    price: "All catalog products",
  },
  {
    tier: "Tier 02.",
    title: "EvoPeak Pathway",
    subtitle: "Use-case browsing, elevated.",
    body: "A guided shopping structure that groups products by audience, mechanism, and research context.",
    features: [
      "Men and women research entry points",
      "Metabolic, recovery, GH-axis, cognitive, skin, stack, and supply collections",
      "Internal links to guides, COAs, storage, and disclaimers",
    ],
    price: "Curated collections",
  },
];

const storyCards = [
  {
    number: "Story No. 014",
    name: "Quality-first browsing",
    quote:
      "The new structure puts pathway context, product variants, and documentation cues closer together before checkout.",
  },
  {
    number: "Story No. 027",
    name: "Cleaner product discovery",
    quote:
      "Researchers can move from metabolic, recovery, or GH-axis intent directly to the compounds that fit that model.",
  },
  {
    number: "Story No. 041",
    name: "Research-only clarity",
    quote:
      "Audience pages help organize the catalog without turning product discovery into medical advice or treatment claims.",
  },
  {
    number: "Story No. 052",
    name: "Local fulfilment focus",
    quote:
      "The shopping path keeps EvoPeak's Australian fulfilment and quality standard visible throughout the page.",
  },
];

const educationCards = [
  {
    title: "COA Verification",
    role: "Quality Documentation",
    body: "Learn how to evaluate certificates of analysis, purity data, identity checks, and batch traceability.",
    href: "/blog/understanding-certificates-of-analysis",
  },
  {
    title: "Storage Guidance",
    role: "Handling Basics",
    body: "Review storage and handling context before working with lyophilised research compounds.",
    href: "/blog/peptide-storage-guide",
  },
  {
    title: "Research Hub",
    role: "Education Library",
    body: "Read compound guides, comparison articles, and pathway explainers before browsing the catalog.",
    href: "/blog",
  },
  {
    title: "New User Guide",
    role: "Start Here",
    body: "Understand EvoPeak's research-only positioning, product structure, and quality expectations.",
    href: "/guide",
  },
];

const faqs = [
  {
    q: "Is this a treatment or telehealth service?",
    a: "No. EvoPeak sells research compounds only. The men and women pages are catalog browsing aids, not diagnosis, treatment, prescription, or personal-use recommendations.",
  },
  {
    q: "Why organize products by men and women?",
    a: "The audience pages create a clearer navigation layer for common research interests while keeping every product page grounded in laboratory-use language.",
  },
  {
    q: "Do the products still stay the same?",
    a: "Yes. The existing EvoPeak catalog, product URLs, variants, pricing, cart, checkout, and legal pages remain intact.",
  },
  {
    q: "What should researchers check before ordering?",
    a: "Review product summaries, variant details, COA documentation, HPLC/MS verification, endotoxin screening, storage guidance, and all research-only disclaimers.",
  },
];

function FormulaCard({
  label,
  title,
  body,
  href,
}: {
  label: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-h-[270px] flex-col justify-between rounded-[1.75rem] border border-border-default bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green">
          {label}
        </p>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-text-primary">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-text-secondary">{body}</p>
      </div>
      <span className="mt-8 text-sm font-bold text-brand-navy group-hover:text-brand-green">
        View pathway
      </span>
    </Link>
  );
}

export default function HomePage() {
  const collections = getAllCollections();

  return (
    <div className="bg-[#f5f1e8] text-text-primary">
      <div className="overflow-hidden border-y border-black/10 bg-brand-navy py-3 text-white">
        <div className="mx-auto flex max-w-7xl justify-center gap-8 px-4 text-xs font-bold uppercase tracking-[0.28em] text-white/70 sm:gap-12">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="relative min-h-[780px] overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-home.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="relative mx-auto flex min-h-[780px] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="mb-8 text-sm font-black uppercase tracking-[0.36em] text-brand-green">
            {region.brandName} — Australian Research Peptides
          </p>
          <h1 className="max-w-6xl text-6xl font-black leading-[0.92] tracking-[-0.05em] sm:text-8xl lg:text-[7.5rem]">
            Research organized around your model
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Third-party tested compounds organized by research pathway, audience,
            and mechanism. Laboratory research use only.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/women"
              className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-brand-navy transition-colors hover:bg-brand-green hover:text-white"
            >
              Women&apos;s Research
            </Link>
            <Link
              href="/men"
              className="rounded-full border border-white/50 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
            >
              Men&apos;s Research
            </Link>
          </div>
          <div className="mt-16 grid w-full max-w-5xl gap-4 md:grid-cols-3">
            {collections.slice(0, 3).map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-left backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                  {collection.shortName}
                </p>
                <p className="mt-3 text-lg font-black text-white">
                  {collection.eyebrow}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-20 text-center text-white sm:px-6 sm:py-28 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
          Formulas Built For You
        </p>
        <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
          We help researchers take control of product discovery with a catalog
          built around pathways, quality, and use case.
        </h2>
      </section>

      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">
              Understand the Process
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="min-h-[360px] rounded-[2rem] border border-black/10 bg-white p-8"
              >
                <p className="text-lg font-black text-brand-orange">
                  Step {step.number}
                </p>
                <h3 className="mt-10 text-3xl font-black tracking-[-0.03em] text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-6 text-base leading-7 text-text-secondary">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">
              Find the Right Formula
            </p>
          </div>

          <div className="mb-16">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.26em] text-brand-orange">
              Men&apos;s Care
            </p>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {menCards.map((card) => (
                <FormulaCard
                  key={card.title}
                  label="Men's Research"
                  title={card.title}
                  body={card.body}
                  href={card.href}
                />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Metabolic", "GH Axis", "Recovery", "Cognition", "Appearance"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-navy px-5 py-2 text-sm font-bold text-brand-navy"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.26em] text-brand-orange">
              Women&apos;s Care
            </p>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {womenCards.map((card) => (
                <FormulaCard
                  key={card.title}
                  label="Women's Research"
                  title={card.title}
                  body={card.body}
                  href={card.href}
                />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Metabolic", "Recovery", "Skin", "Longevity", "Supplies"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-navy px-5 py-2 text-sm font-bold text-brand-navy"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange">
              Quality with Meaning
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {qualityTiers.map((tier) => (
              <article
                key={tier.title}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur sm:p-10"
              >
                <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-orange">
                  {tier.tier}
                </p>
                <h3 className="mt-6 text-4xl font-black tracking-[-0.04em]">
                  {tier.title}
                </h3>
                <p className="mt-3 text-lg font-bold text-white/90">
                  {tier.subtitle}
                </p>
                <p className="mt-6 text-white/70">{tier.body}</p>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-white/50">
                  Plan Features:
                </p>
                <ul className="mt-5 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 text-2xl font-black">{tier.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfcc] px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <h2 className="mx-auto max-w-4xl text-5xl font-black leading-none tracking-[-0.05em] text-brand-navy sm:text-7xl">
          Uncover your research pathway
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Start with the catalog structure, compare the relevant compounds, and
          keep quality documentation at the center of every decision.
        </p>
        <Link
          href="/shop"
          className="mt-9 inline-flex rounded-full bg-brand-navy px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-brand-green"
        >
          Browse all products
        </Link>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">
              Real Pathways. Real Clarity.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {storyCards.map((story) => (
              <article
                key={story.number}
                className="min-h-[300px] rounded-[2rem] border border-border-default bg-[#f5f1e8] p-7"
              >
                <p className="text-sm font-black text-brand-orange">
                  {story.number}
                </p>
                <h3 className="mt-8 text-2xl font-black text-brand-navy">
                  {story.name}
                </h3>
                <p className="mt-5 text-sm leading-7 text-text-secondary">
                  {story.quote}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-text-muted">
            Catalog examples only. No therapeutic or personal-use outcomes are
            implied.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">
              EvoPeak Research Guides
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-brand-navy sm:text-6xl">
              Learn the standard before selecting a compound.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {educationCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-[2rem] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 aspect-square rounded-[1.5rem] bg-gradient-to-br from-brand-navy to-brand-green/70" />
                <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-orange">
                  {card.role}
                </p>
                <h3 className="mt-3 text-2xl font-black text-brand-navy">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-text-secondary">
                  {card.body}
                </p>
                <span className="mt-6 inline-flex text-sm font-black text-brand-green">
                  View story
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-black/10 bg-brand-navy py-3 text-white">
        <div className="mx-auto flex max-w-7xl justify-center gap-8 px-4 text-xs font-bold uppercase tracking-[0.28em] text-white/70 sm:gap-12">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`bottom-${item}-${index}`} className="shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-5xl font-black tracking-[-0.05em] text-brand-navy sm:text-7xl">
            Any Questions? We&apos;ve got answers.
          </h2>
          <div className="mt-12 divide-y divide-border-default border-y border-border-default">
            {faqs.map((faq) => (
              <article key={faq.q} className="py-7">
                <h3 className="text-2xl font-black text-brand-navy">{faq.q}</h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-20 text-center text-white sm:px-6 sm:py-28 lg:px-8">
        <h2 className="mx-auto max-w-5xl text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">
          Uncover what&apos;s possible with EvoPeak.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Shop by men, women, and research pathway while keeping the existing
          EvoPeak product catalog, checkout, and compliance standard intact.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/women"
            className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-brand-navy hover:bg-white/90"
          >
            Women&apos;s Research
          </Link>
          <Link
            href="/men"
            className="rounded-full border border-white/30 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"
          >
            Men&apos;s Research
          </Link>
        </div>
      </section>
    </div>
  );
}
