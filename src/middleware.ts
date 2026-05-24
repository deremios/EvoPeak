import { NextResponse, type NextRequest } from "next/server";
import { getAllLandingSlugs } from "@/data/peptide-landings";
import { isAdminUser } from "@/lib/auth/admin";
import { getAdminLoginPath } from "@/lib/auth/admin";
import { updateSession } from "@/lib/supabase/middleware";

const landingSlugs = getAllLandingSlugs();
const landingSlugSet = new Set(landingSlugs);

const landingRewrites = new Map(
  landingSlugs.map((slug) => [`/${slug}-australia`, `/peptides/${slug}`])
);

function applySecurityHeaders(response: NextResponse) {
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  return response;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const peptideDirectMatch = pathname.match(/^\/peptides\/([^/]+)$/);
  if (peptideDirectMatch && landingSlugSet.has(peptideDirectMatch[1])) {
    return applySecurityHeaders(
      NextResponse.redirect(
        new URL(`/${peptideDirectMatch[1]}-australia`, request.url),
        301
      )
    );
  }

  const rewritePath = landingRewrites.get(pathname);

  if (rewritePath) {
    return applySecurityHeaders(
      NextResponse.rewrite(new URL(rewritePath, request.url))
    );
  }

  const { response, user } = await updateSession(request);

  if (pathname.startsWith("/admin")) {
    if (!user || !isAdminUser(user)) {
      const loginUrl = new URL(getAdminLoginPath(pathname), request.url);
      if (user) {
        loginUrl.searchParams.set("error", "unauthorized");
      }
      return applySecurityHeaders(NextResponse.redirect(loginUrl));
    }
  }

  return applySecurityHeaders(response);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
