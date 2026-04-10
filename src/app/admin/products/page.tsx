"use client";

import { useState } from "react";
import { getAllProducts, getAllCategories, getLowestPrice } from "@/lib/products";
import { formatPrice } from "@/config";

export default function AdminProductsPage() {
  const products = getAllProducts();
  const categories = getAllCategories();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    if (filter !== "all" && p.categoryId !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Products</h1>
        <button className="rounded-lg bg-brand-green px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors">
          + Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border border-border-default px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-border-default overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-default bg-bg-primary">
                <th className="text-left px-4 py-3 font-semibold text-text-muted">
                  Product
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">
                  Category
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">
                  Variants
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">
                  Price From
                </th>
                <th className="text-left px-4 py-3 font-semibold text-text-muted">
                  Status
                </th>
                <th className="text-right px-4 py-3 font-semibold text-text-muted">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => {
                const cat = categories.find((c) => c.id === product.categoryId);
                return (
                  <tr
                    key={product.id}
                    className="border-b border-border-default last:border-0 hover:bg-bg-primary/50"
                  >
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-text-primary">
                          {product.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {product.slug}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {cat?.name || product.categoryId}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {product.variants.length}
                    </td>
                    <td className="px-4 py-3 font-bold text-text-primary">
                      {formatPrice(getLowestPrice(product))}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          product.published
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {product.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-brand-green font-medium hover:underline text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
