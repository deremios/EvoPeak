"use client";

import Image from "next/image";
import { useState } from "react";
import { getProductImageFallback } from "@/lib/products";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  onImageError?: () => void;
  skipFallback?: boolean;
}

export function ProductImage({
  src,
  alt,
  className = "",
  fill = false,
  sizes,
  priority = false,
  width,
  height,
  onImageError,
  skipFallback = false,
}: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const fallback = getProductImageFallback();

  const imageProps = fill
    ? { fill: true as const, sizes: sizes ?? "(max-width: 768px) 100vw, 33vw" }
    : { width: width ?? 400, height: height ?? 400 };

  return (
    <Image
      {...imageProps}
      src={currentSrc}
      alt={alt}
      className={className}
      priority={priority}
      onError={() => {
        onImageError?.();
        if (!skipFallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}
