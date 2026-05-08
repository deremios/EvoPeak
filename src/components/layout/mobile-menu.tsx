"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Logo } from "@/components/shared/logo";
import { researchCollections } from "@/data/collections";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const AUDIENCE_HREFS = new Set(["/men", "/women", "/collections/metabolic-research"]);

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const { itemCount } = useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const mainLinks = links.filter((l) => !AUDIENCE_HREFS.has(l.href));

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop — absolute within the fixed wrapper */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel — relative so it stacks above the backdrop, h-full fills the wrapper */}
      <div className="relative z-10 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-border-default px-5 py-4">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-text-primary hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav */}
        <nav className="min-h-0 flex-1 overflow-y-auto px-5 py-5 space-y-6">
          {/* Audience shortcuts */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/men"
              onClick={onClose}
              className="rounded-xl bg-brand-navy px-4 py-4 text-sm font-bold text-white text-center leading-snug"
            >
              Men&apos;s<br />Research
            </Link>
            <Link
              href="/women"
              onClick={onClose}
              className="rounded-xl bg-brand-orange px-4 py-4 text-sm font-bold text-white text-center leading-snug"
            >
              Women&apos;s<br />Research
            </Link>
          </div>

          {/* Main nav links */}
          <div>
            <p className="mb-1 px-1 text-[11px] font-bold uppercase tracking-widest text-text-muted">
              Menu
            </p>
            <div className="space-y-0.5">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-gray-50 hover:text-brand-green transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Research collections */}
          <div>
            <p className="mb-1 px-1 text-[11px] font-bold uppercase tracking-widest text-text-muted">
              Research Areas
            </p>
            <div className="space-y-0.5">
              {researchCollections.map((collection) => (
                <Link
                  key={collection.slug}
                  href={`/collections/${collection.slug}`}
                  onClick={onClose}
                  className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-text-primary hover:bg-gray-50 hover:text-brand-green transition-colors"
                >
                  {collection.shortName}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer CTA buttons */}
        <div className="shrink-0 border-t border-border-default bg-white px-5 py-4 space-y-2">
          <Link
            href="/account"
            onClick={onClose}
            className="flex items-center justify-center rounded-lg border border-border-default px-4 py-3 text-base font-medium text-text-primary hover:bg-gray-50 transition-colors"
          >
            Account
          </Link>
          <Link
            href="/cart"
            onClick={onClose}
            className="flex items-center justify-center rounded-lg bg-brand-green px-4 py-3 text-base font-semibold text-white hover:bg-brand-green-light transition-colors"
          >
            {itemCount > 0 ? `View Cart (${itemCount})` : "Cart"}
          </Link>
        </div>
      </div>
    </div>
  );
}
