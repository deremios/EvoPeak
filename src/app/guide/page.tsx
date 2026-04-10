import { Metadata } from "next";
import Link from "next/link";
import { region } from "@/config";

export const metadata: Metadata = {
  title: `New User Guide — ${region.brandName}`,
  description: `New to research peptides? ${region.brandName}'s step-by-step guide covers everything — choosing compounds, reconstitution, storage, and getting started safely.`,
  openGraph: {
    title: `New User Guide — ${region.brandName}`,
    description: `Step-by-step beginner guide to research peptides from ${region.brandName}.`,
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    title: "Choose Your Research Goal",
    description:
      "Browse our categories — Weight Loss, Recovery, Performance, or Cognitive — to find the peptide that matches your research objectives.",
  },
  {
    number: "02",
    title: "Review the COA",
    description:
      "Every product has a downloadable Certificate of Analysis. Check purity (>99%), identity verification, and endotoxin results before purchasing.",
  },
  {
    number: "03",
    title: "Create an Account",
    description:
      "Quick sign-up via email magic link or Google. No passwords to remember. Confirm you're 18+ on your first login.",
  },
  {
    number: "04",
    title: "Place Your Order",
    description: `Add products to your cart, enter your shipping address (auto-filled via Google), and complete payment via ${region.payment.methods[0]}.`,
  },
  {
    number: "05",
    title: "Receive & Store",
    description:
      "Your order arrives in 1–3 business days with cold-chain packaging. Store lyophilised peptides at -20°C, reconstituted at 2–8°C.",
  },
];

const faqs = [
  {
    q: "What is bacteriostatic water?",
    a: "Bacteriostatic water (BAC water) is sterile water with 0.9% benzyl alcohol added as a preservative. It's used to reconstitute lyophilised (freeze-dried) peptide powders for research. The preservative allows the vial to be punctured multiple times over 28 days.",
  },
  {
    q: "How do I reconstitute a peptide?",
    a: "Draw the desired amount of BAC water into a syringe, then inject it slowly down the side of the peptide vial — never directly onto the powder. Gently swirl (don't shake) until dissolved. Store reconstituted peptides at 2–8°C.",
  },
  {
    q: "How should I store my peptides?",
    a: "Lyophilised (powder) peptides should be stored at -20°C and are stable for 12+ months. Once reconstituted with BAC water, store at 2–8°C and use within 28 days.",
  },
  {
    q: "Do you ship with cold-chain packaging?",
    a: "Yes. Temperature-sensitive peptides are shipped with ice packs and insulated mailers to maintain proper temperature during transit.",
  },
  {
    q: "Are these products for human use?",
    a: "No. All products are sold strictly for laboratory research use only. They are not intended for human consumption, injection, or therapeutic use.",
  },
];

export default function GuidePage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-green-dark py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            New to Research Peptides?
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to get started — from choosing the right
            peptide to proper storage. We make your first order easy.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">
            Getting Started in 5 Steps
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 bg-white rounded-2xl border border-border-default p-6 hover:border-brand-green/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-green text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Ready to Start?
          </h2>
          <p className="text-text-secondary mb-8">
            Browse our curated range or create an account to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-green-light transition-colors"
            >
              Browse Peptides
            </Link>
            <Link
              href="/auth/login"
              className="inline-flex items-center justify-center rounded-lg border border-border-default bg-white px-8 py-3.5 text-base font-semibold text-text-primary hover:bg-gray-50 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
