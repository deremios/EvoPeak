import Link from "next/link";
import { region } from "@/config";
import type { ResearchCollection } from "@/data/collections";

function splitCollectionTitle(name: string) {
  const words = name.trim().split(/\s+/);
  if (words.length <= 1) return { lead: name, accent: "" };
  return {
    lead: words.slice(0, -1).join(" "),
    accent: words[words.length - 1]!,
  };
}

export function CollectionHero({
  collection,
  productCount,
}: {
  collection: ResearchCollection;
  productCount: number;
}) {
  const { lead, accent } = splitCollectionTitle(collection.name);

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
          <Link href="/shop" className="transition-colors hover:text-white">
            Shop
          </Link>
          <span>/</span>
          <span className="text-white/90">{collection.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              {collection.eyebrow}
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
              {collection.description} Every product is supplied strictly for laboratory research
              use only.
            </p>
            <p className="mt-4 text-sm text-white/60">{productCount} products in this pathway</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2 sm:justify-start">
              {collection.audiences.map((audience) => (
                <Link
                  key={audience}
                  href={`/${audience}`}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm transition hover:bg-white/15"
                >
                  {audience === "men" ? "Men's Research" : "Women's Research"}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-mint">
              Pathway highlights
            </p>
            <ul className="mt-5 space-y-4">
              {collection.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-home-mint" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
