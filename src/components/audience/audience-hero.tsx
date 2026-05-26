import Link from "next/link";
import { region } from "@/config";
import type { Audience } from "@/data/collections";

const pageCopy = {
  men: {
    eyebrow: "EvoPeak — Men's Research Pathways",
    lead: "Research organized around",
    accent: "male physiology models.",
    description:
      "Browse metabolic, GH-axis, recovery, cognitive, and appearance-focused compounds through a cleaner framework. Built for product discovery, not medical advice.",
    primary: "Browse men's pathways",
  },
  women: {
    eyebrow: "EvoPeak — Women's Research Pathways",
    lead: "Research organized around",
    accent: "female physiology models.",
    description:
      "Explore metabolic, recovery, skin, cognitive, longevity, and specialty compounds through a use-case structure that keeps quality and research-only context visible.",
    primary: "Browse women's pathways",
  },
} satisfies Record<
  Audience,
  {
    eyebrow: string;
    lead: string;
    accent: string;
    description: string;
    primary: string;
  }
>;

const qualityBadges = [
  "HPLC/MS verified",
  "Endotoxin screened",
  "COA documented",
  "Australia shipped",
  "Research use only",
];

export function AudienceHero({ audience }: { audience: Audience }) {
  const copy = pageCopy[audience];

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
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">{copy.eyebrow}</p>
        <h1 className="mt-6 text-[clamp(2.25rem,6vw,4rem)] font-normal leading-[1.05] tracking-tight">
          {copy.lead} <span className="text-home-mint">{copy.accent}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          {copy.description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="#pathways"
            className="inline-flex justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[#1b3d32] transition hover:bg-white/90"
          >
            {copy.primary}
          </Link>
          <Link
            href="/guide"
            className="inline-flex justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Research guide
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {qualityBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function getAudienceLabel(audience: Audience) {
  return audience === "men" ? "Men's Research" : "Women's Research";
}
