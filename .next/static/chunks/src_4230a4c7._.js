(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/env/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clientEnv": ()=>clientEnv
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
;
const clientEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnv"])({
    client: {
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        NEXT_PUBLIC_HUME_CONFIG_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: ("TURBOPACK compile-time value", "/sign-in"),
        NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: ("TURBOPACK compile-time value", "/app"),
        NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: ("TURBOPACK compile-time value", "/onboarding"),
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: ("TURBOPACK compile-time value", "pk_test_c21vb3RoLWJsdWVqYXktMzQuY2xlcmsuYWNjb3VudHMuZGV2JA"),
        NEXT_PUBLIC_HUME_CONFIG_ID: ("TURBOPACK compile-time value", "cd325e98-174b-4727-b3ec-eb9ab69cccdc")
    },
    emptyStringAsUndefined: true
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/interviews/data:daf2d6 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40518ecc086cb216276b0ba01fb1560dcd90836634":"createInterview"},"src/features/interviews/action.ts",""] */ __turbopack_context__.s({
    "createInterview": ()=>createInterview
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createInterview = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40518ecc086cb216276b0ba01fb1560dcd90836634", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createInterview"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSBcIkAvc2VydmljZXMvbGliL2dldGN1cnJlbnRVc2VyXCJcbmltcG9ydCB7IGNhY2hlVGFnIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvdXNlLWNhY2hlL2NhY2hlLXRhZ1wiXG5pbXBvcnQgeyBnZXRKb2JJbmZvSWRUYWcgfSBmcm9tIFwiLi4vam9iaW5mb3MvZGJDYWNoZVwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2RyaXp6bGUvZGJcIlxuaW1wb3J0IHsgYW5kLCBlcSB9IGZyb20gXCJkcml6emxlLW9ybVwiXG5pbXBvcnQgeyBJbnRlcnZpZXdzVGFibGUsIEpvYkluZm9UYWJsZSB9IGZyb20gXCJAL2RyaXp6bGUvc2NoZW1hXCJcbmltcG9ydCB7IGluc2VydEludGVydmlldywgdXBkYXRlSW50ZXJ2aWV3IGFzIHVwZGF0ZUludGVydmlld0RiIH0gZnJvbSBcIi4vZGJcIlxuaW1wb3J0IHsgZ2V0SW50ZXJ2aWV3SWRUYWcgfSBmcm9tIFwiLi9kYkNhY2hlXCJcbmltcG9ydCB7IGNhbkNyZWF0ZUludGVydmlldyB9IGZyb20gXCIuL3Blcm1pc3Npb25cIlxuaW1wb3J0IHsgUExBTl9MSU1JVF9NRVNTQUdFLCBSQVRFX0xJTUlUX01FU1NBR0UgfSBmcm9tIFwiQC9saWIvZXJyb3JNZXNzYWdlc1wiXG5pbXBvcnQgeyBzZXJ2ZXJFbnYgfSBmcm9tIFwiQC9kYXRhL2Vudi9zZXJ2ZXJcIlxuaW1wb3J0IGFyY2pldCwgeyB0b2tlbkJ1Y2tldCwgcmVxdWVzdCB9IGZyb20gXCJAYXJjamV0L25leHRcIlxuaW1wb3J0IHsgZ2VuZXJhdGVBaUludGVydmlld0ZlZWRiYWNrIH0gZnJvbSBcIkAvc2VydmljZXMvYWkvaW50ZXJ2aWV3c1wiXG5cbmNvbnN0IGFqID0gYXJjamV0KHtcbiAgY2hhcmFjdGVyaXN0aWNzOiBbXCJ1c2VySWRcIl0sXG4gIGtleTogc2VydmVyRW52LkFSQ0pFVF9LRVksXG4gIHJ1bGVzOiBbXG4gICAgdG9rZW5CdWNrZXQoe1xuICAgICAgY2FwYWNpdHk6IDIwLFxuICAgICAgcmVmaWxsUmF0ZTogNCxcbiAgICAgIGludGVydmFsOiBcIjFkXCIsXG4gICAgICBtb2RlOiBcIkxJVkVcIixcbiAgICB9KSxcbiAgXSxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbnRlcnZpZXcoe1xuICBqb2JJbmZvSWQsXG59OiB7XG4gIGpvYkluZm9JZDogc3RyaW5nXG59KTogUHJvbWlzZTx7IGVycm9yOiB0cnVlOyBtZXNzYWdlOiBzdHJpbmcgfSB8IHsgZXJyb3I6IGZhbHNlOyBpZDogc3RyaW5nIH0+IHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKClcbiAgaWYgKHVzZXJJZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoaXNcIixcbiAgICB9XG4gIH1cblxuICBpZiAoIShhd2FpdCBjYW5DcmVhdGVJbnRlcnZpZXcoKSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBQTEFOX0xJTUlUX01FU1NBR0UsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVjaXNpb24gPSBhd2FpdCBhai5wcm90ZWN0KGF3YWl0IHJlcXVlc3QoKSwge1xuICAgIHVzZXJJZCxcbiAgICByZXF1ZXN0ZWQ6IDEsXG4gIH0pXG5cbiAgaWYgKGRlY2lzaW9uLmlzRGVuaWVkKCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBSQVRFX0xJTUlUX01FU1NBR0UsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgam9iSW5mbyA9IGF3YWl0IGdldEpvYkluZm8oam9iSW5mb0lkLCB1c2VySWQpXG4gIGlmIChqb2JJbmZvID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gZG8gdGhpc1wiLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGludGVydmlldyA9IGF3YWl0IGluc2VydEludGVydmlldyh7XG4gICAgICBqb2JJbmZvSWQsIGR1cmF0aW9uOiBcIjAwOjAwOjAwXCIsXG4gICAgICBodW1lQ2hhdElkOiBcIlwiXG4gIH0pXG5cbiAgcmV0dXJuIHsgZXJyb3I6IGZhbHNlLCBpZDogaW50ZXJ2aWV3LmlkIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludGVydmlldyhcbiAgaWQ6IHN0cmluZyxcbiAgZGF0YToge1xuICAgIGh1bWVDaGF0SWQ/OiBzdHJpbmdcbiAgICBkdXJhdGlvbj86IHN0cmluZ1xuICB9XG4pIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKClcbiAgaWYgKHVzZXJJZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoaXNcIixcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBnZXRJbnRlcnZpZXcoaWQsIHVzZXJJZClcbiAgaWYgKGludGVydmlldyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoaXNcIixcbiAgICB9XG4gIH1cblxuICBhd2FpdCB1cGRhdGVJbnRlcnZpZXdEYihpZCwgZGF0YSlcblxuICByZXR1cm4geyBlcnJvcjogZmFsc2UgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnRlcnZpZXdGZWVkYmFjayhpbnRlcnZpZXdJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHsgdXNlcklkLCB1c2VyIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlcih7IGFsbERhdGE6IHRydWUgfSlcbiAgaWYgKHVzZXJJZCA9PSBudWxsIHx8IHVzZXIgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBkbyB0aGlzXCIsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW50ZXJ2aWV3ID0gYXdhaXQgZ2V0SW50ZXJ2aWV3KGludGVydmlld0lkLCB1c2VySWQpXG4gIGlmIChpbnRlcnZpZXcgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBkbyB0aGlzXCIsXG4gICAgfVxuICB9XG5cbiAgaWYgKGludGVydmlldy5odW1lQ2hhdElkID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIkludGVydmlldyBoYXMgbm90IGJlZW4gY29tcGxldGVkIHlldFwiLFxuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnN0IGZlZWRiYWNrID0gYXdhaXQgZ2VuZXJhdGVBaUludGVydmlld0ZlZWRiYWNrKHtcbiAgLy8gfSlcblxuICAvLyBpZiAoZmVlZGJhY2sgPT0gbnVsbCkge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBlcnJvcjogdHJ1ZSxcbiAgLy8gICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIGZlZWRiYWNrXCIsXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gYXdhaXQgdXBkYXRlSW50ZXJ2aWV3RGIoaW50ZXJ2aWV3SWQsIHsgZmVlZGJhY2sgfSlcblxuICByZXR1cm4geyBlcnJvcjogZmFsc2UgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRKb2JJbmZvKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG4gIFwidXNlIGNhY2hlXCJcbiAgY2FjaGVUYWcoZ2V0Sm9iSW5mb0lkVGFnKGlkKSlcblxuICByZXR1cm4gZGIucXVlcnkuSm9iSW5mb1RhYmxlLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IGFuZChlcShKb2JJbmZvVGFibGUuaWQsIGlkKSwgZXEoSm9iSW5mb1RhYmxlLnVzZXJJZCwgdXNlcklkKSksXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEludGVydmlldyhpZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICBcInVzZSBjYWNoZVwiXG4gIGNhY2hlVGFnKGdldEludGVydmlld0lkVGFnKGlkKSlcblxuICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBkYi5xdWVyeS5JbnRlcnZpZXdzVGFibGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogZXEoSW50ZXJ2aWV3c1RhYmxlLmlkLCBpZCksXG4gICAgd2l0aDoge1xuICAgICAgam9iSW5mbzoge1xuICAgICAgICBjb2x1bW5zOiB7XG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgdXNlcklkOiB0cnVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0cnVlLFxuICAgICAgICAgIHRpdGxlOiB0cnVlLFxuICAgICAgICAgIGV4cGVyaWVuY2VMZXZlbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICBpZiAoaW50ZXJ2aWV3ID09IG51bGwpIHJldHVybiBudWxsXG5cbiAgY2FjaGVUYWcoZ2V0Sm9iSW5mb0lkVGFnKGludGVydmlldy5qb2JJbmZvLmlkKSlcbiAgaWYgKGludGVydmlldy5qb2JJbmZvLnVzZXJJZCAhPT0gdXNlcklkKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBpbnRlcnZpZXdcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFNBNkJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/interviews/data:b90733 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"608e2e38e2fc1cc599c2c98081aa0fc23e7e5ee12c":"updateInterview"},"src/features/interviews/action.ts",""] */ __turbopack_context__.s({
    "updateInterview": ()=>updateInterview
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateInterview = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("608e2e38e2fc1cc599c2c98081aa0fc23e7e5ee12c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateInterview"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSBcIkAvc2VydmljZXMvbGliL2dldGN1cnJlbnRVc2VyXCJcbmltcG9ydCB7IGNhY2hlVGFnIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvdXNlLWNhY2hlL2NhY2hlLXRhZ1wiXG5pbXBvcnQgeyBnZXRKb2JJbmZvSWRUYWcgfSBmcm9tIFwiLi4vam9iaW5mb3MvZGJDYWNoZVwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2RyaXp6bGUvZGJcIlxuaW1wb3J0IHsgYW5kLCBlcSB9IGZyb20gXCJkcml6emxlLW9ybVwiXG5pbXBvcnQgeyBJbnRlcnZpZXdzVGFibGUsIEpvYkluZm9UYWJsZSB9IGZyb20gXCJAL2RyaXp6bGUvc2NoZW1hXCJcbmltcG9ydCB7IGluc2VydEludGVydmlldywgdXBkYXRlSW50ZXJ2aWV3IGFzIHVwZGF0ZUludGVydmlld0RiIH0gZnJvbSBcIi4vZGJcIlxuaW1wb3J0IHsgZ2V0SW50ZXJ2aWV3SWRUYWcgfSBmcm9tIFwiLi9kYkNhY2hlXCJcbmltcG9ydCB7IGNhbkNyZWF0ZUludGVydmlldyB9IGZyb20gXCIuL3Blcm1pc3Npb25cIlxuaW1wb3J0IHsgUExBTl9MSU1JVF9NRVNTQUdFLCBSQVRFX0xJTUlUX01FU1NBR0UgfSBmcm9tIFwiQC9saWIvZXJyb3JNZXNzYWdlc1wiXG5pbXBvcnQgeyBzZXJ2ZXJFbnYgfSBmcm9tIFwiQC9kYXRhL2Vudi9zZXJ2ZXJcIlxuaW1wb3J0IGFyY2pldCwgeyB0b2tlbkJ1Y2tldCwgcmVxdWVzdCB9IGZyb20gXCJAYXJjamV0L25leHRcIlxuaW1wb3J0IHsgZ2VuZXJhdGVBaUludGVydmlld0ZlZWRiYWNrIH0gZnJvbSBcIkAvc2VydmljZXMvYWkvaW50ZXJ2aWV3c1wiXG5cbmNvbnN0IGFqID0gYXJjamV0KHtcbiAgY2hhcmFjdGVyaXN0aWNzOiBbXCJ1c2VySWRcIl0sXG4gIGtleTogc2VydmVyRW52LkFSQ0pFVF9LRVksXG4gIHJ1bGVzOiBbXG4gICAgdG9rZW5CdWNrZXQoe1xuICAgICAgY2FwYWNpdHk6IDIwLFxuICAgICAgcmVmaWxsUmF0ZTogNCxcbiAgICAgIGludGVydmFsOiBcIjFkXCIsXG4gICAgICBtb2RlOiBcIkxJVkVcIixcbiAgICB9KSxcbiAgXSxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbnRlcnZpZXcoe1xuICBqb2JJbmZvSWQsXG59OiB7XG4gIGpvYkluZm9JZDogc3RyaW5nXG59KTogUHJvbWlzZTx7IGVycm9yOiB0cnVlOyBtZXNzYWdlOiBzdHJpbmcgfSB8IHsgZXJyb3I6IGZhbHNlOyBpZDogc3RyaW5nIH0+IHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKClcbiAgaWYgKHVzZXJJZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoaXNcIixcbiAgICB9XG4gIH1cblxuICBpZiAoIShhd2FpdCBjYW5DcmVhdGVJbnRlcnZpZXcoKSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBQTEFOX0xJTUlUX01FU1NBR0UsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVjaXNpb24gPSBhd2FpdCBhai5wcm90ZWN0KGF3YWl0IHJlcXVlc3QoKSwge1xuICAgIHVzZXJJZCxcbiAgICByZXF1ZXN0ZWQ6IDEsXG4gIH0pXG5cbiAgaWYgKGRlY2lzaW9uLmlzRGVuaWVkKCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBSQVRFX0xJTUlUX01FU1NBR0UsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgam9iSW5mbyA9IGF3YWl0IGdldEpvYkluZm8oam9iSW5mb0lkLCB1c2VySWQpXG4gIGlmIChqb2JJbmZvID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gZG8gdGhpc1wiLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGludGVydmlldyA9IGF3YWl0IGluc2VydEludGVydmlldyh7XG4gICAgICBqb2JJbmZvSWQsIGR1cmF0aW9uOiBcIjAwOjAwOjAwXCIsXG4gICAgICBodW1lQ2hhdElkOiBcIlwiXG4gIH0pXG5cbiAgcmV0dXJuIHsgZXJyb3I6IGZhbHNlLCBpZDogaW50ZXJ2aWV3LmlkIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludGVydmlldyhcbiAgaWQ6IHN0cmluZyxcbiAgZGF0YToge1xuICAgIGh1bWVDaGF0SWQ/OiBzdHJpbmdcbiAgICBkdXJhdGlvbj86IHN0cmluZ1xuICB9XG4pIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKClcbiAgaWYgKHVzZXJJZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoaXNcIixcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBnZXRJbnRlcnZpZXcoaWQsIHVzZXJJZClcbiAgaWYgKGludGVydmlldyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoaXNcIixcbiAgICB9XG4gIH1cblxuICBhd2FpdCB1cGRhdGVJbnRlcnZpZXdEYihpZCwgZGF0YSlcblxuICByZXR1cm4geyBlcnJvcjogZmFsc2UgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnRlcnZpZXdGZWVkYmFjayhpbnRlcnZpZXdJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHsgdXNlcklkLCB1c2VyIH0gPSBhd2FpdCBnZXRDdXJyZW50VXNlcih7IGFsbERhdGE6IHRydWUgfSlcbiAgaWYgKHVzZXJJZCA9PSBudWxsIHx8IHVzZXIgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBkbyB0aGlzXCIsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW50ZXJ2aWV3ID0gYXdhaXQgZ2V0SW50ZXJ2aWV3KGludGVydmlld0lkLCB1c2VySWQpXG4gIGlmIChpbnRlcnZpZXcgPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBkbyB0aGlzXCIsXG4gICAgfVxuICB9XG5cbiAgaWYgKGludGVydmlldy5odW1lQ2hhdElkID09IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIkludGVydmlldyBoYXMgbm90IGJlZW4gY29tcGxldGVkIHlldFwiLFxuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnN0IGZlZWRiYWNrID0gYXdhaXQgZ2VuZXJhdGVBaUludGVydmlld0ZlZWRiYWNrKHtcbiAgLy8gfSlcblxuICAvLyBpZiAoZmVlZGJhY2sgPT0gbnVsbCkge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBlcnJvcjogdHJ1ZSxcbiAgLy8gICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIGZlZWRiYWNrXCIsXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gYXdhaXQgdXBkYXRlSW50ZXJ2aWV3RGIoaW50ZXJ2aWV3SWQsIHsgZmVlZGJhY2sgfSlcblxuICByZXR1cm4geyBlcnJvcjogZmFsc2UgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRKb2JJbmZvKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG4gIFwidXNlIGNhY2hlXCJcbiAgY2FjaGVUYWcoZ2V0Sm9iSW5mb0lkVGFnKGlkKSlcblxuICByZXR1cm4gZGIucXVlcnkuSm9iSW5mb1RhYmxlLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IGFuZChlcShKb2JJbmZvVGFibGUuaWQsIGlkKSwgZXEoSm9iSW5mb1RhYmxlLnVzZXJJZCwgdXNlcklkKSksXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEludGVydmlldyhpZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuICBcInVzZSBjYWNoZVwiXG4gIGNhY2hlVGFnKGdldEludGVydmlld0lkVGFnKGlkKSlcblxuICBjb25zdCBpbnRlcnZpZXcgPSBhd2FpdCBkYi5xdWVyeS5JbnRlcnZpZXdzVGFibGUuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogZXEoSW50ZXJ2aWV3c1RhYmxlLmlkLCBpZCksXG4gICAgd2l0aDoge1xuICAgICAgam9iSW5mbzoge1xuICAgICAgICBjb2x1bW5zOiB7XG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgdXNlcklkOiB0cnVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0cnVlLFxuICAgICAgICAgIHRpdGxlOiB0cnVlLFxuICAgICAgICAgIGV4cGVyaWVuY2VMZXZlbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICBpZiAoaW50ZXJ2aWV3ID09IG51bGwpIHJldHVybiBudWxsXG5cbiAgY2FjaGVUYWcoZ2V0Sm9iSW5mb0lkVGFnKGludGVydmlldy5qb2JJbmZvLmlkKSlcbiAgaWYgKGludGVydmlldy5qb2JJbmZvLnVzZXJJZCAhPT0gdXNlcklkKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBpbnRlcnZpZXdcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFNBNkVzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/errorMessages.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PLAN_LIMIT_MESSAGE": ()=>PLAN_LIMIT_MESSAGE,
    "RATE_LIMIT_MESSAGE": ()=>RATE_LIMIT_MESSAGE
});
const PLAN_LIMIT_MESSAGE = "PLAN_LIMIT";
const RATE_LIMIT_MESSAGE = "RATE_LIMIT";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/errorToast.tsx [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "errorToast": ()=>errorToast
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errorMessages.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function errorToast(message) {
    if (message === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAN_LIMIT_MESSAGE"]) {
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("You have reached your plan limit.", {
            action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                asChild: true,
                onClick: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/app/upgrade",
                    children: "Upgrade"
                }, void 0, false, {
                    fileName: "[project]/src/lib/errorToast.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/lib/errorToast.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        });
        return;
    }
    if (message === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RATE_LIMIT_MESSAGE"]) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Woah! Slow down.", {
            description: "You are making too many requests. Please try again later."
        });
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/errorToast.tsx [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errorMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/errorToast.tsx [app-client] (ecmascript) <locals>");
}),
"[project]/src/services/hume/components/CondensedMessages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CondensedMessages": ()=>CondensedMessages
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$users$2f$components$2f$UserAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/users/components/UserAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuitIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuitIcon>");
;
;
;
;
function CondensedMessages(param) {
    let { messages, user, className, maxFft = 0 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-4 w-full", className),
        children: messages.map((message, index)=>{
            const shouldAnimate = index === messages.length - 1 && maxFft > 0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-5 border pl-4 pr-6 py-4 rounded max-w-3/4", message.isUser ? "self-end" : "self-start"),
                children: [
                    message.isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$users$2f$components$2f$UserAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAvatar"], {
                        user: user,
                        className: "size-6 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/services/hume/components/CondensedMessages.tsx",
                        lineNumber: 30,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 border-muted border-4 rounded-full", shouldAnimate ? "animate-ping" : "hidden")
                            }, void 0, false, {
                                fileName: "[project]/src/services/hume/components/CondensedMessages.tsx",
                                lineNumber: 33,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuitIcon$3e$__["BrainCircuitIcon"], {
                                className: "size-6 flex-shrink-0 relative",
                                style: shouldAnimate ? {
                                    scale: maxFft / 8 + 1
                                } : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/services/hume/components/CondensedMessages.tsx",
                                lineNumber: 39,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/services/hume/components/CondensedMessages.tsx",
                        lineNumber: 32,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: message.content.map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: text
                            }, i, false, {
                                fileName: "[project]/src/services/hume/components/CondensedMessages.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/services/hume/components/CondensedMessages.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/services/hume/components/CondensedMessages.tsx",
                lineNumber: 22,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/services/hume/components/CondensedMessages.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = CondensedMessages;
var _c;
__turbopack_context__.k.register(_c, "CondensedMessages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/hume/lib/condensedChat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "condenseChatMessages": ()=>condenseChatMessages
});
function condenseChatMessages(messages) {
    return messages.reduce((acc, message)=>{
        var _getChatEventData;
        const data = (_getChatEventData = getChatEventData(message)) !== null && _getChatEventData !== void 0 ? _getChatEventData : getJsonMessageData(message);
        if (data == null || data.content == null) {
            return acc;
        }
        const lastMessage = acc.at(-1);
        if (lastMessage == null) {
            acc.push({
                isUser: data.isUser,
                content: [
                    data.content
                ]
            });
            return acc;
        }
        if (lastMessage.isUser === data.isUser) {
            lastMessage.content.push(data.content);
        } else {
            acc.push({
                isUser: data.isUser,
                content: [
                    data.content
                ]
            });
        }
        return acc;
    }, []);
}
function getJsonMessageData(message) {
    if (message.type !== "user_message" && message.type !== "assistant_message") {
        return null;
    }
    return {
        isUser: message.type === "user_message",
        content: message.message.content
    };
}
function getChatEventData(message) {
    if (message.type !== "USER_MESSAGE" && message.type !== "AGENT_MESSAGE") {
        return null;
    }
    return {
        isUser: message.type === "USER_MESSAGE",
        content: message.messageText
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StartCall": ()=>StartCall
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/env/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$data$3a$daf2d6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/features/interviews/data:daf2d6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$data$3a$b90733__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/features/interviews/data:b90733 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/lib/errorToast.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/errorToast.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hume$2f$components$2f$CondensedMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hume/components/CondensedMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hume$2f$lib$2f$condensedChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hume/lib/condensedChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as MicIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOffIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOffIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOffIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOffIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function StartCall(param) {
    let { jobInfo, user, accessToken } = param;
    _s();
    const { connect, readyState, chatMetadata, callDurationTimestamp, error, status, isError, isMicrophoneError, isSocketError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoice"])();
    const [interviewId, setInterviewId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const durationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callDurationTimestamp);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    durationRef.current = callDurationTimestamp;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StartCall.useEffect": ()=>{
            console.log("StartCall: readyState", readyState);
        }
    }["StartCall.useEffect"], [
        readyState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StartCall.useEffect": ()=>{
            if (chatMetadata == null) return;
            console.log("StartCall: chatMetadata update", chatMetadata);
        }
    }["StartCall.useEffect"], [
        chatMetadata
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StartCall.useEffect": ()=>{
            if (error == null && status == null) return;
            console.log("StartCall: status", status);
            console.log("StartCall: voice error", error);
            if (!isError) return;
            if ((error === null || error === void 0 ? void 0 : error.type) === "mic_error") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorToast"])(error.message);
            } else if ((error === null || error === void 0 ? void 0 : error.type) === "socket_error") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorToast"])(error.message);
            }
        }
    }["StartCall.useEffect"], [
        error,
        isError,
        status
    ]);
    // Sync chat ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StartCall.useEffect": ()=>{
            if ((chatMetadata === null || chatMetadata === void 0 ? void 0 : chatMetadata.chatId) == null || interviewId == null) {
                return;
            }
            console.log("StartCall: chatMetadata received", chatMetadata);
            console.log("StartCall: syncing chatId", {
                interviewId,
                chatId: chatMetadata.chatId
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$data$3a$b90733__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateInterview"])(interviewId, {
                humeChatId: chatMetadata.chatId
            });
        }
    }["StartCall.useEffect"], [
        chatMetadata === null || chatMetadata === void 0 ? void 0 : chatMetadata.chatId,
        interviewId
    ]);
    // Sync duration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StartCall.useEffect": ()=>{
            if (interviewId == null) return;
            const intervalId = setInterval({
                "StartCall.useEffect.intervalId": ()=>{
                    if (durationRef.current == null) return;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$data$3a$b90733__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateInterview"])(interviewId, {
                        duration: durationRef.current
                    });
                }
            }["StartCall.useEffect.intervalId"], 10000);
            return ({
                "StartCall.useEffect": ()=>clearInterval(intervalId)
            })["StartCall.useEffect"];
        }
    }["StartCall.useEffect"], [
        interviewId
    ]);
    // Handle disconnect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StartCall.useEffect": ()=>{
            if (readyState !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceReadyState"].CLOSED) return;
            if (interviewId == null) {
                return router.push("/app/job-infos/".concat(jobInfo.id, "/interviews"));
            }
            if (durationRef.current != null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$data$3a$b90733__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateInterview"])(interviewId, {
                    duration: durationRef.current
                });
            }
            router.push("/app/job-infos/".concat(jobInfo.id, "/interviews/").concat(interviewId));
        }
    }["StartCall.useEffect"], [
        interviewId,
        readyState,
        router,
        jobInfo.id
    ]);
    if (readyState === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceReadyState"].IDLE) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen-header",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "lg",
                onClick: async ()=>{
                    console.log("StartCall: start clicked");
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$data$3a$daf2d6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createInterview"])({
                            jobInfoId: jobInfo.id
                        });
                        if (res.error) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorToast"])(res.message);
                        }
                        setInterviewId(res.id);
                        console.log("StartCall: created interview", res.id);
                        var _accessToken_length;
                        console.log("StartCall: connect config", {
                            configId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEnv"].NEXT_PUBLIC_HUME_CONFIG_ID,
                            accessTokenLength: (_accessToken_length = accessToken === null || accessToken === void 0 ? void 0 : accessToken.length) !== null && _accessToken_length !== void 0 ? _accessToken_length : 0
                        });
                        await connect({
                            auth: {
                                type: "accessToken",
                                value: accessToken
                            },
                            configId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientEnv"].NEXT_PUBLIC_HUME_CONFIG_ID,
                            sessionSettings: {
                                type: "session_settings",
                                variables: {
                                    userName: user.name,
                                    title: jobInfo.title || "Not Specified",
                                    description: jobInfo.description,
                                    experienceLevel: jobInfo.experienceLevel
                                }
                            }
                        });
                        console.log("StartCall: connect resolved");
                    } catch (err) {
                        const message = err instanceof Error ? err.message : "Failed to start interview";
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errorToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorToast"])(message);
                    }
                },
                children: "Start Interview"
            }, void 0, false, {
                fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this);
    }
    if (readyState === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceReadyState"].CONNECTING || readyState === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceReadyState"].CLOSED) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen-header flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
                className: "animate-spin size-24"
            }, void 0, false, {
                fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-y-auto h-screen-header flex flex-col-reverse",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container py-6 flex flex-col items-center justify-end gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Messages, {
                    user: user
                }, void 0, false, {
                    fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Controls, {}, void 0, false, {
                    fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(StartCall, "yVyShCHLYoPOj01F+pXExjXNyU8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = StartCall;
function Messages(param) {
    let { user } = param;
    _s1();
    const { messages, fft } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoice"])();
    const condensedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Messages.useMemo[condensedMessages]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hume$2f$lib$2f$condensedChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["condenseChatMessages"])(messages);
        }
    }["Messages.useMemo[condensedMessages]"], [
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hume$2f$components$2f$CondensedMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CondensedMessages"], {
        messages: condensedMessages,
        user: user,
        maxFft: Math.max(...fft),
        className: "max-w-5xl"
    }, void 0, false, {
        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s1(Messages, "bCSW4fkoxK2HE99CVkWENXeEY6Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoice"]
    ];
});
_c1 = Messages;
function Controls() {
    _s2();
    const { disconnect, isMuted, mute, unmute, micFft, callDurationTimestamp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoice"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-5 rounded border px-5 py-2 w-fit sticky bottom-6 bg-background items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                className: "-mx-3",
                onClick: ()=>isMuted ? unmute() : mute(),
                children: [
                    isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOffIcon$3e$__["MicOffIcon"], {
                        className: "text-destructive"
                    }, void 0, false, {
                        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                        lineNumber: 202,
                        columnNumber: 20
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicIcon$3e$__["MicIcon"], {}, void 0, false, {
                        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                        lineNumber: 202,
                        columnNumber: 66
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: isMuted ? "Unmute" : "Mute"
                    }, void 0, false, {
                        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FftVisualizer, {
                    fft: micFft
                }, void 0, false, {
                    fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-muted-foreground tabular-nums",
                children: callDurationTimestamp
            }, void 0, false, {
                fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                className: "-mx-3",
                onClick: disconnect,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOffIcon$3e$__["PhoneOffIcon"], {
                        className: "text-destructive"
                    }, void 0, false, {
                        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "End Call"
                    }, void 0, false, {
                        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s2(Controls, "S/rI6i8RWyhkyJCS9D6xL2sXa60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoice"]
    ];
});
_c2 = Controls;
function FftVisualizer(param) {
    let { fft } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-1 items-center h-full",
        children: fft.map((value, index)=>{
            const percent = value / 4 * 100;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0.5 bg-primary/75 w-0.5 rounded",
                style: {
                    height: "".concat(percent < 10 ? 0 : percent, "%")
                }
            }, index, false, {
                fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
                lineNumber: 230,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
_c3 = FftVisualizer;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "StartCall");
__turbopack_context__.k.register(_c1, "Messages");
__turbopack_context__.k.register(_c2, "Controls");
__turbopack_context__.k.register(_c3, "FftVisualizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_4230a4c7._.js.map