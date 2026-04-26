import { Metadata } from "next";
import { region } from "@/config";
import { ConfirmationContent } from "@/components/checkout/confirmation-content";
import { Suspense } from "react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Order Confirmation — ${region.brandName}`,
  description: "EvoPeak order confirmation.",
  path: "/checkout/confirmation",
  noIndex: true,
});

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-bg-primary min-h-screen py-16 text-center text-text-muted">
          Loading order...
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
