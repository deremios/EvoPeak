"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Logo } from "@/components/shared/logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

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

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-default">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-text-secondary hover:text-brand-green"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-6 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block rounded-lg px-4 py-3 text-base font-medium text-text-primary hover:bg-brand-green/5 hover:text-brand-green transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-border-default mt-4 space-y-1">
            <Link
              href="/account"
              onClick={onClose}
              className="block rounded-lg px-4 py-3 text-base font-medium text-text-primary hover:bg-brand-green/5 hover:text-brand-green transition-colors"
            >
              Account
            </Link>
            <Link
              href="/cart"
              onClick={onClose}
              className="block rounded-lg px-4 py-3 text-base font-semibold text-white bg-brand-green text-center hover:bg-brand-green-light transition-colors"
            >
              Cart{itemCount > 0 ? ` (${itemCount})` : ""}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
