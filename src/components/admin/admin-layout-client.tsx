"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" },
  { href: "/admin/orders", label: "Orders", icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" },
  { href: "/admin/products", label: "Products", icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" },
  { href: "/admin/customers", label: "Customers", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { href: "/admin/blog", label: "Blog", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
];

export function AdminLayoutClient({
  children,
  userEmail,
}: {
  children: React.ReactNode;
  userEmail: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login?next=/admin");
    router.refresh();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex">
        <aside className="hidden lg:flex lg:w-64 flex-col fixed inset-y-0 top-16 border-r border-border-default bg-white z-30">
          <div className="px-4 py-6">
            <h2 className="text-xs font-bold text-text-muted uppercase tracking-wider px-3 mb-4">
              Admin Panel
            </h2>
            <nav className="space-y-1">
              {adminNav.map((item) => {
                const active =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "bg-brand-green text-white"
                        : "text-text-secondary hover:bg-brand-green/5 hover:text-brand-green"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 border-t border-border-default pt-4 px-3">
              <p className="text-xs text-text-muted truncate mb-3">{userEmail}</p>
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full rounded-lg border border-border-default px-3 py-2 text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </aside>

        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border-b border-border-default z-30 px-4 py-2 flex gap-2 overflow-x-auto">
          {adminNav.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  active
                    ? "bg-brand-green text-white"
                    : "bg-gray-100 text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <main className="flex-1 lg:ml-64 pt-12 lg:pt-0">
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
