import { Metadata } from "next";
import { region } from "@/config";

export const metadata: Metadata = {
  title: `About Us — ${region.brandName}`,
  description: `${region.brandName} is ${region.country}'s premium research peptide supplier. Learn about our mission, quality standards, and commitment to purity.`,
  openGraph: {
    title: `About Us — ${region.brandName}`,
    description: `${region.brandName} — ${region.country}'s premium research peptide supplier.`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-bg-primary min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
          About {region.brandName}
        </h1>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {region.brandName} was founded to bring transparency, quality,
              and professionalism to the {region.country}n research peptide
              market. We believe researchers deserve access to rigorously
              tested compounds backed by real data — not marketing claims.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-4">
              Quality Promise
            </h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Every batch undergoes HPLC/MS purity analysis by independent
                third-party labs
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Identity verification via mass spectrometry on all compounds
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Endotoxin screening (LAL test) for sterility assurance
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Downloadable Certificates of Analysis on every product page
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                cGMP-grade manufacturing where possible
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-4">
              {region.country}-First
            </h2>
            <p className="text-text-secondary leading-relaxed">
              All orders are shipped from local {region.country}n stock via{" "}
              {region.shipping.carrier}. No customs delays, no international
              risk. Orders placed before {region.shipping.sameDayCutoff} ship
              the same business day. Temperature-sensitive peptides are shipped
              with cold-chain packaging.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-4">
              Contact Us
            </h2>
            <p className="text-text-secondary">
              Questions? Reach us at{" "}
              <a
                href={`mailto:${region.support.email}`}
                className="text-brand-green font-medium hover:underline"
              >
                {region.support.email}
              </a>
              {region.support.liveChatEnabled &&
                " or via live chat (bottom-right corner)."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
