import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/config";
import { getLowestPrice } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

const categoryGradients: Record<string, string> = {
  "weight-loss": "from-emerald-950 via-brand-navy to-slate-950",
  recovery: "from-sky-950 via-brand-navy to-slate-950",
  performance: "from-indigo-950 via-brand-navy to-slate-950",
  cognitive: "from-violet-950 via-brand-navy to-slate-950",
  blends: "from-brand-navy via-slate-900 to-black",
  supplies: "from-slate-800 via-slate-900 to-slate-950",
};

export function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = getLowestPrice(product);
  const hasMultipleVariants = product.variants.length > 1;
  const hasComparePrice = product.variants.some((v) => v.compareAtPrice);
  const gradient = categoryGradients[product.categoryId] ?? "from-brand-navy to-slate-950";

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border-default bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-2xl"
    >
      {/* Image area */}
      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* Molecular decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg className="h-32 w-32 text-white" fill="none" viewBox="0 0 120 120" stroke="currentColor" strokeWidth="0.8">
            <circle cx="60" cy="60" r="18" />
            <circle cx="20" cy="30" r="8" />
            <circle cx="100" cy="30" r="8" />
            <circle cx="20" cy="90" r="8" />
            <circle cx="100" cy="90" r="8" />
            <circle cx="60" cy="10" r="6" />
            <circle cx="60" cy="110" r="6" />
            <line x1="42" y1="51" x2="28" y2="37" />
            <line x1="78" y1="51" x2="92" y2="37" />
            <line x1="42" y1="69" x2="28" y2="83" />
            <line x1="78" y1="69" x2="92" y2="83" />
            <line x1="60" y1="42" x2="60" y2="16" />
            <line x1="60" y1="78" x2="60" y2="104" />
          </svg>
        </div>

        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,200,120,0.18),transparent_60%)]" />

        {/* Product name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/50">
            {product.categoryId.replace("-", " ")}
          </p>
          <p className="mt-1 text-lg font-black leading-tight text-white">
            {product.name}
          </p>
        </div>

        {/* Top badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.featured && (
            <span className="rounded-full bg-brand-orange px-2.5 py-0.5 text-xs font-black uppercase tracking-[0.1em] text-white">
              Popular
            </span>
          )}
          {hasComparePrice && (
            <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-black uppercase tracking-[0.1em] text-white">
              Sale
            </span>
          )}
        </div>

        {/* COA badge */}
        <div className="absolute right-3 top-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751" />
            </svg>
            COA
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
          {product.alternateName || product.categoryId}
        </p>
        <h3 className="mt-2 text-lg font-black leading-tight text-text-primary transition-colors group-hover:text-brand-green">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-text-secondary">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border-default pt-4">
          <div>
            <span className="text-xl font-black text-text-primary">
              {hasMultipleVariants ? "From " : ""}
              {formatPrice(lowestPrice)}
            </span>
            {hasComparePrice && product.variants[0].compareAtPrice && (
              <span className="ml-2 text-sm text-text-muted line-through">
                {formatPrice(product.variants[0].compareAtPrice)}
              </span>
            )}
            {hasMultipleVariants && (
              <p className="mt-0.5 text-xs text-text-muted">
                {product.variants.length} sizes
              </p>
            )}
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand-green">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
