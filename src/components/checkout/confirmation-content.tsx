"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getOrderById } from "@/lib/orders";
import { formatPrice, region } from "@/config";
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from "@/types/order";
import type { Order } from "@/types/order";

export function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (orderId) {
      setOrder(getOrderById(orderId));
    }
  }, [orderId]);

  if (!order) {
    return (
      <div className="bg-bg-primary min-h-screen py-16 text-center">
        <p className="text-text-muted">Order not found.</p>
        <Link
          href="/shop"
          className="mt-4 inline-block text-sm text-brand-green font-medium hover:underline"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-green/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-brand-green"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-text-primary">
            Order Confirmed
          </h1>
          <p className="mt-2 text-text-secondary">
            Reference: <strong className="text-brand-orange">{order.payIdReference}</strong>
          </p>
        </div>

        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-2xl border border-border-default p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-text-primary">Status</h2>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                  ORDER_STATUS_COLORS[order.status]
                }`}
              >
                {ORDER_STATUS_LABELS[order.status]}
              </span>
            </div>
            {order.trackingNumber && (
              <p className="mt-2 text-sm text-text-secondary">
                Tracking: <strong>{order.trackingNumber}</strong>
              </p>
            )}
          </div>

          {/* Items */}
          <div className="bg-white rounded-2xl border border-border-default p-6">
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
                <div className="flex justify-between font-bold pt-1">
                  <span>Total</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white rounded-2xl border border-border-default p-6">
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
            <p className="text-xs text-text-muted mt-2">
              {region.shipping.carrier} — {region.shipping.domesticEstimate}
            </p>
          </div>

          {/* PayID reminder */}
          <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
            <h3 className="text-sm font-bold text-amber-800 mb-2">
              Payment Reminder
            </h3>
            <p className="text-xs text-amber-700 leading-relaxed">
              Send <strong>{formatPrice(order.total)}</strong> to PayID{" "}
              <strong>payments@evopeak.io</strong> with reference{" "}
              <strong>{order.payIdReference}</strong>. Your order will be
              processed once payment is verified.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/shop"
              className="text-sm text-brand-green font-medium hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
