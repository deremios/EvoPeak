import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { region } from "@/config";
import { AdminLayoutClient } from "@/components/admin/admin-layout-client";
import { getAdminLoginPath, isAdminUser } from "@/lib/auth/admin";
import { createClient } from "@/lib/supabase/server";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Admin — ${region.brandName}`,
  description: "EvoPeak administration panel.",
  path: "/admin",
  noIndex: true,
});

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminUser(user)) {
    redirect(getAdminLoginPath("/admin"));
  }

  return (
    <AdminLayoutClient userEmail={user.email ?? ""}>{children}</AdminLayoutClient>
  );
}
