import Link from "next/link";
import { region } from "@/config";

const topics = [
  "Mechanism",
  "Dosage",
  "Side effects",
  "Reconstitution",
  "Ordering",
];

export function PeptidesHero({ guideCount }: { guideCount: number }) {
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

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          Australia peptide guides
        </p>
        <h1 className="mt-6 text-[clamp(2.25rem,6vw,4rem)] font-normal leading-[1.05] tracking-tight">
          Peptides Australia —
          <br />
          <span className="text-home-mint">Research Guides</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          In-depth Australia peptide guides for every compound we supply — mechanism, published
          dosage protocols, side effects, reconstitution, and ordering. Use our{" "}
          <Link href="/peptide-calculator" className="text-home-mint hover:underline">
            peptide calculator
          </Link>{" "}
          for reconstitution math. Laboratory research use only.
        </p>
        <p className="mt-4 text-sm text-white/60">{guideCount} compound guides</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
