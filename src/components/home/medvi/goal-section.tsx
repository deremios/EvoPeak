"use client";

import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { BenefitChips, ChecklistBlock, MedviButton } from "./primitives";

type GoalSectionProps = {
  id: string;
  eyebrow: string;
  headline: string;
  accent: string;
  subheadline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image: string;
  fallback: string;
  reverse?: boolean;
  checklistTitle?: string | null;
  checklist?: string[] | null;
  features?: { title: string; body: string }[] | null;
  benefits: string[];
  phase3?: boolean;
  stacks?: { name: string; tagline: string; href: string; discount: number }[];
};

function SectionImage({ image, fallback, alt }: { image: string; fallback: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-home-blob shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <img
        src={image}
        alt={alt}
        className="block w-full"
        onError={(e) => {
          e.currentTarget.src = fallback;
        }}
      />
    </div>
  );
}

export function GoalSection(props: GoalSectionProps) {
  const {
    id,
    eyebrow,
    headline,
    accent,
    subheadline,
    body,
    ctaLabel,
    ctaHref,
    secondaryLabel,
    secondaryHref,
    image,
    fallback,
    reverse,
    checklistTitle,
    checklist,
    features,
    benefits,
    phase3,
    stacks,
  } = props;

  const textCol = (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight text-home-charcoal">
        {headline} <span className="text-home-mint">{accent}</span>
      </h2>
      <h3 className="mt-4 text-xl font-normal text-home-charcoal/80">{subheadline}</h3>
      <p className="mt-4 max-w-lg text-base leading-7 text-home-charcoal/70">{body}</p>

      {checklist && checklistTitle && (
        <div className="mt-8">
          <ChecklistBlock title={checklistTitle} items={checklist} />
        </div>
      )}

      {phase3 && (
        <div className="mt-6 rounded-2xl border border-[#9dc4aa]/40 bg-[#E8F3EC]/60 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#1b3d32]">Phase 3 TRIUMPH-1</p>
          <p className="mt-2 text-sm leading-6 text-home-charcoal/75">
            Dose-dependent weight loss at 80 weeks: <strong>19.0%</strong> (4 mg),{" "}
            <strong>25.9%</strong> (9 mg), <strong>28.3%</strong> (12 mg). Extension cohort reached{" "}
            <strong>30.3%</strong> at 104 weeks.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <MedviButton href={ctaHref}>{ctaLabel}</MedviButton>
        {secondaryLabel && secondaryHref && (
          <MedviButton href={secondaryHref} variant="outline">
            {secondaryLabel}
          </MedviButton>
        )}
      </div>

      {features && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/6 bg-[#fafafa] p-5">
              <p className="text-sm font-medium text-home-charcoal">{f.title}</p>
              <p className="mt-2 text-sm leading-6 text-home-charcoal/65">{f.body}</p>
            </div>
          ))}
        </div>
      )}

      {stacks && (
        <div className="mt-8 space-y-3">
          {stacks.map((stack) => (
            <Link
              key={stack.href}
              href={stack.href}
              className="flex items-center justify-between rounded-2xl border border-black/6 bg-[#fafafa] px-5 py-4 transition hover:border-[#1b3d32]/20"
            >
              <div>
                <p className="font-medium text-home-charcoal">{stack.name}</p>
                <p className="text-sm text-home-charcoal/60">{stack.tagline}</p>
              </div>
              <span className="rounded-full bg-[#1b3d32] px-3 py-1 text-xs font-medium text-white">
                {stack.discount}% off
              </span>
            </Link>
          ))}
        </div>
      )}

      <BenefitChips items={benefits} />
    </div>
  );

  const imageCol = <SectionImage image={image} fallback={fallback} alt={eyebrow} />;

  return (
    <section id={id} className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${reverse ? "" : ""}`}>
            {reverse ? (
              <>
                {textCol}
                {imageCol}
              </>
            ) : (
              <>
                {imageCol}
                {textCol}
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
