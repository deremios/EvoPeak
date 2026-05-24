"use client";

import { useState } from "react";
import { getProductImageFallback } from "@/lib/products";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className = "" }: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== getProductImageFallback()) {
          setCurrentSrc(getProductImageFallback());
        }
      }}
    />
  );
}
