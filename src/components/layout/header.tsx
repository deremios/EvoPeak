"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Logo } from "@/components/shared/logo";
import { MobileMenu } from "./mobile-menu";
import { researchCollections } from "@/data/collections";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/collections/metabolic-research", label: "Use Cases" },
  { href: "/bundles", label: "Stacks" },
  { href: "/blog", label: "Research Hub" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-bg-white border-b border-border-default backdrop-blur-sm bg-white/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-brand-green transition-colors"
                >
                  {link.label}
                </Link>
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
              className="text-sm font-medium text-text-secondary hover:text-brand-green transition-colors"
            >
              Account
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-lg bg-brand-green px-4 py-2 text-sm font-medium text-white hover:bg-brand-green-light transition-colors"
            >
              Cart{itemCount > 0 && ` (${itemCount})`}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:text-brand-green"
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
