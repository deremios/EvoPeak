"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/config";

export function CartContent() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  const shippingCost = subtotal >= 200 ? 0 : 15;
  const total = subtotal + shippingCost;

  if (items.length === 0) {
    return (
      <div className="bg-bg-primary min-h-screen py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-text-primary mb-8">
            Your Cart
          </h1>
          <div className="bg-white rounded-2xl border border-border-default p-12 text-center">
            <svg
              className="w-16 h-16 mx-auto text-text-muted/30 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p className="text-lg font-bold text-text-primary">
              Cart is empty
            </p>
            <p className="text-sm text-text-muted mt-2 mb-6">
              Add some research peptides to get started.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-lg bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.variantId}
                className="bg-white rounded-xl border border-border-default p-4 sm:p-6 flex gap-4"
              >
                {/* Product icon */}
                <Link
                  href={`/shop/${item.slug}`}
                  className="flex-shrink-0 w-20 h-20 rounded-lg bg-bg-primary flex items-center justify-center"
                >
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
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/shop/${item.slug}`}
                    className="text-base font-bold text-text-primary hover:text-brand-green transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-text-muted">{item.variantSize}</p>

                  <div className="mt-3 flex items-center gap-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-border-default rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.variantId, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-3 py-1.5 text-sm text-text-secondary hover:text-brand-green disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        −
                      </button>
                      <span className="px-3 py-1.5 text-sm font-medium text-text-primary border-x border-border-default min-w-[2.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.variantId, item.quantity + 1)
                        }
                        className="px-3 py-1.5 text-sm text-text-secondary hover:text-brand-green"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.variantId)}
                      className="text-sm text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="text-base font-bold text-text-primary">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  {item.quantity > 1 && (
                    <p className="text-xs text-text-muted">
                      {formatPrice(item.price)} each
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-border-default p-6 sticky top-24">
              <h2 className="text-lg font-bold text-text-primary mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Subtotal</span>
                  <span className="font-medium text-text-primary">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Shipping</span>
                  <span className="font-medium text-text-primary">
                    {shippingCost === 0 ? (
                      <span className="text-brand-green">Free</span>
                    ) : (
                      formatPrice(shippingCost)
                    )}
                  </span>
                </div>
                {shippingCost > 0 && (
                  <p className="text-xs text-text-muted">
                    Free shipping on orders over {formatPrice(200)}
                  </p>
                )}
                <div className="border-t border-border-default pt-3 flex justify-between">
                  <span className="font-bold text-text-primary">Total</span>
                  <span className="font-bold text-text-primary text-lg">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block w-full rounded-lg bg-brand-green py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="mt-3 block w-full text-center text-sm text-text-muted hover:text-brand-green transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
