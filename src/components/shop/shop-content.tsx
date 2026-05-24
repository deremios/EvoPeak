"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { getAllProducts, getAllCategories, sortProducts, searchProducts } from "@/lib/products";
import { getAllCollections } from "@/lib/collections";
import type { SortOption } from "@/types/product";
import { ProductCard } from "./product-card";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Popular" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "newest", label: "Newest" },
];

const selectClass =
  "rounded-lg border border-border-default bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green shrink-0";

function SearchInput({
  query,
  onChange,
}: {
  query: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative flex-1 min-w-[200px]">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search peptides..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-default bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors"
      />
    </div>
  );
}

export function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialCollection = searchParams.get("collection") || "all";
  const initialQuery = searchParams.get("search") || "";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeCollection, setActiveCollection] = useState(initialCollection);
  const [sort, setSort] = useState<SortOption>("popular");
  const [query, setQuery] = useState(initialQuery);

  const categories = getAllCategories();
  const collections = getAllCollections();
  const allProducts = getAllProducts();

  const filtered = useMemo(() => {
    let items = query ? searchProducts(query) : allProducts;

    if (activeCollection !== "all") {
      const collection = collections.find((item) => item.slug === activeCollection);
      if (collection) {
        items = items.filter((product) => collection.productIds.includes(product.id));
      }
    }

    if (activeCategory !== "all") {
      const category = categories.find((item) => item.slug === activeCategory);
      items = items.filter((p) => p.categoryId === (category?.id ?? activeCategory));
    }

    return sortProducts(items, sort);
  }, [allProducts, activeCategory, activeCollection, categories, collections, sort, query]);

  return (
    <div>
      <div className="mb-6 space-y-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <SearchInput query={query} onChange={setQuery} />
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={activeCollection}
              onChange={(e) => setActiveCollection(e.target.value)}
              aria-label="Filter by use case"
              className={selectClass}
            >
              <option value="all">All Use Cases</option>
              {collections.map((collection) => (
                <option key={collection.slug} value={collection.slug}>
                  {collection.shortName} ({collection.productIds.length})
                </option>
              ))}
            </select>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              aria-label="Filter by product category"
              className={selectClass}
            >
              <option value="all">All Peptides ({allProducts.length})</option>
              {categories.map((cat) => {
                const count = allProducts.filter((p) => p.categoryId === cat.id).length;
                return (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name} ({count})
                  </option>
                );
              })}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              aria-label="Sort products"
              className={selectClass}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-sm text-text-muted">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-text-muted text-lg">No products found.</p>
          <p className="text-text-muted text-sm mt-2">
            Try adjusting your search or category filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
