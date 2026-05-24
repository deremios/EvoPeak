import type { Metadata } from "next";
import { region } from "@/config";
import { AdminLayoutClient } from "@/components/admin/admin-layout-client";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Admin — ${region.brandName}`,
  description: "EvoPeak administration panel.",
  path: "/admin",
  noIndex: true,
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
