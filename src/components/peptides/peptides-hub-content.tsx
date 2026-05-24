import Link from "next/link";
import Image from "next/image";
import { getAllLandings, getLandingPath } from "@/data/peptide-landings";
import { getAllCategories } from "@/lib/products";
import { getProductById } from "@/lib/products";
import type { PeptideLandingContent } from "@/types/peptide-landing";

function GuideCard({ landing }: { landing: PeptideLandingContent }) {
  const product = getProductById(landing.productId);
  if (!product) return null;

  return (
    <Link
      href={getLandingPath(landing.peptideSlug)}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border-default bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-primary">
        <Image
          src={landing.heroImage}
          alt={`${product.name} Australia guide`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-brand-navy backdrop-blur">
          {product.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green">
          {landing.heroEyebrow}
        </p>
        <h2 className="mt-2 text-xl font-black text-brand-navy sm:text-2xl">
          {landing.heroHeadline}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary line-clamp-3">
          {landing.heroSubheadline}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-green">
          Read guide
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function PeptidesHubContent() {
  const landings = getAllLandings();
  const categories = getAllCategories();

  const byCategory = categories
    .map((category) => ({
      category,
      guides: landings.filter((l) => {
        const product = getProductById(l.productId);
        return product?.categoryId === category.id;
      }),
    }))
    .filter((group) => group.guides.length > 0);

  return (
    <div className="bg-[#f5f1e8] min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-brand-navy to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
            Australia peptide guides
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl">
            Peptides Australia — Research Guides
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            In-depth Australia peptide guides for every compound we supply —
            mechanism, published dosage protocols, side effects,
            reconstitution, and ordering. Use our{" "}
            <Link href="/peptide-calculator" className="text-brand-orange hover:underline">
              peptide calculator
            </Link>{" "}
            for reconstitution math. Laboratory research use only.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {byCategory.length === 0 ? (
            <p className="text-center text-text-secondary">No guides available yet.</p>
          ) : (
            <div className="space-y-16">
              {byCategory.map(({ category, guides }) => (
                <div key={category.id}>
                  <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-green">
                        {category.name}
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-brand-navy sm:text-3xl">
                        {category.name} peptide guides
                      </h2>
                    </div>
                    <Link
                      href={`/shop/${category.slug}`}
                      className="text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
                    >
                      Shop {category.name.toLowerCase()} →
                    </Link>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {guides.map((landing) => (
                      <GuideCard key={landing.peptideSlug} landing={landing} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 rounded-[2rem] border border-border-default bg-white p-8 sm:p-10">
            <h2 className="text-2xl font-black text-brand-navy sm:text-3xl">
              Looking to purchase?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">
              Each guide links to the corresponding shop page for ordering.
              Browse the full catalog if you already know which compound you
              need.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-brand-green-light transition-colors"
            >
              Browse all products
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
