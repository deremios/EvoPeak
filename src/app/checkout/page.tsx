import { Metadata } from "next";
import { region } from "@/config";
import { CheckoutContent } from "@/components/checkout/checkout-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Checkout — ${region.brandName}`,
  description: "Secure EvoPeak checkout.",
  path: "/checkout",
  noIndex: true,
});

export default function CheckoutPage() {
  return <CheckoutContent />;
}
