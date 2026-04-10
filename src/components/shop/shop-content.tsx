"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { getAllProducts, getAllCategories, sortProducts, searchProducts } from "@/lib/products";
import type { SortOption } from "@/types/product";
import { ProductCard } from "./product-card";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Popular" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "newest", label: "Newest" },
];

export function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>("popular");
  const [query, setQuery] = useState("");

  const categories = getAllCategories();
  const allProducts = getAllProducts();

  const filtered = useMemo(() => {
    let items = query ? searchProducts(query) : allProducts;

    if (activeCategory !== "all") {
      items = items.filter((p) => p.categoryId === activeCategory);
    }

    return sortProducts(items, sort);
  }, [allProducts, activeCategory, sort, query]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="lg:w-64 flex-shrink-0">
        {/* Search */}
        <div className="mb-6">
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
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-default bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors"
            />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Category
          </h3>
          <nav className="space-y-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-brand-green text-white"
                  : "text-text-secondary hover:bg-brand-green/5 hover:text-brand-green"
              }`}
            >
              All Peptides
              <span className="float-right text-xs opacity-70">
                {allProducts.length}
              </span>
            </button>
            {categories.map((cat) => {
              const count = allProducts.filter(
                (p) => p.categoryId === cat.id
              ).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat.slug
                      ? "bg-brand-green text-white"
                      : "text-text-secondary hover:bg-brand-green/5 hover:text-brand-green"
                  }`}
                >
                  {cat.name}
                  <span className="float-right text-xs opacity-70">
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-1">
        {/* Sort & Count Bar */}
        <div className="flex items-center justify-between mb-6">
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
