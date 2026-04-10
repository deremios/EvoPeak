import { Metadata } from "next";
import { redirect } from "next/navigation";
import { region } from "@/config";
import { createClient } from "@/lib/supabase/server";
import { AccountContent } from "@/components/auth/account-content";

export const metadata: Metadata = {
  title: `My Account — ${region.brandName}`,
};

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
