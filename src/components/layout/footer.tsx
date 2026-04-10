import Link from "next/link";
import { region } from "@/config";
import { Logo } from "@/components/shared/logo";

const footerLinks = {
  shop: [
    { href: "/shop?category=weight-loss", label: "Weight Loss" },
    { href: "/shop?category=recovery", label: "Recovery & Healing" },
    { href: "/shop?category=performance", label: "Performance" },
    { href: "/shop?category=cognitive", label: "Cognitive" },
    { href: "/shop?category=blends", label: "Blends & Stacks" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Research Insights" },
    { href: "/guide", label: "New User Guide" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/disclaimers", label: "Disclaimers" },
  ],
};

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
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {region.country}&apos;s premium supplier of 3rd-party tested
              research peptides. HPLC/MS + endotoxin tested. cGMP-grade where
              possible.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>🇦🇺</span>
              <span>Local Stock — Ships Same Day</span>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
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

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
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

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
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
