import Link from "next/link";
import { region } from "@/config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-green-dark">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80 mb-8 backdrop-blur-sm border border-white/10">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            {region.country}&apos;s Premium Research Peptide Supplier
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-hero font-bold text-white leading-tight tracking-tight mb-6">
            Research-Grade Peptides.{" "}
            <span className="text-brand-orange">Triple Tested.</span>{" "}
            {region.country} Shipped.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            HPLC/MS verified, endotoxin tested, cGMP-grade where possible.
            Shipped from local stock in {region.shipping.domesticEstimate}.
            Every vial includes a downloadable Certificate of Analysis.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-orange-light transition-colors shadow-lg shadow-brand-orange/25"
            >
              Browse Peptides
              <svg
                className="ml-2 w-4 h-4"
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
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
            >
              New? Start Here
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: "20+", label: "Peptides" },
              { value: "99.1%+", label: "Purity" },
              { value: region.shipping.domesticEstimate, label: "Delivery" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
