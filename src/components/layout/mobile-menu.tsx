"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Logo } from "@/components/shared/logo";
import { researchCollections } from "@/data/collections";
import { getAllLandings, getLandingPath, getPeptideNavLabel } from "@/data/peptide-landings";
import { getProductBySlug } from "@/lib/products";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const AUDIENCE_HREFS = new Set(["/men", "/women", "/collections/metabolic-research"]);

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const { itemCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const mainLinks = links.filter((l) => !AUDIENCE_HREFS.has(l.href));

  return createPortal(
    <div
      className="fixed inset-0 z-[100] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute inset-y-0 right-0 grid h-[100dvh] w-full max-w-sm grid-rows-[auto_1fr_auto] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-default px-5 py-4">
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

        <nav className="min-h-0 overflow-y-auto overscroll-contain px-5 py-5 space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/men"
              onClick={onClose}
              className="rounded-xl bg-brand-navy px-4 py-4 text-sm font-bold text-white text-center leading-snug"
            >
              Men&apos;s
              <br />
              Research
            </Link>
            <Link
              href="/women"
              onClick={onClose}
              className="rounded-xl bg-brand-orange px-4 py-4 text-sm font-bold text-white text-center leading-snug"
            >
              Women&apos;s
              <br />
              Research
            </Link>
          </div>

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

          <div>
            <p className="mb-1 px-1 text-[11px] font-bold uppercase tracking-widest text-text-muted">
              Peptide Guides
            </p>
            <div className="space-y-0.5">
              <Link
                href="/peptides"
                onClick={onClose}
                className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-gray-50 hover:text-brand-green transition-colors"
              >
                All guides
              </Link>
              {getAllLandings().map((landing) => {
                const product = getProductBySlug(landing.productId);
                const fullName =
                  product?.name ?? landing.heroHeadline.replace(/ Australia$/, "");
                const label = getPeptideNavLabel(landing.peptideSlug, fullName);
                return (
                  <Link
                    key={landing.peptideSlug}
                    href={getLandingPath(landing.peptideSlug)}
                    onClick={onClose}
                    title={fullName}
                    className="flex items-center truncate rounded-lg px-3 py-3 pl-6 text-sm font-medium text-text-secondary hover:bg-gray-50 hover:text-brand-green transition-colors"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

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

        <div className="border-t border-border-default bg-white px-5 py-4 space-y-2">
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
    </div>,
    document.body
  );
}
