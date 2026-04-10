"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoredOrders } from "@/lib/orders";
import { formatPrice } from "@/config";
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from "@/types/order";
import type { Order } from "@/types/order";

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getStoredOrders());
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingCount = orders.filter(
    (o) => o.status === "pending_payment"
  ).length;
  const avgOrderValue =
    orders.length > 0 ? totalRevenue / orders.length : 0;

  const topProducts = orders
    .flatMap((o) => o.items)
    .reduce(
      (acc, item) => {
        const key = item.name;
        acc[key] = (acc[key] || 0) + item.quantity;
        return acc;
      },
      {} as Record<string, number>
    );

  const topProductsSorted = Object.entries(topProducts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">
        Sales Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Total Revenue",
            value: formatPrice(totalRevenue),
            color: "text-brand-green",
          },
          {
            label: "Total Orders",
            value: orders.length.toString(),
            color: "text-brand-navy",
          },
          {
            label: "Avg Order Value",
            value: formatPrice(avgOrderValue),
            color: "text-blue-600",
          },
          {
            label: "Pending Payments",
            value: pendingCount.toString(),
            color: pendingCount > 0 ? "text-brand-orange" : "text-text-muted",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-border-default p-5"
          >
            <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
              {stat.label}
            </p>
            <p className={`text-2xl font-bold mt-1 ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-border-default p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-text-primary">
              Recent Orders
            </h2>
            <Link
              href="/admin/orders"
              className="text-sm text-brand-green font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          {orders.length === 0 ? (
            <p className="text-sm text-text-muted py-8 text-center">
              No orders yet
            </p>
          ) : (
            <div className="space-y-3">
              {orders.slice(0, 8).map((order) => (
                <Link
                  key={order.id}
                  href={`/admin/orders/${order.id}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-bg-primary transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {order.payIdReference}
                    </p>
                    <p className="text-xs text-text-muted">
                      {order.email} ·{" "}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-text-primary">
                      {formatPrice(order.total)}
                    </p>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        ORDER_STATUS_COLORS[order.status]
                      }`}
                    >
                      {ORDER_STATUS_LABELS[order.status]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl border border-border-default p-5">
          <h2 className="text-lg font-bold text-text-primary mb-4">
            Top Products
          </h2>
          {topProductsSorted.length === 0 ? (
            <p className="text-sm text-text-muted py-8 text-center">
              No sales data yet
            </p>
          ) : (
            <div className="space-y-3">
              {topProductsSorted.map(([name, qty], i) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-3 rounded-lg bg-bg-primary"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                      {name}
                    </span>
                  </div>
                  <span className="text-sm text-text-muted">
                    {qty} sold
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
