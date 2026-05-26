import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/config";
import { getLowestPrice } from "@/lib/products";
import { ProductImage } from "@/components/shop/product-image";

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
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8F3EC]">
        <ProductImage
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.featured && (
            <span className="rounded-full bg-[#1b3d32] px-2.5 py-0.5 text-xs font-medium uppercase tracking-[0.1em] text-white">
              Popular
            </span>
          )}
          {hasComparePrice && (
            <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-medium uppercase tracking-[0.1em] text-white">
              Sale
            </span>
          )}
        </div>

        <div className="absolute right-3 top-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-black/8 bg-white/90 px-2.5 py-1 text-xs font-medium text-[#1b3d32] backdrop-blur">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751" />
            </svg>
            COA
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-home-charcoal/55">
          {product.alternateName || product.categoryId}
        </p>
        <h3 className="mt-2 text-lg font-normal leading-tight text-home-charcoal transition-colors group-hover:text-[#1b3d32]">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-home-charcoal/65">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-black/6 pt-4">
          <div>
            <span className="text-xl font-normal text-home-charcoal">
              {hasMultipleVariants ? "From " : ""}
              {formatPrice(lowestPrice)}
            </span>
            {hasComparePrice && product.variants[0].compareAtPrice && (
              <span className="ml-2 text-sm text-home-charcoal/45 line-through">
                {formatPrice(product.variants[0].compareAtPrice)}
              </span>
            )}
            {hasMultipleVariants && (
              <p className="mt-0.5 text-xs text-home-charcoal/50">
                {product.variants.length} sizes
              </p>
            )}
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1b3d32] text-white transition-colors group-hover:bg-home-mint group-hover:text-[#1b3d32]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
