import { Metadata } from "next";
import { region } from "@/config";
import { createSeoMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = createSeoMetadata({
  title: `Research Peptide FAQ Australia — ${region.brandName}`,
  description: `Frequently asked questions about ${region.brandName}: Australian shipping, PayID, COAs, peptide storage, reconstitution, and research-only use.`,
  path: "/faq",
  keywords: [
    "research peptide FAQ",
    "peptide storage Australia",
    "peptide reconstitution",
    "peptide COA",
  ],
});

const faqs = [
  {
    category: "Orders & Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: `Domestic orders within ${region.country} are delivered in ${region.shipping.domesticEstimate} via ${region.shipping.carrier}. Orders placed before ${region.shipping.sameDayCutoff} on business days ship same day.`,
      },
      {
        q: "Do you offer cold-chain shipping?",
        a: "Yes. Temperature-sensitive peptides are shipped with ice packs and insulated mailers to maintain proper temperature throughout transit.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently we only ship within " + region.country + ". International shipping may be available in the future.",
      },
    ],
  },
  {
    category: "Products & Quality",
    items: [
      {
        q: "What purity are your peptides?",
        a: "All our peptides are >99% purity as verified by independent third-party HPLC/MS analysis. Each product has a downloadable Certificate of Analysis (COA).",
      },
      {
        q: "What testing do you perform?",
        a: "Every batch undergoes three tests: HPLC/MS purity analysis, mass spectrometry identity verification, and endotoxin screening via LAL test.",
      },
      {
        q: "Are these products for human use?",
        a: "No. All products are sold strictly for laboratory research purposes only. They are not intended for human consumption, injection, or therapeutic use.",
      },
    ],
  },
  {
    category: "Payment & Account",
    items: [
      {
        q: `What payment methods do you accept?`,
        a: `We accept ${region.payment.methods.join(" and ")}. Payment details are displayed at checkout after you create an account.`,
      },
      {
        q: "Do I need an account to order?",
        a: "Yes. You'll need to create a free account (email or Google sign-in) and confirm you're " + region.legal.ageRequirement + "+ before placing an order.",
      },
      {
        q: "Is my payment information secure?",
        a: `${region.payment.methods[0]} transfers go directly through your bank's secure infrastructure. We never see or store your banking credentials.`,
      },
    ],
  },
  {
    category: "Storage & Handling",
    items: [
      {
        q: "How should I store lyophilised peptides?",
        a: "Store unopened lyophilised (powder) peptides at -20°C. They remain stable for 12+ months under proper storage conditions.",
      },
      {
        q: "How long do reconstituted peptides last?",
        a: "Once reconstituted with bacteriostatic water, store at 2–8°C and use within 28 days. The benzyl alcohol preservative in BAC water prevents bacterial growth during this period.",
      },
    ],
  },
];

export default function FaqPage() {
  const faqItems = faqs.flatMap((section) => section.items);

  return (
    <div className="bg-bg-primary min-h-screen py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-text-secondary mb-10">
          Can&apos;t find your answer? Contact us at{" "}
          <a
            href={`mailto:${region.support.email}`}
            className="text-brand-green font-medium hover:underline"
          >
            {region.support.email}
          </a>
        </p>

        <div className="space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-lg font-bold text-text-primary mb-4">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-white rounded-xl border border-border-default p-5"
                  >
                    <h3 className="text-sm font-semibold text-text-primary">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
