"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { createOrder, calculateShipping } from "@/lib/orders";
import { formatPrice, region } from "@/config";
import type { ShippingAddress } from "@/types/order";

type Step = "address" | "review" | "payid";

export function CheckoutContent() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("address");
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postcode: "",
    country: region.country,
  });
  const [payIdRef, setPayIdRef] = useState("");
  const [orderId, setOrderId] = useState("");

  const shippingCost = calculateShipping(subtotal);
  const total = subtotal + shippingCost;

  if (items.length === 0 && step !== "payid") {
    return (
      <div className="bg-bg-primary min-h-screen py-16">
        <div className="mx-auto max-w-lg px-4 text-center">
          <p className="text-lg font-bold text-text-primary mb-4">
            Your cart is empty
          </p>
          <Link
            href="/shop"
            className="text-sm text-brand-green font-medium hover:underline"
          >
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  function handleAddressSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("review");
  }

  function handlePlaceOrder() {
    const order = createOrder(items, address, "guest", "guest@example.com");
    setPayIdRef(order.payIdReference);
    setOrderId(order.id);
    clearCart();
    setStep("payid");
  }

  return (
    <div className="bg-bg-primary min-h-screen py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Steps indicator */}
        <div className="flex items-center gap-2 mb-8">
          {(["address", "review", "payid"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step === s
                    ? "bg-brand-green text-white"
                    : i < ["address", "review", "payid"].indexOf(step)
                    ? "bg-brand-green/20 text-brand-green"
                    : "bg-gray-200 text-text-muted"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-sm font-medium hidden sm:inline ${
                  step === s ? "text-text-primary" : "text-text-muted"
                }`}
              >
                {s === "address"
                  ? "Shipping"
                  : s === "review"
                  ? "Review"
                  : "Payment"}
              </span>
              {i < 2 && (
                <div className="w-8 sm:w-16 h-px bg-border-default mx-1" />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Address */}
        {step === "address" && (
          <form onSubmit={handleAddressSubmit} className="space-y-6">
            <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8">
              <h2 className="text-xl font-bold text-text-primary mb-6">
                Shipping Address
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) =>
                      setAddress({ ...address, fullName: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Start typing your address..."
                    value={address.line1}
                    onChange={(e) =>
                      setAddress({ ...address, line1: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                  />
                  <p className="text-xs text-text-muted mt-1">
                    Google Places autocomplete will be enabled in production
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Apartment / Unit (optional)
                  </label>
                  <input
                    type="text"
                    value={address.line2}
                    onChange={(e) =>
                      setAddress({ ...address, line2: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      City / Suburb
                    </label>
                    <input
                      type="text"
                      required
                      value={address.city}
                      onChange={(e) =>
                        setAddress({ ...address, city: e.target.value })
                      }
                      className="w-full rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      value={address.state}
                      onChange={(e) =>
                        setAddress({ ...address, state: e.target.value })
                      }
                      className="w-full rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Postcode
                    </label>
                    <input
                      type="text"
                      required
                      value={address.postcode}
                      onChange={(e) =>
                        setAddress({ ...address, postcode: e.target.value })
                      }
                      className="w-full rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Link
                href="/cart"
                className="rounded-lg border border-border-default bg-white px-6 py-3 text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors"
              >
                Back to Cart
              </Link>
              <button
                type="submit"
                className="rounded-lg bg-brand-green px-8 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
              >
                Continue to Review
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Review */}
        {step === "review" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8">
              <h2 className="text-xl font-bold text-text-primary mb-6">
                Review Your Order
              </h2>

              {/* Address summary */}
              <div className="mb-6 pb-6 border-b border-border-default">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      Ship to:
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      {address.fullName}
                      <br />
                      {address.line1}
                      {address.line2 && (
                        <>
                          <br />
                          {address.line2}
                        </>
                      )}
                      <br />
                      {address.city}, {address.state} {address.postcode}
                    </p>
                  </div>
                  <button
                    onClick={() => setStep("address")}
                    className="text-sm text-brand-green font-medium hover:underline"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {items.map((item) => (
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
              </div>

              {/* Totals */}
              <div className="mt-6 pt-4 border-t border-border-default space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Subtotal</span>
                  <span className="text-text-primary">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Shipping</span>
                  <span className="text-text-primary">
                    {shippingCost === 0 ? (
                      <span className="text-brand-green">Free</span>
                    ) : (
                      formatPrice(shippingCost)
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border-default">
                  <span className="font-bold text-text-primary">Total</span>
                  <span className="font-bold text-text-primary text-lg">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Research Use Only:</strong> {region.legal.disclaimer}
              </p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("address")}
                className="rounded-lg border border-border-default bg-white px-6 py-3 text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handlePlaceOrder}
                className="rounded-lg bg-brand-orange px-8 py-3 text-sm font-semibold text-white hover:bg-brand-orange-light transition-colors shadow-lg shadow-brand-orange/25"
              >
                Place Order &amp; Pay via {region.payment.methods[0]}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: PayID */}
        {step === "payid" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8 text-center">
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
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Order Placed!
              </h2>
              <p className="text-text-secondary mb-8">
                Complete your payment via {region.payment.methods[0]} to
                confirm your order.
              </p>

              {/* PayID Details */}
              <div className="max-w-md mx-auto bg-bg-primary rounded-xl border border-border-default p-6 text-left space-y-4">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                  Payment Details
                </h3>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Pay to (PayID)</span>
                  <span className="font-mono font-bold text-text-primary">
                    payments@optimiseau.com.au
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Amount</span>
                  <span className="font-bold text-brand-green text-lg">
                    {formatPrice(total)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Reference</span>
                  <span className="font-mono font-bold text-brand-orange">
                    {payIdRef}
                  </span>
                </div>
                <div className="pt-2 border-t border-border-default">
                  <p className="text-xs text-text-muted leading-relaxed">
                    Open your banking app, select PayID, enter the email
                    above, use reference <strong>{payIdRef}</strong>, and send{" "}
                    <strong>{formatPrice(total)}</strong>. We&apos;ll verify
                    your payment and begin processing your order.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href={`/checkout/confirmation?order=${orderId}`}
                className="inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
              >
                View Order Confirmation
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
