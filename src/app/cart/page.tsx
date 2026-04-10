import { Metadata } from "next";
import { region } from "@/config";
import { CartContent } from "@/components/cart/cart-content";

export const metadata: Metadata = {
  title: `Cart — ${region.brandName}`,
};

export default function CartPage() {
  return <CartContent />;
}
