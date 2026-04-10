import { Metadata } from "next";
import { region } from "@/config";
import { CheckoutContent } from "@/components/checkout/checkout-content";

export const metadata: Metadata = {
  title: `Checkout — ${region.brandName}`,
};

export default function CheckoutPage() {
  return <CheckoutContent />;
}
