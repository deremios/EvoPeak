"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { region } from "@/config";
import { useCart } from "@/lib/cart-context";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/bundles", label: "Bundles" },
  { href: "/shop?category=weight-loss", label: "Weight Loss" },
  { href: "/shop?category=recovery", label: "Recovery" },
  { href: "/blog", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/guide", label: "New Here?" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-bg-white border-b border-border-default backdrop-blur-sm bg-white/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt={region.brandName}
              width={140}
              height={26}
              priority
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-brand-green transition-colors"
              >
                {link.label}
              </Link>
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
