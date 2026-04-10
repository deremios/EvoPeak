"use client";

import { useEffect, useState } from "react";
import { getStoredOrders } from "@/lib/orders";
import { formatPrice } from "@/config";

interface Customer {
  email: string;
  name: string;
  totalOrders: number;
  totalSpend: number;
  lastOrderDate: string;
}

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const orders = getStoredOrders();
    const map = new Map<string, Customer>();

    orders.forEach((order) => {
      const existing = map.get(order.email);
      if (existing) {
        existing.totalOrders += 1;
        existing.totalSpend += order.total;
        if (order.createdAt > existing.lastOrderDate) {
          existing.lastOrderDate = order.createdAt;
          existing.name = order.shippingAddress.fullName;
        }
      } else {
        map.set(order.email, {
          email: order.email,
          name: order.shippingAddress.fullName,
          totalOrders: 1,
          totalSpend: order.total,
          lastOrderDate: order.createdAt,
        });
      }
    });

    setCustomers(
      Array.from(map.values()).sort((a, b) => b.totalSpend - a.totalSpend)
    );
  }, []);

  const filtered = search
    ? customers.filter(
        (c) =>
          c.email.toLowerCase().includes(search.toLowerCase()) ||
          c.name.toLowerCase().includes(search.toLowerCase())
      )
    : customers;

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">Customers</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
        />
      </div>

      <div className="bg-white rounded-xl border border-border-default overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-muted">No customers found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-default bg-bg-primary">
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Customer
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Orders
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Total Spend
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Last Order
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((customer) => (
                  <tr
                    key={customer.email}
                    className="border-b border-border-default last:border-0 hover:bg-bg-primary/50"
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-text-primary">
                        {customer.name}
                      </p>
                      <p className="text-xs text-text-muted">
                        {customer.email}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {customer.totalOrders}
                    </td>
                    <td className="px-4 py-3 font-bold text-text-primary">
                      {formatPrice(customer.totalSpend)}
                    </td>
                    <td className="px-4 py-3 text-text-muted">
                      {new Date(customer.lastOrderDate).toLocaleDateString()}
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
