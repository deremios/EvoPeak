import type { User } from "@supabase/supabase-js";

function getAdminEmails(): Set<string> {
  const raw = process.env.ADMIN_EMAILS ?? "";
  return new Set(
    raw
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean)
  );
}

export function isAdminUser(user: User | null | undefined): boolean {
  if (!user?.email) return false;

  if (user.app_metadata?.role === "admin") return true;

  const allowlist = getAdminEmails();
  if (allowlist.size === 0) return false;

  return allowlist.has(user.email.toLowerCase());
}

export function sanitizeRedirectPath(path: string | null | undefined): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return "/account";
  }

  return path;
}

export function getAdminLoginPath(nextPath = "/admin"): string {
  return `/auth/login?next=${encodeURIComponent(nextPath)}`;
}
