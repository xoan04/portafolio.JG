import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

function getPreferredLocale(request: NextRequest): string {
  const accept = request.headers.get("accept-language");
  if (!accept) return defaultLocale;
  for (const part of accept.split(",")) {
    const code = part.trim().split(";")[0]?.toLowerCase().slice(0, 2);
    if (code && isLocale(code)) return code;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
