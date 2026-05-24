"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { getProductImages } from "@/lib/products";
import { ProductImage } from "@/components/shop/product-image";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const candidates = useMemo(
    () => [...new Set(getProductImages(product))],
    [product]
  );
  const [selectedSrc, setSelectedSrc] = useState(candidates[0]);
  const [failed, setFailed] = useState<Set<string>>(() => new Set());

  const visibleThumbs = candidates.filter((src) => !failed.has(src));

  function markFailed(src: string) {
    setFailed((prev) => {
      if (prev.has(src)) return prev;
      const next = new Set(prev);
      next.add(src);
      return next;
    });
    if (selectedSrc === src) {
      const fallback = candidates.find((c) => c !== src && !failed.has(c));
      if (fallback) setSelectedSrc(fallback);
    }
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border-default bg-white">
        <ProductImage
          src={selectedSrc}
          alt={`${product.name} research peptide`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          className="object-contain p-6"
        />
      </div>

      {visibleThumbs.length > 1 && (
        <div className="flex gap-3">
          {candidates.map((src) =>
            failed.has(src) ? null : (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedSrc(src)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-white transition-colors ${
                  selectedSrc === src
                    ? "border-brand-green ring-2 ring-brand-green/20"
                    : "border-border-default hover:border-brand-green/40"
                }`}
                aria-label={`View ${product.name} product image`}
              >
                <ProductImage
                  src={src}
                  alt=""
                  width={80}
                  height={80}
                  sizes="80px"
                  className="object-contain p-2"
                  skipFallback
                  onImageError={() => markFailed(src)}
                />
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
