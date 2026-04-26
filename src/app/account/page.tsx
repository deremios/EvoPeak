import { Metadata } from "next";
import { redirect } from "next/navigation";
import { region } from "@/config";
import { createClient } from "@/lib/supabase/server";
import { AccountContent } from "@/components/auth/account-content";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `My Account — ${region.brandName}`,
  description: "Manage your EvoPeak account.",
  path: "/account",
  noIndex: true,
});

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return <AccountContent user={user} />;
}
