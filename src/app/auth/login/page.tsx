import { Metadata } from "next";
import { region } from "@/config";
import { LoginForm } from "@/components/auth/login-form";
import { sanitizeRedirectPath } from "@/lib/auth/admin";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Sign In — ${region.brandName}`,
  description: `Sign in to your ${region.brandName} account.`,
  path: "/auth/login",
  noIndex: true,
});

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const { next, error } = await searchParams;
  const redirectPath = sanitizeRedirectPath(next);
  const isAdminLogin = redirectPath.startsWith("/admin");

  return (
    <div className="bg-bg-primary min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary">
            {isAdminLogin ? "Admin Sign In" : "Welcome"}
          </h1>
          <p className="mt-2 text-text-secondary">
            {isAdminLogin
              ? "Sign in with an authorized admin account"
              : `Sign in to your ${region.brandName} account`}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8 shadow-sm">
          {error === "unauthorized" && (
            <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              This account does not have admin access.
            </p>
          )}
          {error === "auth_failed" && (
            <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              Sign in failed. Please try again.
            </p>
          )}
          <LoginForm nextPath={redirectPath} />
        </div>

        {!isAdminLogin && (
          <p className="mt-6 text-center text-xs text-text-muted leading-relaxed max-w-sm mx-auto">
            By signing in, you confirm you are {region.legal.ageRequirement}+
            and agree to our{" "}
            <a href="/terms" className="text-brand-green hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-brand-green hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
