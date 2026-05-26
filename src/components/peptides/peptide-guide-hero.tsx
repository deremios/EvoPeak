import Link from "next/link";
import { region } from "@/config";
import { ShopCta } from "@/components/peptides/shop-cta";
import type { PeptideLandingContent } from "@/types/peptide-landing";
import type { Product } from "@/types/product";

function splitHeadline(headline: string) {
  const words = headline.trim().split(/\s+/);
  if (words.length <= 1) return { lead: headline, accent: "" };
  return {
    lead: words.slice(0, -1).join(" "),
    accent: words[words.length - 1]!,
  };
}

export function PeptideGuideHero({
  landing,
  product,
  lowestPrice,
}: {
  landing: PeptideLandingContent;
  product: Product;
  lowestPrice: number;
}) {
  const { lead, accent } = splitHeadline(landing.heroHeadline);

  return (
    <section className="relative -mt-16 overflow-hidden bg-home-hero pb-16 pt-28 text-white sm:pb-20 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="select-none text-[clamp(5rem,16vw,12rem)] font-semibold leading-none tracking-tight text-white/[0.06]">
          {region.brandName}
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center justify-center gap-2 text-sm text-white/50 sm:justify-start">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link href="/peptides" className="transition-colors hover:text-white">
            Peptide Guides
          </Link>
          <span>/</span>
          <span className="text-white/90">{landing.heroHeadline}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              {landing.heroEyebrow}
            </p>
            <h1 className="mt-5 text-[clamp(2.25rem,6vw,4rem)] font-normal leading-[1.05] tracking-tight">
              {lead}
              {accent ? (
                <>
                  {" "}
                  <span className="text-home-mint">{accent}</span>
                </>
              ) : null}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:mx-0 sm:text-lg">
              {landing.heroSubheadline}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-start">
              <ShopCta
                href={landing.shopPath}
                label={landing.ctaLabel}
                priceFrom={lowestPrice}
              />
              <a
                href="#dosage"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Dosage guide
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-mint">
              Quick facts
            </p>
            <ul className="mt-5 space-y-4">
              {[
                product.alternateName && `Also known as: ${product.alternateName}`,
                "Form: Lyophilised powder (>99% purity)",
                `Variants: ${product.variants.map((v) => v.size).join(", ")}`,
                `🇦🇺 ${region.shipping.domesticEstimate}`,
              ]
                .filter(Boolean)
                .map((item) => (
                  <li key={item as string} className="flex gap-3 text-sm leading-6 text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-home-mint" />
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
