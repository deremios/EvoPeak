import Link from "next/link";
import { region } from "@/config";
import { Logo } from "@/components/shared/logo";
import { business, formatBusinessAddress } from "@/config/business";

const footerLinks = {
  audience: [
    { href: "/men", label: "Men's Research" },
    { href: "/women", label: "Women's Research" },
    { href: "/shop", label: "All Products" },
    { href: "/bundles", label: "Bundles & Stacks" },
  ],
  useCases: [
    { href: "/collections/metabolic-research", label: "Metabolic Research" },
    { href: "/collections/recovery-repair", label: "Recovery & Repair" },
    { href: "/collections/performance-gh-axis", label: "GH Axis" },
    { href: "/collections/cognitive-longevity", label: "Cognitive & Longevity" },
    { href: "/collections/skin-appearance", label: "Skin & Appearance" },
    { href: "/collections/supplies", label: "Research Supplies" },
  ],
  research: [
    { href: "/peptides", label: "Peptide Guides" },
    { href: "/peptide-calculator", label: "Peptide Calculator" },
    { href: "/blog", label: "Research Insights" },
    { href: "/guide", label: "New User Guide" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About Us" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/disclaimers", label: "Disclaimers" },
  ],
};

const socialLinks = [
  {
    href: business.social.facebook,
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    href: business.social.x,
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Disclaimer Banner */}
      <div className="bg-brand-navy-dark py-3 px-4 text-center">
        <p className="text-xs text-white/70 max-w-4xl mx-auto leading-relaxed">
          {region.legal.disclaimer}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="lg" invert />
            </div>
            <p className="text-sm font-medium text-white/80 mb-1">{business.legalName}</p>
            <p className="text-sm text-white/60 mb-1">ACN {business.acn}</p>
            <address className="text-sm text-white/60 not-italic leading-relaxed mb-4">
              {formatBusinessAddress()}
            </address>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {region.country}&apos;s premium supplier of 3rd-party tested
              research peptides. HPLC/MS + endotoxin tested. cGMP-grade where
              possible.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <span>🇦🇺</span>
              <span>Local Stock — Ships Same Day</span>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${region.brandName} on ${social.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Shop by Audience
            </h4>
            <ul className="space-y-2">
              {footerLinks.audience.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Shop by Use Case
            </h4>
            <ul className="space-y-2">
              {footerLinks.useCases.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Research & Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.research.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-white/60">
                Contact:{" "}
                <a
                  href={`mailto:${region.support.email}`}
                  className="text-brand-orange hover:text-brand-orange-light transition-colors"
                >
                  {region.support.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {region.brandName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">
              {region.legal.complianceBody} Compliant
            </span>
            <span className="text-xs text-white/40">·</span>
            <span className="text-xs text-white/40">
              {region.payment.methods.join(" · ")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
