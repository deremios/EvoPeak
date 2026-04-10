"use client";

import { useState } from "react";

interface CoaModalProps {
  productName: string;
  sku: string;
}

export function CoaModal({ productName, sku }: CoaModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-brand-green text-brand-green px-4 py-2.5 text-sm font-medium hover:bg-brand-green hover:text-white transition-colors"
      >
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        View Certificate of Analysis
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coa-modal-title"
          onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-default">
              <div>
                <h3 id="coa-modal-title" className="text-lg font-bold text-text-primary">
                  Certificate of Analysis
                </h3>
                <p className="text-sm text-text-muted">{productName}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-text-muted hover:text-text-primary hover:bg-bg-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 space-y-4">
              {/* Test results */}
              <div className="space-y-3">
                <CoaRow
                  test="HPLC Purity Analysis"
                  result="≥ 99.1%"
                  status="pass"
                />
                <CoaRow
                  test="Mass Spectrometry (MS)"
                  result="Identity Confirmed"
                  status="pass"
                />
                <CoaRow
                  test="Endotoxin (LAL)"
                  result="< 1.0 EU/mg"
                  status="pass"
                />
                <CoaRow test="Appearance" result="White powder" status="pass" />
                <CoaRow test="Solubility" result="Clear solution" status="pass" />
              </div>

              <div className="rounded-lg bg-bg-primary border border-border-default p-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-text-muted">SKU</p>
                    <p className="font-medium text-text-primary">{sku}</p>
                  </div>
                  <div>
                    <p className="text-text-muted">Batch</p>
                    <p className="font-medium text-text-primary">
                      EP-{sku}-2026A
                    </p>
                  </div>
                  <div>
                    <p className="text-text-muted">Test Date</p>
                    <p className="font-medium text-text-primary">March 2026</p>
                  </div>
                  <div>
                    <p className="text-text-muted">Lab</p>
                    <p className="font-medium text-text-primary">
                      Independent 3rd Party
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-text-muted leading-relaxed">
                Full COA PDF with chromatograms available for download.
                Third-party laboratory testing performed independently of the
                manufacturer.
              </p>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border-default bg-bg-primary flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-border-default bg-white px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors">
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CoaRow({
  test,
  result,
  status,
}: {
  test: string;
  result: string;
  status: "pass" | "fail";
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white border border-border-default px-4 py-3">
      <div className="flex items-center gap-2">
        <svg
          className={`w-4 h-4 flex-shrink-0 ${
            status === "pass" ? "text-green-600" : "text-red-500"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          {status === "pass" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
        <span className="text-sm text-text-primary">{test}</span>
      </div>
      <span
        className={`text-sm font-semibold ${
          status === "pass" ? "text-green-700" : "text-red-600"
        }`}
      >
        {result}
      </span>
    </div>
  );
}
