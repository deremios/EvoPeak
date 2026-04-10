"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { region } from "@/config";
import type { User } from "@supabase/supabase-js";

interface AccountContentProps {
  user: User;
}

export function AccountContent({ user }: AccountContentProps) {
  const router = useRouter();
  const [ageConfirmed, setAgeConfirmed] = useState(
    user.user_metadata?.age_verified === true
  );

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  async function handleAgeConfirm() {
    const supabase = createClient();
    await supabase.auth.updateUser({
      data: { age_verified: true },
    });
    setAgeConfirmed(true);
  }

  return (
    <div className="bg-bg-primary min-h-screen py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-text-primary">My Account</h1>
          <button
            onClick={handleSignOut}
            className="rounded-lg border border-border-default px-4 py-2 text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors"
          >
            Sign Out
          </button>
        </div>

        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl border border-border-default p-6">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              Profile
            </h2>
            <dl className="space-y-3">
              <div className="flex justify-between text-sm">
                <dt className="text-text-muted">Email</dt>
                <dd className="font-medium text-text-primary">{user.email}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-text-muted">Member since</dt>
                <dd className="font-medium text-text-primary">
                  {new Date(user.created_at).toLocaleDateString(
                    region.locale
                  )}
                </dd>
              </div>
              <div className="flex justify-between text-sm items-center">
                <dt className="text-text-muted">
                  Age Verified ({region.legal.ageRequirement}+)
                </dt>
                <dd>
                  {ageConfirmed ? (
                    <span className="inline-flex items-center gap-1 text-brand-green text-sm font-medium">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Confirmed
                    </span>
                  ) : (
                    <button
                      onClick={handleAgeConfirm}
                      className="rounded-lg bg-brand-green px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-green-light transition-colors"
                    >
                      Confirm I am {region.legal.ageRequirement}+
                    </button>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          {/* Orders Card (placeholder) */}
          <div className="bg-white rounded-2xl border border-border-default p-6">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              Order History
            </h2>
            <div className="text-center py-8">
              <svg
                className="w-12 h-12 mx-auto text-text-muted/30 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p className="text-text-muted">No orders yet</p>
              <Link
                href="/shop"
                className="mt-3 inline-block text-sm text-brand-green font-medium hover:underline"
              >
                Browse products
              </Link>
            </div>
          </div>

          {/* Wishlist Card (placeholder) */}
          <div className="bg-white rounded-2xl border border-border-default p-6">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              Wishlist
            </h2>
            <div className="text-center py-8">
              <svg
                className="w-12 h-12 mx-auto text-text-muted/30 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <p className="text-text-muted">Your wishlist is empty</p>
              <Link
                href="/shop"
                className="mt-3 inline-block text-sm text-brand-green font-medium hover:underline"
              >
                Browse products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
