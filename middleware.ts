import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LANGUAGES = new Set(["en", "ru"]);

const getLanguageFromPath = (pathname: string): "en" | "ru" | null => {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  if (firstSegment === "en" || firstSegment === "ru") {
    return firstSegment;
  }
  return null;
};

const addLanguagePrefix = (pathname: string, language: "en" | "ru") => {
  const withoutPrefix = pathname.replace(/^\/(en|ru)(?=\/|$)/, "") || "/";
  return `/${language}${withoutPrefix === "/" ? "" : withoutPrefix}`;
};

export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const langQuery = nextUrl.searchParams.get("lang");

  if (langQuery && SUPPORTED_LANGUAGES.has(langQuery)) {
    const url = nextUrl.clone();
    url.pathname = addLanguagePrefix(nextUrl.pathname, langQuery as "en" | "ru");
    url.searchParams.delete("lang");

    const response = NextResponse.redirect(url, 301);
    response.cookies.set("preferred-language", langQuery, { maxAge: 60 * 60 * 24 * 365, path: "/", sameSite: "lax" });
    response.headers.set("x-robots-tag", "index, follow");
    return response;
  }

  const pathLanguage = getLanguageFromPath(nextUrl.pathname);
  const cookieLanguage = cookies.get("preferred-language")?.value;
  const resolvedLanguage = pathLanguage ?? (cookieLanguage === "ru" || cookieLanguage === "en" ? cookieLanguage : "en");

  const response = NextResponse.next();
  response.cookies.set("preferred-language", resolvedLanguage, { maxAge: 60 * 60 * 24 * 365, path: "/", sameSite: "lax" });
  response.headers.set("x-robots-tag", "index, follow");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
