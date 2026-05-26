import Link from "next/link";
import type { ResearchCollection } from "@/data/collections";

export function CollectionCard({
  collection,
  cta = "Explore pathway",
}: {
  collection: ResearchCollection;
  cta?: string;
}) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/6 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-home-charcoal/55">
        {collection.eyebrow}
      </p>
      <h3 className="mt-4 text-xl font-normal text-home-charcoal transition-colors group-hover:text-[#1b3d32]">
        {collection.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-home-charcoal/65">{collection.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {collection.highlights.slice(0, 2).map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-black/8 bg-[#f5f5f5] px-3 py-1 text-xs text-home-charcoal/75"
          >
            {highlight}
          </span>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center text-sm font-medium text-[#1b3d32]">
        {cta}
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
    </Link>
  );
}
