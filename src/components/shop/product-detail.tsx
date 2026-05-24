"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice, region } from "@/config";
import { getCategoryBySlug } from "@/lib/products";
import { getLandingByPeptideSlug, getLandingPath } from "@/data/peptide-landings";
import { useCart } from "@/lib/cart-context";
import { TripleTestedBadge } from "@/components/shared/triple-tested-badge";
import { CoaModal } from "@/components/shared/coa-modal";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const category = getCategoryBySlug(product.categoryId);
  const landing = getLandingByPeptideSlug(product.slug);

  function handleAddToCart() {
    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      name: product.name,
      variantSize: selectedVariant.size,
      price: selectedVariant.price,
      imageUrl: product.imageUrl,
      slug: product.slug,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link href="/shop" className="hover:text-brand-green transition-colors">
            Shop
          </Link>
          <span>/</span>
          {category && (
            <>
              <Link
                href={`/shop?category=${category.slug}`}
                className="hover:text-brand-green transition-colors"
              >
                {category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-text-primary font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square bg-white rounded-2xl border border-border-default overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-brand-green/10 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-brand-green"
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
              <p className="text-lg font-bold text-text-primary">
                {product.name}
              </p>
              <p className="text-sm text-text-muted mt-1">
                {selectedVariant.size}
              </p>
            </div>
          </div>

          {/* Details */}
          <div>
            {product.alternateName && (
              <p className="text-sm text-brand-green font-medium mb-2">
                {product.alternateName}
              </p>
            )}

            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {product.name}
            </h1>

            <p className="mt-3 text-text-secondary leading-relaxed">
              {product.shortDescription}
            </p>

            {landing && (
              <Link
                href={getLandingPath(product.slug)}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
              >
                Complete guide to {product.name} in Australia
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            )}

            {/* Trust badges row */}
            <div className="mt-4 flex flex-wrap gap-3">
              <TripleTestedBadge size="sm" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                COA Available
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
                🇦🇺 {region.shipping.domesticEstimate}
              </span>
            </div>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                        selectedVariant.id === variant.id
                          ? "border-brand-green bg-brand-green text-white"
                          : "border-border-default bg-white text-text-primary hover:border-brand-green/40"
                      }`}
                    >
                      {variant.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="mt-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-text-primary">
                  {formatPrice(selectedVariant.price)}
                </span>
                {selectedVariant.compareAtPrice && (
                  <span className="text-lg text-text-muted line-through">
                    {formatPrice(selectedVariant.compareAtPrice)}
                  </span>
                )}
              </div>
              <p className="text-xs text-text-muted mt-1">
                Prices in {region.currency.code}. Tax included.
              </p>
            </div>

            {/* Add to Cart */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 rounded-lg py-3.5 px-6 text-base font-semibold text-white transition-colors ${
                  added
                    ? "bg-green-600"
                    : "bg-brand-green hover:bg-brand-green-light"
                }`}
              >
                {added ? "Added!" : "Add to Cart"}
              </button>
              <button className="rounded-lg border border-border-default bg-white p-3.5 text-text-secondary hover:text-brand-green hover:border-brand-green/40 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Research Use Only:</strong>{" "}
                {region.legal.disclaimer}
              </p>
            </div>

            {/* COA Viewer */}
            <div className="mt-6">
              <CoaModal
                productName={product.name}
                sku={selectedVariant.sku}
              />
            </div>
          </div>
        </div>

        {/* Description & Research tabs */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-4">
              Description
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div className="mt-6 border-t border-border-default pt-6">
              <h3 className="text-sm font-semibold text-text-primary mb-3">
                Specifications
              </h3>
              <dl className="space-y-2">
                <div className="flex justify-between text-sm">
                  <dt className="text-text-muted">SKU</dt>
                  <dd className="font-medium text-text-primary">
                    {selectedVariant.sku}
                  </dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-text-muted">Size</dt>
                  <dd className="font-medium text-text-primary">
                    {selectedVariant.size}
                  </dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-text-muted">Form</dt>
                  <dd className="font-medium text-text-primary">
                    Lyophilised Powder
                  </dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-text-muted">Purity</dt>
                  <dd className="font-medium text-text-primary">&gt;99%</dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-text-muted">Storage</dt>
                  <dd className="font-medium text-text-primary">
                    -20°C (lyophilised), 2-8°C (reconstituted)
                  </dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-text-muted">Shipping</dt>
                  <dd className="font-medium text-text-primary">
                    {region.shipping.carrier} —{" "}
                    {region.shipping.domesticEstimate}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-4">
              Research Summary
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {product.researchSummary}
            </p>

            <div className="mt-6 rounded-lg bg-bg-primary border border-border-default p-4">
              <h3 className="text-sm font-semibold text-text-primary mb-2">
                Testing Protocol
              </h3>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  HPLC Purity Analysis
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Mass Spectrometry Identity Verification
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Endotoxin Screening (LAL Test)
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-text-primary mb-2">
                Research Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-bg-primary px-3 py-1 text-xs font-medium text-text-secondary border border-border-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
