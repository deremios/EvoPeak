"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { Logo } from "@/components/shared/logo";
import { MobileMenu } from "./mobile-menu";
import { researchCollections } from "@/data/collections";
import { getAllLandings, getLandingPath, getPeptideNavLabel } from "@/data/peptide-landings";
import { getProductById } from "@/lib/products";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/peptides", label: "Peptide Guides" },
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/collections/metabolic-research", label: "Use Cases" },
  { href: "/bundles", label: "Stacks" },
  { href: "/blog", label: "Research Hub" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();
  const isHome = pathname === "/";
  const isBlog = pathname === "/blog";
  const isBundles = pathname === "/bundles";
  const isCollection = pathname.startsWith("/collections/");
  const hasTransparentHero = isHome || isBlog || isBundles || isCollection;
  const transparent = hasTransparentHero && !scrolled;

  useEffect(() => {
    if (!hasTransparentHero) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasTransparentHero]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border-default bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo size="md" invert={transparent} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    transparent
                      ? "text-white/85 hover:text-white"
                      : "text-text-secondary hover:text-brand-green"
                  }`}
                >
                  {link.label}
                </Link>
                {link.label === "Peptide Guides" && (
                  <div className="invisible absolute left-1/2 top-full z-50 mt-5 w-64 -translate-x-1/2 rounded-3xl border border-border-default bg-white p-4 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <Link
                      href="/peptides"
                      className="block shrink-0 rounded-xl px-3 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-green/5"
                    >
                      All peptide guides →
                    </Link>
                    <Link
                      href="/peptide-calculator"
                      className="mt-0.5 block shrink-0 rounded-xl px-3 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-green/5"
                    >
                      Peptide calculator →
                    </Link>
                    <div className="mt-2 max-h-[min(70vh,24rem)] overflow-y-auto overscroll-contain border-t border-border-default pt-2">
                      <ul className="space-y-0.5">
                        {getAllLandings().map((landing) => {
                          const product = getProductById(landing.productId);
                          const fullName =
                            product?.name ?? landing.heroHeadline.replace(/ Australia$/, "");
                          const label = getPeptideNavLabel(
                            landing.peptideSlug,
                            fullName
                          );
                          return (
                            <li key={landing.peptideSlug}>
                              <Link
                                href={getLandingPath(landing.peptideSlug)}
                                title={fullName}
                                className="block truncate rounded-lg px-3 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-brand-green/5 hover:text-brand-green"
                              >
                                {label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
                {link.label === "Use Cases" && (
                  <div className="invisible absolute left-1/2 top-full z-50 mt-5 w-[760px] -translate-x-1/2 rounded-3xl border border-border-default bg-white p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-3">
                      {researchCollections.map((collection) => (
                        <Link
                          key={collection.slug}
                          href={`/collections/${collection.slug}`}
                          className="rounded-2xl p-4 transition-colors hover:bg-brand-green/5"
                        >
                          <p className="font-bold text-text-primary">
                            {collection.name}
                          </p>
                          <p className="mt-1 text-sm leading-5 text-text-secondary">
                            {collection.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/account"
              className={`text-sm font-medium transition-colors ${
                transparent
                  ? "text-white/85 hover:text-white"
                  : "text-text-secondary hover:text-brand-green"
              }`}
            >
              Account
            </Link>
            <Link
              href="/cart"
              className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                transparent
                  ? "bg-white text-[#1b3d32] hover:bg-white/90"
                  : "bg-brand-green text-white hover:bg-brand-green-light"
              }`}
            >
              Cart{itemCount > 0 && ` (${itemCount})`}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`md:hidden inline-flex items-center justify-center rounded-md p-2 transition-colors ${
              transparent
                ? "text-white hover:text-white/80"
                : "text-text-secondary hover:text-brand-green"
            }`}
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
