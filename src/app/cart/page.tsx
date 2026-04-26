import { Metadata } from "next";
import { region } from "@/config";
import { CartContent } from "@/components/cart/cart-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Cart — ${region.brandName}`,
  description: "Review your EvoPeak cart.",
  path: "/cart",
  noIndex: true,
});

export default function CartPage() {
  return <CartContent />;
}
