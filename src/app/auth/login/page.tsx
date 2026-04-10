import { Metadata } from "next";
import { region } from "@/config";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: `Sign In — ${region.brandName}`,
};

export default function LoginPage() {
  return (
    <div className="bg-bg-primary min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary">Welcome</h1>
          <p className="mt-2 text-text-secondary">
            Sign in to your {region.brandName} account
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-border-default p-6 sm:p-8 shadow-sm">
          <LoginForm />
        </div>

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
      </div>
    </div>
  );
}
