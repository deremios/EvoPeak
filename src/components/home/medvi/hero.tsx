"use client";

import Link from "next/link";
import { region } from "@/config";
import { categoryCards } from "../home-data";

function CategoryCard({
  label,
  href,
  tint,
  image,
  fallback,
}: {
  label: string;
  href: string;
  tint: string;
  image: string;
  fallback: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-w-[160px] flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 sm:min-w-[180px]"
    >
      <div className={`flex aspect-[4/3] items-center justify-center p-4 sm:p-6 ${tint}`}>
        <img
          src={image}
          alt={label}
          className="max-h-[140px] w-full object-contain drop-shadow-md sm:max-h-[160px]"
          onError={(e) => {
            e.currentTarget.src = fallback;
          }}
        />
      </div>
      <div className="flex items-center justify-between px-4 py-3.5">
        <span className="text-sm font-medium text-home-charcoal">{label}</span>
        <svg
          className="h-4 w-4 text-home-charcoal/50 transition-transform group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
}

export function MedviHero() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-home-hero pb-32 pt-28 text-white sm:pb-40 sm:pt-32">
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="select-none text-[clamp(6rem,18vw,14rem)] font-semibold leading-none tracking-tight text-white/[0.06]">
          {region.brandName}
        </span>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm text-white/80">Join 2,800+ {region.brandName} customers</p>
        <h1 className="mt-6 text-[clamp(2.5rem,7vw,4.5rem)] font-normal leading-[1.05] tracking-tight">
          Peptides,
          <br />
          built for <span className="text-home-mint">real results.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/85">
          Third-party tested compounds with batch COAs and fast Australian dispatch. Shop by
          goal — weight loss, recovery, skin, performance, and more.
        </p>
        <div className="mt-8">
          <Link
            href="/shop"
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[#1b3d32] transition hover:bg-white/90"
          >
            Shop all products
          </Link>
        </div>
      </div>

      {/* Overlapping category cards */}
      <div className="relative z-10 mx-auto -mb-24 mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-4 sm:overflow-visible">
          {categoryCards.map((card) => (
            <CategoryCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
