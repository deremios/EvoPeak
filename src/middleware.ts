import { NextResponse, type NextRequest } from "next/server";
import { getAllLandingSlugs } from "@/data/peptide-landings";
import { updateSession } from "@/lib/supabase/middleware";

const landingRewrites = new Map(
  getAllLandingSlugs().map((slug) => [`/${slug}-australia`, `/peptides/${slug}`])
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
  const rewritePath = landingRewrites.get(request.nextUrl.pathname);

  const response = rewritePath
    ? NextResponse.rewrite(new URL(rewritePath, request.url))
    : await updateSession(request);

  return applySecurityHeaders(response);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
