import { Metadata } from "next";
import Link from "next/link";
import { region } from "@/config";
import { PeptideCalculator } from "@/components/tools/peptide-calculator";
import {
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Peptide Calculator Australia — Reconstitution & Dosage Tool — ${region.brandName}`,
  description:
    "Free peptide reconstitution and dosage calculator for Australian researchers. Calculate mcg/mL concentration, insulin syringe units, and draw volume from vial size and bacteriostatic water volume.",
  path: "/peptide-calculator",
  keywords: [
    "peptide calculator",
    "peptide dosage calculator",
    "peptide reconstitution calculator",
    "peptide calculator australia",
    "bacteriostatic water calculator",
    "research peptides australia",
  ],
});

const faqs = [
  {
    q: "What is a peptide calculator?",
    a: "A peptide calculator helps researchers determine reconstitution concentration (mcg/mL) after adding bacteriostatic water to a lyophilised vial, and optionally calculate the volume or insulin syringe units needed for a target mcg amount in laboratory protocols.",
  },
  {
    q: "How do I use a peptide reconstitution calculator?",
    a: "Enter your vial size in milligrams and the volume of bacteriostatic water you add in millilitres. The calculator returns total mcg in the vial, concentration in mcg/mL, and the mcg amount per 0.1 mL (10 insulin units).",
  },
  {
    q: "What is the difference between peptide calculator and peptide dosage calculator?",
    a: "A reconstitution calculator determines concentration after mixing. A dosage volume calculator uses that concentration plus a target mcg amount to calculate how many millilitres or insulin syringe units to draw for a laboratory protocol.",
  },
  {
    q: "Is this peptide calculator for human use?",
    a: "No. This tool is provided for laboratory reconstitution reference only. EvoPeak products are sold strictly for research use and are not intended for human consumption, injection, or therapeutic use.",
  },
];

export default function PeptideCalculatorPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webApplicationSchema({
              name: "EvoPeak Peptide Calculator",
              description:
                "Peptide reconstitution and dosage volume calculator for Australian laboratory researchers.",
              path: "/peptide-calculator",
            }),
            faqSchema(faqs),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Peptide Calculator", path: "/peptide-calculator" },
            ]),
          ]),
        }}
      />

      <section className="bg-gradient-to-br from-brand-navy to-brand-green-dark py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
            Australia research tools
          </p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black text-white">
            Peptide Calculator
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Calculate reconstitution concentration and dosage draw volume for
            lyophilised research peptides. Built for Australian laboratory
            workflows — reconstitution math only, not human dosing advice.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <PeptideCalculator />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-border-default p-6"
              >
                <h3 className="text-base font-bold text-text-primary">
                  {faq.q}
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Need research-grade peptides?
          </h2>
          <p className="text-text-secondary mb-8">
            Browse third-party tested compounds with batch-specific COAs and
            Australian dispatch.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-green-light transition-colors"
          >
            Buy research peptides in Australia
          </Link>
        </div>
      </section>
    </div>
  );
}
