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
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${collection.color}`}
      />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
        {collection.eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-text-primary">
        {collection.name}
      </h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        {collection.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {collection.highlights.slice(0, 2).map((highlight) => (
          <span
            key={highlight}
            className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green"
          >
            {highlight}
          </span>
        ))}
      </div>
      <span className="mt-7 inline-flex items-center text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-green">
        {cta}
        <svg
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
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
