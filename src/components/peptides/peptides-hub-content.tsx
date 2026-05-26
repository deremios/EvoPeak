import Link from "next/link";
import { getAllLandings, getLandingPath } from "@/data/peptide-landings";
import { getAllCategories } from "@/lib/products";
import { getProductById } from "@/lib/products";
import { ProductImage } from "@/components/shop/product-image";
import { TrustIconStrip } from "@/components/home/medvi/primitives";
import { trustItems } from "@/components/home/home-data";
import { PeptidesHero } from "@/components/peptides/peptides-hero";
import type { PeptideLandingContent } from "@/types/peptide-landing";

function GuideCard({ landing }: { landing: PeptideLandingContent }) {
  const product = getProductById(landing.productId);
  if (!product) return null;

  return (
    <Link
      href={getLandingPath(landing.peptideSlug)}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8F3EC]">
        <ProductImage
          src={product.imageUrl}
          alt={`${product.name} Australia guide`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-home-charcoal/55">
          {landing.heroEyebrow}
        </p>
        <h2 className="mt-2 text-xl font-normal text-home-charcoal transition-colors group-hover:text-[#1b3d32] sm:text-2xl">
          {landing.heroHeadline}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-home-charcoal/65 line-clamp-3">
          {landing.heroSubheadline}
        </p>
        <span className="mt-5 inline-flex items-center text-sm font-medium text-[#1b3d32]">
          Read guide
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
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
    <div className="home-medvi min-h-screen bg-white">
      <PeptidesHero guideCount={landings.length} />
      <TrustIconStrip items={trustItems} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {byCategory.length === 0 ? (
            <p className="text-center text-home-charcoal/65">No guides available yet.</p>
          ) : (
            <div className="space-y-16">
              {byCategory.map(({ category, guides }) => (
                <div key={category.id}>
                  <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                        {category.name}
                      </p>
                      <h2 className="mt-2 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
                        {category.name} peptide{" "}
                        <span className="text-home-mint">guides</span>
                      </h2>
                    </div>
                    <Link
                      href={`/shop/${category.slug}`}
                      className="text-sm font-medium text-[#1b3d32] hover:underline"
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

          <div className="mt-16 rounded-[2rem] border border-black/6 bg-[#fafafa] p-8 sm:p-10">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-normal text-home-charcoal">
              Looking to purchase?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-home-charcoal/65">
              Each guide links to the corresponding shop page for ordering. Browse the full catalog
              if you already know which compound you need.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-home-cta px-8 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              Browse all products
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
