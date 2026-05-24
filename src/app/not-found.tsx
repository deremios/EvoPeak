import Link from "next/link";
import { Metadata } from "next";
import { region } from "@/config";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Page Not Found — ${region.brandName}`,
  description: "The page you're looking for doesn't exist or may have moved.",
  path: "/404",
  noIndex: true,
});

const helpfulLinks = [
  { href: "/shop", label: "Shop all products" },
  { href: "/peptides", label: "Peptide guides" },
  { href: "/blog", label: "Research insights" },
  { href: "/faq", label: "FAQ" },
];

export default function NotFound() {
  return (
    <div className="bg-bg-primary min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
          404
        </p>
        <h1 className="mt-3 text-3xl font-black text-brand-navy sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          This page doesn&apos;t exist or may have been moved. Try one of the
          links below to continue browsing {region.brandName}.
        </p>
        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {helpfulLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex rounded-lg border border-border-default bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-green/40 hover:text-brand-green"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
