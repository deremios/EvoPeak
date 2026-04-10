"use client";

import { useState, useEffect } from "react";
import { region } from "@/config";

const STORAGE_KEY = "evopeak_age_verified";

export function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem(STORAGE_KEY);
    if (!verified) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  function handleConfirm() {
    localStorage.setItem(STORAGE_KEY, "true");
    setShow(false);
    document.body.style.overflow = "";
  }

  function handleDeny() {
    window.location.href = "https://www.google.com";
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/95 backdrop-blur-md px-4" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-green/10 flex items-center justify-center">
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
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>

        <h2 id="age-gate-title" className="text-2xl font-bold text-text-primary mb-2">
          Age Verification
        </h2>

        <p className="text-text-secondary text-sm mb-6 leading-relaxed">
          You must be {region.legal.ageRequirement}+ to access{" "}
          {region.brandName}. All products are for laboratory research purposes
          only.
        </p>

        <div className="space-y-3">
          <button
            onClick={handleConfirm}
            className="w-full rounded-lg bg-brand-green py-3 px-4 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
          >
            I am {region.legal.ageRequirement}+ and agree to research-only use
          </button>
          <button
            onClick={handleDeny}
            className="w-full rounded-lg border border-border-default py-3 px-4 text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors"
          >
            I am under {region.legal.ageRequirement}
          </button>
        </div>

        <p className="mt-6 text-xs text-text-muted leading-relaxed">
          {region.legal.disclaimer}
        </p>
      </div>
    </div>
  );
}
