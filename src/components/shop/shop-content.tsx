"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { getAllProducts, getAllCategories, sortProducts, searchProducts } from "@/lib/products";
import { getAllCollections } from "@/lib/collections";
import type { ProductCategory } from "@/types/product";
import type { SortOption } from "@/types/product";
import type { ResearchCollection } from "@/data/collections";
import { ProductCard } from "./product-card";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Popular" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "newest", label: "Newest" },
];

function SearchInput({
  query,
  onChange,
}: {
  query: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
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

function FilterSections({
  activeCollection,
  setActiveCollection,
  activeCategory,
  setActiveCategory,
  collections,
  categories,
  allProducts,
  compact = false,
  onSelect,
}: {
  activeCollection: string;
  setActiveCollection: (value: string) => void;
  activeCategory: string;
  setActiveCategory: (value: string) => void;
  collections: ResearchCollection[];
  categories: ProductCategory[];
  allProducts: ReturnType<typeof getAllProducts>;
  compact?: boolean;
  onSelect?: () => void;
}) {
  const buttonClass = compact
    ? "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
    : "w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors";

  const activeClass = compact
    ? "bg-brand-green text-white"
    : "bg-brand-green text-white";

  const inactiveClass = compact
    ? "border border-border-default bg-white text-text-secondary hover:border-brand-green/30 hover:text-brand-green"
    : "text-text-secondary hover:bg-brand-green/5 hover:text-brand-green";

  function selectCollection(slug: string) {
    setActiveCollection(slug);
    onSelect?.();
  }

  function selectCategory(slug: string) {
    setActiveCategory(slug);
    onSelect?.();
  }

  return (
    <>
      <div className={compact ? "" : "mb-8"}>
        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
          Use Case
        </h3>
        <nav className={compact ? "flex flex-wrap gap-2" : "space-y-1"}>
          <button
            onClick={() => selectCollection("all")}
            className={`${buttonClass} ${
              activeCollection === "all" ? activeClass : inactiveClass
            }`}
          >
            All Use Cases
          </button>
          {collections.map((collection) => (
            <button
              key={collection.slug}
              onClick={() => selectCollection(collection.slug)}
              className={`${buttonClass} ${
                activeCollection === collection.slug ? activeClass : inactiveClass
              }`}
            >
              {collection.shortName}
              <span className={compact ? "ml-1 opacity-70" : "float-right text-xs opacity-70"}>
                {collection.productIds.length}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
          Product Category
        </h3>
        <nav className={compact ? "flex flex-wrap gap-2" : "space-y-1"}>
          <button
            onClick={() => selectCategory("all")}
            className={`${buttonClass} ${
              activeCategory === "all" ? activeClass : inactiveClass
            }`}
          >
            All Peptides
            <span className={compact ? "ml-1 opacity-70" : "float-right text-xs opacity-70"}>
              {allProducts.length}
            </span>
          </button>
          {categories.map((cat) => {
            const count = allProducts.filter((p) => p.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat.slug)}
                className={`${buttonClass} ${
                  activeCategory === cat.slug ? activeClass : inactiveClass
                }`}
              >
                {cat.name}
                <span className={compact ? "ml-1 opacity-70" : "float-right text-xs opacity-70"}>
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
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
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categories = getAllCategories();
  const collections = getAllCollections();
  const allProducts = getAllProducts();

  const activeFilterCount =
    (activeCollection !== "all" ? 1 : 0) + (activeCategory !== "all" ? 1 : 0);

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

  const filterProps = {
    activeCollection,
    setActiveCollection,
    activeCategory,
    setActiveCategory,
    collections,
    categories,
    allProducts,
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="hidden lg:block lg:w-64 flex-shrink-0">
        <div className="mb-6">
          <SearchInput query={query} onChange={setQuery} />
        </div>
        <FilterSections {...filterProps} />
      </aside>

      <div className="flex-1 min-w-0">
        <div className="lg:hidden space-y-3 mb-4">
          <SearchInput query={query} onChange={setQuery} />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border-default bg-white px-3 py-2 text-sm font-medium text-text-primary hover:border-brand-green/30 transition-colors"
            >
              <svg
                className="h-4 w-4 text-text-muted"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5"
                />
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="rounded-full bg-brand-green px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <p className="flex-1 text-sm text-text-muted truncate">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-lg border border-border-default bg-white px-2 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {filtersOpen && (
            <div className="rounded-xl border border-border-default bg-white p-4 max-h-[45vh] overflow-y-auto">
              <FilterSections
                {...filterProps}
                compact
                onSelect={() => setFiltersOpen(false)}
              />
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center justify-between mb-6">
          <p className="text-sm text-text-muted">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-lg border border-border-default bg-white px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">No products found.</p>
            <p className="text-text-muted text-sm mt-2">
              Try adjusting your search or category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
