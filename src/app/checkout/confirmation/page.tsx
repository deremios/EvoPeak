import { Metadata } from "next";
import { region } from "@/config";
import { ConfirmationContent } from "@/components/checkout/confirmation-content";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Order Confirmation — ${region.brandName}`,
};

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
