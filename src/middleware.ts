// middleware.ts
import arcjet, { detectBot, shield, slidingWindow } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { serverEnv } from "./data/env/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/sso-callback(.*)",
  "/onboarding(.*)",
  "/api/webhooks/clerk(.*)",
]);

const aj = arcjet({
  key: serverEnv.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:MONITOR", "CATEGORY:PREVIEW"],
    }),
    slidingWindow({ mode: "LIVE", interval: "1m", max: 100 }),
  ],
});

function isStaticAsset(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    /\.(?:html?|css|js(?!on)|jpe?g|png|gif|webp|svg|ico|ttf|woff2?|map)$/.test(
      pathname
    )
  );
}

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;

  // ✅ App Router internal requests (RSC + prefetch)
  const isRscFetch =
    req.headers.get("RSC") === "1" ||
    req.headers.get("next-router-prefetch") === "1" ||
    url.searchParams.has("_rsc");

  // ✅ Never redirect/protect these internal requests (prevents /app?_rsc=... loops)
  if (isRscFetch || isStaticAsset(url.pathname)) {
    return NextResponse.next();
  }

  // ✅ Arcjet only for "real" requests (not internal)
  if (serverEnv.ARCJET_KEY) {
    const decision = await aj.protect(req);
    if (decision.isDenied()) {
      return new Response("Forbidden", { status: 403 });
    }
  }

  // ✅ Protect non-public routes (IMPORTANT: must RETURN)
  if (!isPublicRoute(req)) {
    // auth.protect() can return a Response (redirect/forbidden) or a SignedInAuthObject.
    // Await and return any Response to satisfy NextMiddleware return types; otherwise continue.
    const protectionResult = await auth.protect();
    if (protectionResult instanceof Response) {
      return protectionResult;
    }
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Match all routes except Next internals/static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
