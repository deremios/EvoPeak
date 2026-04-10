"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoredOrders } from "@/lib/orders";
import { formatPrice } from "@/config";
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from "@/types/order";
import type { Order, OrderStatus } from "@/types/order";

const statuses: ("all" | OrderStatus)[] = [
  "all",
  "pending_payment",
  "payment_verified",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<"all" | OrderStatus>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setOrders(getStoredOrders());
  }, []);

  const filtered = orders.filter((o) => {
    if (filter !== "all" && o.status !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        o.payIdReference.toLowerCase().includes(q) ||
        o.email.toLowerCase().includes(q) ||
        o.shippingAddress.fullName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">Orders</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by reference, email, or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as typeof filter)}
          className="rounded-lg border border-border-default px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
        >
          <option value="all">All Statuses</option>
          {statuses
            .filter((s) => s !== "all")
            .map((s) => (
              <option key={s} value={s}>
                {ORDER_STATUS_LABELS[s as OrderStatus]}
              </option>
            ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-border-default overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-muted">No orders found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-default bg-bg-primary">
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Reference
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Customer
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Date
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Total
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Status
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-text-muted">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-border-default last:border-0 hover:bg-bg-primary/50"
                  >
                    <td className="px-4 py-3 font-mono font-medium text-brand-orange">
                      {order.payIdReference}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-text-primary">
                        {order.shippingAddress.fullName}
                      </p>
                      <p className="text-xs text-text-muted">{order.email}</p>
                    </td>
                    <td className="px-4 py-3 text-text-muted">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 font-bold text-text-primary">
                      {formatPrice(order.total)}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          ORDER_STATUS_COLORS[order.status]
                        }`}
                      >
                        {ORDER_STATUS_LABELS[order.status]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="text-brand-green font-medium hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
