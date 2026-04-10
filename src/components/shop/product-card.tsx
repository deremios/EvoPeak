import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/config";
import { getLowestPrice } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = getLowestPrice(product);
  const hasMultipleVariants = product.variants.length > 1;
  const hasComparePrice = product.variants.some((v) => v.compareAtPrice);

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group bg-white rounded-2xl border border-border-default overflow-hidden hover:shadow-lg hover:border-brand-green/30 transition-all duration-300"
    >
      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-brand-green/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-brand-green"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </div>
            <p className="text-xs text-text-muted font-medium">
              {product.name}
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.featured && (
            <span className="inline-flex items-center rounded-full bg-brand-orange px-2.5 py-0.5 text-xs font-semibold text-white">
              Popular
            </span>
          )}
          {hasComparePrice && (
            <span className="inline-flex items-center rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-semibold text-white">
              Sale
            </span>
          )}
        </div>

        {/* COA badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2 py-0.5 text-xs text-brand-green font-medium border border-brand-green/20">
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            COA
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-text-muted mb-1">
          {product.alternateName || product.categoryId}
        </p>
        <h3 className="text-base font-bold text-text-primary group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-text-secondary mt-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-text-primary">
            {hasMultipleVariants ? "From " : ""}
            {formatPrice(lowestPrice)}
          </span>
          {hasComparePrice && product.variants[0].compareAtPrice && (
            <span className="text-sm text-text-muted line-through">
              {formatPrice(product.variants[0].compareAtPrice)}
            </span>
          )}
        </div>

        {/* Variant count */}
        {hasMultipleVariants && (
          <p className="text-xs text-text-muted mt-1">
            {product.variants.length} sizes available
          </p>
        )}
      </div>
    </Link>
  );
}
