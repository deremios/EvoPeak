import Link from "next/link";
import { formatPrice } from "@/config";

interface ShopCtaProps {
  href: string;
  label: string;
  priceFrom?: number;
  variant?: "primary" | "secondary" | "navy";
  className?: string;
}

export function ShopCta({
  href,
  label,
  priceFrom,
  variant = "primary",
  className = "",
}: ShopCtaProps) {
  const displayLabel =
    priceFrom !== undefined ? `${label} — From ${formatPrice(priceFrom)}` : label;

  const variants = {
    primary: "bg-home-cta text-white hover:opacity-90",
    secondary:
      "border border-[#1b3d32]/30 bg-white text-[#1b3d32] hover:bg-[#E8F3EC]",
    navy: "bg-white text-[#1b3d32] hover:bg-white/90",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {displayLabel}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </Link>
  );
}
