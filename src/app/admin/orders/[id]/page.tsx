"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { getOrderById, updateOrderStatus } from "@/lib/orders";
import { formatPrice, region } from "@/config";
import {
  ORDER_STATUS_LABELS,
  ORDER_STATUS_COLORS,
  type Order,
  type OrderStatus,
} from "@/types/order";

const statusFlow: OrderStatus[] = [
  "pending_payment",
  "payment_verified",
  "processing",
  "shipped",
  "delivered",
];

export default function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [order, setOrder] = useState<Order | null>(null);
  const [trackingInput, setTrackingInput] = useState("");

  useEffect(() => {
    setOrder(getOrderById(id));
  }, [id]);

  if (!order) {
    return (
      <div className="text-center py-16">
        <p className="text-text-muted">Order not found</p>
        <Link
          href="/admin/orders"
          className="mt-4 inline-block text-sm text-brand-green hover:underline"
        >
          Back to Orders
        </Link>
      </div>
    );
  }

  const currentIdx = statusFlow.indexOf(order.status);
  const nextStatus =
    currentIdx >= 0 && currentIdx < statusFlow.length - 1
      ? statusFlow[currentIdx + 1]
      : null;

  function handleAdvance() {
    if (!nextStatus || !order) return;
    const tracking =
      nextStatus === "shipped" ? trackingInput || undefined : undefined;
    const updated = updateOrderStatus(order.id, nextStatus, tracking);
    if (updated) setOrder({ ...updated });
  }

  function handleCancel() {
    if (!order) return;
    const updated = updateOrderStatus(order.id, "cancelled");
    if (updated) setOrder({ ...updated });
  }

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link href="/admin/orders" className="hover:text-brand-green">
          Orders
        </Link>
        <span>/</span>
        <span className="text-text-primary font-medium">
          {order.payIdReference}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">
            {order.payIdReference}
          </h1>
          <p className="text-sm text-text-muted">
            {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
            ORDER_STATUS_COLORS[order.status]
          }`}
        >
          {ORDER_STATUS_LABELS[order.status]}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Items */}
          <div className="bg-white rounded-xl border border-border-default p-5">
            <h2 className="text-lg font-bold text-text-primary mb-4">Items</h2>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div
                  key={item.variantId}
                  className="flex justify-between text-sm"
                >
                  <span className="text-text-secondary">
                    {item.name} ({item.variantSize}) × {item.quantity}
                  </span>
                  <span className="font-medium text-text-primary">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
              <div className="pt-3 border-t border-border-default space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Subtotal</span>
                  <span>{formatPrice(order.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Shipping</span>
                  <span>
                    {order.shippingCost === 0
                      ? "Free"
                      : formatPrice(order.shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between font-bold pt-1 text-base">
                  <span>Total</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer */}
          <div className="bg-white rounded-xl border border-border-default p-5">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              Customer
            </h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-text-muted">Email</dt>
                <dd className="text-text-primary">{order.email}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text-muted">Name</dt>
                <dd className="text-text-primary">
                  {order.shippingAddress.fullName}
                </dd>
              </div>
            </dl>
          </div>

          {/* Shipping */}
          <div className="bg-white rounded-xl border border-border-default p-5">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              Shipping Address
            </h2>
            <p className="text-sm text-text-secondary">
              {order.shippingAddress.fullName}
              <br />
              {order.shippingAddress.line1}
              {order.shippingAddress.line2 && (
                <>
                  <br />
                  {order.shippingAddress.line2}
                </>
              )}
              <br />
              {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
              {order.shippingAddress.postcode}
            </p>
            {order.trackingNumber && (
              <p className="mt-3 text-sm">
                <span className="text-text-muted">Tracking:</span>{" "}
                <strong className="text-text-primary">
                  {order.trackingNumber}
                </strong>
              </p>
            )}
          </div>
        </div>

        {/* Actions sidebar */}
        <div className="space-y-6">
          {/* Status actions */}
          <div className="bg-white rounded-xl border border-border-default p-5">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              Actions
            </h2>

            {/* Status timeline */}
            <div className="space-y-2 mb-6">
              {statusFlow.map((s, i) => {
                const isCurrent = order.status === s;
                const isPast = currentIdx >= i;
                return (
                  <div key={s} className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isCurrent
                          ? "bg-brand-green ring-4 ring-brand-green/20"
                          : isPast
                          ? "bg-brand-green"
                          : "bg-gray-200"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        isCurrent
                          ? "font-bold text-text-primary"
                          : isPast
                          ? "text-text-secondary"
                          : "text-text-muted"
                      }`}
                    >
                      {ORDER_STATUS_LABELS[s]}
                    </span>
                  </div>
                );
              })}
            </div>

            {order.status !== "cancelled" &&
              order.status !== "delivered" &&
              nextStatus && (
                <div className="space-y-3">
                  {nextStatus === "shipped" && (
                    <input
                      type="text"
                      placeholder={`${region.shipping.carrier} tracking number`}
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  )}
                  <button
                    onClick={handleAdvance}
                    className="w-full rounded-lg bg-brand-green py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
                  >
                    Mark as {ORDER_STATUS_LABELS[nextStatus]}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-full rounded-lg border border-red-200 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Cancel Order
                  </button>
                </div>
              )}

            {(order.status === "cancelled" ||
              order.status === "delivered") && (
              <p className="text-sm text-text-muted text-center">
                No further actions available
              </p>
            )}
          </div>

          {/* Payment info */}
          <div className="bg-white rounded-xl border border-border-default p-5">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              Payment
            </h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-text-muted">Method</dt>
                <dd className="text-text-primary">
                  {region.payment.methods[0]}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text-muted">Reference</dt>
                <dd className="font-mono font-bold text-brand-orange">
                  {order.payIdReference}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text-muted">Amount</dt>
                <dd className="font-bold text-text-primary">
                  {formatPrice(order.total)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
