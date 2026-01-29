import arcjet, { detectBot, shield, slidingWindow } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
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

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;

  // ✅ 1) Skip Arcjet + auth redirects for Next RSC/data fetches
  const isRscFetch = url.searchParams.has("_rsc");

  // ✅ 2) Skip Arcjet for Next internals too
  const isNextInternal = url.pathname.startsWith("/_next");

  if (!isRscFetch && !isNextInternal && serverEnv.ARCJET_KEY) {
    const decision = await aj.protect(req);
    if (decision.isDenied()) return new Response("Forbidden", { status: 403 });
  }

  // ✅ IMPORTANT: don't redirect RSC fetches
  if (!isRscFetch && !isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
