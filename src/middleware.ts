import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/",
  "/api/webhooks(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const isRsc = req.headers.get("rsc") === "1";
  const path = req.nextUrl.pathname + req.nextUrl.search;
  const { userId, sessionId } = await auth();
  console.log("middleware: auth", {
    path,
    isRsc,
    userId,
    sessionId,
  });

  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
