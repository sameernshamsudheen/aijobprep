module.exports = {

"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f4a395c50e2e2129b7b663277cbc95288344879cf":"invalidateCacheAction"},"",""] */ __turbopack_context__.s({
    "invalidateCacheAction": ()=>invalidateCacheAction
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f4a395c50e2e2129b7b663277cbc95288344879cf", null);
}),
"[project]/.next-internal/server/app/app/job-infos/[jobInfoId]/interviews/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/app/job-infos/[jobInfoId]/interviews/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/app/job-infos/[jobInfoId]/interviews/new/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/app/job-infos/[jobInfoId]/interviews/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "40518ecc086cb216276b0ba01fb1560dcd90836634": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInterview"],
    "608e2e38e2fc1cc599c2c98081aa0fc23e7e5ee12c": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInterview"],
    "7f37522d76609564aa7dd2a896c8af3568352af0d6": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"],
    "7f4a395c50e2e2129b7b663277cbc95288344879cf": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"],
    "7f5e2d9e1f0562437e6a3e4aa5d0c83377081b779e": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectKeylessEnvDriftAction"],
    "7f6422445e1b6c5841d988de4edafc67c77a98869d": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectKeylessMetadata"],
    "7fb83f0ba769eb12ea0be9861f6a31469a8b8fad43": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"],
    "7fc63e53109548da9bd4529be10cb6de8185f8379a": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"],
    "7fcaa4b467f3a7944c6adf4dd3c51cf1ba0024bdc8": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMetadataHeaders"],
    "c029fb2bd7934a9b907af709f177773c4bcb212c9d": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_CACHE_0"],
    "e081891dd4412e0c272346de7059181895556748f6": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_CACHE_0"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/app/job-infos/[jobInfoId]/interviews/new/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/app/job-infos/[jobInfoId]/interviews/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "40518ecc086cb216276b0ba01fb1560dcd90836634": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40518ecc086cb216276b0ba01fb1560dcd90836634"],
    "608e2e38e2fc1cc599c2c98081aa0fc23e7e5ee12c": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["608e2e38e2fc1cc599c2c98081aa0fc23e7e5ee12c"],
    "7f37522d76609564aa7dd2a896c8af3568352af0d6": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f37522d76609564aa7dd2a896c8af3568352af0d6"],
    "7f4a395c50e2e2129b7b663277cbc95288344879cf": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4a395c50e2e2129b7b663277cbc95288344879cf"],
    "7f5e2d9e1f0562437e6a3e4aa5d0c83377081b779e": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f5e2d9e1f0562437e6a3e4aa5d0c83377081b779e"],
    "7f6422445e1b6c5841d988de4edafc67c77a98869d": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f6422445e1b6c5841d988de4edafc67c77a98869d"],
    "7fb83f0ba769eb12ea0be9861f6a31469a8b8fad43": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fb83f0ba769eb12ea0be9861f6a31469a8b8fad43"],
    "7fc63e53109548da9bd4529be10cb6de8185f8379a": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fc63e53109548da9bd4529be10cb6de8185f8379a"],
    "7fcaa4b467f3a7944c6adf4dd3c51cf1ba0024bdc8": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fcaa4b467f3a7944c6adf4dd3c51cf1ba0024bdc8"],
    "c029fb2bd7934a9b907af709f177773c4bcb212c9d": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["c029fb2bd7934a9b907af709f177773c4bcb212c9d"],
    "e081891dd4412e0c272346de7059181895556748f6": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["e081891dd4412e0c272346de7059181895556748f6"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/app/job-infos/[jobInfoId]/interviews/new/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/app/job-infos/[jobInfoId]/interviews/new/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/features/interviews/action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$features$2f$interviews$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": ()=>hasA11yProp,
    "mergeClasses": ()=>mergeClasses,
    "toCamelCase": ()=>toCamelCase,
    "toKebabCase": ()=>toKebabCase,
    "toPascalCase": ()=>toPascalCase
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>defaultAttributes
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Icon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>createLucideIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>LoaderCircle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-rsc] (ecmascript) <export default as Loader2Icon>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Loader2Icon": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/es-errors/type.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./type')} */ module.exports = TypeError;
}}),
"[project]/node_modules/es-errors/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('.')} */ module.exports = Error;
}}),
"[project]/node_modules/es-errors/eval.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./eval')} */ module.exports = EvalError;
}}),
"[project]/node_modules/es-errors/range.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./range')} */ module.exports = RangeError;
}}),
"[project]/node_modules/es-errors/ref.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./ref')} */ module.exports = ReferenceError;
}}),
"[project]/node_modules/es-errors/syntax.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./syntax')} */ module.exports = SyntaxError;
}}),
"[project]/node_modules/es-errors/uri.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./uri')} */ module.exports = URIError;
}}),
"[project]/node_modules/object-inspect/util.inspect.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inspect;
}}),
"[project]/node_modules/object-inspect/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = __turbopack_context__.r("[project]/node_modules/object-inspect/util.inspect.js [app-rsc] (ecmascript)");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }
    if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }
    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') {
        depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === 'function' && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++){
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) {
            s += '...';
        }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) {
            return '[]';
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) {
            return '[' + String(obj) + ']';
        }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, {
                depth: maxDepth - depth
            });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function(value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof globalThis !== 'undefined' && obj === globalThis || ("TURBOPACK compile-time value", "object") !== 'undefined' && obj === ("TURBOPACK ident replacement", globalThis)) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) {
            return tag + '{}';
        }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}
function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) {
    return toStr(obj) === '[object Array]' && canTrustToString(obj);
}
function isDate(obj) {
    return toStr(obj) === '[object Date]' && canTrustToString(obj);
}
function isRegExp(obj) {
    return toStr(obj) === '[object RegExp]' && canTrustToString(obj);
}
function isError(obj) {
    return toStr(obj) === '[object Error]' && canTrustToString(obj);
}
function isString(obj) {
    return toStr(obj) === '[object String]' && canTrustToString(obj);
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]' && canTrustToString(obj);
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && canTrustToString(obj);
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) {
        return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
        return m[1];
    }
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) {
        return xs.indexOf(x);
    }
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== 'object') {
        return false;
    }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) {
        return '\\' + x;
    }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
    return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) {
        return '';
    }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++){
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++){
            symMap['$' + syms[k]] = syms[k];
        }
    }
    for(var key in obj){
        if (!has(obj, key)) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for(var j = 0; j < syms.length; j++){
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}
}}),
"[project]/node_modules/side-channel-list/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var inspect = __turbopack_context__.r("[project]/node_modules/object-inspect/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('./list.d.ts').listGetNode} */ // eslint-disable-next-line consistent-return
var listGetNode = function(list, key, isDelete) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    // eslint-disable-next-line eqeqeq
    for(; (curr = prev.next) != null; prev = curr){
        if (curr.key === key) {
            prev.next = curr.next;
            if (!isDelete) {
                // eslint-disable-next-line no-extra-parens
                curr.next = list.next;
                list.next = curr; // eslint-disable-line no-param-reassign
            }
            return curr;
        }
    }
};
/** @type {import('./list.d.ts').listGet} */ var listGet = function(objects, key) {
    if (!objects) {
        return void undefined;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
        node.value = value;
    } else {
        // Prepend the new node to the beginning of the list
        objects.next = {
            key: key,
            next: objects.next,
            value: value
        };
    }
};
/** @type {import('./list.d.ts').listHas} */ var listHas = function(objects, key) {
    if (!objects) {
        return false;
    }
    return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */ // eslint-disable-next-line consistent-return
var listDelete = function(objects, key) {
    if (objects) {
        return listGetNode(objects, key, true);
    }
};
/** @type {import('.')} */ module.exports = function getSideChannelList() {
    /** @typedef {ReturnType<typeof getSideChannelList>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) {
                $o = void undefined;
            }
            return !!deletedNode;
        },
        get: function(key) {
            return listGet($o, key);
        },
        has: function(key) {
            return listHas($o, key);
        },
        set: function(key, value) {
            if (!$o) {
                // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
                $o = {
                    next: void undefined
                };
            }
            // eslint-disable-next-line no-extra-parens
            listSet($o, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}}),
"[project]/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('.')} */ module.exports = Object;
}}),
"[project]/node_modules/math-intrinsics/abs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./abs')} */ module.exports = Math.abs;
}}),
"[project]/node_modules/math-intrinsics/floor.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./floor')} */ module.exports = Math.floor;
}}),
"[project]/node_modules/math-intrinsics/max.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./max')} */ module.exports = Math.max;
}}),
"[project]/node_modules/math-intrinsics/min.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./min')} */ module.exports = Math.min;
}}),
"[project]/node_modules/math-intrinsics/pow.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./pow')} */ module.exports = Math.pow;
}}),
"[project]/node_modules/math-intrinsics/round.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./round')} */ module.exports = Math.round;
}}),
"[project]/node_modules/math-intrinsics/isNaN.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}}),
"[project]/node_modules/math-intrinsics/sign.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var $isNaN = __turbopack_context__.r("[project]/node_modules/math-intrinsics/isNaN.js [app-rsc] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}}),
"[project]/node_modules/gopd/gOPD.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}}),
"[project]/node_modules/gopd/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/node_modules/gopd/gOPD.js [app-rsc] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}}),
"[project]/node_modules/es-define-property/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}}),
"[project]/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}}),
"[project]/node_modules/has-symbols/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}}),
"[project]/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}}),
"[project]/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var $Object = __turbopack_context__.r("[project]/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}}),
"[project]/node_modules/get-proto/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var reflectGetProto = __turbopack_context__.r("[project]/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/node_modules/dunder-proto/get.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}}),
"[project]/node_modules/function-bind/implementation.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}}),
"[project]/node_modules/function-bind/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var implementation = __turbopack_context__.r("[project]/node_modules/function-bind/implementation.js [app-rsc] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}}),
"[project]/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}}),
"[project]/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}}),
"[project]/node_modules/call-bind-apply-helpers/reflectApply.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}}),
"[project]/node_modules/call-bind-apply-helpers/actualApply.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var bind = __turbopack_context__.r("[project]/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/reflectApply.js [app-rsc] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}}),
"[project]/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var bind = __turbopack_context__.r("[project]/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/actualApply.js [app-rsc] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}}),
"[project]/node_modules/dunder-proto/get.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var callBind = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/node_modules/gopd/index.js [app-rsc] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}}),
"[project]/node_modules/hasown/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}}),
"[project]/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var undefined1;
var $Object = __turbopack_context__.r("[project]/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/node_modules/es-errors/index.js [app-rsc] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/node_modules/es-errors/eval.js [app-rsc] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/node_modules/es-errors/range.js [app-rsc] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/node_modules/es-errors/ref.js [app-rsc] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/node_modules/es-errors/syntax.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/node_modules/es-errors/uri.js [app-rsc] (ecmascript)");
var abs = __turbopack_context__.r("[project]/node_modules/math-intrinsics/abs.js [app-rsc] (ecmascript)");
var floor = __turbopack_context__.r("[project]/node_modules/math-intrinsics/floor.js [app-rsc] (ecmascript)");
var max = __turbopack_context__.r("[project]/node_modules/math-intrinsics/max.js [app-rsc] (ecmascript)");
var min = __turbopack_context__.r("[project]/node_modules/math-intrinsics/min.js [app-rsc] (ecmascript)");
var pow = __turbopack_context__.r("[project]/node_modules/math-intrinsics/pow.js [app-rsc] (ecmascript)");
var round = __turbopack_context__.r("[project]/node_modules/math-intrinsics/round.js [app-rsc] (ecmascript)");
var sign = __turbopack_context__.r("[project]/node_modules/math-intrinsics/sign.js [app-rsc] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/node_modules/gopd/index.js [app-rsc] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/node_modules/es-define-property/index.js [app-rsc] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/node_modules/has-symbols/index.js [app-rsc] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/node_modules/get-proto/index.js [app-rsc] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/node_modules/hasown/index.js [app-rsc] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}}),
"[project]/node_modules/call-bound/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var GetIntrinsic = __turbopack_context__.r("[project]/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
        return callBindBasic([
            intrinsic
        ]);
    }
    return intrinsic;
};
}}),
"[project]/node_modules/side-channel-map/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var GetIntrinsic = __turbopack_context__.r("[project]/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/node_modules/call-bound/index.js [app-rsc] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/node_modules/object-inspect/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $Map = GetIntrinsic('%Map%', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */ var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */ var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */ var $mapSize = callBound('Map.prototype.size', true);
/** @type {import('.')} */ module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
    /** @typedef {ReturnType<typeof getSideChannelMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {Map<K, V> | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($m) {
                var result = $mapDelete($m, key);
                if ($mapSize($m) === 0) {
                    $m = void undefined;
                }
                return result;
            }
            return false;
        },
        get: function(key) {
            if ($m) {
                return $mapGet($m, key);
            }
        },
        has: function(key) {
            if ($m) {
                return $mapHas($m, key);
            }
            return false;
        },
        set: function(key, value) {
            if (!$m) {
                // @ts-expect-error TS can't handle narrowing a variable inside a closure
                $m = new $Map();
            }
            $mapSet($m, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why TS is erroring here
    return channel;
};
}}),
"[project]/node_modules/side-channel-weakmap/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var GetIntrinsic = __turbopack_context__.r("[project]/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/node_modules/call-bound/index.js [app-rsc] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/node_modules/object-inspect/index.js [app-rsc] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/node_modules/side-channel-map/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $WeakMap = GetIntrinsic('%WeakMap%', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */ var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */ var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
/** @type {import('.')} */ module.exports = $WeakMap ? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
    /** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {WeakMap<K & object, V> | undefined} */ var $wm;
    /** @type {Channel | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapDelete($wm, key);
                }
            } else if (getSideChannelMap) {
                if ($m) {
                    return $m['delete'](key);
                }
            }
            return false;
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapGet($wm, key);
                }
            }
            return $m && $m.get(key);
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapHas($wm, key);
                }
            }
            return !!$m && $m.has(key);
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if (!$wm) {
                    $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
                if (!$m) {
                    $m = getSideChannelMap();
                }
                // eslint-disable-next-line no-extra-parens
                /** @type {NonNullable<typeof $m>} */ $m.set(key, value);
            }
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
} : getSideChannelMap;
}}),
"[project]/node_modules/side-channel/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var $TypeError = __turbopack_context__.r("[project]/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/node_modules/object-inspect/index.js [app-rsc] (ecmascript)");
var getSideChannelList = __turbopack_context__.r("[project]/node_modules/side-channel-list/index.js [app-rsc] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/node_modules/side-channel-map/index.js [app-rsc] (ecmascript)");
var getSideChannelWeakMap = __turbopack_context__.r("[project]/node_modules/side-channel-weakmap/index.js [app-rsc] (ecmascript)");
var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @typedef {ReturnType<typeof getSideChannel>} Channel */ /** @type {Channel | undefined} */ var $channelData;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            return !!$channelData && $channelData['delete'](key);
        },
        get: function(key) {
            return $channelData && $channelData.get(key);
        },
        has: function(key) {
            return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
            if (!$channelData) {
                $channelData = makeChannel();
            }
            $channelData.set(key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}}),
"[project]/node_modules/qs/lib/formats.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};
}}),
"[project]/node_modules/qs/lib/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var formats = __turbopack_context__.r("[project]/node_modules/qs/lib/formats.js [app-rsc] (ecmascript)");
var getSideChannel = __turbopack_context__.r("[project]/node_modules/side-channel/index.js [app-rsc] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
// Track objects created from arrayLimit overflow using side-channel
// Stores the current max numeric index for O(1) lookup
var overflowChannel = getSideChannel();
var markOverflow = function markOverflow(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
    return obj;
};
var isOverflow = function isOverflow(obj) {
    return overflowChannel.has(obj);
};
var getMaxIndex = function getMaxIndex(obj) {
    return overflowChannel.get(obj);
};
var setMaxIndex = function setMaxIndex(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
};
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i){
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j){
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? {
        __proto__: null
    } : {};
    for(var i = 0; i < source.length; ++i){
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) {
        return target;
    }
    if (typeof source !== 'object' && typeof source !== 'function') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if (isOverflow(target)) {
                // Add at next numeric index for overflow objects
                var newIndex = getMaxIndex(target) + 1;
                target[newIndex] = source;
                setMaxIndex(target, newIndex);
            } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [
                target,
                source
            ];
        }
        return target;
    }
    if (!target || typeof target !== 'object') {
        if (isOverflow(source)) {
            // Create new object with target at 0, source values shifted by 1
            var sourceKeys = Object.keys(source);
            var result = options && options.plainObjects ? {
                __proto__: null,
                0: target
            } : {
                0: target
            };
            for(var m = 0; m < sourceKeys.length; m++){
                var oldKey = parseInt(sourceKeys[m], 10);
                result[oldKey + 1] = source[sourceKeys[m]];
            }
            return markOverflow(result, getMaxIndex(source) + 1);
        }
        return [
            target
        ].concat(source);
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, defaultDecoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var limit = 1024;
/* eslint operator-linebreak: [2, "before"] */ var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }
    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }
    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }
    var out = '';
    for(var j = 0; j < string.length; j += limit){
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for(var i = 0; i < segment.length; ++i){
            var c = segment.charCodeAt(i);
            if (c === 0x2D // -
             || c === 0x2E // .
             || c === 0x5F // _
             || c === 0x7E // ~
             || c >= 0x30 && c <= 0x39 || c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
            ) {
                arr[arr.length] = segment.charAt(i);
                continue;
            }
            if (c < 0x80) {
                arr[arr.length] = hexTable[c];
                continue;
            }
            if (c < 0x800) {
                arr[arr.length] = hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            if (c < 0xD800 || c >= 0xE000) {
                arr[arr.length] = hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            i += 1;
            c = 0x10000 + ((c & 0x3FF) << 10 | segment.charCodeAt(i) & 0x3FF);
            arr[arr.length] = hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
        }
        out += arr.join('');
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b, arrayLimit, plainObjects) {
    // If 'a' is already an overflow object, add to it
    if (isOverflow(a)) {
        var newIndex = getMaxIndex(a) + 1;
        a[newIndex] = b;
        setMaxIndex(a, newIndex);
        return a;
    }
    var result = [].concat(a, b);
    if (result.length > arrayLimit) {
        return markOverflow(arrayToObject(result, {
            plainObjects: plainObjects
        }), result.length - 1);
    }
    return result;
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1){
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isOverflow: isOverflow,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};
}}),
"[project]/node_modules/qs/lib/stringify.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var getSideChannel = __turbopack_context__.r("[project]/node_modules/side-channel/index.js [app-rsc] (ecmascript)");
var utils = __turbopack_context__.r("[project]/node_modules/qs/lib/utils.js [app-rsc] (ecmascript)");
var formats = __turbopack_context__.r("[project]/node_modules/qs/lib/formats.js [app-rsc] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: 'indices',
    charset: 'utf-8',
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: '&',
    encode: true,
    encodeDotInKeys: false,
    encoder: utils.encode,
    encodeValuesOnly: false,
    filter: void undefined,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }
    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') {
        return values;
    }
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(',') || null : void undefined
            }
        ];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + '[]';
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === 'object' && key && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value === null) {
            continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, '%2E') : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
        throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if ('indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = defaults.arrayFormat;
    }
    if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat: arrayFormat,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) {
        return '';
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    if (options.sort) {
        objKeys.sort(options.sort);
    }
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
            continue;
        }
        pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }
    return joined.length > 0 ? prefix + joined : '';
};
}}),
"[project]/node_modules/qs/lib/parse.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var utils = __turbopack_context__.r("[project]/node_modules/qs/lib/utils.js [app-rsc] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    duplicates: 'combine',
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false,
    throwOnLimitExceeded: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options, currentArrayLength) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }
    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
    }
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, options.throwOnLimitExceeded ? limit + 1 : limit);
    if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError('Parameter limit exceeded. Only ' + limit + ' parameter' + (limit === 1 ? '' : 's') + ' allowed.');
    }
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i){
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            if (key !== null) {
                val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                });
            }
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(String(val));
        }
        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [
                val
            ] : val;
        }
        if (key !== null) {
            var existing = has.call(obj, key);
            if (existing && options.duplicates === 'combine') {
                obj[key] = utils.combine(obj[key], val, options.arrayLimit, options.plainObjects);
            } else if (!existing || options.duplicates === 'last') {
                obj[key] = val;
            }
        }
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var currentArrayLength = 0;
    if (chain.length > 0 && chain[chain.length - 1] === '[]') {
        var parentKey = chain.slice(0, -1).join('');
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
    }
    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) {
            if (utils.isOverflow(leaf)) {
                // leaf is already an overflow object, preserve it
                obj = leaf;
            } else {
                obj = options.allowEmptyArrays && (leaf === '' || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf, options.arrayLimit, options.plainObjects);
            }
        } else {
            obj = options.plainObjects ? {
                __proto__: null
            } : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            if (!options.parseArrays && decodedRoot === '') {
                obj = {
                    0: leaf
                };
            } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (decodedRoot !== '__proto__') {
                obj[decodedRoot] = leaf;
            }
        }
        leaf = obj;
    }
    return leaf;
};
var splitKeyIntoSegments = function splitKeyIntoSegments(givenKey, options) {
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    if (options.depth <= 0) {
        if (!options.plainObjects && has.call(Object.prototype, key)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        return [
            key
        ];
    }
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(parent);
    }
    var i = 0;
    while((segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        var segmentContent = segment[1].slice(1, -1);
        if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }
    if (segment) {
        if (options.strictDepth === true) {
            throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
        }
        keys.push('[' + key.slice(segment.index) + ']');
    }
    return keys;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }
    var keys = splitKeyIntoSegments(givenKey, options);
    if (!keys) {
        return;
    }
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
        throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    if (typeof opts.throwOnLimitExceeded !== 'undefined' && typeof opts.throwOnLimitExceeded !== 'boolean') {
        throw new TypeError('`throwOnLimitExceeded` option must be a boolean');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;
    if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
        throw new TypeError('The duplicates option must be either combine, first, or last');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates: duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === 'boolean' ? opts.throwOnLimitExceeded : false
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? {
            __proto__: null
        } : {};
    }
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? {
        __proto__: null
    } : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
        return obj;
    }
    return utils.compact(obj);
};
}}),
"[project]/node_modules/qs/lib/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var stringify = __turbopack_context__.r("[project]/node_modules/qs/lib/stringify.js [app-rsc] (ecmascript)");
var parse = __turbopack_context__.r("[project]/node_modules/qs/lib/parse.js [app-rsc] (ecmascript)");
var formats = __turbopack_context__.r("[project]/node_modules/qs/lib/formats.js [app-rsc] (ecmascript)");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};
}}),
"[project]/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var conversions = {};
module.exports = conversions;
function sign(x) {
    return x < 0 ? -1 : 1;
}
function evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if (x % 1 === 0.5 && (x & 1) === 0) {
        return Math.floor(x);
    } else {
        return Math.round(x);
    }
}
function createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) {
        --bitLength;
    }
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;
    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
    return function(V, opts) {
        if (!opts) opts = {};
        let x = +V;
        if (opts.enforceRange) {
            if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
            }
            x = sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
            }
            return x;
        }
        if (!isNaN(x) && opts.clamp) {
            x = evenRound(x);
            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) {
            return x - moduloVal;
        } else if (typeOpts.unsigned) {
            if (x < 0) {
                x += moduloVal;
            } else if (x === -0) {
                return 0;
            }
        }
        return x;
    };
}
conversions["void"] = function() {
    return undefined;
};
conversions["boolean"] = function(val) {
    return !!val;
};
conversions["byte"] = createNumberConversion(8, {
    unsigned: false
});
conversions["octet"] = createNumberConversion(8, {
    unsigned: true
});
conversions["short"] = createNumberConversion(16, {
    unsigned: false
});
conversions["unsigned short"] = createNumberConversion(16, {
    unsigned: true
});
conversions["long"] = createNumberConversion(32, {
    unsigned: false
});
conversions["unsigned long"] = createNumberConversion(32, {
    unsigned: true
});
conversions["long long"] = createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64
});
conversions["unsigned long long"] = createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64
});
conversions["double"] = function(V) {
    const x = +V;
    if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
    }
    return x;
};
conversions["unrestricted double"] = function(V) {
    const x = +V;
    if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
    }
    return x;
};
// not quite valid, but good enough for JS
conversions["float"] = conversions["double"];
conversions["unrestricted float"] = conversions["unrestricted double"];
conversions["DOMString"] = function(V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) {
        return "";
    }
    return String(V);
};
conversions["ByteString"] = function(V, opts) {
    const x = String(V);
    let c = undefined;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) {
            throw new TypeError("Argument is not a valid bytestring");
        }
    }
    return x;
};
conversions["USVString"] = function(V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            if (i === n - 1) {
                U.push(String.fromCodePoint(0xFFFD));
            } else {
                const d = S.charCodeAt(i + 1);
                if (0xDC00 <= d && d <= 0xDFFF) {
                    const a = c & 0x3FF;
                    const b = d & 0x3FF;
                    U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                    ++i;
                } else {
                    U.push(String.fromCodePoint(0xFFFD));
                }
            }
        }
    }
    return U.join('');
};
conversions["Date"] = function(V, opts) {
    if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
    }
    if (isNaN(V)) {
        return undefined;
    }
    return V;
};
conversions["RegExp"] = function(V, opts) {
    if (!(V instanceof RegExp)) {
        V = new RegExp(V);
    }
    return V;
};
}}),
"[project]/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports.mixin = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for(let i = 0; i < keys.length; ++i){
        Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
    }
};
module.exports.wrapperSymbol = Symbol("wrapper");
module.exports.implSymbol = Symbol("impl");
module.exports.wrapperForImpl = function(impl) {
    return impl[module.exports.wrapperSymbol];
};
module.exports.implForWrapper = function(wrapper) {
    return wrapper[module.exports.implSymbol];
};
}}),
"[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const punycode = __turbopack_context__.r("[externals]/punycode [external] (punycode, cjs)");
const tr46 = __turbopack_context__.r("[project]/node_modules/tr46/index.js [app-rsc] (ecmascript)");
const specialSchemes = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const failure = Symbol("failure");
function countSymbols(str) {
    return punycode.ucs2.decode(str).length;
}
function at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function isASCIIAlphanumeric(c) {
    return isASCIIAlpha(c) || isASCIIDigit(c);
}
function isASCIIHex(c) {
    return isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
function isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
    return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}
function isWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function containsForbiddenHostCodePointExcludingPercent(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function isSpecialScheme(scheme) {
    return specialSchemes[scheme] !== undefined;
}
function isSpecial(url) {
    return isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
    return specialSchemes[scheme];
}
function percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) {
        hex = "0" + hex;
    }
    return "%" + hex;
}
function utf8PercentEncode(c) {
    const buf = new Buffer(c);
    let str = "";
    for(let i = 0; i < buf.length; ++i){
        str += percentEncode(buf[i]);
    }
    return str;
}
function utf8PercentDecode(str) {
    const input = new Buffer(str);
    const output = [];
    for(let i = 0; i < input.length; ++i){
        if (input[i] !== 37) {
            output.push(input[i]);
        } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
            output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
            i += 2;
        } else {
            output.push(input[i]);
        }
    }
    return new Buffer(output).toString();
}
function isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
const extraPathPercentEncodeSet = new Set([
    32,
    34,
    35,
    60,
    62,
    63,
    96,
    123,
    125
]);
function isPathPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}
const extraUserinfoPercentEncodeSet = new Set([
    47,
    58,
    59,
    61,
    64,
    91,
    92,
    93,
    94,
    124
]);
function isUserinfoPercentEncode(c) {
    return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}
function percentEncodeChar(c, encodeSetPredicate) {
    const cStr = String.fromCodePoint(c);
    if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
    }
    return cStr;
}
function parseIPv4Number(input) {
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") {
        return 0;
    }
    const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
    if (regex.test(input)) {
        return failure;
    }
    return parseInt(input, R);
}
function parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
            parts.pop();
        }
    }
    if (parts.length > 4) {
        return input;
    }
    const numbers = [];
    for (const part of parts){
        if (part === "") {
            return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
            return input;
        }
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) {
            return failure;
        }
    }
    if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
    }
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
    }
    return ipv4;
}
function serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) {
            output = "." + output;
        }
        n = Math.floor(n / 256);
    }
    return output;
}
function parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = punycode.ucs2.decode(input);
    if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
            return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) {
            return failure;
        }
        if (input[pointer] === 58) {
            if (compress !== null) {
                return failure;
            }
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt(at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === 46) {
            if (length === 0) {
                return failure;
            }
            pointer -= length;
            if (pieceIndex > 6) {
                return failure;
            }
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === 46 && numbersSeen < 4) {
                        ++pointer;
                    } else {
                        return failure;
                    }
                }
                if (!isASCIIDigit(input[pointer])) {
                    return failure;
                }
                while(isASCIIDigit(input[pointer])){
                    const number = parseInt(at(input, pointer));
                    if (ipv4Piece === null) {
                        ipv4Piece = number;
                    } else if (ipv4Piece === 0) {
                        return failure;
                    } else {
                        ipv4Piece = ipv4Piece * 10 + number;
                    }
                    if (ipv4Piece > 255) {
                        return failure;
                    }
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                    ++pieceIndex;
                }
            }
            if (numbersSeen !== 4) {
                return failure;
            }
            break;
        } else if (input[pointer] === 58) {
            ++pointer;
            if (input[pointer] === undefined) {
                return failure;
            }
        } else if (input[pointer] !== undefined) {
            return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) {
        return failure;
    }
    return address;
}
function serializeIPv6(address) {
    let output = "";
    const seqResult = findLongestZeroSequence(address);
    const compress = seqResult.idx;
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) {
            continue;
        } else if (ignore0) {
            ignore0 = false;
        }
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
            output += ":";
        }
    }
    return output;
}
function parseHost(input, isSpecialArg) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
            return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
    }
    if (!isSpecialArg) {
        return parseOpaqueHost(input);
    }
    const domain = utf8PercentDecode(input);
    const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
    if (asciiDomain === null) {
        return failure;
    }
    if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
    }
    const ipv4Host = parseIPv4(asciiDomain);
    if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
    }
    return asciiDomain;
}
function parseOpaqueHost(input) {
    if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
    }
    let output = "";
    const decoded = punycode.ucs2.decode(input);
    for(let i = 0; i < decoded.length; ++i){
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
    }
    return output;
}
function findLongestZeroSequence(arr) {
    let maxIdx = null;
    let maxLen = 1; // only find elements > 1
    let currStart = null;
    let currLen = 0;
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] !== 0) {
            if (currLen > maxLen) {
                maxIdx = currStart;
                maxLen = currLen;
            }
            currStart = null;
            currLen = 0;
        } else {
            if (currStart === null) {
                currStart = i;
            }
            ++currLen;
        }
    }
    // if trailing zeros
    if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
    }
    return {
        idx: maxIdx,
        len: maxLen
    };
}
function serializeHost(host) {
    if (typeof host === "number") {
        return serializeIPv4(host);
    }
    // IPv6 serializer
    if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
    }
    return host;
}
function trimControlChars(url) {
    return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}
function trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/g, "");
}
function shortenPath(url) {
    const path = url.path;
    if (path.length === 0) {
        return;
    }
    if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
    }
    path.pop();
}
function includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}
function isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/.test(string);
}
function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null,
            cannotBeABaseURL: false
        };
        const res = trimControlChars(this.input);
        if (res !== this.input) {
            this.parseError = true;
        }
        this.input = res;
    }
    const res = trimTabAndNewline(this.input);
    if (res !== this.input) {
        this.parseError = true;
    }
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = punycode.ucs2.decode(this.input);
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
            break; // terminate algorithm
        } else if (ret === failure) {
            this.failure = true;
            break;
        }
    }
}
URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
    } else if (c === 58) {
        if (this.stateOverride) {
            if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
            }
            if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
            }
            if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
            }
            if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
                return false;
            }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
            return false;
        }
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
                this.parseError = true;
            }
            this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
            this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
            this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.cannotBeABaseURL = true;
            this.url.path.push("");
            this.state = "cannot-be-a-base-URL path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
        return failure;
    } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === 47) {
        this.state = "authority";
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
    } else if (c === 47) {
        this.state = "relative slash";
    } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if (isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "special authority ignore slashes";
    } else if (c === 47) {
        this.state = "authority";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
    } else {
        this.parseError = true;
    }
    return true;
};
URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
            this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
            } else {
                this.url.username += encodedCodePoints;
            }
        }
        this.buffer = "";
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
            return false;
        }
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
            return false;
        }
    } else {
        if (c === 91) {
            this.arrFlag = true;
        } else if (c === 93) {
            this.arrFlag = false;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if (isASCIIDigit(c)) {
        this.buffer += cStr;
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return failure;
            }
            this.url.port = port === defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) {
            return false;
        }
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
const fileOtherwiseCodePoints = new Set([
    47,
    92,
    63,
    35
]);
URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
        } else if (c === 63) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = "";
            this.state = "query";
        } else if (c === 35) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.state = "fragment";
        } else {
            if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
            !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                shortenPath(this.url);
            } else {
                this.parseError = true;
            }
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
            } else {
                this.url.host = this.base.host;
            }
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) {
                return false;
            }
            this.state = "path start";
        } else {
            let host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
                return failure;
            }
            if (host === "localhost") {
                host = "";
            }
            this.url.host = host;
            if (this.stateOverride) {
                return false;
            }
            this.buffer = "";
            this.state = "path start";
        }
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if (isSpecial(this.url)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
            --this.pointer;
        }
    } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== 47) {
            --this.pointer;
        }
    }
    return true;
};
URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if (isSpecial(this.url) && c === 92) {
            this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
            shortenPath(this.url);
            if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
                this.url.path.push("");
            }
        } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== "" && this.url.host !== null) {
                    this.parseError = true;
                    this.url.host = "";
                }
                this.buffer = this.buffer[0] + ":";
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) {
            while(this.url.path.length > 1 && this.url.path[0] === ""){
                this.parseError = true;
                this.url.path.shift();
            }
        }
        if (c === 63) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
    }
    return true;
};
URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
    if (c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== 37) {
            this.parseError = true;
        }
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        if (!isNaN(c)) {
            this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
        }
    }
    return true;
};
URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
            this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
        for(let i = 0; i < buffer.length; ++i){
            if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 || buffer[i] === 0x3C || buffer[i] === 0x3E) {
                this.url.query += percentEncode(buffer[i]);
            } else {
                this.url.query += String.fromCodePoint(buffer[i]);
            }
        }
        this.buffer = "";
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (isNaN(c)) {} else if (c === 0x0) {
        this.parseError = true;
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
    }
    return true;
};
function serializeURL(url, excludeFragment) {
    let output = url.scheme + ":";
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") {
                output += ":" + url.password;
            }
            output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
            output += ":" + url.port;
        }
    } else if (url.host === null && url.scheme === "file") {
        output += "//";
    }
    if (url.cannotBeABaseURL) {
        output += url.path[0];
    } else {
        for (const string of url.path){
            output += "/" + string;
        }
    }
    if (url.query !== null) {
        output += "?" + url.query;
    }
    if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
    }
    return output;
}
function serializeOrigin(tuple) {
    let result = tuple.scheme + "://";
    result += serializeHost(tuple.host);
    if (tuple.port !== null) {
        result += ":" + tuple.port;
    }
    return result;
}
module.exports.serializeURL = serializeURL;
module.exports.serializeURLOrigin = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            try {
                return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
            } catch (e) {
                // serializing an opaque origin returns "null"
                return "null";
            }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // spec says "exercise to the reader", chrome says "file://"
            return "file://";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
module.exports.basicURLParse = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) {
        return "failure";
    }
    return usm.url;
};
module.exports.setTheUsername = function(url, username) {
    url.username = "";
    const decoded = punycode.ucs2.decode(username);
    for(let i = 0; i < decoded.length; ++i){
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.setThePassword = function(url, password) {
    url.password = "";
    const decoded = punycode.ucs2.decode(password);
    for(let i = 0; i < decoded.length; ++i){
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
module.exports.serializeInteger = function(integer) {
    return String(integer);
};
module.exports.parseURL = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    // We don't handle blobs, so this just delegates:
    return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};
}}),
"[project]/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const usm = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)");
exports.implementation = class URLImpl {
    constructor(constructorArgs){
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === "failure") {
                throw new TypeError("Invalid base URL");
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    // TODO: query stuff
    }
    get href() {
        return usm.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    }
    get origin() {
        return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
        return this._url.scheme + ":";
    }
    set protocol(v) {
        usm.basicURLParse(v + ":", {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) {
            return "";
        }
        if (url.port === null) {
            return usm.serializeHost(url.host);
        }
        return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
    }
    set host(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) {
            return "";
        }
        return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) {
            return "";
        }
        return usm.serializeInteger(this._url.port);
    }
    set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        if (v === "") {
            this._url.port = null;
        } else {
            usm.basicURLParse(v, {
                url: this._url,
                stateOverride: "port"
            });
        }
    }
    get pathname() {
        if (this._url.cannotBeABaseURL) {
            return this._url.path[0];
        }
        if (this._url.path.length === 0) {
            return "";
        }
        return "/" + this._url.path.join("/");
    }
    set pathname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        this._url.path = [];
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") {
            return "";
        }
        return "?" + this._url.query;
    }
    set search(v) {
        // TODO: query stuff
        const url = this._url;
        if (v === "") {
            url.query = null;
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, {
            url,
            stateOverride: "query"
        });
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
            return "";
        }
        return "#" + this._url.fragment;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
}}),
"[project]/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const conversions = __turbopack_context__.r("[project]/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)");
const Impl = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)");
const impl = utils.implSymbol;
function URL(url) {
    if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
    }
    if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 2; ++i){
        args[i] = arguments[i];
    }
    args[0] = conversions["USVString"](args[0]);
    if (args[1] !== undefined) {
        args[1] = conversions["USVString"](args[1]);
    }
    module.exports.setup(this, args);
}
URL.prototype.toJSON = function toJSON() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 0; ++i){
        args[i] = arguments[i];
    }
    return this[impl].toJSON.apply(this[impl], args);
};
Object.defineProperty(URL.prototype, "href", {
    get () {
        return this[impl].href;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
    },
    enumerable: true,
    configurable: true
});
URL.prototype.toString = function() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    return this.href;
};
Object.defineProperty(URL.prototype, "origin", {
    get () {
        return this[impl].origin;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "protocol", {
    get () {
        return this[impl].protocol;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "username", {
    get () {
        return this[impl].username;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "password", {
    get () {
        return this[impl].password;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "host", {
    get () {
        return this[impl].host;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hostname", {
    get () {
        return this[impl].hostname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "port", {
    get () {
        return this[impl].port;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "pathname", {
    get () {
        return this[impl].pathname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "search", {
    get () {
        return this[impl].search;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hash", {
    get () {
        return this[impl].hash;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
    },
    enumerable: true,
    configurable: true
});
module.exports = {
    is (obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
    },
    create (constructorArgs, privateData) {
        let obj = Object.create(URL.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
    },
    setup (obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
    },
    interface: URL,
    expose: {
        Window: {
            URL: URL
        },
        Worker: {
            URL: URL
        }
    }
};
}}),
"[project]/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
exports.URL = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)").interface;
exports.serializeURL = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeURL;
exports.serializeURLOrigin = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeURLOrigin;
exports.basicURLParse = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").basicURLParse;
exports.setTheUsername = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").setTheUsername;
exports.setThePassword = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").setThePassword;
exports.serializeHost = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeHost;
exports.serializeInteger = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeInteger;
exports.parseURL = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").parseURL;
}}),
"[project]/node_modules/node-fetch/lib/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AbortError": ()=>AbortError,
    "FetchError": ()=>FetchError,
    "Headers": ()=>Headers,
    "Request": ()=>Request,
    "Response": ()=>Response,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/zlib [external] (zlib, cjs)");
;
;
;
;
;
;
// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
// fix for "Readable" isn't a named export issue
const Readable = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable;
const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');
class Blob {
    constructor(){
        this[TYPE] = '';
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
            const a = blobParts;
            const length = Number(a.length);
            for(let i = 0; i < length; i++){
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) {
                    buffer = element;
                } else if (ArrayBuffer.isView(element)) {
                    buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                } else if (element instanceof ArrayBuffer) {
                    buffer = Buffer.from(element);
                } else if (element instanceof Blob) {
                    buffer = element[BUFFER];
                } else {
                    buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                }
                size += buffer.length;
                buffers.push(buffer);
            }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== undefined && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
            this[TYPE] = type;
        }
    }
    get size() {
        return this[BUFFER].length;
    }
    get type() {
        return this[TYPE];
    }
    text() {
        return Promise.resolve(this[BUFFER].toString());
    }
    arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
    }
    stream() {
        const readable = new Readable();
        readable._read = function() {};
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
    }
    toString() {
        return '[object Blob]';
    }
    slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === undefined) {
            relativeStart = 0;
        } else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        } else {
            relativeStart = Math.min(start, size);
        }
        if (end === undefined) {
            relativeEnd = size;
        } else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        } else {
            relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], {
            type: arguments[2]
        });
        blob[BUFFER] = slicedBuffer;
        return blob;
    }
}
Object.defineProperties(Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
    value: 'Blob',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */ /**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */ function FetchError(message, type, systemError) {
    Error.call(this, message);
    this.message = message;
    this.type = type;
    // when err.type is `system`, err.code contains system error code
    if (systemError) {
        this.code = this.errno = systemError.code;
    }
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';
let convert;
try {
    convert = (()=>{
        const e = new Error("Cannot find module 'encoding'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })().convert;
} catch (e) {}
const INTERNALS = Symbol('Body internals');
// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].PassThrough;
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ function Body(body) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$size = _ref.size;
    let size = _ref$size === undefined ? 0 : _ref$size;
    var _ref$timeout = _ref.timeout;
    let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
    if (body == null) {
        // body is undefined or null
        body = null;
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        body = Buffer.from(body.toString());
    } else if (isBlob(body)) ;
    else if (Buffer.isBuffer(body)) ;
    else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) ;
    else {
        // none of the above
        // coerce to string then buffer
        body = Buffer.from(String(body));
    }
    this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
    };
    this.size = size;
    this.timeout = timeout;
    if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) {
        body.on('error', function(err) {
            const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
            _this[INTERNALS].error = error;
        });
    }
}
Body.prototype = {
    get body () {
        return this[INTERNALS].body;
    },
    get bodyUsed () {
        return this[INTERNALS].disturbed;
    },
    /**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */ arrayBuffer () {
        return consumeBody.call(this).then(function(buf) {
            return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
    },
    /**
  * Return raw response as Blob
  *
  * @return Promise
  */ blob () {
        let ct = this.headers && this.headers.get('content-type') || '';
        return consumeBody.call(this).then(function(buf) {
            return Object.assign(// Prevent copying
            new Blob([], {
                type: ct.toLowerCase()
            }), {
                [BUFFER]: buf
            });
        });
    },
    /**
  * Decode response as json
  *
  * @return  Promise
  */ json () {
        var _this2 = this;
        return consumeBody.call(this).then(function(buffer) {
            try {
                return JSON.parse(buffer.toString());
            } catch (err) {
                return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
            }
        });
    },
    /**
  * Decode response as text
  *
  * @return  Promise
  */ text () {
        return consumeBody.call(this).then(function(buffer) {
            return buffer.toString();
        });
    },
    /**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */ buffer () {
        return consumeBody.call(this);
    },
    /**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */ textConverted () {
        var _this3 = this;
        return consumeBody.call(this).then(function(buffer) {
            return convertBody(buffer, _this3.headers);
        });
    }
};
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});
Body.mixIn = function(proto) {
    for (const name of Object.getOwnPropertyNames(Body.prototype)){
        // istanbul ignore else: future proof
        if (!(name in proto)) {
            const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
            Object.defineProperty(proto, name, desc);
        }
    }
};
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */ function consumeBody() {
    var _this4 = this;
    if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[INTERNALS].disturbed = true;
    if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error);
    }
    let body = this.body;
    // body is null
    if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is blob
    if (isBlob(body)) {
        body = body.stream();
    }
    // body is buffer
    if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body);
    }
    // istanbul ignore if: should never happen
    if (!(body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"])) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is stream
    // get ready to actually consume the body
    let accum = [];
    let accumBytes = 0;
    let abort = false;
    return new Body.Promise(function(resolve, reject) {
        let resTimeout;
        // allow timeout on slow response body
        if (_this4.timeout) {
            resTimeout = setTimeout(function() {
                abort = true;
                reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
            }, _this4.timeout);
        }
        // handle stream errors
        body.on('error', function(err) {
            if (err.name === 'AbortError') {
                // if the request was aborted, reject with this Error
                abort = true;
                reject(err);
            } else {
                // other errors, such as incorrect content-encoding
                reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
        body.on('data', function(chunk) {
            if (abort || chunk === null) {
                return;
            }
            if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
                return;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        });
        body.on('end', function() {
            if (abort) {
                return;
            }
            clearTimeout(resTimeout);
            try {
                resolve(Buffer.concat(accum, accumBytes));
            } catch (err) {
                // handle streams that have accumulated too much data (issue #414)
                reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
    });
}
/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */ function convertBody(buffer, headers) {
    if (typeof convert !== 'function') {
        throw new Error('The package `encoding` must be installed to use the textConverted() function');
    }
    const ct = headers.get('content-type');
    let charset = 'utf-8';
    let res, str;
    // header
    if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
    }
    // no charset in content type, peek at response body for at most 1024 bytes
    str = buffer.slice(0, 1024).toString();
    // html5
    if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    }
    // html4
    if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
            res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
            if (res) {
                res.pop(); // drop last quote
            }
        }
        if (res) {
            res = /charset=(.*)/i.exec(res.pop());
        }
    }
    // xml
    if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    }
    // found charset
    if (res) {
        charset = res.pop();
        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') {
            charset = 'gb18030';
        }
    }
    // turn raw buffers into a single utf-8 buffer
    return convert(buffer, 'UTF-8', charset).toString();
}
/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */ function isURLSearchParams(obj) {
    // Duck-typing as a necessary condition.
    if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
        return false;
    }
    // Brand-checking and more duck-typing as optional condition.
    return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}
/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */ function isBlob(obj) {
    return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */ function clone(instance) {
    let p1, p2;
    let body = instance.body;
    // don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used');
    }
    // check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"] && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new PassThrough();
        p2 = new PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        // set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1;
        body = p2;
    }
    return body;
}
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */ function extractContentType(body) {
    if (body === null) {
        // body is null
        return null;
    } else if (typeof body === 'string') {
        // body is string
        return 'text/plain;charset=UTF-8';
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        return 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if (isBlob(body)) {
        // body is blob
        return body.type || null;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return null;
    } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        return null;
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        return null;
    } else if (typeof body.getBoundary === 'function') {
        // detect form data input from form-data module
        return `multipart/form-data;boundary=${body.getBoundary()}`;
    } else if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) {
        // body is stream
        // can't really do much about this
        return null;
    } else {
        // Body constructor defaults other things to string
        return 'text/plain;charset=UTF-8';
    }
}
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */ function getTotalBytes(instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        return 0;
    } else if (isBlob(body)) {
        return body.size;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return body.length;
    } else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
        body.hasKnownLength && body.hasKnownLength()) {
            // 2.x
            return body.getLengthSync();
        }
        return null;
    } else {
        // body is stream
        return null;
    }
}
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */ function writeToStream(dest, instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        dest.end();
    } else if (isBlob(body)) {
        body.stream().pipe(dest);
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body);
        dest.end();
    } else {
        // body is stream
        body.pipe(dest);
    }
}
// expose Promise
Body.Promise = ("TURBOPACK ident replacement", globalThis).Promise;
/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */ const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(name) {
    name = `${name}`;
    if (invalidTokenRegex.test(name) || name === '') {
        throw new TypeError(`${name} is not a legal HTTP header name`);
    }
}
function validateValue(value) {
    value = `${value}`;
    if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
    }
}
/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */ function find(map, name) {
    name = name.toLowerCase();
    for(const key in map){
        if (key.toLowerCase() === name) {
            return key;
        }
    }
    return undefined;
}
const MAP = Symbol('map');
class Headers {
    /**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */ constructor(){
        let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[MAP] = Object.create(null);
        if (init instanceof Headers) {
            const rawHeaders = init.raw();
            const headerNames = Object.keys(rawHeaders);
            for (const headerName of headerNames){
                for (const value of rawHeaders[headerName]){
                    this.append(headerName, value);
                }
            }
            return;
        }
        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null) ;
        else if (typeof init === 'object') {
            const method = init[Symbol.iterator];
            if (method != null) {
                if (typeof method !== 'function') {
                    throw new TypeError('Header pairs must be iterable');
                }
                // sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                const pairs = [];
                for (const pair of init){
                    if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
                        throw new TypeError('Each header pair must be iterable');
                    }
                    pairs.push(Array.from(pair));
                }
                for (const pair of pairs){
                    if (pair.length !== 2) {
                        throw new TypeError('Each header pair must be a name/value tuple');
                    }
                    this.append(pair[0], pair[1]);
                }
            } else {
                // record<ByteString, ByteString>
                for (const key of Object.keys(init)){
                    const value = init[key];
                    this.append(key, value);
                }
            }
        } else {
            throw new TypeError('Provided initializer must be an object');
        }
    }
    /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */ get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === undefined) {
            return null;
        }
        return this[MAP][key].join(', ');
    }
    /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */ forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let pairs = getHeaders(this);
        let i = 0;
        while(i < pairs.length){
            var _pairs$i = pairs[i];
            const name = _pairs$i[0], value = _pairs$i[1];
            callback.call(thisArg, value, name, this);
            pairs = getHeaders(this);
            i++;
        }
    }
    /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== undefined ? key : name] = [
            value
        ];
    }
    /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            this[MAP][key].push(value);
        } else {
            this[MAP][name] = [
                value
            ];
        }
    }
    /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */ has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== undefined;
    }
    /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */ delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            delete this[MAP][key];
        }
    }
    /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */ raw() {
        return this[MAP];
    }
    /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */ keys() {
        return createHeadersIterator(this, 'key');
    }
    /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */ values() {
        return createHeadersIterator(this, 'value');
    }
    /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */ [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value');
    }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
    value: 'Headers',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Headers.prototype, {
    get: {
        enumerable: true
    },
    forEach: {
        enumerable: true
    },
    set: {
        enumerable: true
    },
    append: {
        enumerable: true
    },
    has: {
        enumerable: true
    },
    delete: {
        enumerable: true
    },
    keys: {
        enumerable: true
    },
    values: {
        enumerable: true
    },
    entries: {
        enumerable: true
    }
});
function getHeaders(headers) {
    let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
    const keys = Object.keys(headers[MAP]).sort();
    return keys.map(kind === 'key' ? function(k) {
        return k.toLowerCase();
    } : kind === 'value' ? function(k) {
        return headers[MAP][k].join(', ');
    } : function(k) {
        return [
            k.toLowerCase(),
            headers[MAP][k].join(', ')
        ];
    });
}
const INTERNAL = Symbol('internal');
function createHeadersIterator(target, kind) {
    const iterator = Object.create(HeadersIteratorPrototype);
    iterator[INTERNAL] = {
        target,
        kind,
        index: 0
    };
    return iterator;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
    next () {
        // istanbul ignore if
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
            throw new TypeError('Value of `this` is not a HeadersIterator');
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index >= len) {
            return {
                value: undefined,
                done: true
            };
        }
        this[INTERNAL].index = index + 1;
        return {
            value: values[index],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
    value: 'HeadersIterator',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */ function exportNodeCompatibleHeaders(headers) {
    const obj = Object.assign({
        __proto__: null
    }, headers[MAP]);
    // http.request() only supports string as Host header. This hack makes
    // specifying custom Host header possible.
    const hostHeaderKey = find(headers[MAP], 'Host');
    if (hostHeaderKey !== undefined) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
    }
    return obj;
}
/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */ function createHeadersLenient(obj) {
    const headers = new Headers();
    for (const name of Object.keys(obj)){
        if (invalidTokenRegex.test(name)) {
            continue;
        }
        if (Array.isArray(obj[name])) {
            for (const val of obj[name]){
                if (invalidHeaderCharRegex.test(val)) {
                    continue;
                }
                if (headers[MAP][name] === undefined) {
                    headers[MAP][name] = [
                        val
                    ];
                } else {
                    headers[MAP][name].push(val);
                }
            }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers[MAP][name] = [
                obj[name]
            ];
        }
    }
    return headers;
}
const INTERNALS$1 = Symbol('Response internals');
// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["default"].STATUS_CODES;
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class Response {
    constructor(){
        let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers(opts.headers);
        if (body != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(body);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        this[INTERNALS$1] = {
            url: opts.url,
            status,
            statusText: opts.statusText || STATUS_CODES[status],
            headers,
            counter: opts.counter
        };
    }
    get url() {
        return this[INTERNALS$1].url || '';
    }
    get status() {
        return this[INTERNALS$1].status;
    }
    /**
  * Convenience property representing if the request ended normally
  */ get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    }
    get redirected() {
        return this[INTERNALS$1].counter > 0;
    }
    get statusText() {
        return this[INTERNALS$1].statusText;
    }
    get headers() {
        return this[INTERNALS$1].headers;
    }
    /**
  * Clone this response
  *
  * @return  Response
  */ clone() {
        return new Response(clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}
Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
    value: 'Response',
    writable: false,
    enumerable: false,
    configurable: true
});
const INTERNALS$2 = Symbol('Request internals');
const URL = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].URL;
// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].parse;
const format_url = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].format;
/**
 * Wrapper around `new URL` to handle arbitrary URLs
 *
 * @param  {string} urlStr
 * @return {void}
 */ function parseURL(urlStr) {
    /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */ if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString();
    }
    // Fallback to old implementation for arbitrary URLs
    return parse_url(urlStr);
}
const streamDestructionSupported = 'destroy' in __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable.prototype;
/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */ function isRequest(input) {
    return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}
function isAbortSignal(signal) {
    const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
    return !!(proto && proto.constructor.name === 'AbortSignal');
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ class Request {
    constructor(input){
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let parsedURL;
        // normalize input
        if (!isRequest(input)) {
            if (input && input.href) {
                // in order to support Node.js' Url objects; though WHATWG's URL objects
                // will fall into this branch also (since their `toString()` will return
                // `href` property anyway)
                parsedURL = parseURL(input.href);
            } else {
                // coerce input to a string before attempting to parse
                parsedURL = parseURL(`${input}`);
            }
            input = {};
        } else {
            parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || 'GET';
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(inputBody);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ('signal' in init) signal = init.signal;
        if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal');
        }
        this[INTERNALS$2] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal
        };
        // node-fetch-only options
        this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
        this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
    }
    get method() {
        return this[INTERNALS$2].method;
    }
    get url() {
        return format_url(this[INTERNALS$2].parsedURL);
    }
    get headers() {
        return this[INTERNALS$2].headers;
    }
    get redirect() {
        return this[INTERNALS$2].redirect;
    }
    get signal() {
        return this[INTERNALS$2].signal;
    }
    /**
  * Clone this request
  *
  * @return  Request
  */ clone() {
        return new Request(this);
    }
}
Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
    value: 'Request',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ function getNodeRequestOptions(request) {
    const parsedURL = request[INTERNALS$2].parsedURL;
    const headers = new Headers(request[INTERNALS$2].headers);
    // fetch step 1.3
    if (!headers.has('Accept')) {
        headers.set('Accept', '*/*');
    }
    // Basic fetch
    if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError('Only absolute URLs are supported');
    }
    if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported');
    }
    if (request.signal && request.body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable && !streamDestructionSupported) {
        throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = '0';
    }
    if (request.body != null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === 'number') {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate');
    }
    let agent = request.agent;
    if (typeof agent === 'function') {
        agent = agent(parsedURL);
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
    });
}
/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */ /**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */ function AbortError(message) {
    Error.call(this, message);
    this.type = 'aborted';
    this.message = message;
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';
const URL$1 = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].URL;
// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].PassThrough;
const isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
    const orig = new URL$1(original).hostname;
    const dest = new URL$1(destination).hostname;
    return orig === dest || orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest);
};
/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const isSameProtocol = function isSameProtocol(destination, original) {
    const orig = new URL$1(original).protocol;
    const dest = new URL$1(destination).protocol;
    return orig === dest;
};
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */ function fetch(url, opts) {
    // allow custom promise
    if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
    }
    Body.Promise = fetch.Promise;
    // wrap http.request into fetch
    return new fetch.Promise(function(resolve, reject) {
        // build request object
        const request = new Request(url, opts);
        const options = getNodeRequestOptions(request);
        const send = (options.protocol === 'https:' ? __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__["default"] : __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["default"]).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort() {
            let error = new AbortError('The user aborted a request.');
            reject(error);
            if (request.body && request.body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable) {
                destroyStream(request.body, error);
            }
            if (!response || !response.body) return;
            response.body.emit('error', error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = function abortAndFinalize() {
            abort();
            finalize();
        };
        // send request
        const req = send(options);
        let reqTimeout;
        if (signal) {
            signal.addEventListener('abort', abortAndFinalize);
        }
        function finalize() {
            req.abort();
            if (signal) signal.removeEventListener('abort', abortAndFinalize);
            clearTimeout(reqTimeout);
        }
        if (request.timeout) {
            req.once('socket', function(socket) {
                reqTimeout = setTimeout(function() {
                    reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
                    finalize();
                }, request.timeout);
            });
        }
        req.on('error', function(err) {
            reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
            if (response && response.body) {
                destroyStream(response.body, err);
            }
            finalize();
        });
        fixResponseChunkedTransferBadEnding(req, function(err) {
            if (signal && signal.aborted) {
                return;
            }
            if (response && response.body) {
                destroyStream(response.body, err);
            }
        });
        /* c8 ignore next 18 */ if (parseInt(process.version.substring(1)) < 14) {
            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
            // properly handle when the socket close/end events are out of order.
            req.on('socket', function(s) {
                s.addListener('close', function(hadError) {
                    // if a data listener is still present we didn't end cleanly
                    const hasDataListener = s.listenerCount('data') > 0;
                    // if end happened before close but the socket didn't emit an error, do it now
                    if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                        const err = new Error('Premature close');
                        err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                        response.body.emit('error', err);
                    }
                });
            });
        }
        req.on('response', function(res) {
            clearTimeout(reqTimeout);
            const headers = createHeadersLenient(res.headers);
            // HTTP fetch step 5
            if (fetch.isRedirect(res.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new URL$1(location, request.url).toString();
                } catch (err) {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== 'manual') {
                        reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case 'error':
                        reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
                        finalize();
                        return;
                    case 'manual':
                        // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                        if (locationURL !== null) {
                            // handle corrupted header
                            try {
                                headers.set('Location', locationURL);
                            } catch (err) {
                                // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                                reject(err);
                            }
                        }
                        break;
                    case 'follow':
                        // HTTP-redirect fetch step 2
                        if (locationURL === null) {
                            break;
                        }
                        // HTTP-redirect fetch step 5
                        if (request.counter >= request.follow) {
                            reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 6 (counter increment)
                        // Create a new Request object.
                        const requestOpts = {
                            headers: new Headers(request.headers),
                            follow: request.follow,
                            counter: request.counter + 1,
                            agent: request.agent,
                            compress: request.compress,
                            method: request.method,
                            body: request.body,
                            signal: request.signal,
                            timeout: request.timeout,
                            size: request.size
                        };
                        if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                            for (const name of [
                                'authorization',
                                'www-authenticate',
                                'cookie',
                                'cookie2'
                            ]){
                                requestOpts.headers.delete(name);
                            }
                        }
                        // HTTP-redirect fetch step 9
                        if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                            reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 11
                        if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
                            requestOpts.method = 'GET';
                            requestOpts.body = undefined;
                            requestOpts.headers.delete('content-length');
                        }
                        // HTTP-redirect fetch step 15
                        resolve(fetch(new Request(locationURL, requestOpts)));
                        finalize();
                        return;
                }
            }
            // prepare response
            res.once('end', function() {
                if (signal) signal.removeEventListener('abort', abortAndFinalize);
            });
            let body = res.pipe(new PassThrough$1());
            const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding');
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].Z_SYNC_FLUSH,
                finishFlush: __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].Z_SYNC_FLUSH
            };
            // for gzip
            if (codings == 'gzip' || codings == 'x-gzip') {
                body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createGunzip(zlibOptions));
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // for deflate
            if (codings == 'deflate' || codings == 'x-deflate') {
                // handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = res.pipe(new PassThrough$1());
                raw.once('data', function(chunk) {
                    // see http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) {
                        body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createInflate());
                    } else {
                        body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createInflateRaw());
                    }
                    response = new Response(body, response_options);
                    resolve(response);
                });
                raw.on('end', function() {
                    // some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                    if (!response) {
                        response = new Response(body, response_options);
                        resolve(response);
                    }
                });
                return;
            }
            // for br
            if (codings == 'br' && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createBrotliDecompress === 'function') {
                body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createBrotliDecompress());
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // otherwise, use response as-is
            response = new Response(body, response_options);
            resolve(response);
        });
        writeToStream(req, request);
    });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    let socket;
    request.on('socket', function(s) {
        socket = s;
    });
    request.on('response', function(response) {
        const headers = response.headers;
        if (headers['transfer-encoding'] === 'chunked' && !headers['content-length']) {
            response.once('close', function(hadError) {
                // tests for socket presence, as in some situations the
                // the 'socket' event is not triggered for the request
                // (happens in deno), avoids `TypeError`
                // if a data listener is still present we didn't end cleanly
                const hasDataListener = socket && socket.listenerCount('data') > 0;
                if (hasDataListener && !hadError) {
                    const err = new Error('Premature close');
                    err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                    errorCallback(err);
                }
            });
        }
    });
}
function destroyStream(stream, err) {
    if (stream.destroy) {
        stream.destroy(err);
    } else {
        // node < 8
        stream.emit('error', err);
        stream.end();
    }
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */ fetch.isRedirect = function(code) {
    return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};
// expose Promise
fetch.Promise = ("TURBOPACK ident replacement", globalThis).Promise;
const __TURBOPACK__default__export__ = fetch;
;
}),
"[project]/node_modules/url-join/lib/url-join.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
(function(name, context, definition) {
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) module.exports = definition();
    else if (typeof define === 'function' && define.amd) ((r)=>r !== undefined && __turbopack_context__.v(r))(definition(__turbopack_context__.r, exports, module));
    else context[name] = definition();
})('urljoin', ("TURBOPACK member replacement", __turbopack_context__.e), function() {
    function normalize(strArray) {
        var resultArray = [];
        if (strArray.length === 0) {
            return '';
        }
        if (typeof strArray[0] !== 'string') {
            throw new TypeError('Url must be a string. Received ' + strArray[0]);
        }
        // If the first part is a plain protocol, we combine it with the next part.
        if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
            var first = strArray.shift();
            strArray[0] = first + strArray[0];
        }
        // There must be two or three slashes in the file protocol, two slashes in anything else.
        if (strArray[0].match(/^file:\/\/\//)) {
            strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
        } else {
            strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
        }
        for(var i = 0; i < strArray.length; i++){
            var component = strArray[i];
            if (typeof component !== 'string') {
                throw new TypeError('Url must be a string. Received ' + component);
            }
            if (component === '') {
                continue;
            }
            if (i > 0) {
                // Removing the starting slashes for each component but the first.
                component = component.replace(/^[\/]+/, '');
            }
            if (i < strArray.length - 1) {
                // Removing the ending slashes for each component but the last.
                component = component.replace(/[\/]+$/, '');
            } else {
                // For the last component we will combine multiple slashes to a single one.
                component = component.replace(/[\/]+$/, '/');
            }
            resultArray.push(component);
        }
        var str = resultArray.join('/');
        // Each input component is now separated by a single slash except the possible first plain protocol part.
        // remove trailing slash before parameters or hash
        str = str.replace(/\/(\?|&|#[^!])/g, '$1');
        // replace ? in parameters with &
        var parts = str.split('?');
        str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
        return str;
    }
    return function() {
        var input;
        if (typeof arguments[0] === 'object') {
            input = arguments[0];
        } else {
            input = [].slice.call(arguments);
        }
        return normalize(input);
    };
});
}}),
"[project]/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>rng
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}),
"[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "unsafeStringify": ()=>unsafeStringify
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/uuid/dist/esm-node/v1.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)"); // **`v1()` - Generate time-based UUID**
;
;
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [
                seedBytes[0] | 0x01,
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
        }
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    } // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v1;
}),
"[project]/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
const __TURBOPACK__default__export__ = parse;
}),
"[project]/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DNS": ()=>DNS,
    "URL": ()=>URL,
    "default": ()=>v35
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}),
"[project]/node_modules/uuid/dist/esm-node/md5.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function md5(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5').update(bytes).digest();
}
const __TURBOPACK__default__export__ = md5;
}),
"[project]/node_modules/uuid/dist/esm-node/v3.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/md5.js [app-rsc] (ecmascript)");
;
;
const v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('v3', 0x30, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v3;
}),
"[project]/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/uuid/dist/esm-node/sha1.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(bytes).digest();
}
const __TURBOPACK__default__export__ = sha1;
}),
"[project]/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/sha1.js [app-rsc] (ecmascript)");
;
;
const v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}),
"[project]/node_modules/uuid/dist/esm-node/nil.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const __TURBOPACK__default__export__ = '00000000-0000-0000-0000-000000000000';
}),
"[project]/node_modules/uuid/dist/esm-node/version.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
function version(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.slice(14, 15), 16);
}
const __TURBOPACK__default__export__ = version;
}),
"[project]/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "NIL": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "parse": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "stringify": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v1": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v3": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v4": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "v5": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "validate": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "version": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v1.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/nil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/version.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "NIL": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NIL"],
    "parse": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parse"],
    "stringify": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stringify"],
    "v1": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["v1"],
    "v3": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["v3"],
    "v4": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["v4"],
    "v5": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["v5"],
    "validate": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["validate"],
    "version": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["version"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <exports>");
}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "unsafeStringify": ()=>unsafeStringify
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript) <export default as stringify>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "stringify": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>rng
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
/**
 * UUID V7 - Unix Epoch time-based UUID
 *
 * The IETF has published RFC9562, introducing 3 new UUID versions (6,7,8). This
 * implementation of V7 is based on the accepted, though not yet approved,
 * revisions.
 *
 * RFC 9562:https://www.rfc-editor.org/rfc/rfc9562.html Universally Unique
 * IDentifiers (UUIDs)

 *
 * Sample V7 value:
 * https://www.rfc-editor.org/rfc/rfc9562.html#name-example-of-a-uuidv7-value
 *
 * Monotonic Bit Layout: RFC rfc9562.6.2 Method 1, Dedicated Counter Bits ref:
 *     https://www.rfc-editor.org/rfc/rfc9562.html#section-6.2-5.1
 *
 *   0                   1                   2                   3 0 1 2 3 4 5 6
 *   7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                          unix_ts_ms                           |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |          unix_ts_ms           |  ver  |        seq_hi         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |var|               seq_low               |        rand         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                             rand                              |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * seq is a 31 bit serialized counter; comprised of 12 bit seq_hi and 19 bit
 * seq_low, and randomly initialized upon timestamp change. 31 bit counter size
 * was selected as any bitwise operations in node are done as _signed_ 32 bit
 * ints. we exclude the sign bit.
 */ let _seqLow = null;
let _seqHigh = null;
let _msecs = 0;
function v7(options, buf, offset) {
    options = options || {};
    // initialize buffer and pointer
    let i = buf && offset || 0;
    const b = buf || new Uint8Array(16);
    // rnds is Uint8Array(16) filled with random bytes
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    // milliseconds since unix epoch, 1970-01-01 00:00
    const msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // seq is user provided 31 bit counter
    let seq = options.seq !== undefined ? options.seq : null;
    // initialize local seq high/low parts
    let seqHigh = _seqHigh;
    let seqLow = _seqLow;
    // check if clock has advanced and user has not provided msecs
    if (msecs > _msecs && options.msecs === undefined) {
        _msecs = msecs;
        // unless user provided seq, reset seq parts
        if (seq !== null) {
            seqHigh = null;
            seqLow = null;
        }
    }
    // if we have a user provided seq
    if (seq !== null) {
        // trim provided seq to 31 bits of value, avoiding overflow
        if (seq > 0x7fffffff) {
            seq = 0x7fffffff;
        }
        // split provided seq into high/low parts
        seqHigh = seq >>> 19 & 0xfff;
        seqLow = seq & 0x7ffff;
    }
    // randomly initialize seq
    if (seqHigh === null || seqLow === null) {
        seqHigh = rnds[6] & 0x7f;
        seqHigh = seqHigh << 8 | rnds[7];
        seqLow = rnds[8] & 0x3f; // pad for var
        seqLow = seqLow << 8 | rnds[9];
        seqLow = seqLow << 5 | rnds[10] >>> 3;
    }
    // increment seq if within msecs window
    if (msecs + 10000 > _msecs && seq === null) {
        if (++seqLow > 0x7ffff) {
            seqLow = 0;
            if (++seqHigh > 0xfff) {
                seqHigh = 0;
                // increment internal _msecs. this allows us to continue incrementing
                // while staying monotonic. Note, once we hit 10k milliseconds beyond system
                // clock, we will reset breaking monotonicity (after (2^31)*10000 generations)
                _msecs++;
            }
        }
    } else {
        // resetting; we have advanced more than
        // 10k milliseconds beyond system clock
        _msecs = msecs;
    }
    _seqHigh = seqHigh;
    _seqLow = seqLow;
    // [bytes 0-5] 48 bits of local timestamp
    b[i++] = _msecs / 0x10000000000 & 0xff;
    b[i++] = _msecs / 0x100000000 & 0xff;
    b[i++] = _msecs / 0x1000000 & 0xff;
    b[i++] = _msecs / 0x10000 & 0xff;
    b[i++] = _msecs / 0x100 & 0xff;
    b[i++] = _msecs & 0xff;
    // [byte 6] - set 4 bits of version (7) with first 4 bits seq_hi
    b[i++] = seqHigh >>> 4 & 0x0f | 0x70;
    // [byte 7] remaining 8 bits of seq_hi
    b[i++] = seqHigh & 0xff;
    // [byte 8] - variant (2 bits), first 6 bits seq_low
    b[i++] = seqLow >>> 13 & 0x3f | 0x80;
    // [byte 9] 8 bits seq_low
    b[i++] = seqLow >>> 5 & 0xff;
    // [byte 10] remaining 5 bits seq_low, 3 bits random
    b[i++] = seqLow << 3 & 0xff | rnds[10] & 0x07;
    // [bytes 11-15] always random
    b[i++] = rnds[11];
    b[i++] = rnds[12];
    b[i++] = rnds[13];
    b[i++] = rnds[14];
    b[i++] = rnds[15];
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v7;
}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript) <export default as v7>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "v7": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@humeai/voice-react/dist/index.mjs [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s({
    "AudioEncoding": ()=>AudioEncoding,
    "Channels": ()=>Channels,
    "LanguageModelOption": ()=>LanguageModelOption,
    "SocketFailedToParseMessageError": ()=>SocketFailedToParseMessageError,
    "SocketUnknownMessageError": ()=>SocketUnknownMessageError,
    "TTSService": ()=>TTSService,
    "TimeSliceSchema": ()=>TimeSliceSchema,
    "VoiceProvider": ()=>VoiceProvider,
    "VoiceReadyState": ()=>VoiceReadyState,
    "isSocketFailedToParseMessageError": ()=>isSocketFailedToParseMessageError,
    "isSocketUnknownMessageError": ()=>isSocketUnknownMessageError,
    "parseMessageData": ()=>parseMessageData,
    "parseMessageType": ()=>parseMessageType,
    "useMicrophone": ()=>useMicrophone,
    "useMicrophoneStream": ()=>useMicrophoneStream,
    "useSoundPlayer": ()=>useSoundPlayer,
    "useVoice": ()=>useVoice,
    "useVoiceClient": ()=>useVoiceClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AudioEncoding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AudioEncoding() from the server but AudioEncoding is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "AudioEncoding");
const Channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Channels() from the server but Channels is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "Channels");
const LanguageModelOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LanguageModelOption() from the server but LanguageModelOption is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "LanguageModelOption");
const SocketFailedToParseMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SocketFailedToParseMessageError() from the server but SocketFailedToParseMessageError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "SocketFailedToParseMessageError");
const SocketUnknownMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SocketUnknownMessageError() from the server but SocketUnknownMessageError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "SocketUnknownMessageError");
const TTSService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TTSService() from the server but TTSService is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "TTSService");
const TimeSliceSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TimeSliceSchema() from the server but TimeSliceSchema is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "TimeSliceSchema");
const VoiceProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VoiceProvider() from the server but VoiceProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "VoiceProvider");
const VoiceReadyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VoiceReadyState() from the server but VoiceReadyState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "VoiceReadyState");
const isSocketFailedToParseMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isSocketFailedToParseMessageError() from the server but isSocketFailedToParseMessageError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "isSocketFailedToParseMessageError");
const isSocketUnknownMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isSocketUnknownMessageError() from the server but isSocketUnknownMessageError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "isSocketUnknownMessageError");
const parseMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call parseMessageData() from the server but parseMessageData is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "parseMessageData");
const parseMessageType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call parseMessageType() from the server but parseMessageType is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "parseMessageType");
const useMicrophone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useMicrophone() from the server but useMicrophone is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "useMicrophone");
const useMicrophoneStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useMicrophoneStream() from the server but useMicrophoneStream is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "useMicrophoneStream");
const useSoundPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSoundPlayer() from the server but useSoundPlayer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "useSoundPlayer");
const useVoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useVoice() from the server but useVoice is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "useVoice");
const useVoiceClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useVoiceClient() from the server but useVoiceClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs <module evaluation>", "useVoiceClient");
}),
"[project]/node_modules/@humeai/voice-react/dist/index.mjs [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s({
    "AudioEncoding": ()=>AudioEncoding,
    "Channels": ()=>Channels,
    "LanguageModelOption": ()=>LanguageModelOption,
    "SocketFailedToParseMessageError": ()=>SocketFailedToParseMessageError,
    "SocketUnknownMessageError": ()=>SocketUnknownMessageError,
    "TTSService": ()=>TTSService,
    "TimeSliceSchema": ()=>TimeSliceSchema,
    "VoiceProvider": ()=>VoiceProvider,
    "VoiceReadyState": ()=>VoiceReadyState,
    "isSocketFailedToParseMessageError": ()=>isSocketFailedToParseMessageError,
    "isSocketUnknownMessageError": ()=>isSocketUnknownMessageError,
    "parseMessageData": ()=>parseMessageData,
    "parseMessageType": ()=>parseMessageType,
    "useMicrophone": ()=>useMicrophone,
    "useMicrophoneStream": ()=>useMicrophoneStream,
    "useSoundPlayer": ()=>useSoundPlayer,
    "useVoice": ()=>useVoice,
    "useVoiceClient": ()=>useVoiceClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AudioEncoding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AudioEncoding() from the server but AudioEncoding is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "AudioEncoding");
const Channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Channels() from the server but Channels is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "Channels");
const LanguageModelOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LanguageModelOption() from the server but LanguageModelOption is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "LanguageModelOption");
const SocketFailedToParseMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SocketFailedToParseMessageError() from the server but SocketFailedToParseMessageError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "SocketFailedToParseMessageError");
const SocketUnknownMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SocketUnknownMessageError() from the server but SocketUnknownMessageError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "SocketUnknownMessageError");
const TTSService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TTSService() from the server but TTSService is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "TTSService");
const TimeSliceSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TimeSliceSchema() from the server but TimeSliceSchema is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "TimeSliceSchema");
const VoiceProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VoiceProvider() from the server but VoiceProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "VoiceProvider");
const VoiceReadyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VoiceReadyState() from the server but VoiceReadyState is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "VoiceReadyState");
const isSocketFailedToParseMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isSocketFailedToParseMessageError() from the server but isSocketFailedToParseMessageError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "isSocketFailedToParseMessageError");
const isSocketUnknownMessageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call isSocketUnknownMessageError() from the server but isSocketUnknownMessageError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "isSocketUnknownMessageError");
const parseMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call parseMessageData() from the server but parseMessageData is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "parseMessageData");
const parseMessageType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call parseMessageType() from the server but parseMessageType is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "parseMessageType");
const useMicrophone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useMicrophone() from the server but useMicrophone is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "useMicrophone");
const useMicrophoneStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useMicrophoneStream() from the server but useMicrophoneStream is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "useMicrophoneStream");
const useSoundPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSoundPlayer() from the server but useSoundPlayer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "useSoundPlayer");
const useVoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useVoice() from the server but useVoice is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "useVoice");
const useVoiceClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useVoiceClient() from the server but useVoiceClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@humeai/voice-react/dist/index.mjs", "useVoiceClient");
}),
"[project]/node_modules/@humeai/voice-react/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/dist/index.mjs [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/dist/index.mjs [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/drizzle-orm/sql/functions/aggregate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "avg": ()=>avg,
    "avgDistinct": ()=>avgDistinct,
    "count": ()=>count,
    "countDistinct": ()=>countDistinct,
    "max": ()=>max,
    "min": ()=>min,
    "sum": ()=>sum,
    "sumDistinct": ()=>sumDistinct
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/column.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/entity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
;
;
;
function count(expression) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`count(${expression || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw("*")})`.mapWith(Number);
}
function countDistinct(expression) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`count(distinct ${expression})`.mapWith(Number);
}
function avg(expression) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`avg(${expression})`.mapWith(String);
}
function avgDistinct(expression) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`avg(distinct ${expression})`.mapWith(String);
}
function sum(expression) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`sum(${expression})`.mapWith(String);
}
function sumDistinct(expression) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`sum(distinct ${expression})`.mapWith(String);
}
function max(expression) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`max(${expression})`.mapWith((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["is"])(expression, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Column"]) ? expression : String);
}
function min(expression) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`min(${expression})`.mapWith((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["is"])(expression, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$column$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Column"]) ? expression : String);
}
;
 //# sourceMappingURL=aggregate.js.map
}),
"[project]/node_modules/typeid-js/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/typeid.ts
__turbopack_context__.s({
    "TypeID": ()=>TypeID,
    "fromString": ()=>fromString,
    "fromUUID": ()=>fromUUID,
    "fromUUIDBytes": ()=>fromUUIDBytes,
    "getSuffix": ()=>getSuffix,
    "getType": ()=>getType,
    "parseTypeId": ()=>parseTypeId,
    "toUUID": ()=>toUUID,
    "toUUIDBytes": ()=>toUUIDBytes,
    "typeid": ()=>typeid,
    "typeidUnboxed": ()=>typeidUnboxed
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__ = __turbopack_context__.i("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript) <export default as stringify>");
// src/unboxed/typeid.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v7$3e$__ = __turbopack_context__.i("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript) <export default as v7>");
;
// src/parse_uuid.ts
function parseUUID(uuid) {
    let v;
    const arr = new Uint8Array(16);
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 255;
    arr[2] = v >>> 8 & 255;
    arr[3] = v & 255;
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255;
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255;
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255;
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v / 4294967296 & 255;
    arr[12] = v >>> 24 & 255;
    arr[13] = v >>> 16 & 255;
    arr[14] = v >>> 8 & 255;
    arr[15] = v & 255;
    return arr;
}
// src/base32.ts
var alphabet = "0123456789abcdefghjkmnpqrstvwxyz";
var dec = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    255,
    18,
    19,
    255,
    20,
    21,
    255,
    22,
    23,
    24,
    25,
    26,
    255,
    27,
    28,
    29,
    30,
    31,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255
]);
function encode(src) {
    const dst = new Array(26).fill("");
    if (src.length !== 16) {
        throw new Error(`Invalid length. Expected 16 bytes, got ${src.length}. Input: ${src}`);
    }
    dst[0] = alphabet[(src[0] & 224) >> 5];
    dst[1] = alphabet[src[0] & 31];
    dst[2] = alphabet[(src[1] & 248) >> 3];
    dst[3] = alphabet[(src[1] & 7) << 2 | (src[2] & 192) >> 6];
    dst[4] = alphabet[(src[2] & 62) >> 1];
    dst[5] = alphabet[(src[2] & 1) << 4 | (src[3] & 240) >> 4];
    dst[6] = alphabet[(src[3] & 15) << 1 | (src[4] & 128) >> 7];
    dst[7] = alphabet[(src[4] & 124) >> 2];
    dst[8] = alphabet[(src[4] & 3) << 3 | (src[5] & 224) >> 5];
    dst[9] = alphabet[src[5] & 31];
    dst[10] = alphabet[(src[6] & 248) >> 3];
    dst[11] = alphabet[(src[6] & 7) << 2 | (src[7] & 192) >> 6];
    dst[12] = alphabet[(src[7] & 62) >> 1];
    dst[13] = alphabet[(src[7] & 1) << 4 | (src[8] & 240) >> 4];
    dst[14] = alphabet[(src[8] & 15) << 1 | (src[9] & 128) >> 7];
    dst[15] = alphabet[(src[9] & 124) >> 2];
    dst[16] = alphabet[(src[9] & 3) << 3 | (src[10] & 224) >> 5];
    dst[17] = alphabet[src[10] & 31];
    dst[18] = alphabet[(src[11] & 248) >> 3];
    dst[19] = alphabet[(src[11] & 7) << 2 | (src[12] & 192) >> 6];
    dst[20] = alphabet[(src[12] & 62) >> 1];
    dst[21] = alphabet[(src[12] & 1) << 4 | (src[13] & 240) >> 4];
    dst[22] = alphabet[(src[13] & 15) << 1 | (src[14] & 128) >> 7];
    dst[23] = alphabet[(src[14] & 124) >> 2];
    dst[24] = alphabet[(src[14] & 3) << 3 | (src[15] & 224) >> 5];
    dst[25] = alphabet[src[15] & 31];
    return dst.join("");
}
function decode(s) {
    if (s.length !== 26) {
        throw new Error(`Invalid length. Expected 26 bytes, got ${s.length}. Input: ${s}`);
    }
    const encoder = new TextEncoder();
    const v = encoder.encode(s);
    if (dec[v[0]] === 255 || dec[v[1]] === 255 || dec[v[2]] === 255 || dec[v[3]] === 255 || dec[v[4]] === 255 || dec[v[5]] === 255 || dec[v[6]] === 255 || dec[v[7]] === 255 || dec[v[8]] === 255 || dec[v[9]] === 255 || dec[v[10]] === 255 || dec[v[11]] === 255 || dec[v[12]] === 255 || dec[v[13]] === 255 || dec[v[14]] === 255 || dec[v[15]] === 255 || dec[v[16]] === 255 || dec[v[17]] === 255 || dec[v[18]] === 255 || dec[v[19]] === 255 || dec[v[20]] === 255 || dec[v[21]] === 255 || dec[v[22]] === 255 || dec[v[23]] === 255 || dec[v[24]] === 255 || dec[v[25]] === 255) {
        throw new Error("Invalid base32 character");
    }
    const id = new Uint8Array(16);
    id[0] = dec[v[0]] << 5 | dec[v[1]];
    id[1] = dec[v[2]] << 3 | dec[v[3]] >> 2;
    id[2] = (dec[v[3]] & 3) << 6 | dec[v[4]] << 1 | dec[v[5]] >> 4;
    id[3] = (dec[v[5]] & 15) << 4 | dec[v[6]] >> 1;
    id[4] = (dec[v[6]] & 1) << 7 | dec[v[7]] << 2 | dec[v[8]] >> 3;
    id[5] = (dec[v[8]] & 7) << 5 | dec[v[9]];
    id[6] = dec[v[10]] << 3 | dec[v[11]] >> 2;
    id[7] = (dec[v[11]] & 3) << 6 | dec[v[12]] << 1 | dec[v[13]] >> 4;
    id[8] = (dec[v[13]] & 15) << 4 | dec[v[14]] >> 1;
    id[9] = (dec[v[14]] & 1) << 7 | dec[v[15]] << 2 | dec[v[16]] >> 3;
    id[10] = (dec[v[16]] & 7) << 5 | dec[v[17]];
    id[11] = dec[v[18]] << 3 | dec[v[19]] >> 2;
    id[12] = (dec[v[19]] & 3) << 6 | dec[v[20]] << 1 | dec[v[21]] >> 4;
    id[13] = (dec[v[21]] & 15) << 4 | dec[v[22]] >> 1;
    id[14] = (dec[v[22]] & 1) << 7 | dec[v[23]] << 2 | dec[v[24]] >> 3;
    id[15] = (dec[v[24]] & 7) << 5 | dec[v[25]];
    return id;
}
;
// src/prefix.ts
function isValidPrefix(str) {
    if (str.length > 63) {
        return false;
    }
    let code;
    let i;
    let len;
    for(i = 0, len = str.length; i < len; i += 1){
        code = str.charCodeAt(i);
        const isLowerAtoZ = code > 96 && code < 123;
        const isUnderscore = code === 95;
        if ((i === 0 || i === len - 1) && !isLowerAtoZ) {
            return false;
        }
        if (!(isLowerAtoZ || isUnderscore)) {
            return false;
        }
    }
    return true;
}
// src/unboxed/error.ts
var InvalidPrefixError = class extends Error {
    constructor(prefix){
        super(`Invalid prefix "${prefix}". Must be at most 63 ASCII letters [a-z_]`);
        this.name = "InvalidPrefixError";
    }
};
var PrefixMismatchError = class extends Error {
    constructor(expected, actual){
        super(`Invalid TypeId. Prefix mismatch. Expected ${expected}, got ${actual}`);
        this.name = "PrefixMismatchError";
    }
};
var EmptyPrefixError = class extends Error {
    constructor(typeId){
        super(`Invalid TypeId. Prefix cannot be empty when there's a separator: ${typeId}`);
        this.name = "EmptyPrefixError";
    }
};
var InvalidSuffixLengthError = class extends Error {
    constructor(length){
        super(`Invalid length. Suffix should have 26 characters, got ${length}`);
        this.name = "InvalidSuffixLengthError";
    }
};
var InvalidSuffixCharacterError = class extends Error {
    constructor(firstChar){
        super(`Invalid suffix. First character "${firstChar}" must be in the range [0-7]`);
        this.name = "InvalidSuffixCharacterError";
    }
};
var TypeIDConversionError = class extends Error {
    constructor(actualPrefix, expectedPrefix){
        super(`Cannot convert TypeID of type ${actualPrefix} to type ${expectedPrefix}`);
        this.name = "TypeIDConversionError";
    }
};
// src/unboxed/typeid.ts
function typeidUnboxed(prefix = "", suffix = "") {
    if (!isValidPrefix(prefix)) {
        throw new InvalidPrefixError(prefix);
    }
    let finalSuffix;
    if (suffix) {
        finalSuffix = suffix;
    } else {
        const buffer = new Uint8Array(16);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v7$3e$__["v7"])(void 0, buffer);
        finalSuffix = encode(buffer);
    }
    if (finalSuffix.length !== 26) {
        throw new InvalidSuffixLengthError(finalSuffix.length);
    }
    if (finalSuffix[0] > "7") {
        throw new InvalidSuffixCharacterError(finalSuffix[0]);
    }
    decode(finalSuffix);
    if (prefix === "") {
        return finalSuffix;
    } else {
        return `${prefix}_${finalSuffix}`;
    }
}
function fromString(typeId, prefix) {
    let p;
    let s;
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        p = "";
        s = typeId;
    } else {
        p = typeId.substring(0, underscoreIndex);
        s = typeId.substring(underscoreIndex + 1);
        if (!p) {
            throw new EmptyPrefixError(typeId);
        }
    }
    if (!s) {
        throw new InvalidSuffixLengthError(0);
    }
    if (prefix && p !== prefix) {
        throw new PrefixMismatchError(prefix, p);
    }
    return typeidUnboxed(p, s);
}
function parseTypeId(typeId) {
    return {
        prefix: getType(typeId),
        suffix: getSuffix(typeId)
    };
}
function getType(typeId) {
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        return "";
    }
    return typeId.substring(0, underscoreIndex);
}
function getSuffix(typeId) {
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        return typeId;
    }
    return typeId.substring(underscoreIndex + 1);
}
function toUUIDBytes(typeId) {
    return decode(getSuffix(typeId));
}
function toUUID(typeId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__["stringify"])(toUUIDBytes(typeId));
}
function fromUUIDBytes(prefix, bytes) {
    const suffix = encode(bytes);
    return prefix ? `${prefix}_${suffix}` : suffix;
}
function fromUUID(uuid, prefix) {
    const suffix = encode(parseUUID(uuid));
    return prefix ? `${prefix}_${suffix}` : suffix;
}
// src/typeid.ts
var TypeID = class {
    constructor(prefix, suffix = ""){
        this.prefix = prefix;
        this.suffix = suffix;
        const typeIdRaw = typeidUnboxed(prefix, suffix);
        this.prefix = getType(typeIdRaw);
        this.suffix = getSuffix(typeIdRaw);
    }
    getType() {
        return this.prefix;
    }
    getSuffix() {
        return this.suffix;
    }
    asType(prefix) {
        const self = this;
        if (self.prefix !== prefix) {
            throw new TypeIDConversionError(self.prefix, prefix);
        }
        return self;
    }
    toUUIDBytes() {
        return decode(this.suffix);
    }
    toUUID() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__["stringify"])(this.toUUIDBytes());
    }
    toString() {
        if (this.prefix === "") {
            return this.suffix;
        }
        return `${this.prefix}_${this.suffix}`;
    }
    static fromString(str, prefix) {
        const typeIdRaw = fromString(str, prefix);
        return new TypeID(getType(typeIdRaw), getSuffix(typeIdRaw));
    }
    static fromUUIDBytes(prefix, bytes) {
        const suffix = encode(bytes);
        return new TypeID(prefix, suffix);
    }
    static fromUUID(prefix, uuid) {
        const suffix = encode(parseUUID(uuid));
        return new TypeID(prefix, suffix);
    }
};
function typeid(prefix = "", suffix = "") {
    return new TypeID(prefix, suffix);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@arcjet/analyze/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "detectBot": ()=>detectBot,
    "detectSensitiveInfo": ()=>detectSensitiveInfo,
    "generateFingerprint": ()=>generateFingerprint,
    "isValidEmail": ()=>isValidEmail,
    "matchFilters": ()=>matchFilters
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/analyze-wasm/index.js [app-rsc] (ecmascript)");
;
const FREE_EMAIL_PROVIDERS = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "aol.com",
    "hotmail.co.uk"
];
function noOpSensitiveInfoDetect() {
    return [];
}
function noOpBotsDetect() {
    return [];
}
function createCoreImports(detect) {
    if (typeof detect !== "function") {
        detect = noOpSensitiveInfoDetect;
    }
    return {
        "arcjet:js-req/bot-identifier": {
            detect: noOpBotsDetect
        },
        "arcjet:js-req/email-validator-overrides": {
            isFreeEmail (domain) {
                if (FREE_EMAIL_PROVIDERS.includes(domain)) {
                    return "yes";
                }
                return "unknown";
            },
            isDisposableEmail () {
                return "unknown";
            },
            hasMxRecords () {
                return "unknown";
            },
            hasGravatar () {
                return "unknown";
            }
        },
        "arcjet:js-req/filter-overrides": {
            ipLookup () {
                return undefined;
            }
        },
        // TODO(@wooorm-arcjet): figure out a test case for this with the default `detect`.
        "arcjet:js-req/sensitive-information-identifier": {
            detect
        },
        // TODO(@wooorm-arcjet): figure out a test case for this that calls `verify`.
        "arcjet:js-req/verify-bot": {
            verify () {
                return "unverifiable";
            }
        }
    };
}
/**
 * Generate a fingerprint.
 *
 * Fingerprints can be used to identify the client across multiple requests.
 *
 * This considers different things on the `request` based on the passed
 * `context.characteristics`.
 *
 * See [*Fingerprints* on
 * `docs.arcjet.com`](https://docs.arcjet.com/fingerprints/) for more info.
 *
 * @param context
 *   Context.
 * @param request
 *   Request.
 * @returns
 *   Promise for a SHA-256 fingerprint.
 */ async function generateFingerprint(context, request) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.generateFingerprint(JSON.stringify(request), context.characteristics);
    // Ignore the `else` branch as we test in places that have WebAssembly.
    /* node:coverage ignore next 4 */ }
    log.debug("WebAssembly is not supported in this runtime");
    return "";
}
/**
 * Check whether an email is valid.
 *
 * @param context
 *   Context.
 * @param value
 *   Value.
 * @param options
 *   Configuration.
 * @returns
 *   Promise for a result.
 */ async function isValidEmail(context, value, options) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.isValidEmail(value, options);
    // Ignore the `else` branch as we test in places that have WebAssembly.
    /* node:coverage ignore next 4 */ }
    log.debug("WebAssembly is not supported in this runtime");
    return {
        blocked: [],
        validity: "valid"
    };
}
/**
 * Detect whether a request is by a bot.
 *
 * @param context
 *   Context.
 * @param request
 *   Request.
 * @param options
 *   Configuration.
 * @returns
 *   Promise for a result.
 */ async function detectBot(context, request, options) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.detectBot(JSON.stringify(request), options);
    // Ignore the `else` branch as we test in places that have WebAssembly.
    /* node:coverage ignore next 4 */ }
    log.debug("WebAssembly is not supported in this runtime");
    return {
        allowed: [],
        denied: [],
        spoofed: false,
        verified: false
    };
}
/**
 * Detect sensitive info in a value.
 *
 * @param context
 *   Context.
 * @param value
 *   Value.
 * @param entities
 *   Strategy to use for detecting sensitive info;
 *   either by denying everything and allowing certain tags or by allowing
 *   everything and denying certain tags.
 * @param contextWindowSize
 *   Number of tokens to pass to `detect`.
 * @param detect
 *   Function to detect sensitive info (optional).
 * @returns
 *   Promise for a result.
 */ async function detectSensitiveInfo(context, value, entities, contextWindowSize, detect) {
    const { log } = context;
    const coreImports = createCoreImports(detect);
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        const skipCustomDetect = typeof detect !== "function";
        return analyze.detectSensitiveInfo(value, {
            entities,
            contextWindowSize,
            skipCustomDetect
        });
    // Ignore the `else` branch as we test in places that have WebAssembly.
    /* node:coverage ignore next 4 */ }
    log.debug("WebAssembly is not supported in this runtime");
    throw new Error("SENSITIVE_INFO rule failed to run because Wasm is not supported in this environment.");
}
/**
 * Check if a filter matches a request.
 *
 * @param context
 *   Arcjet context.
 * @param request
 *   Request.
 * @param expressions
 *   Filter expressions.
 * @returns
 *   Promise to whether the filter matches the request.
 */ async function matchFilters(context, request, expressions, allowIfMatch) {
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.matchFilters(JSON.stringify(request), // @ts-expect-error: WebAssembly does not support readonly values.
        expressions, allowIfMatch);
    // Ignore the `else` branch as we test in places that have WebAssembly.
    /* node:coverage ignore next 4 */ }
    context.log.debug("WebAssembly is not supported in this runtime");
    throw new Error("FILTER rule failed to run because Wasm is not supported in this environment.");
}
;
}),
"[project]/node_modules/@arcjet/duration/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// This Parser is a TypeScript implementation of similar code in the Go stdlib
// with deviations made to support usage in the Arcjet SDK.
//
// Parser source:
// https://github.com/golang/go/blob/c18ddc84e1ec6406b26f7e9d0e1ee3d1908d7c27/src/time/format.go#L1589-L1686
//
// Licensed: BSD 3-Clause "New" or "Revised" License
// Copyright (c) 2009 The Go Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
__turbopack_context__.s({
    "parse": ()=>parse
});
const second = 1;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const maxUint32 = 4294967295;
const units = new Map([
    [
        "s",
        second
    ],
    [
        "m",
        minute
    ],
    [
        "h",
        hour
    ],
    [
        "d",
        day
    ]
]);
const integers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];
// leadingInt consumes the leading [0-9]* from s.
function leadingInt(s) {
    let i = 0;
    let x = 0;
    for(; i < s.length; i++){
        const c = s[i];
        if (!integers.includes(c)) {
            break;
        }
        x = x * 10 + parseInt(c, 10);
        if (x > maxUint32) {
            // overflow
            throw new Error("bad [0-9]*"); // never printed
        }
    }
    return [
        x,
        s.slice(i)
    ];
}
/**
 * Parse a duration into a number representing seconds while ensuring the value
 * fits within an unsigned 32-bit integer.
 *
 * If a number is passed it is validated and returned.
 *
 * If a string is passed it must be in the form of digits followed by a unit.
 * Supported units are `s` (seconds),
 * `m` (minutes),
 * `h` (hours),
 * and `d` (days).
 *
 * @example
 *   ```ts
 *   console.log(parse("1s")) // => 1
 *   console.log(parse("1m")) // => 60
 *   console.log(parse("1h")) // => 3600
 *   console.log(parse("1d")) // => 86400
 *   ```
 * @param value
 *   Value to parse.
 * @returns
 *   Parsed seconds.
 */ function parse(value) {
    const original = value;
    if (typeof value === "number") {
        if (value > maxUint32) {
            throw new Error(`invalid duration: ${original}`);
        }
        if (value < 0) {
            throw new Error(`invalid duration: ${original}`);
        }
        if (!Number.isInteger(value)) {
            throw new Error(`invalid duration: ${original}`);
        }
        return value;
    }
    if (typeof value !== "string") {
        throw new Error("can only parse a duration string");
    }
    let d = 0;
    // Special case: if all that is left is "0", this is zero.
    if (value === "0") {
        return 0;
    }
    if (value === "") {
        throw new Error(`invalid duration: ${original}`);
    }
    while(value !== ""){
        let v = 0;
        // The next character must be [0-9]
        if (!integers.includes(value[0])) {
            throw new Error(`invalid duration: ${original}`);
        }
        // Consume [0-9]*
        [v, value] = leadingInt(value);
        // Error on decimal (\.[0-9]*)?
        if (value !== "" && value[0] == ".") {
            // TODO: We could support decimals that turn into non-decimal seconds—e.g.
            // 1.5hours becomes 5400 seconds
            throw new Error(`unsupported decimal duration: ${original}`);
        }
        // Consume unit.
        let i = 0;
        for(; i < value.length; i++){
            const c = value[i];
            if (integers.includes(c)) {
                break;
            }
        }
        if (i == 0) {
            throw new Error(`missing unit in duration: ${original}`);
        }
        const u = value.slice(0, i);
        value = value.slice(i);
        const unit = units.get(u);
        if (typeof unit === "undefined") {
            throw new Error(`unknown unit "${u}" in duration ${original}`);
        }
        if (v > maxUint32 / unit) {
            // overflow
            throw new Error(`invalid duration ${original}`);
        }
        v *= unit;
        d += v;
        if (d > maxUint32) {
            throw new Error(`invalid duration ${original}`);
        }
    }
    return d;
}
;
}),
"[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ArcjetHeaders": ()=>ArcjetHeaders,
    "default": ()=>ArcjetHeaders
});
function isIterable(val) {
    return typeof val?.[Symbol.iterator] === "function";
}
/**
 * Arcjet headers.
 *
 * This exists to prevent the `cookie` header from being set
 * and non-string values from being set.
 *
 * @see
 *   [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers).
 */ class ArcjetHeaders extends Headers {
    constructor(init){
        super();
        if (typeof init !== "undefined" && typeof init !== "string" && init !== null) {
            if (isIterable(init)) {
                for (const [key, value] of init){
                    this.append(key, value);
                }
            } else {
                for (const [key, value] of Object.entries(init)){
                    if (typeof value === "undefined") {
                        continue;
                    }
                    if (Array.isArray(value)) {
                        for (const singleValue of value){
                            this.append(key, singleValue);
                        }
                    } else {
                        this.append(key, value);
                    }
                }
            }
        }
    }
    /**
     * Append a header while ignoring `cookie`.
     *
     * @see
     *   [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append)
     *
     * @param key
     *   Header name.
     * @param value
     *   Header value.
     * @returns
     *   Nothing.
     */ append = (key, value)=>{
        if (typeof key !== "string" || typeof value !== "string") {
            return;
        }
        if (key.toLowerCase() !== "cookie") {
            Headers.prototype.append.call(this, key, value);
        }
    };
    /**
     * Set a header while ignoring `cookie`.
     *
     * @see
     *   [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set)
     *
     * @param key
     *   Header key.
     * @param value
     *   Header value.
     * @returns
     *   Nothing.
     */ set = (key, value)=>{
        if (typeof key !== "string" || typeof value !== "string") {
            return;
        }
        if (key.toLowerCase() !== "cookie") {
            Headers.prototype.set.call(this, key, value);
        }
    };
}
;
}),
"[project]/node_modules/@arcjet/runtime/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// This code was improved by detection mechanisms in
// https://github.com/unjs/std-env/blob/b4ef16832baf4594ece7796a2c1805712fde70a3/src/runtimes.ts
//
// MIT License
//
// Copyright (c) Pooya Parsa <pooya@pi0.io>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
/**
 * Detect the current runtime environment at runtime.
 *
 * @returns
 *   Runtime.
 */ __turbopack_context__.s({
    "runtime": ()=>runtime
});
function runtime() {
    // The detection order matters in this function because some platforms will
    // implement compatibility layers, but we want to detect them accurately.
    // https://developers.cloudflare.com/workers/configuration/compatibility-dates/#global-navigator
    if (typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers") {
        return "workerd";
    }
    if (typeof Deno !== "undefined") {
        return "deno";
    }
    if (typeof Bun !== "undefined") {
        return "bun";
    }
    if (typeof EdgeRuntime !== "undefined") {
        return "edge-light";
    }
    if (typeof process !== "undefined" && process?.release?.name === "node") {
        return "node";
    }
    // Unknown or unsupported runtime
    return "";
}
;
}),
"[project]/node_modules/@arcjet/stable-hash/hasher.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "bool": ()=>bool,
    "makeHasher": ()=>makeHasher,
    "string": ()=>string,
    "stringSliceOrdered": ()=>stringSliceOrdered,
    "uint32": ()=>uint32
});
class Sha256 {
    encoder;
    subtle;
    buf;
    constructor(subtle){
        this.subtle = subtle;
        this.encoder = new TextEncoder();
        this.buf = "";
    }
    writeString(data) {
        this.buf += data;
    }
    async digest() {
        const buf = this.encoder.encode(this.buf);
        const digest = await this.subtle.digest("SHA-256", buf);
        return new Uint8Array(digest);
    }
}
// After this, it needs to wrap to 0
const maxUint32 = 4294967295;
const fieldSeparator = ":";
const itemSeparator = ",";
/**
 * Create a hasher for a boolean.
 *
 * @param key
 *   Key.
 * @param value
 *   Value.
 * @returns
 *   Hasher.
 */ function bool(key, value) {
    return (data)=>{
        data.writeString(key);
        data.writeString(fieldSeparator);
        if (value) {
            data.writeString("true");
        } else {
            data.writeString("false");
        }
    };
}
/**
 * Create a hasher for an unsigned 32-bit integer.
 *
 * @param key
 *   Key.
 * @param value
 *   Value.
 * @returns
 *   Hasher.
 */ function uint32(key, value) {
    return (data)=>{
        data.writeString(key);
        data.writeString(fieldSeparator);
        if (value > maxUint32) {
            data.writeString("0");
        } else {
            data.writeString(value.toFixed(0));
        }
    };
}
/**
 * Create a hasher for a string.
 *
 * @param key
 *   Key.
 * @param value
 *   Value.
 * @returns
 *   Hasher.
 */ function string(key, value) {
    return (data)=>{
        data.writeString(key);
        data.writeString(fieldSeparator);
        data.writeString(`"`);
        data.writeString(value.replaceAll(`"`, `\\"`));
        data.writeString(`"`);
    };
}
/**
 * Create a hasher for an array of strings.
 *
 * @param key
 *   Key.
 * @param values
 *   Values.
 * @returns
 *   Hasher.
 */ function stringSliceOrdered(key, values) {
    return (data)=>{
        data.writeString(key);
        data.writeString(fieldSeparator);
        data.writeString("[");
        for (const value of Array.from(values).sort()){
            data.writeString(`"`);
            data.writeString(value.replaceAll(`"`, `\\"`));
            data.writeString(`"`);
            data.writeString(itemSeparator);
        }
        data.writeString("]");
    };
}
/**
 * Create a hasher.
 *
 * @param subtle
 *   Subtle crypto.
 * @returns
 *   Hasher.
 */ function makeHasher(subtle) {
    /**
     * Hash fields.
     *
     * @param hashers
     *   Hashers.
     * @returns
     *   Promise to a hash.
     */ return async function hash(...hashers) {
        const h = new Sha256(subtle);
        for (const hasher of hashers){
            hasher(h);
            h.writeString(itemSeparator);
        }
        const digest = await h.digest();
        return hex(digest);
    };
}
// Hex encoding logic from https://github.com/feross/buffer but adjusted for
// our use.
//
// Licensed: The MIT License (MIT)
//
// Copyright (c) Feross Aboukhadijeh, and other contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// https://github.com/feross/buffer/blob/5857e295f4d37e3ad02c3abcbf7e8e5ef51f3be6/index.js#L2096-L2106
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j){
            table[i16 + j] = alphabet[i] + alphabet[j];
        }
    }
    return table;
}();
// https://github.com/feross/buffer/blob/5857e295f4d37e3ad02c3abcbf7e8e5ef51f3be6/index.js#L1085-L1096
function hex(buf) {
    const len = buf.length;
    const start = 0;
    const end = len;
    let out = "";
    for(let i = start; i < end; ++i){
        out += hexSliceLookupTable[buf[i]];
    }
    return out;
}
;
}),
"[project]/node_modules/@arcjet/stable-hash/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "hash": ()=>hash
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/stable-hash/hasher.js [app-rsc] (ecmascript)");
;
;
;
const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHasher"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["subtle"]);
;
}),
"[project]/node_modules/@arcjet/stable-hash/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/stable-hash/hasher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/stable-hash/index.js [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/@arcjet/cache/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "MemoryCache": ()=>MemoryCache
});
function nowInSeconds() {
    return Math.floor(Date.now() / 1000);
}
class Bucket {
    expires;
    data;
    constructor(){
        this.expires = new Map();
        this.data = new Map();
    }
    get(key) {
        const now = nowInSeconds();
        const expiresAt = this.expires.get(key) ?? now;
        const ttl = expiresAt - now;
        if (ttl > 0) {
            return [
                this.data.get(key),
                ttl
            ];
        } else {
            // Cleanup if expired
            this.expires.delete(key);
            this.data.delete(key);
            return [
                undefined,
                0
            ];
        }
    }
    set(key, value, ttl) {
        const expiresAt = nowInSeconds() + ttl;
        this.expires.set(key, expiresAt);
        this.data.set(key, value);
    }
}
/**
 * In-memory cache.
 */ class MemoryCache {
    /**
     * Data.
     */ namespaces;
    /**
     * Create a new in-memory cache.
     */ constructor(){
        this.namespaces = new Map();
    }
    async get(namespace, key) {
        if (typeof namespace !== "string") {
            throw new Error("`namespace` must be a string");
        }
        if (typeof key !== "string") {
            throw new Error("`key` must be a string");
        }
        const namespaceCache = this.namespaces.get(namespace);
        if (typeof namespaceCache === "undefined") {
            return [
                undefined,
                0
            ];
        }
        return namespaceCache.get(key);
    }
    set(namespace, key, value, ttl) {
        if (typeof namespace !== "string") {
            throw new Error("`namespace` must be a string");
        }
        if (typeof key !== "string") {
            throw new Error("`key` must be a string");
        }
        const namespaceCache = this.namespaces.get(namespace) ?? new Bucket();
        namespaceCache.set(key, value, ttl);
        this.namespaces.set(namespace, namespaceCache);
    }
}
;
}),
"[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>arcjet,
    "detectBot": ()=>detectBot,
    "filter": ()=>filter,
    "fixedWindow": ()=>fixedWindow,
    "protectSignup": ()=>protectSignup,
    "sensitiveInfo": ()=>sensitiveInfo,
    "shield": ()=>shield,
    "slidingWindow": ()=>slidingWindow,
    "tokenBucket": ()=>tokenBucket,
    "validateEmail": ()=>validateEmail
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/protocol/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/protocol/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/analyze/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/duration/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$runtime$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/runtime/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/stable-hash/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/stable-hash/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/stable-hash/hasher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/cache/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
function errorMessage(err) {
    if (err) {
        if (typeof err === "string") {
            return err;
        }
        if (typeof err === "object" && "message" in err && typeof err.message === "string") {
            return err.message;
        }
    }
    return "Unknown problem";
}
const knownFields = [
    "ip",
    "method",
    "protocol",
    "host",
    "path",
    "headers",
    "body",
    "email",
    "cookies",
    "query"
];
function isUnknownRequestProperty(key) {
    return !knownFields.includes(key);
}
function isEmailType(type) {
    return type === "FREE" || type === "DISPOSABLE" || type === "NO_MX_RECORDS" || type === "NO_GRAVATAR" || type === "INVALID";
}
class Performance {
    log;
    constructor(logger){
        this.log = logger;
    }
    // TODO(#2020): We should no-op this if loglevel is not `debug` to do less work
    measure(label) {
        const start = performance.now();
        return ()=>{
            const end = performance.now();
            const diff = end - start;
            this.log.debug("LATENCY %s: %sms", label, diff.toFixed(3));
        };
    }
}
function toString(value) {
    if (typeof value === "string") {
        return value;
    }
    if (typeof value === "number") {
        return `${value}`;
    }
    if (typeof value === "boolean") {
        return value ? "true" : "false";
    }
    return "<unsupported value>";
}
// This is the Symbol that Vercel defines in their infrastructure to access the
// Context (where available). The Context can contain the `waitUntil` function.
// https://github.com/vercel/vercel/blob/930d7fb892dc26f240f2b950d963931c45e1e661/packages/functions/src/get-context.ts#L6
const SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
function lookupWaitUntil() {
    const fromSymbol = globalThis;
    if (typeof fromSymbol[SYMBOL_FOR_REQ_CONTEXT] === "object" && fromSymbol[SYMBOL_FOR_REQ_CONTEXT] !== null && "get" in fromSymbol[SYMBOL_FOR_REQ_CONTEXT] && typeof fromSymbol[SYMBOL_FOR_REQ_CONTEXT].get === "function") {
        const vercelCtx = fromSymbol[SYMBOL_FOR_REQ_CONTEXT].get();
        if (typeof vercelCtx === "object" && vercelCtx !== null && "waitUntil" in vercelCtx && typeof vercelCtx.waitUntil === "function") {
            return vercelCtx.waitUntil;
        }
    }
}
function toAnalyzeRequest(request) {
    const headers = {};
    if (typeof request.headers !== "undefined") {
        for (const [key, value] of request.headers.entries()){
            headers[key] = value;
        }
    }
    return {
        ...request,
        headers
    };
}
function extraProps(details) {
    const extra = new Map();
    for (const [key, value] of Object.entries(details)){
        if (isUnknownRequestProperty(key)) {
            extra.set(key, toString(value));
        }
    }
    return Object.fromEntries(extra.entries());
}
function createTypeValidator(...types) {
    return (key, value)=>{
        const typeOfValue = typeof value;
        if (!types.includes(typeOfValue)) {
            if (types.length === 1) {
                throw new Error(`invalid type for \`${key}\` - expected ${types[0]}`);
            } else {
                throw new Error(`invalid type for \`${key}\` - expected one of ${types.join(", ")}`);
            }
        } else {
            return false;
        }
    };
}
function createValueValidator(// This uses types to ensure we have at least 2 values
...values) {
    return (key, value)=>{
        // We cast the values to unknown because the optionValue isn't known but
        // we only want to use `values` on string enumerations
        if (!values.includes(value)) {
            throw new Error(`invalid value for \`${key}\` - expected one of ${values.map((value)=>`'${value}'`).join(", ")}`);
        }
    };
}
function createArrayValidator(validate) {
    return (key, value)=>{
        if (Array.isArray(value)) {
            for (const [idx, item] of value.entries()){
                validate(`${key}[${idx}]`, item);
            }
        } else {
            throw new Error(`invalid type for \`${key}\` - expected an array`);
        }
    };
}
function createValidator({ rule, validations }) {
    return (options)=>{
        for (const { key, validate, required } of validations){
            if (required && !Object.hasOwn(options, key)) {
                throw new Error(`\`${rule}\` options error: \`${key}\` is required`);
            }
            const value = options[key];
            // The `required` flag is checked above, so these should only be validated
            // if the value is not undefined.
            if (typeof value !== "undefined") {
                try {
                    validate(key, value);
                } catch (err) {
                    throw new Error(`\`${rule}\` options error: ${errorMessage(err)}`);
                }
            }
        }
    };
}
const validateString = createTypeValidator("string");
const validateNumber = createTypeValidator("number");
const validateBoolean = createTypeValidator("boolean");
const validateFunction = createTypeValidator("function");
const validateStringOrNumber = createTypeValidator("string", "number");
const validateStringArray = createArrayValidator(validateString);
const validateMode = createValueValidator("LIVE", "DRY_RUN");
const validateEmailTypes = createArrayValidator(createValueValidator("DISPOSABLE", "FREE", "NO_MX_RECORDS", "NO_GRAVATAR", "INVALID"));
const validateTokenBucketOptions = createValidator({
    rule: "tokenBucket",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "refillRate",
            required: true,
            validate: validateNumber
        },
        {
            key: "interval",
            required: true,
            validate: validateStringOrNumber
        },
        {
            key: "capacity",
            required: true,
            validate: validateNumber
        }
    ]
});
const validateFixedWindowOptions = createValidator({
    rule: "fixedWindow",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "max",
            required: true,
            validate: validateNumber
        },
        {
            key: "window",
            required: true,
            validate: validateStringOrNumber
        }
    ]
});
const validateSlidingWindowOptions = createValidator({
    rule: "slidingWindow",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "max",
            required: true,
            validate: validateNumber
        },
        {
            key: "interval",
            required: true,
            validate: validateStringOrNumber
        }
    ]
});
const validateSensitiveInfoOptions = createValidator({
    rule: "sensitiveInfo",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "allow",
            required: false,
            validate: validateStringArray
        },
        {
            key: "deny",
            required: false,
            validate: validateStringArray
        },
        {
            key: "contextWindowSize",
            required: false,
            validate: validateNumber
        },
        {
            key: "detect",
            required: false,
            validate: validateFunction
        }
    ]
});
const validateEmailOptions = createValidator({
    rule: "validateEmail",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "allow",
            required: false,
            validate: validateEmailTypes
        },
        {
            key: "deny",
            required: false,
            validate: validateEmailTypes
        },
        {
            key: "requireTopLevelDomain",
            required: false,
            validate: validateBoolean
        },
        {
            key: "allowDomainLiteral",
            required: false,
            validate: validateBoolean
        }
    ]
});
const validateBotOptions = createValidator({
    rule: "detectBot",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "allow",
            required: false,
            validate: validateStringArray
        },
        {
            key: "deny",
            required: false,
            validate: validateStringArray
        }
    ]
});
const validateShieldOptions = createValidator({
    rule: "shield",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        }
    ]
});
/**
 * Validate filter options.
 */ const validateFilterOptions = createValidator({
    rule: "filter",
    validations: [
        {
            key: "allow",
            required: false,
            validate: validateStringArray
        },
        {
            key: "deny",
            required: false,
            validate: validateStringArray
        },
        {
            key: "mode",
            required: false,
            validate: validateMode
        }
    ]
});
const Priority = {
    SensitiveInfo: 1,
    Filter: 2,
    Shield: 3,
    RateLimit: 4,
    BotDetection: 5,
    EmailValidation: 6
};
function isRateLimitRule(rule) {
    return rule.type === "RATE_LIMIT";
}
/**
 * Arcjet token bucket rate limiting rule.
 *
 * Applying this rule sets a token bucket rate limit.
 *
 * This algorithm is based on a bucket filled with a specific number of tokens.
 * Each request withdraws some amount of tokens from the bucket and the bucket
 * is refilled at a fixed rate.
 * Once the bucket is empty, the client is blocked until the bucket refills.
 *
 * This algorithm is useful when you want to allow clients to make a burst of
 * requests and then still be able to make requests at a slower rate.
 *
 * @template Characteristics
 *   Characteristics to track a user by.
 * @param options
 *   Configuration for the token bucket rate limiting rule (required).
 * @returns
 *   Token bucket rule to provide to the SDK in the `rules` field.
 *
 * @example
 *   ```ts
 *   tokenBucket({
 *     mode: "LIVE",
 *     refillRate: 10,
 *     interval: "60s",
 *     capacity: 100,
 *   });
 *   ```
 * @example
 *   ```ts
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [
 *       tokenBucket({
 *         mode: "LIVE",
 *         refillRate: 10,
 *         interval: "60s",
 *         capacity: 100,
 *       }),
 *     ],
 *   });
 *   ```
 *
 * @link https://docs.arcjet.com/rate-limiting
 * @link https://docs.arcjet.com/rate-limiting/algorithms#token-bucket
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function tokenBucket(options) {
    validateTokenBucketOptions(options);
    const type = "RATE_LIMIT";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = Array.isArray(options.characteristics) ? options.characteristics : undefined;
    const refillRate = options.refillRate;
    const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"](options.interval);
    const capacity = options.capacity;
    const rule = {
        type,
        version,
        priority: Priority.RateLimit,
        mode,
        characteristics,
        algorithm: "TOKEN_BUCKET",
        refillRate,
        interval,
        capacity,
        validate () {},
        async protect (context, details) {
            const localCharacteristics = characteristics ?? context.characteristics;
            const ruleId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("type", type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("version", version), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("mode", mode), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("algorithm", "TOKEN_BUCKET"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("characteristics", localCharacteristics), // Match is deprecated so it is always an empty string in the newest SDKs
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("match", ""), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("refillRate", refillRate), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("interval", interval), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("capacity", capacity));
            const analyzeContext = {
                characteristics: localCharacteristics,
                log: context.log
            };
            const fingerprint = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFingerprint"](analyzeContext, toAnalyzeRequest(details));
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached && cached.reason.isRateLimit()) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    // We rebuild the `ArcjetRateLimitReason` because we need to adjust
                    // the `reset` based on the current time-to-live
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                        max: cached.reason.max,
                        remaining: cached.reason.remaining,
                        reset: ttl,
                        window: cached.reason.window,
                        resetTime: cached.reason.resetTime
                    })
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ruleId,
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                    max: 0,
                    remaining: 0,
                    reset: 0,
                    window: 0,
                    resetTime: new Date()
                })
            });
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet fixed window rate limiting rule.
 *
 * Applying this rule sets a fixed window rate limit which tracks the number of
 * requests made by a client over a fixed time window.
 *
 * This is the simplest algorithm.
 * It tracks the number of requests made by a client over a fixed time window
 * such as 60 seconds.
 * If the client exceeds the limit, they are blocked until the window expires.
 *
 * This algorithm is useful when you want to apply a simple fixed limit in a
 * fixed time window.
 * For example, a simple limit on the total number of requests a client can make.
 * However, it can be susceptible to the stampede problem where a client makes
 * a burst of requests at the start of a window and then is blocked for the rest
 * of the window.
 * The sliding window algorithm can be used to avoid this.
 *
 * @template Characteristics
 *   Characteristics to track a user by.
 * @param options
 *   Configuration for the fixed window rate limiting rule (required).
 * @returns
 *   Fixed window rule to provide to the SDK in the `rules` field.
 *
 * @example
 *   ```ts
 *   fixedWindow({ mode: "LIVE", window: "60s", max: 100 });
 *   ```
 * @example
 *   ```ts
 *   const aj = arcjet({
 *      key: process.env.ARCJET_KEY,
 *     rules: [
 *       fixedWindow({
 *         mode: "LIVE",
 *         window: "60s",
 *         max: 100,
 *       })
 *     ],
 *   });
 *   ```
 *
 * @link https://docs.arcjet.com/rate-limiting
 * @link https://docs.arcjet.com/rate-limiting/algorithms#fixed-window
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function fixedWindow(options) {
    validateFixedWindowOptions(options);
    const type = "RATE_LIMIT";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = Array.isArray(options.characteristics) ? options.characteristics : undefined;
    const max = options.max;
    const window = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"](options.window);
    const rule = {
        type,
        version,
        priority: Priority.RateLimit,
        mode,
        characteristics,
        algorithm: "FIXED_WINDOW",
        max,
        window,
        validate () {},
        async protect (context, details) {
            const localCharacteristics = characteristics ?? context.characteristics;
            const ruleId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("type", type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("version", version), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("mode", mode), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("algorithm", "FIXED_WINDOW"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("characteristics", localCharacteristics), // Match is deprecated so it is always an empty string in the newest SDKs
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("match", ""), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("max", max), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("window", window));
            const analyzeContext = {
                characteristics: localCharacteristics,
                log: context.log
            };
            const fingerprint = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFingerprint"](analyzeContext, toAnalyzeRequest(details));
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached && cached.reason.isRateLimit()) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    // We rebuild the `ArcjetRateLimitReason` because we need to adjust
                    // the `reset` based on the current time-to-live
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                        max: cached.reason.max,
                        remaining: cached.reason.remaining,
                        reset: ttl,
                        window: cached.reason.window,
                        resetTime: cached.reason.resetTime
                    })
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ruleId,
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                    max: 0,
                    remaining: 0,
                    reset: 0,
                    window: 0
                })
            });
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet sliding window rate limiting rule.
 *
 * Applying this rule sets a sliding window rate limit which tracks the number
 * of requests made by a client over a sliding window so that the window moves
 * with time.
 *
 * This algorithm is useful to avoid the stampede problem of the fixed window.
 * It provides smoother rate limiting over time and can prevent a client from
 * making a burst of requests at the start of a window and then being blocked
 * for the rest of the window.
 *
 * @template Characteristics
 *   Characteristics to track a user by.
 * @param options
 *   Configuration for the sliding window rate limiting rule (required).
 * @returns
 *   Token bucket rule to provide to the SDK in the `rules` field.
 *
 * @example
 *   ```ts
 *   slidingWindow({ mode: "LIVE", interval: "60s", max: 100 });
 *   ```
 * @example
 *   ```ts
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [
 *       slidingWindow({
 *         mode: "LIVE",
 *         interval: "60s",
 *         max: 100,
 *       })
 *     ],
 *   });
 *   ```
 *
 * @link https://docs.arcjet.com/rate-limiting
 * @link https://docs.arcjet.com/rate-limiting/algorithms#sliding-window
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function slidingWindow(options) {
    validateSlidingWindowOptions(options);
    const type = "RATE_LIMIT";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = Array.isArray(options.characteristics) ? options.characteristics : undefined;
    const max = options.max;
    const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"](options.interval);
    const rule = {
        type,
        version,
        priority: Priority.RateLimit,
        mode,
        characteristics,
        algorithm: "SLIDING_WINDOW",
        max,
        interval,
        validate () {},
        async protect (context, details) {
            const localCharacteristics = characteristics ?? context.characteristics;
            const ruleId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("type", type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("version", version), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("mode", mode), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("algorithm", "SLIDING_WINDOW"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("characteristics", localCharacteristics), // Match is deprecated so it is always an empty string in the newest SDKs
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("match", ""), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("max", max), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("interval", interval));
            const analyzeContext = {
                characteristics: localCharacteristics,
                log: context.log
            };
            const fingerprint = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFingerprint"](analyzeContext, toAnalyzeRequest(details));
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached && cached.reason.isRateLimit()) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    // We rebuild the `ArcjetRateLimitReason` because we need to adjust
                    // the `reset` based on the current time-to-live
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                        max: cached.reason.max,
                        remaining: cached.reason.remaining,
                        reset: ttl,
                        window: cached.reason.window,
                        resetTime: cached.reason.resetTime
                    })
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ruleId,
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRateLimitReason"]({
                    max: 0,
                    remaining: 0,
                    reset: 0,
                    window: 0
                })
            });
        }
    };
    return [
        rule
    ];
}
function protocolSensitiveInfoEntitiesToAnalyze(entity) {
    if (typeof entity !== "string") {
        throw new Error("invalid entity type");
    }
    if (entity === "EMAIL") {
        return {
            tag: "email"
        };
    }
    if (entity === "PHONE_NUMBER") {
        return {
            tag: "phone-number"
        };
    }
    if (entity === "IP_ADDRESS") {
        return {
            tag: "ip-address"
        };
    }
    if (entity === "CREDIT_CARD_NUMBER") {
        return {
            tag: "credit-card-number"
        };
    }
    return {
        tag: "custom",
        val: entity
    };
}
function analyzeSensitiveInfoEntitiesToString(entity) {
    if (entity.tag === "email") {
        return "EMAIL";
    }
    if (entity.tag === "ip-address") {
        return "IP_ADDRESS";
    }
    if (entity.tag === "credit-card-number") {
        return "CREDIT_CARD_NUMBER";
    }
    if (entity.tag === "phone-number") {
        return "PHONE_NUMBER";
    }
    return entity.val;
}
function convertAnalyzeDetectedSensitiveInfoEntity(detectedEntities) {
    return detectedEntities.map((detectedEntity)=>{
        return {
            ...detectedEntity,
            identifiedType: analyzeSensitiveInfoEntitiesToString(detectedEntity.identifiedType)
        };
    });
}
/**
 * Arcjet sensitive information detection rule.
 *
 * Applying this rule protects against clients sending you sensitive information
 * such as personally identifiable information (PII) that you do not wish to
 * handle.
 * The rule runs entirely locally so no data ever leaves your environment.
 *
 * This rule includes built-in detections for email addresses, credit/debit card
 * numbers, IP addresses, and phone numbers.
 * You can also provide a custom detection function to identify additional
 * sensitive information.
 *
 * @template DetectedEntities
 *   Custom entity names that are returned from `detect` and optionally listed
 *   in `allow` or `deny`.
 * @template ListedEntities
 *   Entity names that can be listed in the `allow` or `deny` field.
 * @param options
 *   Configuration for the sensitive information detection rule (required).
 * @returns
 *   Sensitive information rule to provide to the SDK in the `rules` field.
 *
 * @example
 *   ```ts
 *   sensitiveInfo({ mode: "LIVE", deny: ["EMAIL"] });
 *   ```
 * @example
 *   ```ts
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [
 *       sensitiveInfo({
 *         mode: "LIVE",
 *         deny: ["EMAIL"],
 *       })
 *     ],
 *   });
 *   ```
 * @example
 *   Custom detection function:
 *
 *   ```ts
 *   function detectDash(tokens: string[]): Array<"CONTAINS_DASH" | undefined> {
 *     return tokens.map((token) => {
 *       if (token.includes("-")) {
 *         return "CONTAINS_DASH";
 *       }
 *     });
 *   }
 *
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [
 *       sensitiveInfo({
 *         mode: "LIVE",
 *         deny: ["EMAIL", "CONTAINS_DASH"],
 *         detect: detectDash,
 *         contextWindowSize: 2,
 *       })
 *     ],
 *   });
 *   ```
 *
 * @link https://docs.arcjet.com/sensitive-info
 * @link https://docs.arcjet.com/sensitive-info/reference
 */ function sensitiveInfo(options) {
    validateSensitiveInfoOptions(options);
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`sensitiveInfo` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined") {
        throw new Error("`sensitiveInfo` options error: either `allow` or `deny` must be specified");
    }
    const type = "SENSITIVE_INFO";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const allow = options.allow || [];
    const deny = options.deny || [];
    const rule = {
        version,
        priority: Priority.SensitiveInfo,
        type,
        mode,
        allow,
        deny,
        validate (context, details) {},
        async protect (context, details) {
            const ruleId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("type", type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("version", version), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("mode", mode), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("allow", allow), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("deny", deny));
            const { fingerprint } = context;
            // No cache is implemented here because the fingerprint can be the same
            // while the request body changes. This is also why the `sensitiveInfo`
            // rule results always have a `ttl` of 0.
            let body;
            try {
                body = await context.getBody();
            } catch (error) {
                context.log.error("failed to get request body: %s", errorMessage(error));
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state: "NOT_RUN",
                    conclusion: "ERROR",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("Cannot read body for sensitive info detection: " + errorMessage(error))
                });
            }
            let convertedDetect = undefined;
            if (typeof options.detect !== "undefined") {
                const detect = options.detect;
                convertedDetect = (tokens)=>{
                    return detect(tokens).filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
                };
            }
            let entitiesTag = "allow";
            let entitiesVal = [];
            if (Array.isArray(options.allow)) {
                entitiesTag = "allow";
                entitiesVal = options.allow.filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
            }
            if (Array.isArray(options.deny)) {
                entitiesTag = "deny";
                entitiesVal = options.deny.filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
            }
            const entities = {
                tag: entitiesTag,
                val: entitiesVal
            };
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectSensitiveInfo"](context, body, entities, options.contextWindowSize || 1, convertedDetect);
            const state = mode === "LIVE" ? "RUN" : "DRY_RUN";
            const reason = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetSensitiveInfoReason"]({
                denied: convertAnalyzeDetectedSensitiveInfoEntity(result.denied),
                allowed: convertAnalyzeDetectedSensitiveInfoEntity(result.allowed)
            });
            if (result.denied.length === 0) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "ALLOW",
                    reason
                });
            } else {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "DENY",
                    reason
                });
            }
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet email validation rule.
 *
 * Applying this rule allows you to validate and verify an email address.
 *
 * The first step of the analysis is to validate the email address syntax.
 * This runs locally within the SDK and validates the email address is in the
 * correct format.
 * If the email syntax is valid, the SDK will pass the email address to the
 * Arcjet cloud API to verify the email address.
 * This performs several checks, depending on the rule configuration.
 *
 * @param options
 *   Configuration for the email validation rule (required).
 * @returns
 *   Email rule to provide to the SDK in the `rules` field.
 *
 * @example
 *   ```ts
 *   validateEmail({ mode: "LIVE", deny: ["DISPOSABLE", "INVALID"] });
 *   ```
 * @example
 *   ```ts
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [
 *       validateEmail({
 *         mode: "LIVE",
 *         deny: ["DISPOSABLE", "INVALID"]
 *       })
 *     ],
 *   });
 *   ```
 *
 * @link https://docs.arcjet.com/email-validation
 * @link https://docs.arcjet.com/email-validation/reference
 */ function validateEmail(options) {
    validateEmailOptions(options);
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`validateEmail` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined") {
        throw new Error("`validateEmail` options error: either `allow` or `deny` must be specified");
    }
    const type = "EMAIL";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const allow = options.allow ?? [];
    const deny = options.deny ?? [];
    const requireTopLevelDomain = options.requireTopLevelDomain ?? true;
    const allowDomainLiteral = options.allowDomainLiteral ?? false;
    let config = {
        tag: "deny-email-validation-config",
        val: {
            requireTopLevelDomain,
            allowDomainLiteral,
            deny: []
        }
    };
    if (typeof options.allow !== "undefined") {
        config = {
            tag: "allow-email-validation-config",
            val: {
                requireTopLevelDomain,
                allowDomainLiteral,
                allow: options.allow
            }
        };
    }
    if (typeof options.deny !== "undefined") {
        config = {
            tag: "deny-email-validation-config",
            val: {
                requireTopLevelDomain,
                allowDomainLiteral,
                deny: options.deny
            }
        };
    }
    const rule = {
        version,
        priority: Priority.EmailValidation,
        type,
        mode,
        allow,
        deny,
        requireTopLevelDomain,
        allowDomainLiteral,
        validate (context, details) {
            assert(typeof details.email !== "undefined", "ValidateEmail requires `email` to be set.");
        },
        async protect (context, { email }) {
            const ruleId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("type", type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("version", version), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("mode", mode), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("allow", allow), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("deny", deny), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bool"]("requireTopLevelDomain", requireTopLevelDomain), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bool"]("allowDomainLiteral", allowDomainLiteral));
            const { fingerprint } = context;
            // No cache is implemented here because the fingerprint can be the same
            // while the email changes. This is also why the `email` rule results
            // always have a `ttl` of 0.
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidEmail"](context, email, config);
            const state = mode === "LIVE" ? "RUN" : "DRY_RUN";
            if (result.validity === "valid") {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "ALLOW",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetEmailReason"]({
                        emailTypes: []
                    })
                });
            } else {
                const typedEmailTypes = result.blocked.filter(isEmailType);
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "DENY",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetEmailReason"]({
                        emailTypes: typedEmailTypes
                    })
                });
            }
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet bot detection rule.
 *
 * Applying this rule allows you to manage traffic by automated clients and
 * bots.
 *
 * Bots can be good (such as search engine crawlers or monitoring agents) or bad
 * (such as scrapers or automated scripts).
 * Arcjet allows you to configure which bots you want to allow or deny by
 * specific bot names such as curl, as well as by category such as search
 * engine bots.
 *
 * Bots are detected based on various signals such as the user agent, IP
 * address, DNS records, and more.
 *
 * @param options
 *   Configuration for the bot rule (required).
 * @returns
 *   Bot rule to provide to the SDK in the `rules` field.
 *
 * @example
 *   Allow search engine bots and curl, deny all other bots:
 *
 *   ```ts
 *   detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE", "CURL"] });
 *   ```
 * @example
 *   Allow search engine bots and curl, deny all other bots:
 *
 *   ```ts
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [
 *       detectBot({
 *         mode: "LIVE",
 *         allow: ["CATEGORY:SEARCH_ENGINE", "CURL"]
 *       })
 *     ],
 *   });
 *   ```
 * @example
 *   Deny AI crawlers, allow all other bots:
 *
 *   ```ts
 *   detectBot({ mode: "LIVE", deny: ["CATEGORY:AI"] });
 *   ```
 * @example
 *   Deny AI crawlers, allows all other bots:
 *
 *   ```ts
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [
 *       detectBot({
 *         mode: "LIVE",
 *         deny: ["CATEGORY:AI"]
 *       })
 *     ],
 *   });
 *   ```
 *
 * @link https://docs.arcjet.com/bot-protection
 * @link https://docs.arcjet.com/bot-protection/identifying-bots
 * @link https://docs.arcjet.com/bot-protection/reference
 */ function detectBot(options) {
    validateBotOptions(options);
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`detectBot` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined") {
        throw new Error("`detectBot` options error: either `allow` or `deny` must be specified");
    }
    const type = "BOT";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const allow = options.allow ?? [];
    const deny = options.deny ?? [];
    let config = {
        tag: "allowed-bot-config",
        val: {
            entities: [],
            skipCustomDetect: true
        }
    };
    if (typeof options.allow !== "undefined") {
        config = {
            tag: "allowed-bot-config",
            val: {
                entities: options.allow,
                skipCustomDetect: true
            }
        };
    }
    if (typeof options.deny !== "undefined") {
        config = {
            tag: "denied-bot-config",
            val: {
                entities: options.deny,
                skipCustomDetect: true
            }
        };
    }
    const rule = {
        version,
        priority: Priority.BotDetection,
        type,
        mode,
        allow,
        deny,
        validate (context, details) {
            if (typeof details.headers === "undefined") {
                throw new Error("bot detection requires `headers` to be set");
            }
            if (typeof details.headers.has !== "function") {
                throw new Error("bot detection requires `headers` to extend `Headers`");
            }
            if (!details.headers.has("user-agent")) {
                throw new Error("bot detection requires user-agent header");
            }
        },
        /**
         * Attempts to call the bot detection on the headers.
         */ async protect (context, request) {
            const ruleId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("type", type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("version", version), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("mode", mode), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("allow", allow), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("deny", deny));
            const { fingerprint } = context;
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    reason: cached.reason
                });
            }
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectBot"](context, toAnalyzeRequest(request), config);
            const state = mode === "LIVE" ? "RUN" : "DRY_RUN";
            // If this is a bot and of a type that we want to block, then block!
            if (result.denied.length > 0) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 60,
                    state,
                    conclusion: "DENY",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetBotReason"]({
                        allowed: result.allowed,
                        denied: result.denied,
                        verified: result.verified,
                        spoofed: result.spoofed
                    })
                });
            } else {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl: 0,
                    state,
                    conclusion: "ALLOW",
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetBotReason"]({
                        allowed: result.allowed,
                        denied: result.denied,
                        verified: result.verified,
                        spoofed: result.spoofed
                    })
                });
            }
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet Shield WAF rule.
 *
 * Applying this rule protects your application against common attacks,
 * including the OWASP Top 10.
 *
 * The Arcjet Shield WAF analyzes every request to your application to detect
 * suspicious activity.
 * Once a certain suspicion threshold is reached,
 * subsequent requests from that client are blocked for a period of time.
 *
 * @param options
 *   Configuration for the Shield rule.
 * @returns
 *   Shield rule to provide to the SDK in the `rules` field.
 *
 * @example
 *   ```ts
 *   shield({ mode: "LIVE" });
 *   ```
 * @example
 *   ```ts
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [shield({ mode: "LIVE" })],
 *   });
 *   ```
 *
 * @link https://docs.arcjet.com/shield
 * @link https://docs.arcjet.com/shield/reference
 */ function shield(options) {
    validateShieldOptions(options);
    const type = "SHIELD";
    const version = 0;
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const rule = {
        type,
        version,
        priority: Priority.Shield,
        mode,
        validate () {},
        async protect (context, details) {
            // TODO(#1989): Prefer characteristics defined on rule once available
            const localCharacteristics = context.characteristics;
            const ruleId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("type", type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("version", version), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("mode", mode), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("characteristics", localCharacteristics));
            const analyzeContext = {
                characteristics: localCharacteristics,
                log: context.log
            };
            const fingerprint = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFingerprint"](analyzeContext, toAnalyzeRequest(details));
            const [cached, ttl] = await context.cache.get(ruleId, fingerprint);
            if (cached) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    ruleId,
                    fingerprint,
                    ttl,
                    state: "CACHED",
                    conclusion: cached.conclusion,
                    reason: cached.reason
                });
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ruleId,
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetShieldReason"]({
                    shieldTriggered: false
                })
            });
        }
    };
    return [
        rule
    ];
}
/**
 * Arcjet signup form protection rule.
 *
 * Applying this rule combines rate limiting, bot protection, and email
 * validation to protect your signup forms from abuse.
 * Using this rule will configure the following:
 *
 * - Rate limiting - signup forms are a common target for bots. Arcjet’s rate
 *   limiting helps to prevent bots and other automated or malicious clients
 *   from submitting your signup form too many times in a short period of time.
 * - Bot protection - signup forms are usually exclusively used by humans, which
 *   means that any automated submissions to the form are likely to be
 *   fraudulent.
 * - Email validation - email addresses should be validated to ensure the signup
 *   is coming from a legitimate user with a real email address that can
 *   actually receive messages.
 *
 * @template Characteristics
 *   Characteristics to track a user by.
 * @param options
 *   Configuration for the signup form protection rule.
 * @returns
 *   Signup form protection rule to provide to the SDK in the `rules` field.
 *
 * @example
 *   Our recommended configuration for most signup forms is:
 *
 *   - Block email addresses with invalid syntax, that are from disposable email providers,
 *     or do not have valid MX records configured.
 *   - Block all bots.
 *   - Apply a rate limit of 5 submissions per 10 minutes from a single IP
 *     address.
 *
 *   ```ts
 *   const aj = arcjet({
 *     key: process.env.ARCJET_KEY,
 *     rules: [
 *      protectSignup({
 *        email: {
 *          mode: "LIVE",
 *          deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
 *        },
 *        bots: {
 *          mode: "LIVE",
 *          allow: [], // block all detected bots
 *        },
 *        rateLimit: {
 *          mode: "LIVE",
 *          interval: "10m",
 *          max: 5,
 *        },
 *      }),
 *    ],
 *   });
 *   ```
 *
 * @link https://docs.arcjet.com/signup-protection
 * @link https://docs.arcjet.com/signup-protection/reference
 */ function protectSignup(options) {
    return [
        ...slidingWindow(options.rateLimit),
        ...detectBot(options.bots),
        ...validateEmail(options.email)
    ];
}
/**
 * Arcjet filter rule.
 *
 * Applying this rule lets you block requests using Wireshark-like display
 * filter expressions over HTTP headers, IP addresses, and other request
 * fields.
 * You can quickly enforce rules like allow/deny by country, network, or
 * `user-agent` pattern.
 *
 * See the [reference guide](https://docs.arcjet.com/filters/reference) for
 * more info on the expression language fields, functions, and values.
 *
 * @param options
 *   Configuration (required).
 * @returns
 *   Filter rule.
 *
 * @example
 *   In this example, the expression matches non-VPN GET requests from the US.
 *   Requests matching the expression are allowed, all others are denied.
 *
 *   ```ts
 *   filter({
 *     allow: [
 *       'http.request.method eq "GET" and ip.src.country eq "US" and not ip.src.vpn',
 *     ],
 *     mode: "LIVE",
 *   })
 *   ```
 *
 * @link https://docs.arcjet.com/filters
 * @link https://docs.arcjet.com/filters/reference
 */ function filter(options) {
    validateFilterOptions(options);
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const allow = options.allow ?? [];
    const deny = options.deny ?? [];
    if (allow.length > 0 && deny.length > 0) {
        throw new Error("`filter` options error: expressions must be passed in either `allow` or `deny` instead of both");
    }
    if (allow.length === 0 && deny.length === 0) {
        throw new Error("`filter` options error: one or more expressions must be passed in `allow` or `deny`");
    }
    const state = mode === "LIVE" ? "RUN" : "DRY_RUN";
    const type = "FILTER";
    const version = 0;
    const ruleIdPromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("type", type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uint32"]("version", version), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]("mode", mode), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("allow", // @ts-expect-error: `hasher` must support readonly values.
    allow), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$hasher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringSliceOrdered"]("deny", // @ts-expect-error: `hasher` must support readonly values.
    deny));
    const rule = {
        allow,
        deny,
        mode,
        priority: Priority.Filter,
        async protect (context, request) {
            const ruleId = await ruleIdPromise;
            const [cached, ttl] = await context.cache.get(ruleId, context.fingerprint);
            if (cached) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    conclusion: cached.conclusion,
                    fingerprint: context.fingerprint,
                    reason: cached.reason,
                    ruleId,
                    state: "CACHED",
                    ttl
                });
            }
            const request_ = toAnalyzeRequest(request);
            let ruleResult;
            try {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchFilters"](context, request_, allow.length > 0 ? allow : deny, allow.length > 0);
                ruleResult = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    conclusion: result.allowed ? "ALLOW" : "DENY",
                    fingerprint: context.fingerprint,
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetFilterReason"](result),
                    ruleId,
                    state,
                    ttl: result.allowed ? 0 : 60
                });
            } catch (error) {
                ruleResult = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                    conclusion: "ERROR",
                    fingerprint: context.fingerprint,
                    reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](error),
                    ruleId,
                    state,
                    ttl: 0
                });
            }
            return ruleResult;
        },
        type,
        validate () {},
        version
    };
    return [
        rule
    ];
}
/**
 * Create a new Arcjet instance.
 *
 * @template Rules
 *   List of rules.
 * @template Characteristics
 *   Characteristics to track a user by.
 * @param options
 *   Configuration.
 * @returns
 *   Arcjet instance.
 */ function arcjet(options) {
    // We destructure here to make the function signature neat when viewed by consumers
    const { key, rules } = options;
    const rt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$runtime$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"])();
    // TODO: Separate the ArcjetOptions from the SDK Options
    // It is currently optional in the options so users can override it via an SDK
    if (typeof options.log === "undefined") {
        throw new Error("Log is required");
    }
    const log = options.log;
    const perf = new Performance(log);
    // TODO(#207): Remove this when we can default the transport so client is not required
    // It is currently optional in the options so the Next SDK can override it for the user
    if (typeof options.client === "undefined") {
        throw new Error("Client is required");
    }
    const client = options.client;
    // A local cache of block decisions. Might be emphemeral per request,
    // depending on the way the runtime works, but it's worth a try.
    // TODO(#132): Support configurable caching
    const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MemoryCache"]();
    const rootRules = rules.flat(1).sort((a, b)=>a.priority - b.priority);
    async function protect(rules, ctx, request) {
        // This goes against the type definition above, but users might call
        // `protect()` with no value and we don't want to crash
        if (typeof request === "undefined") {
            request = {};
        }
        const details = Object.freeze({
            ip: request.ip,
            method: request.method,
            protocol: request.protocol,
            host: request.host,
            path: request.path,
            headers: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArcjetHeaders"](request.headers),
            cookies: request.cookies,
            query: request.query,
            extra: extraProps(request),
            email: typeof request.email === "string" ? request.email : undefined
        });
        const characteristics = options.characteristics ? [
            ...options.characteristics
        ] : [];
        const waitUntil = lookupWaitUntil();
        const baseContext = {
            key,
            log,
            characteristics,
            waitUntil,
            ...ctx
        };
        let fingerprint = "";
        const logFingerprintPerf = perf.measure("fingerprint");
        try {
            fingerprint = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateFingerprint"](baseContext, toAnalyzeRequest(details));
            log.debug("fingerprint (%s): %s", rt, fingerprint);
        } catch (error) {
            log.error({
                error: errorMessage(error)
            }, "Failed to build fingerprint. Please verify your Characteristics.");
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](`Failed to build fingerprint - ${errorMessage(error)}`),
                // No results because we couldn't create a fingerprint
                results: []
            });
            // TODO: Consider sending this to Report when we have an infallible fingerprint
            return decision;
        } finally{
            logFingerprintPerf();
        }
        const context = Object.freeze({
            ...baseContext,
            cache,
            fingerprint,
            runtime: rt
        });
        if (rules.length < 1) {
            log.warn("Calling `protect()` with no rules is deprecated. Did you mean to configure the Shield rule?");
        }
        if (rules.length > 10) {
            log.error("Failure running rules. Only 10 rules may be specified.");
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("Only 10 rules may be specified"),
                // No results because the sorted rules were too long and we don't want
                // to instantiate a ton of NOT_RUN results
                results: []
            });
            client.report(context, details, decision, // No rules because we've determined they were too long and we don't
            // want to try to send them to the server
            []);
            return decision;
        }
        const results = [];
        for(let idx = 0; idx < rules.length; idx++){
            // Default all rules to NOT_RUN/ALLOW before doing anything
            results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                // TODO(#4030): Figure out if we can get each Rule ID before they are run
                ruleId: "",
                fingerprint,
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetReason"]()
            });
            // Add top-level characteristics to all Rate Limit rules that don't already have
            // their own set of characteristics.
            const candidate_rule = rules[idx];
            if (isRateLimitRule(candidate_rule)) {
                if (typeof candidate_rule.characteristics === "undefined") {
                    candidate_rule.characteristics = characteristics;
                    rules[idx] = candidate_rule;
                }
            }
        }
        const logLocalPerf = perf.measure("local");
        try {
            for (const [idx, rule] of rules.entries()){
                // This re-assignment is a workaround to a TypeScript error with
                // assertions where the name was introduced via a destructure
                const localRule = rule;
                const logRulePerf = perf.measure(rule.type);
                try {
                    if (typeof localRule.validate !== "function") {
                        throw new Error("rule must have a `validate` function");
                    }
                    localRule.validate(context, details);
                    if (typeof localRule.protect !== "function") {
                        throw new Error("rule must have a `protect` function");
                    }
                    results[idx] = await localRule.protect(context, details);
                    // If a rule didn't return a rule result, we need to stub it to avoid
                    // crashing. This should only happen if a user writes a custom local
                    // rule incorrectly.
                    if (typeof results[idx] === "undefined") {
                        results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                            // TODO(#4030): If we can get the Rule ID before running rules,
                            // this can use it
                            ruleId: "",
                            fingerprint,
                            ttl: 0,
                            state: "RUN",
                            conclusion: "ERROR",
                            reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("rule result missing")
                        });
                    }
                    log.debug({
                        id: results[idx].ruleId,
                        rule: rule.type,
                        fingerprint,
                        path: details.path,
                        runtime: rt,
                        ttl: results[idx].ttl,
                        conclusion: results[idx].conclusion,
                        reason: results[idx].reason
                    }, "Local rule result:");
                } catch (err) {
                    log.error("Failure running rule: %s due to %s", rule.type, errorMessage(err));
                    results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        // TODO(#4030): Figure out if we can get a Rule ID in this error case
                        ruleId: "",
                        fingerprint,
                        ttl: 0,
                        state: "RUN",
                        conclusion: "ERROR",
                        reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](err)
                    });
                } finally{
                    logRulePerf();
                }
                const result = results[idx];
                if (result.isDenied()) {
                    // If the rule is not a DRY_RUN, we want to cache non-zero TTL results
                    // and return a DENY decision.
                    if (result.state !== "DRY_RUN") {
                        const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetDenyDecision"]({
                            ttl: result.ttl,
                            reason: result.reason,
                            results
                        });
                        // Only a DENY decision is reported to avoid creating 2 entries for
                        // a request. Upon ALLOW, the `decide` call will create an entry for
                        // the request.
                        client.report(context, details, decision, rules);
                        if (result.ttl > 0) {
                            log.debug({
                                fingerprint: result.fingerprint,
                                conclusion: result.conclusion,
                                reason: result.reason
                            }, "Caching decision for %d seconds", decision.ttl);
                            cache.set(result.ruleId, result.fingerprint, {
                                conclusion: result.conclusion,
                                reason: result.reason
                            }, result.ttl);
                        }
                        return decision;
                    }
                    log.warn(`Dry run mode is enabled for "%s" rule. Overriding decision. Decision was: DENY`, rule.type);
                }
            }
        } finally{
            logLocalPerf();
        }
        // With no cached values, we take a decision remotely. We use a timeout to
        // fail open.
        const logRemotePerf = perf.measure("remote");
        try {
            const logDediceApiPerf = perf.measure("decideApi");
            const decision = await client.decide(context, details, rules).finally(()=>{
                logDediceApiPerf();
            });
            // If the decision is to block and we have a non-zero TTL, we cache the
            // block locally
            if (decision.isDenied() && decision.ttl > 0) {
                log.debug("decide: Caching block locally for %d seconds", decision.ttl);
                for (const result of decision.results){
                    // Cache all DENY results for local cache lookups
                    if (result.conclusion === "DENY") {
                        cache.set(result.ruleId, result.fingerprint, {
                            conclusion: result.conclusion,
                            reason: result.reason
                        }, result.ttl);
                    }
                }
            }
            return decision;
        } catch (err) {
            log.info("Encountered problem getting remote decision: %s", errorMessage(err));
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](err),
                results
            });
            client.report(context, details, decision, rules);
            return decision;
        } finally{
            logRemotePerf();
        }
    }
    // This is a separate function so it can be called recursively
    function withRule(baseRules, rule) {
        const rules = [
            ...baseRules,
            ...rule
        ].sort((a, b)=>a.priority - b.priority);
        return Object.freeze({
            withRule (rule) {
                return withRule(rules, rule);
            },
            async protect (ctx, request) {
                return protect(rules, ctx, request);
            }
        });
    }
    return Object.freeze({
        /**
         * Augment the client with another rule.
         *
         * Useful for varying rules based on criteria in your handler such as
         * different rate limit for logged in users.
         *
         * @param rule
         *   Rule to add to Arcjet.
         * @returns
         *   Arcjet instance augmented with the given rule.
         */ withRule (rule) {
            return withRule(rootRules, rule);
        },
        /**
         * Make a decision about how to handle a request.
         *
         * This will analyze the request locally where possible and otherwise call
         * the Arcjet decision API.
         *
         * @param ctx
         *   Additional context for this function call.
         * @param request
         *   Details about the {@linkcode ArcjetRequest} that Arcjet needs to make a
         *   decision.
         * @returns
         *   Promise that resolves to an {@linkcode ArcjetDecision} indicating
         *   Arcjet’s decision about the request.
         */ async protect (ctx, request) {
            return protect(rootRules, ctx, request);
        }
    });
}
;
}),
"[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/protocol/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/analyze/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/duration/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$runtime$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/runtime/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$stable$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/stable-hash/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/cache/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/@arcjet/body/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Read the body of a
 * [web stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).
 *
 * @param stream
 *   Stream.
 * @param options
 *   Configuration (required).
 * @returns
 *   Promise that resolves to a concatenated body.
 */ __turbopack_context__.s({
    "readBody": ()=>readBody,
    "readBodyWeb": ()=>readBodyWeb
});
async function readBodyWeb(stream, options) {
    const limit = options?.limit ?? 1048576; // 1mb.
    const length = options?.expectedLength ?? undefined;
    if (typeof limit !== "number" || limit < 0 || Number.isNaN(limit)) {
        return Promise.reject(new Error("Unexpected value `" + limit + "` for `options.limit`, expected positive number"));
    }
    if (length !== undefined && (typeof length !== "number" || length < 0 || Number.isNaN(length))) {
        return Promise.reject(new Error("Unexpected value `" + length + "` for `options.expectedLength`, expected positive number"));
    }
    // If we already know the length and it exceeds the limit, abort early.
    if (length !== undefined && length > limit) {
        return Promise.reject(new Error("Cannot read stream whose expected length exceeds limit"));
    }
    const controller = new AbortController();
    // Ensure that we do not wait forever if the stream is incorrectly configured.
    const timeout = setTimeout(function() {
        controller.abort(new Error("Cannot read stream, did not receive data in time limit"));
    }, 100);
    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    let received = 0;
    let written = false;
    await stream.pipeTo(new WritableStream({
        write (chunk) {
            if (!written) {
                clearTimeout(timeout);
                written = true;
            }
            received += chunk.byteLength;
            if (received > limit) {
                throw new Error("Cannot read stream that exceeds limit");
            }
            buffer += decoder.decode(chunk, {
                stream: true
            });
        }
    }), {
        signal: controller.signal
    });
    if (!written) {
        throw new Error("Cannot read stream, did not receive data");
    }
    if (length !== undefined && received !== length) {
        throw new Error("Cannot read stream whose length does not match expected length");
    }
    // Need to call it one final time to flush any remaining chars.
    buffer += decoder.decode();
    return buffer;
}
// This `readBody` function is a derivitive of the `getRawBody` function in the `raw-body`
// npm package with deviations to strip down the implementation to specifically what is needed
// by Arcjet.
//
// These include:
// - The removal of the sync interface.
// - The removal of the ability to return the body as a `Buffer`. Instead the body is always
//   parsed as a utf-8 string.
// - The removal of certain config options that are not relevant to us.
//
// Original source:
// https://github.com/stream-utils/raw-body/blob/191e4b6506dcf77198eed01c8feb4b6817008342/test/index.js
//
// Licensed: The MIT License (MIT)
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions: The above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
/**
 * Read the body of a Node.js stream.
 *
 * @param stream
 *   Stream.
 * @param options
 *   Configuration (optional).
 * @returns
 *   Promise that resolves to a concatenated body.
 */ async function readBody(stream, options) {
    const limit = options?.limit ?? 1048576; // 1mb.
    const length = options?.expectedLength ?? undefined;
    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    let complete = false;
    let received = 0;
    if (typeof limit !== "number" || limit < 0 || Number.isNaN(limit)) {
        return Promise.reject(new Error("Unexpected value `" + limit + "` for `options.limit`, expected positive number"));
    }
    if (length !== undefined && (typeof length !== "number" || length < 0 || Number.isNaN(length))) {
        return Promise.reject(new Error("Unexpected value `" + length + "` for `options.expectedLength`, expected positive number"));
    }
    if (typeof stream.on !== "function") {
        return Promise.reject(new Error("Unexpected value `" + stream.on + "` for `stream.on`, expected function"));
    }
    if (typeof stream.removeListener !== "function") {
        return Promise.reject(new Error("Unexpected value `" + stream.removeListener + "` for `stream.removeListener`, expected function"));
    }
    if (typeof stream.readable !== "undefined" && !stream.readable) {
        return Promise.reject(new Error("Cannot read unreadable stream"));
    }
    // If we already know the length and it exceeds the limit, abort early.
    if (length !== undefined && length > limit) {
        return Promise.reject(new Error("Cannot read stream whose expected length exceeds limit"));
    }
    return new Promise((resolve, reject)=>{
        // This was already checked at the top of the function but TypeScript lost
        // the context
        if (typeof stream.on === "function") {
            stream.on("aborted", onAborted);
            stream.on("close", cleanup);
            stream.on("data", onData);
            stream.on("end", onEnd);
            stream.on("error", onEnd);
        }
        function done(err, buffer) {
            // Ensure we avoid double resolve/reject if called more than once
            if (complete) return;
            complete = true;
            cleanup();
            if (typeof err !== "undefined") {
                reject(err);
            } else if (buffer !== null && buffer !== undefined) {
                // Need to call it one final time to flush any remaining chars.
                buffer += decoder.decode();
                resolve(buffer);
            }
        }
        function onAborted() {
            done(new Error("Cannot read aborted stream"));
        }
        function onData(chunk) {
            received += chunk.length;
            if (received > limit) {
                done(new Error("Cannot read stream that exceeds limit"));
            } else {
                buffer += decoder.decode(chunk, {
                    stream: true
                });
            }
        }
        function onEnd(err) {
            if (err) return done(err);
            if (length !== undefined && received !== length) {
                done(new Error("Cannot read stream whose length does not match expected length"));
            } else {
                done(undefined, buffer);
            }
        }
        function cleanup() {
            buffer = "";
            // This was already checked at the top of the function but TypeScript lost
            // the context
            if (typeof stream.removeListener === "function") {
                stream.removeListener("aborted", onAborted);
                stream.removeListener("data", onData);
                stream.removeListener("end", onEnd);
                stream.removeListener("error", onEnd);
                stream.removeListener("close", cleanup);
            }
        }
        // Ensure that we don't poll forever if the stream is incorrectly configured
        setTimeout(()=>{
            if (received === 0) {
                done(new Error("Cannot read stream, did not receive data in time limit"));
            }
        }, 100);
    });
}
;
}),
"[project]/node_modules/@arcjet/ip/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>findIp,
    "findIp": ()=>findIp,
    "parseProxy": ()=>parseProxy
});
function parseXForwardedFor(value) {
    if (typeof value !== "string") {
        return [];
    }
    const forwardedIps = [];
    // As per MDN X-Forwarded-For Headers documentation at
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    // The `x-forwarded-for` header may return one or more IP addresses as
    // "client IP, proxy 1 IP, proxy 2 IP", so we want to split by the comma and
    // trim each item.
    for (const item of value.split(",")){
        forwardedIps.push(item.trim());
    }
    return forwardedIps;
}
function isIpv4Cidr(cidr) {
    return typeof cidr === "object" && cidr !== null && "type" in cidr && typeof cidr.type === "string" && cidr.type === "v4" && "contains" in cidr && typeof cidr.contains === "function";
}
function isIpv6Cidr(cidr) {
    return typeof cidr === "object" && cidr !== null && "type" in cidr && typeof cidr.type === "string" && cidr.type === "v6" && "contains" in cidr && typeof cidr.contains === "function";
}
function isTrustedProxy(ip, segments, proxies) {
    if (Array.isArray(proxies) && proxies.length > 0) {
        return proxies.some((proxy)=>{
            if (typeof proxy === "string") {
                return proxy === ip;
            }
            if (isIpv4Tuple(segments) && isIpv4Cidr(proxy)) {
                return proxy.contains(segments);
            }
            if (isIpv6Tuple(segments) && isIpv6Cidr(proxy)) {
                return proxy.contains(segments);
            }
            return false;
        });
    }
    return false;
}
// Based on CIDR matching implementation in `ipaddr.js`
// Source code:
// https://github.com/whitequark/ipaddr.js/blob/08c2cd41e2cb3400683cbd503f60421bfdf66921/lib/ipaddr.js#L107-L130
//
// Licensed: The MIT License (MIT)
// Copyright (C) 2011-2017 whitequark <whitequark@whitequark.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
function cidrContains(cidr, ip) {
    let part = 0;
    let shift;
    let cidrBits = cidr.bits;
    while(cidrBits > 0){
        shift = cidr.partSize - cidrBits;
        if (shift < 0) {
            shift = 0;
        }
        if (ip[part] >> shift !== cidr.parts[part] >> shift) {
            return false;
        }
        cidrBits -= cidr.partSize;
        part += 1;
    }
    return true;
}
class Ipv4Cidr {
    type = "v4";
    partSize = 8;
    parts;
    bits;
    constructor(parts, bits){
        this.bits = bits;
        this.parts = parts;
        Object.freeze(this);
    }
    contains(ip) {
        return cidrContains(this, ip);
    }
}
class Ipv6Cidr {
    type = "v6";
    partSize = 16;
    parts;
    bits;
    constructor(parts, bits){
        this.bits = bits;
        this.parts = parts;
        Object.freeze(this);
    }
    contains(ip) {
        return cidrContains(this, ip);
    }
}
function parseCidr(cidr) {
    // Pre-condition: `cidr` has be verified to have at least one `/`
    const cidrParts = cidr.split("/");
    if (cidrParts.length !== 2) {
        throw new Error("invalid CIDR address: must be exactly 2 parts");
    }
    const parser = new Parser(cidrParts[0]);
    const maybeIpv4 = parser.readIpv4Address();
    if (isIpv4Tuple(maybeIpv4)) {
        const bits = parseInt(cidrParts[1], 10);
        if (isNaN(bits) || bits < 0 || bits > 32) {
            throw new Error("invalid CIDR address: incorrect amount of bits");
        }
        return new Ipv4Cidr(maybeIpv4, bits);
    }
    const maybeIpv6 = parser.readIpv6Address();
    if (isIpv6Tuple(maybeIpv6)) {
        const bits = parseInt(cidrParts[1], 10);
        if (isNaN(bits) || bits < 0 || bits > 128) {
            throw new Error("invalid CIDR address: incorrect amount of bits");
        }
        return new Ipv6Cidr(maybeIpv6, bits);
    }
    throw new Error("invalid CIDR address: could not parse IP address");
}
function isCidr(address) {
    return address.includes("/");
}
/**
 * Parse CIDR addresses and keep non-CIDR IP addresses.
 *
 * @param value
 *   Value to parse.
 * @returns
 *   Parsed CIDR or given `value`.
 */ function parseProxy(value) {
    if (isCidr(value)) {
        return parseCidr(value);
    } else {
        return value;
    }
}
function isIpv4Tuple(segements) {
    if (typeof segements === "undefined") {
        return false;
    }
    return segements.length === 4;
}
function isIpv6Tuple(segements) {
    if (typeof segements === "undefined") {
        return false;
    }
    return segements.length === 8;
}
function u16FromBytes(bytes) {
    const u8 = new Uint8Array(bytes);
    return new Uint16Array(u8.buffer)[0];
}
function u32FromBytes(bytes) {
    const u8 = new Uint8Array(bytes);
    return new Uint32Array(u8.buffer)[0];
}
// This Parser and "is global" comparisons are a TypeScript implementation of
// similar code in the Rust stdlib with only slight deviations as noted.
//
// We want to mirror Rust's logic as close as possible, because we'll be relying
// on its implementation when we add a Wasm library to determine IPs and only
// falling back to JavaScript in non-Wasm environments.
//
// Parser source:
// https://github.com/rust-lang/rust/blob/07921b50ba6dcb5b2984a1dba039a38d85bffba2/library/core/src/net/parser.rs#L34
// Comparison source:
// https://github.com/rust-lang/rust/blob/87e1447aadaa2899ff6ccabe1fa669eb50fb60a1/library/core/src/net/ip_addr.rs#L749
// https://github.com/rust-lang/rust/blob/87e1447aadaa2899ff6ccabe1fa669eb50fb60a1/library/core/src/net/ip_addr.rs#L1453
//
// Licensed: The MIT License (MIT)
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions: The above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
class Parser {
    state;
    constructor(input){
        this.state = input;
    }
    readAtomically(inner) {
        const state = this.state;
        const result = inner(this);
        if (typeof result === "undefined") {
            this.state = state;
        }
        return result;
    }
    peakChar() {
        return this.state[0];
    }
    readChar() {
        const b = this.state[0];
        this.state = this.state.slice(1);
        return b;
    }
    readGivenChar(target) {
        return this.readAtomically((p)=>{
            const c = p.readChar();
            if (c === target) {
                return c;
            }
        });
    }
    readSeparator(sep, index, inner) {
        return this.readAtomically((p)=>{
            if (index > 0) {
                const c = p.readGivenChar(sep);
                if (typeof c === "undefined") {
                    return;
                }
            }
            return inner(p);
        });
    }
    readNumber(radix, maxDigits, allowZeroPrefix = false) {
        return this.readAtomically((p)=>{
            let result = 0;
            let digitCount = 0;
            const hasLeadingZero = p.peakChar() === "0";
            function nextCharAsDigit() {
                return p.readAtomically((p)=>{
                    const c = p.readChar();
                    if (c) {
                        const n = parseInt(c, radix);
                        if (!isNaN(n)) {
                            return n;
                        }
                    }
                });
            }
            for(let digit = nextCharAsDigit(); digit !== undefined; digit = nextCharAsDigit()){
                result = result * radix;
                result = result + digit;
                digitCount += 1;
                if (typeof maxDigits !== "undefined") {
                    if (digitCount > maxDigits) {
                        return;
                    }
                }
            }
            if (digitCount === 0) {
                return;
            } else if (!allowZeroPrefix && hasLeadingZero && digitCount > 1) {
                return;
            } else {
                return result;
            }
        });
    }
    readIpv4Address() {
        return this.readAtomically((p)=>{
            const groups = [];
            for(let idx = 0; idx < 4; idx++){
                const result = p.readSeparator(".", idx, (p)=>{
                    // Disallow octal number in IP string
                    // https://tools.ietf.org/html/rfc6943#section-3.1.1
                    return p.readNumber(10, 3, false);
                });
                if (result === undefined) {
                    return;
                } else {
                    groups.push(result);
                }
            }
            return groups;
        });
    }
    readIpv6Address() {
        // Read a chunk of an IPv6 address into `groups`. Returns the number of
        // groups read, along with a bool indicating if an embedded trailing IPv4
        // address was read. Specifically, read a series of colon-separated IPv6
        // groups (0x0000 - 0xFFFF), with an optional trailing embedded IPv4 address
        const readGroups = (p, groups)=>{
            const limit = groups.length;
            for (const i of groups.keys()){
                // Try to read a trailing embedded IPv4 address. There must be at least
                // two groups left
                if (i < limit - 1) {
                    const ipv4 = p.readSeparator(":", i, (p)=>p.readIpv4Address());
                    if (isIpv4Tuple(ipv4)) {
                        const [one, two, three, four] = ipv4;
                        groups[i + 0] = u16FromBytes([
                            one,
                            two
                        ]);
                        groups[i + 1] = u16FromBytes([
                            three,
                            four
                        ]);
                        return [
                            i + 2,
                            true
                        ];
                    }
                }
                const group = p.readSeparator(":", i, (p)=>p.readNumber(16, 4, true));
                if (typeof group !== "undefined") {
                    groups[i] = group;
                } else {
                    return [
                        i,
                        false
                    ];
                }
            }
            return [
                groups.length,
                false
            ];
        };
        return this.readAtomically((p)=>{
            // Read the front part of the address; either the whole thing, or up
            // to the first ::
            const head = new Uint16Array(8);
            const [headSize, headIpv4] = readGroups(p, head);
            if (headSize === 8) {
                return head;
            }
            // IPv4 part is not allowed before `::`
            if (headIpv4) {
                return;
            }
            // Read `::` if previous code parsed less than 8 groups.
            // `::` indicates one or more groups of 16 bits of zeros.
            if (typeof p.readGivenChar(":") === "undefined") {
                return;
            }
            if (typeof p.readGivenChar(":") === "undefined") {
                return;
            }
            // Read the back part of the address. The :: must contain at least one
            // set of zeroes, so our max length is 7.
            const tail = new Uint16Array(7);
            const limit = 8 - (headSize + 1);
            const [tailSize, _] = readGroups(p, tail.subarray(0, limit));
            head.set(tail.slice(0, tailSize), 8 - tailSize);
            return head;
        });
    }
    readPort() {
        return this.readAtomically((p)=>{
            if (typeof p.readGivenChar(":") !== "undefined") {
                return p.readNumber(10, undefined, true);
            }
        });
    }
    readScopeId() {
        return this.readAtomically((p)=>{
            if (typeof p.readGivenChar("%") !== "undefined") {
                return p.readNumber(10, undefined, true);
            }
        });
    }
}
const IPV4_BROADCAST = u32FromBytes([
    255,
    255,
    255,
    255
]);
function isGlobalIpv4(s, proxies) {
    if (typeof s !== "string") {
        return false;
    }
    const parser = new Parser(s);
    const octets = parser.readIpv4Address();
    if (!isIpv4Tuple(octets)) {
        return false;
    }
    if (isTrustedProxy(s, octets, proxies)) {
        return false;
    }
    // Rust doesn't check the remaining state when parsing an IPv4. However, we
    // want to ensure we have exactly an IP (with optionally a port), so we parse
    // it and then check remaining parser state.
    parser.readPort();
    if (parser.state.length !== 0) {
        return false;
    }
    // "This network"
    if (octets[0] === 0) {
        return false;
    }
    // Private IPv4 address ranges
    if (octets[0] === 10) {
        return false;
    }
    if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) {
        return false;
    }
    if (octets[0] === 192 && octets[1] === 168) {
        return false;
    }
    // Loopback address
    if (octets[0] === 127) {
        return false;
    }
    // Shared range
    if (octets[0] === 100 && (octets[1] & 0b1100_0000) === 0b0100_0000) {
        return false;
    }
    // Link-local range
    if (octets[0] === 169 && octets[1] === 254) {
        return false;
    }
    // addresses reserved for future protocols (`192.0.0.0/24`)
    if (octets[0] === 192 && octets[1] === 0 && octets[2] === 0) {
        return false;
    }
    // Documentation ranges
    if (octets[0] === 192 && octets[1] === 0 && octets[2] === 2) {
        return false;
    }
    if (octets[0] === 198 && octets[1] === 51 && octets[2] === 100) {
        return false;
    }
    if (octets[0] === 203 && octets[1] === 0 && octets[2] === 113) {
        return false;
    }
    // Benchmarking range
    if (octets[0] === 198 && (octets[1] & 0xfe) === 18) {
        return false;
    }
    const isBroadcast = u32FromBytes(octets) === IPV4_BROADCAST;
    // Reserved range
    if ((octets[0] & 240) === 240 && !isBroadcast) {
        return false;
    }
    // Broadcast address
    if (isBroadcast) {
        return false;
    }
    for (const octet of octets){
        if (octet < 0 || octet > 255) {
            return false;
        }
    }
    return true;
}
function isGlobalIpv6(s, proxies) {
    if (typeof s !== "string") {
        return false;
    }
    const parser = new Parser(s);
    const segments = parser.readIpv6Address();
    if (!isIpv6Tuple(segments)) {
        return false;
    }
    if (isTrustedProxy(s, segments, proxies)) {
        return false;
    }
    // Rust doesn't check the remaining state when parsing an IPv6. However, we
    // want to ensure we have exactly an IP (with optionally a scope id), so we
    // parse it and then check remaining parser state.
    // TODO: We don't support an IPv6 address with a port because that seems to
    // require wrapping the address and scope in `[]`, e.g. `[:ffff%1]:8080`
    parser.readScopeId();
    if (parser.state.length !== 0) {
        return false;
    }
    // Unspecified address
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 0) {
        return false;
    }
    // Loopback address
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 0x1) {
        return false;
    }
    // IPv4-mapped Address (`::ffff:0:0/96`)
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0xffff) {
        return false;
    }
    // IPv4-IPv6 Translat. (`64:ff9b:1::/48`)
    if (segments[0] === 0x64 && segments[1] === 0xff9b && segments[2] === 1) {
        return false;
    }
    // Discard-Only Address Block (`100::/64`)
    if (segments[0] === 0x100 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0) {
        return false;
    }
    // IETF Protocol Assignments (`2001::/23`)
    if (segments[0] === 0x2001 && segments[1] < 0x200) {
        // Port Control Protocol Anycast (`2001:1::1`)
        if (segments[0] === 0x2001 && segments[1] === 1 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 1) {
            return true;
        }
        // Traversal Using Relays around NAT Anycast (`2001:1::2`)
        if (segments[0] === 0x2001 && segments[1] === 1 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 2) {
            return true;
        }
        // AMT (`2001:3::/32`)
        if (segments[0] === 0x2001 && segments[1] === 3) {
            return true;
        }
        // AS112-v6 (`2001:4:112::/48`)
        if (segments[0] === 0x2001 && segments[1] === 4 && segments[2] === 0x112) {
            return true;
        }
        // ORCHIDv2 (`2001:20::/28`)
        if (segments[0] === 0x2001 && segments[1] >= 0x20 && segments[1] <= 0x2f) {
            return true;
        }
        // Benchmarking range (and others)
        return false;
    }
    // Documentation range
    if (segments[0] === 0x2001 && segments[1] === 0xdb8) {
        return false;
    }
    // Unique local range
    if ((segments[0] & 0xfe00) === 0xfc00) {
        return false;
    }
    // Unicast link local range
    if ((segments[0] & 0xffc0) === 0xfe80) {
        return false;
    }
    return true;
}
function isGlobalIp(s, proxies) {
    if (isGlobalIpv4(s, proxies)) {
        return true;
    }
    if (isGlobalIpv6(s, proxies)) {
        return true;
    }
    return false;
}
function isHeaders(val) {
    return typeof val.get === "function";
}
function getHeader(headers, headerKey) {
    if (isHeaders(headers)) {
        return headers.get(headerKey);
    } else {
        const headerValue = headers[headerKey];
        if (Array.isArray(headerValue)) {
            return headerValue.join(",");
        } else {
            return headerValue;
        }
    }
}
// Heavily based on https://github.com/pbojinov/request-ip
//
// Licensed: The MIT License (MIT) Copyright (c) 2022 Petar Bojinov -
// petarbojinov+github@gmail.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions: The above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
function findIp(request, options) {
    const { platform, proxies: rawProxies } = options || {};
    const proxies = [];
    if (Array.isArray(rawProxies)) {
        for (const cidrOrIp of rawProxies){
            if (typeof cidrOrIp === "string") {
                proxies.push(parseProxy(cidrOrIp));
            }
            if (isIpv4Cidr(cidrOrIp) || isIpv6Cidr(cidrOrIp)) {
                proxies.push(cidrOrIp);
            }
        }
    }
    // Prefer anything available via the platform over headers since headers can
    // be set by users. Only if we don't have an IP available in `request` do we
    // search the `headers`.
    if (isGlobalIp(request.ip, proxies)) {
        return request.ip;
    }
    const socketRemoteAddress = request.socket?.remoteAddress;
    if (isGlobalIp(socketRemoteAddress, proxies)) {
        return socketRemoteAddress;
    }
    const infoRemoteAddress = request.info?.remoteAddress;
    if (isGlobalIp(infoRemoteAddress, proxies)) {
        return infoRemoteAddress;
    }
    // AWS Api Gateway + Lambda
    const requestContextIdentitySourceIp = request.requestContext?.identity?.sourceIp;
    if (isGlobalIp(requestContextIdentitySourceIp, proxies)) {
        return requestContextIdentitySourceIp;
    }
    // Validate we have some object for `request.headers`
    if (typeof request.headers !== "object" || request.headers === null) {
        return "";
    }
    // Platform-specific headers should only be accepted when we can determine
    // that we are running on that platform. For example, the `CF-Connecting-IP`
    // header should only be accepted when running on Cloudflare; otherwise, it
    // can be spoofed.
    if (platform === "cloudflare") {
        // CF-Connecting-IPv6: https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#cf-connecting-ipv6
        const cfConnectingIpv6 = getHeader(request.headers, "cf-connecting-ipv6");
        if (isGlobalIpv6(cfConnectingIpv6, proxies)) {
            return cfConnectingIpv6;
        }
        // CF-Connecting-IP: https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#cf-connecting-ip
        const cfConnectingIp = getHeader(request.headers, "cf-connecting-ip");
        if (isGlobalIp(cfConnectingIp, proxies)) {
            return cfConnectingIp;
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    // Firebase https://github.com/arcjet/arcjet-js/issues/5383
    if (platform === "firebase") {
        const fahClientIp = getHeader(request.headers, "x-fah-client-ip");
        if (isGlobalIp(fahClientIp, proxies)) {
            return fahClientIp;
        }
        // https://cloud.google.com/functions/docs/reference/headers#x-forwarded-for
        // (and https://github.com/arcjet/arcjet-js/issues/5383).
        // The last are probably going to be proxies which have to be filtered with
        // `proxies`.
        const xForwardedFor = getHeader(request.headers, "x-forwarded-for");
        const xForwardedForItems = parseXForwardedFor(xForwardedFor);
        for (const item of xForwardedForItems.reverse()){
            if (isGlobalIp(item, proxies)) {
                return item;
            }
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    // Fly.io: https://fly.io/docs/machines/runtime-environment/#fly_app_name
    if (platform === "fly-io") {
        // Fly-Client-IP: https://fly.io/docs/networking/request-headers/#fly-client-ip
        const flyClientIp = getHeader(request.headers, "fly-client-ip");
        if (isGlobalIp(flyClientIp, proxies)) {
            return flyClientIp;
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    if (platform === "vercel") {
        // https://vercel.com/docs/edge-network/headers/request-headers#x-real-ip
        // Also used by `@vercel/functions`, see:
        // https://github.com/vercel/vercel/blob/d7536d52c87712b1b3f83e4b0fd535a1fb7e384c/packages/functions/src/headers.ts#L12
        const xRealIp = getHeader(request.headers, "x-real-ip");
        if (isGlobalIp(xRealIp, proxies)) {
            return xRealIp;
        }
        // https://vercel.com/docs/edge-network/headers/request-headers#x-vercel-forwarded-for
        // By default, it seems this will be 1 address, but they discuss trusted
        // proxy forwarding so we try to parse it like normal. See
        // https://vercel.com/docs/edge-network/headers/request-headers#custom-x-forwarded-for-ip
        const xVercelForwardedFor = getHeader(request.headers, "x-vercel-forwarded-for");
        const xVercelForwardedForItems = parseXForwardedFor(xVercelForwardedFor);
        // As per MDN X-Forwarded-For Headers documentation at
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
        // We may find more than one IP in the `x-forwarded-for` header. Since the
        // first IP will be closest to the user (and the most likely to be spoofed),
        // we want to iterate tail-to-head so we reverse the list.
        for (const item of xVercelForwardedForItems.reverse()){
            if (isGlobalIp(item, proxies)) {
                return item;
            }
        }
        // https://vercel.com/docs/edge-network/headers/request-headers#x-forwarded-for
        // By default, it seems this will be 1 address, but they discuss trusted
        // proxy forwarding so we try to parse it like normal. See
        // https://vercel.com/docs/edge-network/headers/request-headers#custom-x-forwarded-for-ip
        const xForwardedFor = getHeader(request.headers, "x-forwarded-for");
        const xForwardedForItems = parseXForwardedFor(xForwardedFor);
        // As per MDN X-Forwarded-For Headers documentation at
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
        // We may find more than one IP in the `x-forwarded-for` header. Since the
        // first IP will be closest to the user (and the most likely to be spoofed),
        // we want to iterate tail-to-head so we reverse the list.
        for (const item of xForwardedForItems.reverse()){
            if (isGlobalIp(item, proxies)) {
                return item;
            }
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    if (platform === "render") {
        // True-Client-IP: https://community.render.com/t/what-number-of-proxies-sit-in-front-of-an-express-app-deployed-on-render/35981/2
        const trueClientIp = getHeader(request.headers, "true-client-ip");
        if (isGlobalIp(trueClientIp, proxies)) {
            return trueClientIp;
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    // Standard headers used by Amazon EC2, Heroku, and others.
    const xClientIp = getHeader(request.headers, "x-client-ip");
    if (isGlobalIp(xClientIp, proxies)) {
        return xClientIp;
    }
    // Load-balancers (AWS ELB) or proxies.
    const xForwardedFor = getHeader(request.headers, "x-forwarded-for");
    const xForwardedForItems = parseXForwardedFor(xForwardedFor);
    // As per MDN X-Forwarded-For Headers documentation at
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    // We may find more than one IP in the `x-forwarded-for` header. Since the
    // first IP will be closest to the user (and the most likely to be spoofed),
    // we want to iterate tail-to-head so we reverse the list.
    for (const item of xForwardedForItems.reverse()){
        if (isGlobalIp(item, proxies)) {
            return item;
        }
    }
    // DigitalOcean.
    // DO-Connecting-IP: https://www.digitalocean.com/community/questions/app-platform-client-ip
    const doConnectingIp = getHeader(request.headers, "do-connecting-ip");
    if (isGlobalIp(doConnectingIp, proxies)) {
        return doConnectingIp;
    }
    // Fastly and Firebase hosting header (When forwared to cloud function)
    // Fastly-Client-IP
    const fastlyClientIp = getHeader(request.headers, "fastly-client-ip");
    if (isGlobalIp(fastlyClientIp, proxies)) {
        return fastlyClientIp;
    }
    // Akamai
    // True-Client-IP
    const trueClientIp = getHeader(request.headers, "true-client-ip");
    if (isGlobalIp(trueClientIp, proxies)) {
        return trueClientIp;
    }
    // Default nginx proxy/fcgi; alternative to x-forwarded-for, used by some proxies
    // X-Real-IP
    const xRealIp = getHeader(request.headers, "x-real-ip");
    if (isGlobalIp(xRealIp, proxies)) {
        return xRealIp;
    }
    // Rackspace LB and Riverbed's Stingray?
    const xClusterClientIp = getHeader(request.headers, "x-cluster-client-ip");
    if (isGlobalIp(xClusterClientIp, proxies)) {
        return xClusterClientIp;
    }
    const xForwarded = getHeader(request.headers, "x-forwarded");
    if (isGlobalIp(xForwarded, proxies)) {
        return xForwarded;
    }
    const forwardedFor = getHeader(request.headers, "forwarded-for");
    if (isGlobalIp(forwardedFor, proxies)) {
        return forwardedFor;
    }
    const forwarded = getHeader(request.headers, "forwarded");
    if (isGlobalIp(forwarded, proxies)) {
        return forwarded;
    }
    // Google Cloud App Engine
    // X-Appengine-User-IP: https://cloud.google.com/appengine/docs/standard/reference/request-headers?tab=node.js
    const xAppEngineUserIp = getHeader(request.headers, "x-appengine-user-ip");
    if (isGlobalIp(xAppEngineUserIp, proxies)) {
        return xAppEngineUserIp;
    }
    return "";
}
;
}),
"[project]/node_modules/@arcjet/env/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Detect the platform.
 *
 * @param environment
 *   Environment.
 * @returns
 *   Name of platform if found.
 */ __turbopack_context__.s({
    "baseUrl": ()=>baseUrl,
    "isDevelopment": ()=>isDevelopment,
    "logLevel": ()=>logLevel,
    "platform": ()=>platform
});
function platform(environment) {
    if (typeof environment["FIREBASE_CONFIG"] === "string" && environment["FIREBASE_CONFIG"] !== "") {
        return "firebase";
    }
    if (typeof environment["FLY_APP_NAME"] === "string" && environment["FLY_APP_NAME"] !== "") {
        return "fly-io";
    }
    if (typeof environment["VERCEL"] === "string" && environment["VERCEL"] === "1") {
        return "vercel";
    }
    // https://render.com/docs/environment-variables
    if (typeof environment["RENDER"] === "string" && environment["RENDER"] === "true") {
        return "render";
    }
}
/**
 * Check if the environment is development.
 *
 * @param environment
 *   Environment.
 * @returns
 *   Whether the environment is development.
 */ function isDevelopment(environment) {
    return environment.NODE_ENV === "development" || environment.MODE === "development" || environment.ARCJET_ENV === "development";
}
/**
 * Get the log level.
 *
 * @param environment
 *   Environment.
 * @returns
 *   Log level.
 */ function logLevel(environment) {
    const level = environment["ARCJET_LOG_LEVEL"];
    switch(level){
        case "debug":
        case "info":
        case "warn":
        case "error":
            return level;
        default:
            // Default to warn if not set
            return "warn";
    }
}
const baseUrlAllowed = [
    "https://decide.arcjet.com",
    "https://decide.arcjettest.com",
    "https://fly.decide.arcjet.com",
    "https://fly.decide.arcjettest.com",
    "https://decide.arcjet.orb.local",
    // Allow trailing slashes
    "https://decide.arcjet.com/",
    "https://decide.arcjettest.com/",
    "https://fly.decide.arcjet.com/",
    "https://fly.decide.arcjettest.com/",
    "https://decide.arcjet.orb.local/"
];
/**
 * Get the base URL of an Arcjet API.
 *
 * @param environment
 *   Environment.
 * @returns
 *   Base URL of Arcjet API.
 */ function baseUrl(environment) {
    // Use ARCJET_BASE_URL if it is set and belongs to our allowlist; otherwise
    // use the hardcoded default.
    if (typeof environment["ARCJET_BASE_URL"] === "string" && baseUrlAllowed.includes(environment["ARCJET_BASE_URL"])) {
        return environment["ARCJET_BASE_URL"];
    }
    // If we're running on fly.io, use the Arcjet Decide Service hosted on fly
    // Ref: https://fly.io/docs/machines/runtime-environment/#environment-variables
    if (platform(environment) === "fly-io") {
        return "https://fly.decide.arcjet.com";
    }
    return "https://decide.arcjet.com";
}
;
}),
"[project]/node_modules/@arcjet/sprintf/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>sprintf,
    "sprintf": ()=>sprintf
});
function bigintReplacer(key, value) {
    if (typeof value === "bigint") {
        return "[BigInt]";
    }
    return value;
}
// TODO: Deduplicate this and logger implementation
function tryStringify(o) {
    try {
        return JSON.stringify(o, bigintReplacer);
    } catch  {
        return `"[Circular]"`;
    }
}
const PERCENT_CODE = 37; /* % */ 
const LOWERCASE_D_CODE = 100; /* d */ 
const LOWERCASE_F_CODE = 102; /* f */ 
const LOWERCASE_I_CODE = 105; /* i */ 
const UPPERCASE_O_CODE = 79; /* O */ 
const LOWERCASE_O_CODE = 111; /* o */ 
const LOWERCASE_J_CODE = 106; /* j */ 
const LOWERCASE_S_CODE = 115; /* s */ 
// Heavily based on https://github.com/pinojs/quick-format-unescaped
//
// The MIT License (MIT)
//
// Copyright (c) 2016-2019 David Mark Clements
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
/**
 * Format a string with placeholders using the provided arguments.
 *
 * @param template
 *   Template.
 * @param values
 *   Values to interpolate.
 * @returns
 *   Formatted string.
 */ function sprintf(template, ...values) {
    if (typeof template !== "string") {
        throw new TypeError("First argument must be a string");
    }
    if (values.length === 0) {
        return template;
    }
    let output = "";
    let valueIndex = 0;
    let lastPosition = -1;
    for(let index = 0; index < template.length;){
        if (template.charCodeAt(index) === PERCENT_CODE && index + 1 < template.length) {
            lastPosition = lastPosition > -1 ? lastPosition : 0;
            switch(template.charCodeAt(index + 1)){
                case LOWERCASE_D_CODE:
                case LOWERCASE_F_CODE:
                    {
                        if (valueIndex >= values.length) {
                            break;
                        }
                        const value = values[valueIndex];
                        if (typeof value !== "number") {
                            break;
                        }
                        if (lastPosition < index) {
                            output += template.slice(lastPosition, index);
                        }
                        output += value;
                        lastPosition = index + 2;
                        index++;
                        break;
                    }
                case LOWERCASE_I_CODE:
                    {
                        if (valueIndex >= values.length) {
                            break;
                        }
                        const value = values[valueIndex];
                        if (typeof value !== "number") {
                            break;
                        }
                        if (lastPosition < index) {
                            output += template.slice(lastPosition, index);
                        }
                        output += Math.floor(value);
                        lastPosition = index + 2;
                        index++;
                        break;
                    }
                case UPPERCASE_O_CODE:
                case LOWERCASE_O_CODE:
                case LOWERCASE_J_CODE:
                    {
                        if (valueIndex >= values.length) {
                            break;
                        }
                        const value = values[valueIndex];
                        if (value === undefined) {
                            break;
                        }
                        if (lastPosition < index) {
                            output += template.slice(lastPosition, index);
                        }
                        if (typeof value === "string") {
                            output += `'${value}'`;
                            lastPosition = index + 2;
                            index++;
                            break;
                        }
                        if (typeof value === "bigint") {
                            output += `"[BigInt]"`;
                            lastPosition = index + 2;
                            index++;
                            break;
                        }
                        if (typeof value === "function") {
                            output += value.name || "<anonymous>";
                            lastPosition = index + 2;
                            index++;
                            break;
                        }
                        output += tryStringify(value);
                        lastPosition = index + 2;
                        index++;
                        break;
                    }
                case LOWERCASE_S_CODE:
                    {
                        if (valueIndex >= values.length) {
                            break;
                        }
                        const value = values[valueIndex];
                        if (typeof value !== "string") {
                            break;
                        }
                        if (lastPosition < index) {
                            output += template.slice(lastPosition, index);
                        }
                        output += value;
                        lastPosition = index + 2;
                        index++;
                        break;
                    }
                case PERCENT_CODE:
                    {
                        if (lastPosition < index) {
                            output += template.slice(lastPosition, index);
                        }
                        output += "%";
                        lastPosition = index + 2;
                        index++;
                        valueIndex--;
                        break;
                    }
            }
            ++valueIndex;
        }
        ++index;
    }
    if (lastPosition === -1) {
        return template;
    }
    if (lastPosition < template.length) {
        output += template.slice(lastPosition);
    }
    return output;
}
;
}),
"[project]/node_modules/@arcjet/logger/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Logger": ()=>Logger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/sprintf/index.js [app-rsc] (ecmascript)");
;
function bigintReplacer(key, value) {
    if (typeof value === "bigint") {
        return "[BigInt]";
    }
    return value;
}
// TODO: Deduplicate this and sprintf implementation
function tryStringify(value) {
    try {
        return JSON.stringify(value, bigintReplacer);
    } catch  {
        return "[Circular]";
    }
}
const PREFIX = "✦Aj";
function getMessage(mergingObject, message, interpolationValues) {
    // The first argument was the message so juggle the arguments
    if (typeof mergingObject === "string") {
        interpolationValues = [
            message,
            ...interpolationValues
        ];
        message = mergingObject;
    }
    // Prefer a string message over `mergingObject.msg`, as per Pino:
    // https://github.com/pinojs/pino/blob/8db130eba0439e61c802448d31eb1998cebfbc98/docs/api.md#message-string
    if (typeof message === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(message, ...interpolationValues);
    }
    if (typeof mergingObject === "object" && mergingObject !== null && "msg" in mergingObject && typeof mergingObject.msg === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(mergingObject.msg, [
            message,
            ...interpolationValues
        ]);
    }
}
function getOutput(messageOrObject, message, interpolationValues) {
    let output = getMessage(messageOrObject, message, interpolationValues);
    if (typeof output !== "string") {
        return;
    }
    if (typeof messageOrObject === "object" && messageOrObject !== null) {
        for (const [key, value] of Object.entries(messageOrObject)){
            output += `\n      ${key}: ${tryStringify(value)}`;
        }
    }
    return output;
}
/**
 * Logger.
 */ class Logger {
    #logLevel;
    /**
     * Configuration.
     *
     * @param options
     *   Configuration.
     * @returns
     *   Logger.
     */ constructor(options){
        if (typeof options.level !== "string") {
            throw new Error(`Invalid log level`);
        }
        switch(options.level){
            case "debug":
                this.#logLevel = 0;
                break;
            case "info":
                this.#logLevel = 1;
                break;
            case "warn":
                this.#logLevel = 2;
                break;
            case "error":
                this.#logLevel = 3;
                break;
            default:
                {
                    throw new Error(`Unknown log level: ${options.level}`);
                }
        }
    }
    debug(messageOrObject, message, ...interpolationValues) {
        if (this.#logLevel <= 0) {
            const output = getOutput(messageOrObject, message, interpolationValues);
            if (typeof output !== "undefined") {
                console.debug(`${PREFIX} DEBUG ${output}`);
            }
        }
    }
    info(messageOrObject, message, ...interpolationValues) {
        if (this.#logLevel <= 1) {
            const output = getOutput(messageOrObject, message, interpolationValues);
            if (typeof output !== "undefined") {
                console.info(`${PREFIX} INFO ${output}`);
            }
        }
    }
    warn(messageOrObject, message, ...interpolationValues) {
        if (this.#logLevel <= 2) {
            const output = getOutput(messageOrObject, message, interpolationValues);
            if (typeof output !== "undefined") {
                console.warn(`${PREFIX} WARN ${output}`);
            }
        }
    }
    error(messageOrObject, message, ...interpolationValues) {
        if (this.#logLevel <= 3) {
            const output = getOutput(messageOrObject, message, interpolationValues);
            if (typeof output !== "undefined") {
                console.error(`${PREFIX} ERROR ${output}`);
            }
        }
    }
}
;
}),
"[project]/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright Brian White. All rights reserved.
 *
 * @see https://github.com/mscdex/streamsearch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
 * by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
 */ const EventEmitter = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)").EventEmitter;
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
function SBMH(needle) {
    if (typeof needle === 'string') {
        needle = Buffer.from(needle);
    }
    if (!Buffer.isBuffer(needle)) {
        throw new TypeError('The needle has to be a String or a Buffer.');
    }
    const needleLength = needle.length;
    if (needleLength === 0) {
        throw new Error('The needle cannot be an empty String/Buffer.');
    }
    if (needleLength > 256) {
        throw new Error('The needle cannot have a length bigger than 256.');
    }
    this.maxMatches = Infinity;
    this.matches = 0;
    this._occ = new Array(256).fill(needleLength); // Initialize occurrence table.
    this._lookbehind_size = 0;
    this._needle = needle;
    this._bufpos = 0;
    this._lookbehind = Buffer.alloc(needleLength);
    // Populate occurrence table with analysis of the needle,
    // ignoring last letter.
    for(var i = 0; i < needleLength - 1; ++i){
        this._occ[needle[i]] = needleLength - 1 - i;
    }
}
inherits(SBMH, EventEmitter);
SBMH.prototype.reset = function() {
    this._lookbehind_size = 0;
    this.matches = 0;
    this._bufpos = 0;
};
SBMH.prototype.push = function(chunk, pos) {
    if (!Buffer.isBuffer(chunk)) {
        chunk = Buffer.from(chunk, 'binary');
    }
    const chlen = chunk.length;
    this._bufpos = pos || 0;
    let r;
    while(r !== chlen && this.matches < this.maxMatches){
        r = this._sbmh_feed(chunk);
    }
    return r;
};
SBMH.prototype._sbmh_feed = function(data) {
    const len = data.length;
    const needle = this._needle;
    const needleLength = needle.length;
    const lastNeedleChar = needle[needleLength - 1];
    // Positive: points to a position in `data`
    //           pos == 3 points to data[3]
    // Negative: points to a position in the lookbehind buffer
    //           pos == -2 points to lookbehind[lookbehind_size - 2]
    let pos = -this._lookbehind_size;
    let ch;
    if (pos < 0) {
        // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
        // search with character lookup code that considers both the
        // lookbehind buffer and the current round's haystack data.
        //
        // Loop until
        //   there is a match.
        // or until
        //   we've moved past the position that requires the
        //   lookbehind buffer. In this case we switch to the
        //   optimized loop.
        // or until
        //   the character to look at lies outside the haystack.
        while(pos < 0 && pos <= len - needleLength){
            ch = this._sbmh_lookup_char(data, pos + needleLength - 1);
            if (ch === lastNeedleChar && this._sbmh_memcmp(data, pos, needleLength - 1)) {
                this._lookbehind_size = 0;
                ++this.matches;
                this.emit('info', true);
                return this._bufpos = pos + needleLength;
            }
            pos += this._occ[ch];
        }
        // No match.
        if (pos < 0) {
            // There's too few data for Boyer-Moore-Horspool to run,
            // so let's use a different algorithm to skip as much as
            // we can.
            // Forward pos until
            //   the trailing part of lookbehind + data
            //   looks like the beginning of the needle
            // or until
            //   pos == 0
            while(pos < 0 && !this._sbmh_memcmp(data, pos, len - pos)){
                ++pos;
            }
        }
        if (pos >= 0) {
            // Discard lookbehind buffer.
            this.emit('info', false, this._lookbehind, 0, this._lookbehind_size);
            this._lookbehind_size = 0;
        } else {
            // Cut off part of the lookbehind buffer that has
            // been processed and append the entire haystack
            // into it.
            const bytesToCutOff = this._lookbehind_size + pos;
            if (bytesToCutOff > 0) {
                // The cut off data is guaranteed not to contain the needle.
                this.emit('info', false, this._lookbehind, 0, bytesToCutOff);
            }
            this._lookbehind.copy(this._lookbehind, 0, bytesToCutOff, this._lookbehind_size - bytesToCutOff);
            this._lookbehind_size -= bytesToCutOff;
            data.copy(this._lookbehind, this._lookbehind_size);
            this._lookbehind_size += len;
            this._bufpos = len;
            return len;
        }
    }
    pos += (pos >= 0) * this._bufpos;
    // Lookbehind buffer is now empty. We only need to check if the
    // needle is in the haystack.
    if (data.indexOf(needle, pos) !== -1) {
        pos = data.indexOf(needle, pos);
        ++this.matches;
        if (pos > 0) {
            this.emit('info', true, data, this._bufpos, pos);
        } else {
            this.emit('info', true);
        }
        return this._bufpos = pos + needleLength;
    } else {
        pos = len - needleLength;
    }
    // There was no match. If there's trailing haystack data that we cannot
    // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
    // data is less than the needle size) then match using a modified
    // algorithm that starts matching from the beginning instead of the end.
    // Whatever trailing data is left after running this algorithm is added to
    // the lookbehind buffer.
    while(pos < len && (data[pos] !== needle[0] || Buffer.compare(data.subarray(pos, pos + len - pos), needle.subarray(0, len - pos)) !== 0)){
        ++pos;
    }
    if (pos < len) {
        data.copy(this._lookbehind, 0, pos, pos + (len - pos));
        this._lookbehind_size = len - pos;
    }
    // Everything until pos is guaranteed not to contain needle data.
    if (pos > 0) {
        this.emit('info', false, data, this._bufpos, pos < len ? pos : len);
    }
    this._bufpos = len;
    return len;
};
SBMH.prototype._sbmh_lookup_char = function(data, pos) {
    return pos < 0 ? this._lookbehind[this._lookbehind_size + pos] : data[pos];
};
SBMH.prototype._sbmh_memcmp = function(data, pos, len) {
    for(var i = 0; i < len; ++i){
        if (this._sbmh_lookup_char(data, pos + i) !== this._needle[i]) {
            return false;
        }
    }
    return true;
};
module.exports = SBMH;
}}),
"[project]/node_modules/@fastify/busboy/deps/dicer/lib/PartStream.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const ReadableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Readable;
function PartStream(opts) {
    ReadableStream.call(this, opts);
}
inherits(PartStream, ReadableStream);
PartStream.prototype._read = function(n) {};
module.exports = PartStream;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = function getLimit(limits, name, defaultLimit) {
    if (!limits || limits[name] === undefined || limits[name] === null) {
        return defaultLimit;
    }
    if (typeof limits[name] !== 'number' || isNaN(limits[name])) {
        throw new TypeError('Limit ' + name + ' is not a valid number');
    }
    return limits[name];
};
}}),
"[project]/node_modules/@fastify/busboy/deps/dicer/lib/HeaderParser.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const EventEmitter = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)").EventEmitter;
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const getLimit = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-rsc] (ecmascript)");
const StreamSearch = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-rsc] (ecmascript)");
const B_DCRLF = Buffer.from('\r\n\r\n');
const RE_CRLF = /\r\n/g;
const RE_HDR = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/ // eslint-disable-line no-control-regex
;
function HeaderParser(cfg) {
    EventEmitter.call(this);
    cfg = cfg || {};
    const self = this;
    this.nread = 0;
    this.maxed = false;
    this.npairs = 0;
    this.maxHeaderPairs = getLimit(cfg, 'maxHeaderPairs', 2000);
    this.maxHeaderSize = getLimit(cfg, 'maxHeaderSize', 80 * 1024);
    this.buffer = '';
    this.header = {};
    this.finished = false;
    this.ss = new StreamSearch(B_DCRLF);
    this.ss.on('info', function(isMatch, data, start, end) {
        if (data && !self.maxed) {
            if (self.nread + end - start >= self.maxHeaderSize) {
                end = self.maxHeaderSize - self.nread + start;
                self.nread = self.maxHeaderSize;
                self.maxed = true;
            } else {
                self.nread += end - start;
            }
            self.buffer += data.toString('binary', start, end);
        }
        if (isMatch) {
            self._finish();
        }
    });
}
inherits(HeaderParser, EventEmitter);
HeaderParser.prototype.push = function(data) {
    const r = this.ss.push(data);
    if (this.finished) {
        return r;
    }
};
HeaderParser.prototype.reset = function() {
    this.finished = false;
    this.buffer = '';
    this.header = {};
    this.ss.reset();
};
HeaderParser.prototype._finish = function() {
    if (this.buffer) {
        this._parseHeader();
    }
    this.ss.matches = this.ss.maxMatches;
    const header = this.header;
    this.header = {};
    this.buffer = '';
    this.finished = true;
    this.nread = this.npairs = 0;
    this.maxed = false;
    this.emit('header', header);
};
HeaderParser.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) {
        return;
    }
    const lines = this.buffer.split(RE_CRLF);
    const len = lines.length;
    let m, h;
    for(var i = 0; i < len; ++i){
        if (lines[i].length === 0) {
            continue;
        }
        if (lines[i][0] === '\t' || lines[i][0] === ' ') {
            // folded header content
            // RFC2822 says to just remove the CRLF and not the whitespace following
            // it, so we follow the RFC and include the leading whitespace ...
            if (h) {
                this.header[h][this.header[h].length - 1] += lines[i];
                continue;
            }
        }
        const posColon = lines[i].indexOf(':');
        if (posColon === -1 || posColon === 0) {
            return;
        }
        m = RE_HDR.exec(lines[i]);
        h = m[1].toLowerCase();
        this.header[h] = this.header[h] || [];
        this.header[h].push(m[2] || '');
        if (++this.npairs === this.maxHeaderPairs) {
            break;
        }
    }
};
module.exports = HeaderParser;
}}),
"[project]/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const WritableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Writable;
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const StreamSearch = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-rsc] (ecmascript)");
const PartStream = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/deps/dicer/lib/PartStream.js [app-rsc] (ecmascript)");
const HeaderParser = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/deps/dicer/lib/HeaderParser.js [app-rsc] (ecmascript)");
const DASH = 45;
const B_ONEDASH = Buffer.from('-');
const B_CRLF = Buffer.from('\r\n');
const EMPTY_FN = function() {};
function Dicer(cfg) {
    if (!(this instanceof Dicer)) {
        return new Dicer(cfg);
    }
    WritableStream.call(this, cfg);
    if (!cfg || !cfg.headerFirst && typeof cfg.boundary !== 'string') {
        throw new TypeError('Boundary required');
    }
    if (typeof cfg.boundary === 'string') {
        this.setBoundary(cfg.boundary);
    } else {
        this._bparser = undefined;
    }
    this._headerFirst = cfg.headerFirst;
    this._dashes = 0;
    this._parts = 0;
    this._finished = false;
    this._realFinish = false;
    this._isPreamble = true;
    this._justMatched = false;
    this._firstWrite = true;
    this._inHeader = true;
    this._part = undefined;
    this._cb = undefined;
    this._ignoreData = false;
    this._partOpts = {
        highWaterMark: cfg.partHwm
    };
    this._pause = false;
    const self = this;
    this._hparser = new HeaderParser(cfg);
    this._hparser.on('header', function(header) {
        self._inHeader = false;
        self._part.emit('header', header);
    });
}
inherits(Dicer, WritableStream);
Dicer.prototype.emit = function(ev) {
    if (ev === 'finish' && !this._realFinish) {
        if (!this._finished) {
            const self = this;
            process.nextTick(function() {
                self.emit('error', new Error('Unexpected end of multipart data'));
                if (self._part && !self._ignoreData) {
                    const type = self._isPreamble ? 'Preamble' : 'Part';
                    self._part.emit('error', new Error(type + ' terminated early due to unexpected end of multipart data'));
                    self._part.push(null);
                    process.nextTick(function() {
                        self._realFinish = true;
                        self.emit('finish');
                        self._realFinish = false;
                    });
                    return;
                }
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            });
        }
    } else {
        WritableStream.prototype.emit.apply(this, arguments);
    }
};
Dicer.prototype._write = function(data, encoding, cb) {
    // ignore unexpected data (e.g. extra trailer data after finished)
    if (!this._hparser && !this._bparser) {
        return cb();
    }
    if (this._headerFirst && this._isPreamble) {
        if (!this._part) {
            this._part = new PartStream(this._partOpts);
            if (this.listenerCount('preamble') !== 0) {
                this.emit('preamble', this._part);
            } else {
                this._ignore();
            }
        }
        const r = this._hparser.push(data);
        if (!this._inHeader && r !== undefined && r < data.length) {
            data = data.slice(r);
        } else {
            return cb();
        }
    }
    // allows for "easier" testing
    if (this._firstWrite) {
        this._bparser.push(B_CRLF);
        this._firstWrite = false;
    }
    this._bparser.push(data);
    if (this._pause) {
        this._cb = cb;
    } else {
        cb();
    }
};
Dicer.prototype.reset = function() {
    this._part = undefined;
    this._bparser = undefined;
    this._hparser = undefined;
};
Dicer.prototype.setBoundary = function(boundary) {
    const self = this;
    this._bparser = new StreamSearch('\r\n--' + boundary);
    this._bparser.on('info', function(isMatch, data, start, end) {
        self._oninfo(isMatch, data, start, end);
    });
};
Dicer.prototype._ignore = function() {
    if (this._part && !this._ignoreData) {
        this._ignoreData = true;
        this._part.on('error', EMPTY_FN);
        // we must perform some kind of read on the stream even though we are
        // ignoring the data, otherwise node's Readable stream will not emit 'end'
        // after pushing null to the stream
        this._part.resume();
    }
};
Dicer.prototype._oninfo = function(isMatch, data, start, end) {
    let buf;
    const self = this;
    let i = 0;
    let r;
    let shouldWriteMore = true;
    if (!this._part && this._justMatched && data) {
        while(this._dashes < 2 && start + i < end){
            if (data[start + i] === DASH) {
                ++i;
                ++this._dashes;
            } else {
                if (this._dashes) {
                    buf = B_ONEDASH;
                }
                this._dashes = 0;
                break;
            }
        }
        if (this._dashes === 2) {
            if (start + i < end && this.listenerCount('trailer') !== 0) {
                this.emit('trailer', data.slice(start + i, end));
            }
            this.reset();
            this._finished = true;
            // no more parts will be added
            if (self._parts === 0) {
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            }
        }
        if (this._dashes) {
            return;
        }
    }
    if (this._justMatched) {
        this._justMatched = false;
    }
    if (!this._part) {
        this._part = new PartStream(this._partOpts);
        this._part._read = function(n) {
            self._unpause();
        };
        if (this._isPreamble && this.listenerCount('preamble') !== 0) {
            this.emit('preamble', this._part);
        } else if (this._isPreamble !== true && this.listenerCount('part') !== 0) {
            this.emit('part', this._part);
        } else {
            this._ignore();
        }
        if (!this._isPreamble) {
            this._inHeader = true;
        }
    }
    if (data && start < end && !this._ignoreData) {
        if (this._isPreamble || !this._inHeader) {
            if (buf) {
                shouldWriteMore = this._part.push(buf);
            }
            shouldWriteMore = this._part.push(data.slice(start, end));
            if (!shouldWriteMore) {
                this._pause = true;
            }
        } else if (!this._isPreamble && this._inHeader) {
            if (buf) {
                this._hparser.push(buf);
            }
            r = this._hparser.push(data.slice(start, end));
            if (!this._inHeader && r !== undefined && r < end) {
                this._oninfo(false, data, start + r, end);
            }
        }
    }
    if (isMatch) {
        this._hparser.reset();
        if (this._isPreamble) {
            this._isPreamble = false;
        } else {
            if (start !== end) {
                ++this._parts;
                this._part.on('end', function() {
                    if (--self._parts === 0) {
                        if (self._finished) {
                            self._realFinish = true;
                            self.emit('finish');
                            self._realFinish = false;
                        } else {
                            self._unpause();
                        }
                    }
                });
            }
        }
        this._part.push(null);
        this._part = undefined;
        this._ignoreData = false;
        this._justMatched = true;
        this._dashes = 0;
    }
};
Dicer.prototype._unpause = function() {
    if (!this._pause) {
        return;
    }
    this._pause = false;
    if (this._cb) {
        const cb = this._cb;
        this._cb = undefined;
        cb();
    }
};
module.exports = Dicer;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// Node has always utf-8
const utf8Decoder = new TextDecoder('utf-8');
const textDecoders = new Map([
    [
        'utf-8',
        utf8Decoder
    ],
    [
        'utf8',
        utf8Decoder
    ]
]);
function getDecoder(charset) {
    let lc;
    while(true){
        switch(charset){
            case 'utf-8':
            case 'utf8':
                return decoders.utf8;
            case 'latin1':
            case 'ascii':
            case 'us-ascii':
            case 'iso-8859-1':
            case 'iso8859-1':
            case 'iso88591':
            case 'iso_8859-1':
            case 'windows-1252':
            case 'iso_8859-1:1987':
            case 'cp1252':
            case 'x-cp1252':
                return decoders.latin1;
            case 'utf16le':
            case 'utf-16le':
            case 'ucs2':
            case 'ucs-2':
                return decoders.utf16le;
            case 'base64':
                return decoders.base64;
            default:
                if (lc === undefined) {
                    lc = true;
                    charset = charset.toLowerCase();
                    continue;
                }
                return decoders.other.bind(charset);
        }
    }
}
const decoders = {
    utf8: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.utf8Slice(0, data.length);
    },
    latin1: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            return data;
        }
        return data.latin1Slice(0, data.length);
    },
    utf16le: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.ucs2Slice(0, data.length);
    },
    base64: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.base64Slice(0, data.length);
    },
    other: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        if (textDecoders.has(("TURBOPACK member replacement", __turbopack_context__.e).toString())) {
            try {
                return textDecoders.get(("TURBOPACK member replacement", __turbopack_context__.e)).decode(data);
            } catch  {}
        }
        return typeof data === 'string' ? data : data.toString();
    }
};
function decodeText(text, sourceEncoding, destEncoding) {
    if (text) {
        return getDecoder(destEncoding)(text, sourceEncoding);
    }
    return text;
}
module.exports = decodeText;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/* eslint-disable object-property-newline */ const decodeText = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-rsc] (ecmascript)");
const RE_ENCODED = /%[a-fA-F0-9][a-fA-F0-9]/g;
const EncodedLookup = {
    '%00': '\x00',
    '%01': '\x01',
    '%02': '\x02',
    '%03': '\x03',
    '%04': '\x04',
    '%05': '\x05',
    '%06': '\x06',
    '%07': '\x07',
    '%08': '\x08',
    '%09': '\x09',
    '%0a': '\x0a',
    '%0A': '\x0a',
    '%0b': '\x0b',
    '%0B': '\x0b',
    '%0c': '\x0c',
    '%0C': '\x0c',
    '%0d': '\x0d',
    '%0D': '\x0d',
    '%0e': '\x0e',
    '%0E': '\x0e',
    '%0f': '\x0f',
    '%0F': '\x0f',
    '%10': '\x10',
    '%11': '\x11',
    '%12': '\x12',
    '%13': '\x13',
    '%14': '\x14',
    '%15': '\x15',
    '%16': '\x16',
    '%17': '\x17',
    '%18': '\x18',
    '%19': '\x19',
    '%1a': '\x1a',
    '%1A': '\x1a',
    '%1b': '\x1b',
    '%1B': '\x1b',
    '%1c': '\x1c',
    '%1C': '\x1c',
    '%1d': '\x1d',
    '%1D': '\x1d',
    '%1e': '\x1e',
    '%1E': '\x1e',
    '%1f': '\x1f',
    '%1F': '\x1f',
    '%20': '\x20',
    '%21': '\x21',
    '%22': '\x22',
    '%23': '\x23',
    '%24': '\x24',
    '%25': '\x25',
    '%26': '\x26',
    '%27': '\x27',
    '%28': '\x28',
    '%29': '\x29',
    '%2a': '\x2a',
    '%2A': '\x2a',
    '%2b': '\x2b',
    '%2B': '\x2b',
    '%2c': '\x2c',
    '%2C': '\x2c',
    '%2d': '\x2d',
    '%2D': '\x2d',
    '%2e': '\x2e',
    '%2E': '\x2e',
    '%2f': '\x2f',
    '%2F': '\x2f',
    '%30': '\x30',
    '%31': '\x31',
    '%32': '\x32',
    '%33': '\x33',
    '%34': '\x34',
    '%35': '\x35',
    '%36': '\x36',
    '%37': '\x37',
    '%38': '\x38',
    '%39': '\x39',
    '%3a': '\x3a',
    '%3A': '\x3a',
    '%3b': '\x3b',
    '%3B': '\x3b',
    '%3c': '\x3c',
    '%3C': '\x3c',
    '%3d': '\x3d',
    '%3D': '\x3d',
    '%3e': '\x3e',
    '%3E': '\x3e',
    '%3f': '\x3f',
    '%3F': '\x3f',
    '%40': '\x40',
    '%41': '\x41',
    '%42': '\x42',
    '%43': '\x43',
    '%44': '\x44',
    '%45': '\x45',
    '%46': '\x46',
    '%47': '\x47',
    '%48': '\x48',
    '%49': '\x49',
    '%4a': '\x4a',
    '%4A': '\x4a',
    '%4b': '\x4b',
    '%4B': '\x4b',
    '%4c': '\x4c',
    '%4C': '\x4c',
    '%4d': '\x4d',
    '%4D': '\x4d',
    '%4e': '\x4e',
    '%4E': '\x4e',
    '%4f': '\x4f',
    '%4F': '\x4f',
    '%50': '\x50',
    '%51': '\x51',
    '%52': '\x52',
    '%53': '\x53',
    '%54': '\x54',
    '%55': '\x55',
    '%56': '\x56',
    '%57': '\x57',
    '%58': '\x58',
    '%59': '\x59',
    '%5a': '\x5a',
    '%5A': '\x5a',
    '%5b': '\x5b',
    '%5B': '\x5b',
    '%5c': '\x5c',
    '%5C': '\x5c',
    '%5d': '\x5d',
    '%5D': '\x5d',
    '%5e': '\x5e',
    '%5E': '\x5e',
    '%5f': '\x5f',
    '%5F': '\x5f',
    '%60': '\x60',
    '%61': '\x61',
    '%62': '\x62',
    '%63': '\x63',
    '%64': '\x64',
    '%65': '\x65',
    '%66': '\x66',
    '%67': '\x67',
    '%68': '\x68',
    '%69': '\x69',
    '%6a': '\x6a',
    '%6A': '\x6a',
    '%6b': '\x6b',
    '%6B': '\x6b',
    '%6c': '\x6c',
    '%6C': '\x6c',
    '%6d': '\x6d',
    '%6D': '\x6d',
    '%6e': '\x6e',
    '%6E': '\x6e',
    '%6f': '\x6f',
    '%6F': '\x6f',
    '%70': '\x70',
    '%71': '\x71',
    '%72': '\x72',
    '%73': '\x73',
    '%74': '\x74',
    '%75': '\x75',
    '%76': '\x76',
    '%77': '\x77',
    '%78': '\x78',
    '%79': '\x79',
    '%7a': '\x7a',
    '%7A': '\x7a',
    '%7b': '\x7b',
    '%7B': '\x7b',
    '%7c': '\x7c',
    '%7C': '\x7c',
    '%7d': '\x7d',
    '%7D': '\x7d',
    '%7e': '\x7e',
    '%7E': '\x7e',
    '%7f': '\x7f',
    '%7F': '\x7f',
    '%80': '\x80',
    '%81': '\x81',
    '%82': '\x82',
    '%83': '\x83',
    '%84': '\x84',
    '%85': '\x85',
    '%86': '\x86',
    '%87': '\x87',
    '%88': '\x88',
    '%89': '\x89',
    '%8a': '\x8a',
    '%8A': '\x8a',
    '%8b': '\x8b',
    '%8B': '\x8b',
    '%8c': '\x8c',
    '%8C': '\x8c',
    '%8d': '\x8d',
    '%8D': '\x8d',
    '%8e': '\x8e',
    '%8E': '\x8e',
    '%8f': '\x8f',
    '%8F': '\x8f',
    '%90': '\x90',
    '%91': '\x91',
    '%92': '\x92',
    '%93': '\x93',
    '%94': '\x94',
    '%95': '\x95',
    '%96': '\x96',
    '%97': '\x97',
    '%98': '\x98',
    '%99': '\x99',
    '%9a': '\x9a',
    '%9A': '\x9a',
    '%9b': '\x9b',
    '%9B': '\x9b',
    '%9c': '\x9c',
    '%9C': '\x9c',
    '%9d': '\x9d',
    '%9D': '\x9d',
    '%9e': '\x9e',
    '%9E': '\x9e',
    '%9f': '\x9f',
    '%9F': '\x9f',
    '%a0': '\xa0',
    '%A0': '\xa0',
    '%a1': '\xa1',
    '%A1': '\xa1',
    '%a2': '\xa2',
    '%A2': '\xa2',
    '%a3': '\xa3',
    '%A3': '\xa3',
    '%a4': '\xa4',
    '%A4': '\xa4',
    '%a5': '\xa5',
    '%A5': '\xa5',
    '%a6': '\xa6',
    '%A6': '\xa6',
    '%a7': '\xa7',
    '%A7': '\xa7',
    '%a8': '\xa8',
    '%A8': '\xa8',
    '%a9': '\xa9',
    '%A9': '\xa9',
    '%aa': '\xaa',
    '%Aa': '\xaa',
    '%aA': '\xaa',
    '%AA': '\xaa',
    '%ab': '\xab',
    '%Ab': '\xab',
    '%aB': '\xab',
    '%AB': '\xab',
    '%ac': '\xac',
    '%Ac': '\xac',
    '%aC': '\xac',
    '%AC': '\xac',
    '%ad': '\xad',
    '%Ad': '\xad',
    '%aD': '\xad',
    '%AD': '\xad',
    '%ae': '\xae',
    '%Ae': '\xae',
    '%aE': '\xae',
    '%AE': '\xae',
    '%af': '\xaf',
    '%Af': '\xaf',
    '%aF': '\xaf',
    '%AF': '\xaf',
    '%b0': '\xb0',
    '%B0': '\xb0',
    '%b1': '\xb1',
    '%B1': '\xb1',
    '%b2': '\xb2',
    '%B2': '\xb2',
    '%b3': '\xb3',
    '%B3': '\xb3',
    '%b4': '\xb4',
    '%B4': '\xb4',
    '%b5': '\xb5',
    '%B5': '\xb5',
    '%b6': '\xb6',
    '%B6': '\xb6',
    '%b7': '\xb7',
    '%B7': '\xb7',
    '%b8': '\xb8',
    '%B8': '\xb8',
    '%b9': '\xb9',
    '%B9': '\xb9',
    '%ba': '\xba',
    '%Ba': '\xba',
    '%bA': '\xba',
    '%BA': '\xba',
    '%bb': '\xbb',
    '%Bb': '\xbb',
    '%bB': '\xbb',
    '%BB': '\xbb',
    '%bc': '\xbc',
    '%Bc': '\xbc',
    '%bC': '\xbc',
    '%BC': '\xbc',
    '%bd': '\xbd',
    '%Bd': '\xbd',
    '%bD': '\xbd',
    '%BD': '\xbd',
    '%be': '\xbe',
    '%Be': '\xbe',
    '%bE': '\xbe',
    '%BE': '\xbe',
    '%bf': '\xbf',
    '%Bf': '\xbf',
    '%bF': '\xbf',
    '%BF': '\xbf',
    '%c0': '\xc0',
    '%C0': '\xc0',
    '%c1': '\xc1',
    '%C1': '\xc1',
    '%c2': '\xc2',
    '%C2': '\xc2',
    '%c3': '\xc3',
    '%C3': '\xc3',
    '%c4': '\xc4',
    '%C4': '\xc4',
    '%c5': '\xc5',
    '%C5': '\xc5',
    '%c6': '\xc6',
    '%C6': '\xc6',
    '%c7': '\xc7',
    '%C7': '\xc7',
    '%c8': '\xc8',
    '%C8': '\xc8',
    '%c9': '\xc9',
    '%C9': '\xc9',
    '%ca': '\xca',
    '%Ca': '\xca',
    '%cA': '\xca',
    '%CA': '\xca',
    '%cb': '\xcb',
    '%Cb': '\xcb',
    '%cB': '\xcb',
    '%CB': '\xcb',
    '%cc': '\xcc',
    '%Cc': '\xcc',
    '%cC': '\xcc',
    '%CC': '\xcc',
    '%cd': '\xcd',
    '%Cd': '\xcd',
    '%cD': '\xcd',
    '%CD': '\xcd',
    '%ce': '\xce',
    '%Ce': '\xce',
    '%cE': '\xce',
    '%CE': '\xce',
    '%cf': '\xcf',
    '%Cf': '\xcf',
    '%cF': '\xcf',
    '%CF': '\xcf',
    '%d0': '\xd0',
    '%D0': '\xd0',
    '%d1': '\xd1',
    '%D1': '\xd1',
    '%d2': '\xd2',
    '%D2': '\xd2',
    '%d3': '\xd3',
    '%D3': '\xd3',
    '%d4': '\xd4',
    '%D4': '\xd4',
    '%d5': '\xd5',
    '%D5': '\xd5',
    '%d6': '\xd6',
    '%D6': '\xd6',
    '%d7': '\xd7',
    '%D7': '\xd7',
    '%d8': '\xd8',
    '%D8': '\xd8',
    '%d9': '\xd9',
    '%D9': '\xd9',
    '%da': '\xda',
    '%Da': '\xda',
    '%dA': '\xda',
    '%DA': '\xda',
    '%db': '\xdb',
    '%Db': '\xdb',
    '%dB': '\xdb',
    '%DB': '\xdb',
    '%dc': '\xdc',
    '%Dc': '\xdc',
    '%dC': '\xdc',
    '%DC': '\xdc',
    '%dd': '\xdd',
    '%Dd': '\xdd',
    '%dD': '\xdd',
    '%DD': '\xdd',
    '%de': '\xde',
    '%De': '\xde',
    '%dE': '\xde',
    '%DE': '\xde',
    '%df': '\xdf',
    '%Df': '\xdf',
    '%dF': '\xdf',
    '%DF': '\xdf',
    '%e0': '\xe0',
    '%E0': '\xe0',
    '%e1': '\xe1',
    '%E1': '\xe1',
    '%e2': '\xe2',
    '%E2': '\xe2',
    '%e3': '\xe3',
    '%E3': '\xe3',
    '%e4': '\xe4',
    '%E4': '\xe4',
    '%e5': '\xe5',
    '%E5': '\xe5',
    '%e6': '\xe6',
    '%E6': '\xe6',
    '%e7': '\xe7',
    '%E7': '\xe7',
    '%e8': '\xe8',
    '%E8': '\xe8',
    '%e9': '\xe9',
    '%E9': '\xe9',
    '%ea': '\xea',
    '%Ea': '\xea',
    '%eA': '\xea',
    '%EA': '\xea',
    '%eb': '\xeb',
    '%Eb': '\xeb',
    '%eB': '\xeb',
    '%EB': '\xeb',
    '%ec': '\xec',
    '%Ec': '\xec',
    '%eC': '\xec',
    '%EC': '\xec',
    '%ed': '\xed',
    '%Ed': '\xed',
    '%eD': '\xed',
    '%ED': '\xed',
    '%ee': '\xee',
    '%Ee': '\xee',
    '%eE': '\xee',
    '%EE': '\xee',
    '%ef': '\xef',
    '%Ef': '\xef',
    '%eF': '\xef',
    '%EF': '\xef',
    '%f0': '\xf0',
    '%F0': '\xf0',
    '%f1': '\xf1',
    '%F1': '\xf1',
    '%f2': '\xf2',
    '%F2': '\xf2',
    '%f3': '\xf3',
    '%F3': '\xf3',
    '%f4': '\xf4',
    '%F4': '\xf4',
    '%f5': '\xf5',
    '%F5': '\xf5',
    '%f6': '\xf6',
    '%F6': '\xf6',
    '%f7': '\xf7',
    '%F7': '\xf7',
    '%f8': '\xf8',
    '%F8': '\xf8',
    '%f9': '\xf9',
    '%F9': '\xf9',
    '%fa': '\xfa',
    '%Fa': '\xfa',
    '%fA': '\xfa',
    '%FA': '\xfa',
    '%fb': '\xfb',
    '%Fb': '\xfb',
    '%fB': '\xfb',
    '%FB': '\xfb',
    '%fc': '\xfc',
    '%Fc': '\xfc',
    '%fC': '\xfc',
    '%FC': '\xfc',
    '%fd': '\xfd',
    '%Fd': '\xfd',
    '%fD': '\xfd',
    '%FD': '\xfd',
    '%fe': '\xfe',
    '%Fe': '\xfe',
    '%fE': '\xfe',
    '%FE': '\xfe',
    '%ff': '\xff',
    '%Ff': '\xff',
    '%fF': '\xff',
    '%FF': '\xff'
};
function encodedReplacer(match) {
    return EncodedLookup[match];
}
const STATE_KEY = 0;
const STATE_VALUE = 1;
const STATE_CHARSET = 2;
const STATE_LANG = 3;
function parseParams(str) {
    const res = [];
    let state = STATE_KEY;
    let charset = '';
    let inquote = false;
    let escaping = false;
    let p = 0;
    let tmp = '';
    const len = str.length;
    for(var i = 0; i < len; ++i){
        const char = str[i];
        if (char === '\\' && inquote) {
            if (escaping) {
                escaping = false;
            } else {
                escaping = true;
                continue;
            }
        } else if (char === '"') {
            if (!escaping) {
                if (inquote) {
                    inquote = false;
                    state = STATE_KEY;
                } else {
                    inquote = true;
                }
                continue;
            } else {
                escaping = false;
            }
        } else {
            if (escaping && inquote) {
                tmp += '\\';
            }
            escaping = false;
            if ((state === STATE_CHARSET || state === STATE_LANG) && char === "'") {
                if (state === STATE_CHARSET) {
                    state = STATE_LANG;
                    charset = tmp.substring(1);
                } else {
                    state = STATE_VALUE;
                }
                tmp = '';
                continue;
            } else if (state === STATE_KEY && (char === '*' || char === '=') && res.length) {
                state = char === '*' ? STATE_CHARSET : STATE_VALUE;
                res[p] = [
                    tmp,
                    undefined
                ];
                tmp = '';
                continue;
            } else if (!inquote && char === ';') {
                state = STATE_KEY;
                if (charset) {
                    if (tmp.length) {
                        tmp = decodeText(tmp.replace(RE_ENCODED, encodedReplacer), 'binary', charset);
                    }
                    charset = '';
                } else if (tmp.length) {
                    tmp = decodeText(tmp, 'binary', 'utf8');
                }
                if (res[p] === undefined) {
                    res[p] = tmp;
                } else {
                    res[p][1] = tmp;
                }
                tmp = '';
                ++p;
                continue;
            } else if (!inquote && (char === ' ' || char === '\t')) {
                continue;
            }
        }
        tmp += char;
    }
    if (charset && tmp.length) {
        tmp = decodeText(tmp.replace(RE_ENCODED, encodedReplacer), 'binary', charset);
    } else if (tmp) {
        tmp = decodeText(tmp, 'binary', 'utf8');
    }
    if (res[p] === undefined) {
        if (tmp) {
            res[p] = tmp;
        }
    } else {
        res[p][1] = tmp;
    }
    return res;
}
module.exports = parseParams;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/basename.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = function basename(path) {
    if (typeof path !== 'string') {
        return '';
    }
    for(var i = path.length - 1; i >= 0; --i){
        switch(path.charCodeAt(i)){
            case 0x2F:
            case 0x5C:
                path = path.slice(i + 1);
                return path === '..' || path === '.' ? '' : path;
        }
    }
    return path === '..' || path === '.' ? '' : path;
};
}}),
"[project]/node_modules/@fastify/busboy/lib/types/multipart.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// TODO:
//  * support 1 nested multipart level
//    (see second multipart example here:
//     http://www.w3.org/TR/html401/interact/forms.html#didx-multipartform-data)
//  * support limits.fieldNameSize
//     -- this will require modifications to utils.parseParams
const { Readable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { inherits } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const Dicer = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-rsc] (ecmascript)");
const parseParams = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-rsc] (ecmascript)");
const decodeText = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-rsc] (ecmascript)");
const basename = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/basename.js [app-rsc] (ecmascript)");
const getLimit = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-rsc] (ecmascript)");
const RE_BOUNDARY = /^boundary$/i;
const RE_FIELD = /^form-data$/i;
const RE_CHARSET = /^charset$/i;
const RE_FILENAME = /^filename$/i;
const RE_NAME = /^name$/i;
Multipart.detect = /^multipart\/form-data/i;
function Multipart(boy, cfg) {
    let i;
    let len;
    const self = this;
    let boundary;
    const limits = cfg.limits;
    const isPartAFile = cfg.isPartAFile || ((fieldName, contentType, fileName)=>contentType === 'application/octet-stream' || fileName !== undefined);
    const parsedConType = cfg.parsedConType || [];
    const defCharset = cfg.defCharset || 'utf8';
    const preservePath = cfg.preservePath;
    const fileOpts = {
        highWaterMark: cfg.fileHwm
    };
    for(i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_BOUNDARY.test(parsedConType[i][0])) {
            boundary = parsedConType[i][1];
            break;
        }
    }
    function checkFinished() {
        if (nends === 0 && finished && !boy._done) {
            finished = false;
            self.end();
        }
    }
    if (typeof boundary !== 'string') {
        throw new Error('Multipart: Boundary not found');
    }
    const fieldSizeLimit = getLimit(limits, 'fieldSize', 1 * 1024 * 1024);
    const fileSizeLimit = getLimit(limits, 'fileSize', Infinity);
    const filesLimit = getLimit(limits, 'files', Infinity);
    const fieldsLimit = getLimit(limits, 'fields', Infinity);
    const partsLimit = getLimit(limits, 'parts', Infinity);
    const headerPairsLimit = getLimit(limits, 'headerPairs', 2000);
    const headerSizeLimit = getLimit(limits, 'headerSize', 80 * 1024);
    let nfiles = 0;
    let nfields = 0;
    let nends = 0;
    let curFile;
    let curField;
    let finished = false;
    this._needDrain = false;
    this._pause = false;
    this._cb = undefined;
    this._nparts = 0;
    this._boy = boy;
    const parserCfg = {
        boundary,
        maxHeaderPairs: headerPairsLimit,
        maxHeaderSize: headerSizeLimit,
        partHwm: fileOpts.highWaterMark,
        highWaterMark: cfg.highWaterMark
    };
    this.parser = new Dicer(parserCfg);
    this.parser.on('drain', function() {
        self._needDrain = false;
        if (self._cb && !self._pause) {
            const cb = self._cb;
            self._cb = undefined;
            cb();
        }
    }).on('part', function onPart(part) {
        if (++self._nparts > partsLimit) {
            self.parser.removeListener('part', onPart);
            self.parser.on('part', skipPart);
            boy.hitPartsLimit = true;
            boy.emit('partsLimit');
            return skipPart(part);
        }
        // hack because streams2 _always_ doesn't emit 'end' until nextTick, so let
        // us emit 'end' early since we know the part has ended if we are already
        // seeing the next part
        if (curField) {
            const field = curField;
            field.emit('end');
            field.removeAllListeners('end');
        }
        part.on('header', function(header) {
            let contype;
            let fieldname;
            let parsed;
            let charset;
            let encoding;
            let filename;
            let nsize = 0;
            if (header['content-type']) {
                parsed = parseParams(header['content-type'][0]);
                if (parsed[0]) {
                    contype = parsed[0].toLowerCase();
                    for(i = 0, len = parsed.length; i < len; ++i){
                        if (RE_CHARSET.test(parsed[i][0])) {
                            charset = parsed[i][1].toLowerCase();
                            break;
                        }
                    }
                }
            }
            if (contype === undefined) {
                contype = 'text/plain';
            }
            if (charset === undefined) {
                charset = defCharset;
            }
            if (header['content-disposition']) {
                parsed = parseParams(header['content-disposition'][0]);
                if (!RE_FIELD.test(parsed[0])) {
                    return skipPart(part);
                }
                for(i = 0, len = parsed.length; i < len; ++i){
                    if (RE_NAME.test(parsed[i][0])) {
                        fieldname = parsed[i][1];
                    } else if (RE_FILENAME.test(parsed[i][0])) {
                        filename = parsed[i][1];
                        if (!preservePath) {
                            filename = basename(filename);
                        }
                    }
                }
            } else {
                return skipPart(part);
            }
            if (header['content-transfer-encoding']) {
                encoding = header['content-transfer-encoding'][0].toLowerCase();
            } else {
                encoding = '7bit';
            }
            let onData, onEnd;
            if (isPartAFile(fieldname, contype, filename)) {
                // file/binary field
                if (nfiles === filesLimit) {
                    if (!boy.hitFilesLimit) {
                        boy.hitFilesLimit = true;
                        boy.emit('filesLimit');
                    }
                    return skipPart(part);
                }
                ++nfiles;
                if (boy.listenerCount('file') === 0) {
                    self.parser._ignore();
                    return;
                }
                ++nends;
                const file = new FileStream(fileOpts);
                curFile = file;
                file.on('end', function() {
                    --nends;
                    self._pause = false;
                    checkFinished();
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                });
                file._read = function(n) {
                    if (!self._pause) {
                        return;
                    }
                    self._pause = false;
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                };
                boy.emit('file', fieldname, file, filename, encoding, contype);
                onData = function(data) {
                    if ((nsize += data.length) > fileSizeLimit) {
                        const extralen = fileSizeLimit - nsize + data.length;
                        if (extralen > 0) {
                            file.push(data.slice(0, extralen));
                        }
                        file.truncated = true;
                        file.bytesRead = fileSizeLimit;
                        part.removeAllListeners('data');
                        file.emit('limit');
                        return;
                    } else if (!file.push(data)) {
                        self._pause = true;
                    }
                    file.bytesRead = nsize;
                };
                onEnd = function() {
                    curFile = undefined;
                    file.push(null);
                };
            } else {
                // non-file field
                if (nfields === fieldsLimit) {
                    if (!boy.hitFieldsLimit) {
                        boy.hitFieldsLimit = true;
                        boy.emit('fieldsLimit');
                    }
                    return skipPart(part);
                }
                ++nfields;
                ++nends;
                let buffer = '';
                let truncated = false;
                curField = part;
                onData = function(data) {
                    if ((nsize += data.length) > fieldSizeLimit) {
                        const extralen = fieldSizeLimit - (nsize - data.length);
                        buffer += data.toString('binary', 0, extralen);
                        truncated = true;
                        part.removeAllListeners('data');
                    } else {
                        buffer += data.toString('binary');
                    }
                };
                onEnd = function() {
                    curField = undefined;
                    if (buffer.length) {
                        buffer = decodeText(buffer, 'binary', charset);
                    }
                    boy.emit('field', fieldname, buffer, false, truncated, encoding, contype);
                    --nends;
                    checkFinished();
                };
            }
            /* As of node@2efe4ab761666 (v0.10.29+/v0.11.14+), busboy had become
         broken. Streams2/streams3 is a huge black box of confusion, but
         somehow overriding the sync state seems to fix things again (and still
         seems to work for previous node versions).
      */ part._readableState.sync = false;
            part.on('data', onData);
            part.on('end', onEnd);
        }).on('error', function(err) {
            if (curFile) {
                curFile.emit('error', err);
            }
        });
    }).on('error', function(err) {
        boy.emit('error', err);
    }).on('finish', function() {
        finished = true;
        checkFinished();
    });
}
Multipart.prototype.write = function(chunk, cb) {
    const r = this.parser.write(chunk);
    if (r && !this._pause) {
        cb();
    } else {
        this._needDrain = !r;
        this._cb = cb;
    }
};
Multipart.prototype.end = function() {
    const self = this;
    if (self.parser.writable) {
        self.parser.end();
    } else if (!self._boy._done) {
        process.nextTick(function() {
            self._boy._done = true;
            self._boy.emit('finish');
        });
    }
};
function skipPart(part) {
    part.resume();
}
function FileStream(opts) {
    Readable.call(this, opts);
    this.bytesRead = 0;
    this.truncated = false;
}
inherits(FileStream, Readable);
FileStream.prototype._read = function(n) {};
module.exports = Multipart;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/Decoder.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const RE_PLUS = /\+/g;
const HEX = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
function Decoder() {
    this.buffer = undefined;
}
Decoder.prototype.write = function(str) {
    // Replace '+' with ' ' before decoding
    str = str.replace(RE_PLUS, ' ');
    let res = '';
    let i = 0;
    let p = 0;
    const len = str.length;
    for(; i < len; ++i){
        if (this.buffer !== undefined) {
            if (!HEX[str.charCodeAt(i)]) {
                res += '%' + this.buffer;
                this.buffer = undefined;
                --i; // retry character
            } else {
                this.buffer += str[i];
                ++p;
                if (this.buffer.length === 2) {
                    res += String.fromCharCode(parseInt(this.buffer, 16));
                    this.buffer = undefined;
                }
            }
        } else if (str[i] === '%') {
            if (i > p) {
                res += str.substring(p, i);
                p = i;
            }
            this.buffer = '';
            ++p;
        }
    }
    if (p < len && this.buffer === undefined) {
        res += str.substring(p);
    }
    return res;
};
Decoder.prototype.reset = function() {
    this.buffer = undefined;
};
module.exports = Decoder;
}}),
"[project]/node_modules/@fastify/busboy/lib/types/urlencoded.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const Decoder = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/Decoder.js [app-rsc] (ecmascript)");
const decodeText = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-rsc] (ecmascript)");
const getLimit = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-rsc] (ecmascript)");
const RE_CHARSET = /^charset$/i;
UrlEncoded.detect = /^application\/x-www-form-urlencoded/i;
function UrlEncoded(boy, cfg) {
    const limits = cfg.limits;
    const parsedConType = cfg.parsedConType;
    this.boy = boy;
    this.fieldSizeLimit = getLimit(limits, 'fieldSize', 1 * 1024 * 1024);
    this.fieldNameSizeLimit = getLimit(limits, 'fieldNameSize', 100);
    this.fieldsLimit = getLimit(limits, 'fields', Infinity);
    let charset;
    for(var i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_CHARSET.test(parsedConType[i][0])) {
            charset = parsedConType[i][1].toLowerCase();
            break;
        }
    }
    if (charset === undefined) {
        charset = cfg.defCharset || 'utf8';
    }
    this.decoder = new Decoder();
    this.charset = charset;
    this._fields = 0;
    this._state = 'key';
    this._checkingBytes = true;
    this._bytesKey = 0;
    this._bytesVal = 0;
    this._key = '';
    this._val = '';
    this._keyTrunc = false;
    this._valTrunc = false;
    this._hitLimit = false;
}
UrlEncoded.prototype.write = function(data, cb) {
    if (this._fields === this.fieldsLimit) {
        if (!this.boy.hitFieldsLimit) {
            this.boy.hitFieldsLimit = true;
            this.boy.emit('fieldsLimit');
        }
        return cb();
    }
    let idxeq;
    let idxamp;
    let i;
    let p = 0;
    const len = data.length;
    while(p < len){
        if (this._state === 'key') {
            idxeq = idxamp = undefined;
            for(i = p; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p;
                }
                if (data[i] === 0x3D /* = */ ) {
                    idxeq = i;
                    break;
                } else if (data[i] === 0x26 /* & */ ) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesKey;
                }
            }
            if (idxeq !== undefined) {
                // key with assignment
                if (idxeq > p) {
                    this._key += this.decoder.write(data.toString('binary', p, idxeq));
                }
                this._state = 'val';
                this._hitLimit = false;
                this._checkingBytes = true;
                this._val = '';
                this._bytesVal = 0;
                this._valTrunc = false;
                this.decoder.reset();
                p = idxeq + 1;
            } else if (idxamp !== undefined) {
                // key with no assignment
                ++this._fields;
                let key;
                const keyTrunc = this._keyTrunc;
                if (idxamp > p) {
                    key = this._key += this.decoder.write(data.toString('binary', p, idxamp));
                } else {
                    key = this._key;
                }
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = '';
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                if (key.length) {
                    this.boy.emit('field', decodeText(key, 'binary', this.charset), '', keyTrunc, false);
                }
                p = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                // we may not have hit the actual limit if there are encoded bytes...
                if (i > p) {
                    this._key += this.decoder.write(data.toString('binary', p, i));
                }
                p = i;
                if ((this._bytesKey = this._key.length) === this.fieldNameSizeLimit) {
                    // yep, we actually did hit the limit
                    this._checkingBytes = false;
                    this._keyTrunc = true;
                }
            } else {
                if (p < len) {
                    this._key += this.decoder.write(data.toString('binary', p));
                }
                p = len;
            }
        } else {
            idxamp = undefined;
            for(i = p; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p;
                }
                if (data[i] === 0x26 /* & */ ) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesVal;
                }
            }
            if (idxamp !== undefined) {
                ++this._fields;
                if (idxamp > p) {
                    this._val += this.decoder.write(data.toString('binary', p, idxamp));
                }
                this.boy.emit('field', decodeText(this._key, 'binary', this.charset), decodeText(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
                this._state = 'key';
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = '';
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                p = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                // we may not have hit the actual limit if there are encoded bytes...
                if (i > p) {
                    this._val += this.decoder.write(data.toString('binary', p, i));
                }
                p = i;
                if (this._val === '' && this.fieldSizeLimit === 0 || (this._bytesVal = this._val.length) === this.fieldSizeLimit) {
                    // yep, we actually did hit the limit
                    this._checkingBytes = false;
                    this._valTrunc = true;
                }
            } else {
                if (p < len) {
                    this._val += this.decoder.write(data.toString('binary', p));
                }
                p = len;
            }
        }
    }
    cb();
};
UrlEncoded.prototype.end = function() {
    if (this.boy._done) {
        return;
    }
    if (this._state === 'key' && this._key.length > 0) {
        this.boy.emit('field', decodeText(this._key, 'binary', this.charset), '', this._keyTrunc, false);
    } else if (this._state === 'val') {
        this.boy.emit('field', decodeText(this._key, 'binary', this.charset), decodeText(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
    }
    this.boy._done = true;
    this.boy.emit('finish');
};
module.exports = UrlEncoded;
}}),
"[project]/node_modules/@fastify/busboy/lib/main.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
const WritableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Writable;
const { inherits } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const Dicer = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-rsc] (ecmascript)");
const MultipartParser = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/types/multipart.js [app-rsc] (ecmascript)");
const UrlencodedParser = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/types/urlencoded.js [app-rsc] (ecmascript)");
const parseParams = __turbopack_context__.r("[project]/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-rsc] (ecmascript)");
function Busboy(opts) {
    if (!(this instanceof Busboy)) {
        return new Busboy(opts);
    }
    if (typeof opts !== 'object') {
        throw new TypeError('Busboy expected an options-Object.');
    }
    if (typeof opts.headers !== 'object') {
        throw new TypeError('Busboy expected an options-Object with headers-attribute.');
    }
    if (typeof opts.headers['content-type'] !== 'string') {
        throw new TypeError('Missing Content-Type-header.');
    }
    const { headers, ...streamOptions } = opts;
    this.opts = {
        autoDestroy: false,
        ...streamOptions
    };
    WritableStream.call(this, this.opts);
    this._done = false;
    this._parser = this.getParserByHeaders(headers);
    this._finished = false;
}
inherits(Busboy, WritableStream);
Busboy.prototype.emit = function(ev) {
    if (ev === 'finish') {
        if (!this._done) {
            this._parser?.end();
            return;
        } else if (this._finished) {
            return;
        }
        this._finished = true;
    }
    WritableStream.prototype.emit.apply(this, arguments);
};
Busboy.prototype.getParserByHeaders = function(headers) {
    const parsed = parseParams(headers['content-type']);
    const cfg = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: parsed,
        preservePath: this.opts.preservePath
    };
    if (MultipartParser.detect.test(parsed[0])) {
        return new MultipartParser(this, cfg);
    }
    if (UrlencodedParser.detect.test(parsed[0])) {
        return new UrlencodedParser(this, cfg);
    }
    throw new Error('Unsupported Content-Type.');
};
Busboy.prototype._write = function(chunk, encoding, cb) {
    this._parser.write(chunk, cb);
};
module.exports = Busboy;
module.exports.default = Busboy;
module.exports.Busboy = Busboy;
module.exports.Dicer = Dicer;
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-headers-polyfill.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/undici/index.js [app-rsc] (ecmascript)");
;
// The global Headers class was introduced in Node v16.15.0, behind the
// --experimental-fetch flag. It became available by default with Node
// v18.0.0.
// If this code runs in Node < 18, it installs an alternative
// implementation if one has not already been polyfilled.
const [major] = process.versions.node.split(".").map((value)=>parseInt(value, 10));
if (major < 18) {
    if (typeof globalThis.Headers === "undefined") {
        globalThis.Headers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Headers"];
    }
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "H2Code": ()=>H2Code,
    "connectErrorFromH2ResetCode": ()=>connectErrorFromH2ResetCode,
    "connectErrorFromNodeReason": ()=>connectErrorFromNodeReason,
    "getNodeErrorProps": ()=>getNodeErrorProps,
    "unwrapNodeErrorChain": ()=>unwrapNodeErrorChain
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
;
function connectErrorFromNodeReason(reason) {
    let code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal;
    const chain = unwrapNodeErrorChain(reason).map(getNodeErrorProps);
    if (chain.some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
        // We do not want intentional errors from the server to be shadowed
        // by client-side errors.
        // This can occur if the server has written a response with an error
        // and has ended the connection. This response may already sit in a
        // buffer on the client, while it is still writing to the request
        // body.
        // To avoid this problem, we wrap ERR_STREAM_WRITE_AFTER_END as a
        // ConnectError with Code.Aborted. The special meaning of this code
        // in this situation is documented in StreamingConn.send() and in
        // createServerStreamingFn().
        code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Aborted;
    } else if (chain.some((p)=>p.code == "ERR_STREAM_DESTROYED" || p.code == "ERR_HTTP2_INVALID_STREAM" || p.code == "ECONNRESET")) {
        // A handler whose stream is suddenly destroyed usually means the client
        // hung up. This behavior is triggered by the conformance test "cancel_after_begin".
        code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Aborted;
    } else if (chain.some((p)=>p.code == "ETIMEDOUT" || p.code == "ENOTFOUND" || p.code == "EAI_AGAIN" || p.code == "ECONNREFUSED")) {
        // Calling an unresolvable host should raise a ConnectError with
        // Code.Aborted.
        // This behavior is covered by the conformance test "unresolvable_host".
        code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Unavailable;
    }
    const ce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"].from(reason, code);
    if (ce !== reason) {
        ce.cause = reason;
    }
    return ce;
}
function unwrapNodeErrorChain(reason) {
    const chain = [];
    for(;;){
        if (!(reason instanceof Error)) {
            break;
        }
        if (chain.includes(reason)) {
            break;
        }
        chain.push(reason);
        if (!("cause" in reason)) {
            break;
        }
        reason = reason.cause;
    }
    return chain;
}
function getNodeErrorProps(reason) {
    const props = {};
    if (reason instanceof Error) {
        if ("code" in reason && typeof reason.code == "string") {
            props.code = reason.code;
        }
        if ("syscall" in reason && typeof reason.syscall == "string") {
            props.syscall = reason.syscall;
        }
    }
    return props;
}
function connectErrorFromH2ResetCode(rstCode) {
    switch(rstCode){
        case H2Code.PROTOCOL_ERROR:
        case H2Code.INTERNAL_ERROR:
        case H2Code.FLOW_CONTROL_ERROR:
        case H2Code.SETTINGS_TIMEOUT:
        case H2Code.FRAME_SIZE_ERROR:
        case H2Code.COMPRESSION_ERROR:
        case H2Code.CONNECT_ERROR:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
        case H2Code.REFUSED_STREAM:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Unavailable);
        case H2Code.CANCEL:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled);
        case H2Code.ENHANCE_YOUR_CALM:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
        case H2Code.INADEQUATE_SECURITY:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].PermissionDenied);
        case H2Code.HTTP_1_1_REQUIRED:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].PermissionDenied);
        case H2Code.STREAM_CLOSED:
        default:
            break;
    }
    return undefined;
}
var H2Code;
(function(H2Code) {
    H2Code[H2Code["PROTOCOL_ERROR"] = 1] = "PROTOCOL_ERROR";
    H2Code[H2Code["INTERNAL_ERROR"] = 2] = "INTERNAL_ERROR";
    H2Code[H2Code["FLOW_CONTROL_ERROR"] = 3] = "FLOW_CONTROL_ERROR";
    H2Code[H2Code["SETTINGS_TIMEOUT"] = 4] = "SETTINGS_TIMEOUT";
    H2Code[H2Code["STREAM_CLOSED"] = 5] = "STREAM_CLOSED";
    H2Code[H2Code["FRAME_SIZE_ERROR"] = 6] = "FRAME_SIZE_ERROR";
    H2Code[H2Code["REFUSED_STREAM"] = 7] = "REFUSED_STREAM";
    H2Code[H2Code["CANCEL"] = 8] = "CANCEL";
    H2Code[H2Code["COMPRESSION_ERROR"] = 9] = "COMPRESSION_ERROR";
    H2Code[H2Code["CONNECT_ERROR"] = 10] = "CONNECT_ERROR";
    H2Code[H2Code["ENHANCE_YOUR_CALM"] = 11] = "ENHANCE_YOUR_CALM";
    H2Code[H2Code["INADEQUATE_SECURITY"] = 12] = "INADEQUATE_SECURITY";
    H2Code[H2Code["HTTP_1_1_REQUIRED"] = 13] = "HTTP_1_1_REQUIRED";
})(H2Code || (H2Code = {}));
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "compressionBrotli": ()=>compressionBrotli,
    "compressionGzip": ()=>compressionGzip
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/zlib [external] (zlib, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)");
;
;
;
;
const gzip = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["gzip"]);
const gunzip = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["gunzip"]);
const brotliCompress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["brotliCompress"]);
const brotliDecompress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["brotliDecompress"]);
const compressionGzip = {
    name: "gzip",
    compress (bytes) {
        return gzip(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors(gunzip(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
const compressionBrotli = {
    name: "br",
    compress (bytes) {
        return brotliCompress(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors(brotliDecompress(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
function wrapZLibErrors(promise, readMaxBytes) {
    return promise.catch((e)=>{
        const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNodeErrorProps"])(e);
        let code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal;
        let message = "decompression failed";
        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
        switch(props.code){
            case "ERR_BUFFER_TOO_LARGE":
                code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted;
                message = `message is larger than configured readMaxBytes ${readMaxBytes} after decompression`;
                break;
            case "Z_DATA_ERROR":
            case "ERR_PADDING_2":
                code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].InvalidArgument;
                break;
            default:
                if (props.code !== undefined && props.code.startsWith("ERR__ERROR_FORMAT_")) {
                    code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].InvalidArgument;
                }
                break;
        }
        return Promise.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](message, code, undefined, undefined, e));
    });
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Convert a Node.js header object to a fetch API Headers object.
 *
 * This function works for Node.js incoming and outgoing headers, and for the
 * http and the http2 package.
 *
 * HTTP/2 pseudo-headers (:method, :path, etc.) are stripped.
 */ __turbopack_context__.s({
    "nodeHeaderToWebHeader": ()=>nodeHeaderToWebHeader,
    "webHeaderToNodeHeaders": ()=>webHeaderToNodeHeaders
});
function nodeHeaderToWebHeader(nodeHeaders) {
    const header = new Headers();
    for (const [k, v] of Object.entries(nodeHeaders)){
        if (k.startsWith(":")) {
            continue;
        }
        if (v === undefined) {
            continue;
        }
        if (typeof v == "string") {
            header.append(k, v);
        } else if (typeof v == "number") {
            header.append(k, String(v));
        } else {
            for (const e of v){
                header.append(k, e);
            }
        }
    }
    return header;
}
function webHeaderToNodeHeaders(headersInit, defaultNodeHeaders) {
    if (headersInit === undefined && defaultNodeHeaders === undefined) {
        return undefined;
    }
    const o = Object.create(null);
    if (defaultNodeHeaders !== undefined) {
        for (const [key, value] of Object.entries(defaultNodeHeaders)){
            if (Array.isArray(value)) {
                o[key] = value.concat();
            } else if (value !== undefined) {
                o[key] = value;
            }
        }
    }
    if (headersInit !== undefined) {
        if (Array.isArray(headersInit)) {
            for (const [key, value] of headersInit){
                appendWebHeader(o, key, value);
            }
        } else if ("forEach" in headersInit) {
            if (typeof headersInit.forEach == "function") {
                headersInit.forEach((value, key)=>{
                    appendWebHeader(o, key, value);
                });
            }
        } else {
            for (const [key, value] of Object.entries(headersInit)){
                appendWebHeader(o, key, value);
            }
        }
    }
    return o;
}
function appendWebHeader(o, key, value) {
    key = key.toLowerCase();
    const existing = o[key];
    if (Array.isArray(existing)) {
        existing.push(value);
    } else if (existing === undefined) {
        o[key] = value;
    } else {
        o[key] = [
            existing.toString(),
            value
        ];
    }
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "Http2SessionManager": ()=>Http2SessionManager
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)");
;
;
;
class Http2SessionManager {
    /**
     * The current state of the connection:
     *
     * - "closed"
     *   The connection is closed, or no connection has been opened yet.
     * - connecting
     *   Currently establishing a connection.
     *
     * - "open"
     *   A connection is open and has open streams. PING frames are sent every
     *   pingIntervalMs, unless a stream received data.
     *   If a PING frame is not responded to within pingTimeoutMs, the connection
     *   and all open streams close.
     *
     * - "idle"
     *   A connection is open, but it does not have any open streams.
     *   If pingIdleConnection is enabled, PING frames are used to keep the
     *   connection alive, similar to an "open" connection.
     *   If a connection is idle for longer than idleConnectionTimeoutMs, it closes.
     *   If a request is made on an idle connection that has not been used for
     *   longer than pingIntervalMs, the connection is verified.
     *
     * - "verifying"
     *   Verifying a connection after a long period of inactivity before issuing a
     *   request. A PING frame is sent, and if it times out within pingTimeoutMs, a
     *   new connection is opened.
     *
     * - "error"
     *   The connection is closed because of a transient error. A connection
     *   may have failed to reach the host, or the connection may have died,
     *   or it may have been aborted.
     */ state() {
        if (this.s.t == "ready") {
            if (this.verifying !== undefined) {
                return "verifying";
            }
            return this.s.streamCount() > 0 ? "open" : "idle";
        }
        return this.s.t;
    }
    /**
     * Returns the error object if the connection is in the "error" state,
     * `undefined` otherwise.
     */ error() {
        if (this.s.t == "error") {
            return this.s.reason;
        }
        return undefined;
    }
    constructor(url, pingOptions, http2SessionOptions){
        var _a, _b, _c, _d;
        this.s = closed();
        this.shuttingDown = [];
        this.authority = new URL(url).origin;
        this.http2SessionOptions = http2SessionOptions;
        this.options = {
            pingIntervalMs: (_a = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingIntervalMs) !== null && _a !== void 0 ? _a : Number.POSITIVE_INFINITY,
            pingTimeoutMs: (_b = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingTimeoutMs) !== null && _b !== void 0 ? _b : 1000 * 15,
            pingIdleConnection: (_c = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingIdleConnection) !== null && _c !== void 0 ? _c : false,
            idleConnectionTimeoutMs: (_d = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.idleConnectionTimeoutMs) !== null && _d !== void 0 ? _d : 1000 * 60 * 15
        };
    }
    /**
     * Open a connection if none exists, verify an existing connection if
     * necessary.
     */ async connect() {
        try {
            const ready = await this.gotoReady();
            return ready.streamCount() > 0 ? "open" : "idle";
        } catch (e) {
            return "error";
        }
    }
    /**
     * Issue a request.
     *
     * This method automatically opens a connection if none exists, and verifies
     * an existing connection if necessary. It calls http2.ClientHttp2Session.request(),
     * and keeps track of all open http2.ClientHttp2Stream.
     *
     * Clients must call notifyResponseByteRead() whenever they successfully read
     * data from the http2.ClientHttp2Stream.
     */ async request(method, path, headers, options) {
        // Request sometimes fails with goaway/destroyed
        // errors, we use a loop to retry.
        //
        // This is not expected to happen often, but it is possible that a
        // connection is closed while we are trying to open a stream.
        //
        // Ref: https://github.com/nodejs/help/issues/2105
        for(;;){
            const ready = await this.gotoReady();
            try {
                const stream = ready.conn.request(Object.assign(Object.assign({}, headers), {
                    ":method": method,
                    ":path": path
                }), options);
                ready.registerRequest(stream);
                return stream;
            } catch (e) {
                // Check to see if the connection is closed or destroyed
                // and if so, we try again.
                if (ready.conn.closed || ready.conn.destroyed) {
                    continue;
                }
                throw e;
            }
        }
    }
    /**
     * Notify the manager of a successful read from a http2.ClientHttp2Stream.
     *
     * Clients must call this function whenever they successfully read data from
     * a http2.ClientHttp2Stream obtained from request(). This informs the
     * keep-alive logic that the connection is alive, and prevents it from sending
     * unnecessary PING frames.
     */ notifyResponseByteRead(stream) {
        if (this.s.t == "ready") {
            this.s.responseByteRead(stream);
        }
        for (const s of this.shuttingDown){
            s.responseByteRead(stream);
        }
    }
    /**
     * If there is an open connection, close it. This also closes any open streams.
     */ abort(reason) {
        var _a, _b, _c;
        const err = reason !== null && reason !== void 0 ? reason : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("connection aborted", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled);
        (_b = (_a = this.s).abort) === null || _b === void 0 ? void 0 : _b.call(_a, err);
        for (const s of this.shuttingDown){
            (_c = s.abort) === null || _c === void 0 ? void 0 : _c.call(s, err);
        }
        this.setState(closedOrError(err));
    }
    async gotoReady() {
        if (this.s.t == "ready") {
            if (this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed) {
                this.setState(connect(this.authority, this.http2SessionOptions));
            } else if (this.s.requiresVerify()) {
                await this.verify(this.s);
            }
        } else if (this.s.t == "closed" || this.s.t == "error") {
            this.setState(connect(this.authority, this.http2SessionOptions));
        }
        while(this.s.t !== "ready"){
            if (this.s.t === "error") {
                throw this.s.reason;
            }
            if (this.s.t === "connecting") {
                await this.s.conn;
            }
        }
        return this.s;
    }
    setState(state) {
        var _a, _b;
        (_b = (_a = this.s).onExitState) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (this.s.t == "ready" && this.s.isShuttingDown()) {
            // Maintain connections that have been asked to shut down.
            const sd = this.s;
            this.shuttingDown.push(sd);
            sd.onClose = sd.onError = ()=>{
                const i = this.shuttingDown.indexOf(sd);
                if (i !== -1) {
                    this.shuttingDown.splice(i, 1);
                }
            };
        }
        switch(state.t){
            case "connecting":
                state.conn.then((value)=>{
                    this.setState(ready(value, this.options));
                }, (reason)=>{
                    this.setState(closedOrError(reason));
                });
                break;
            case "ready":
                state.onClose = ()=>this.setState(closed());
                state.onError = (err)=>this.setState(closedOrError(err));
                break;
            case "closed":
                break;
            case "error":
                break;
        }
        this.s = state;
    }
    verify(stateReady) {
        if (this.verifying !== undefined) {
            return this.verifying;
        }
        this.verifying = stateReady.verify().then((success)=>{
            if (success) {
                return;
            }
            // verify() has destroyed the old connection
            this.setState(connect(this.authority, this.http2SessionOptions));
        }, (reason)=>{
            this.setState(closedOrError(reason));
        }).finally(()=>{
            this.verifying = undefined;
        });
        return this.verifying;
    }
}
function closed() {
    return {
        t: "closed"
    };
}
function error(reason) {
    return {
        t: "error",
        reason
    };
}
function closedOrError(reason) {
    const isCancel = reason instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"].from(reason).code == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled;
    return isCancel ? closed() : error(reason);
}
function connect(authority, http2SessionOptions) {
    let resolve;
    let reject;
    const conn = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    const newConn = __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["connect"](authority, http2SessionOptions);
    newConn.on("connect", onConnect);
    newConn.on("error", onError);
    function onConnect() {
        resolve === null || resolve === void 0 ? void 0 : resolve(newConn);
        cleanup();
    }
    function onError(err) {
        reject === null || reject === void 0 ? void 0 : reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(err));
        cleanup();
    }
    function cleanup() {
        newConn.off("connect", onConnect);
        newConn.off("error", onError);
    }
    return {
        t: "connecting",
        conn,
        abort (reason) {
            if (!newConn.destroyed) {
                newConn.destroy(undefined, __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_CANCEL);
            }
            // According to the documentation, destroy() should immediately terminate
            // the session and the socket, but we still receive a "connect" event.
            // We must not resolve a broken connection, so we reject it manually here.
            reject === null || reject === void 0 ? void 0 : reject(reason);
        },
        onExitState () {
            cleanup();
        }
    };
}
function ready(conn, options) {
    // Users have reported an error "The session has been destroyed" raised
    // from H2SessionManager.request(), see https://github.com/connectrpc/connect-es/issues/683
    // This assertion will show whether the session already died in the
    // "connecting" state.
    assertSessionOpen(conn);
    // Do not block Node.js from exiting on an idle connection.
    // Note that we ref() again for the first stream to open, and unref() again
    // for the last stream to close.
    conn.unref();
    // the last time we were sure that the connection is alive, via a PING
    // response, or via received response bytes
    let lastAliveAt = Date.now();
    // how many streams are currently open on this session
    let streamCount = 0;
    // timer for the keep-alive interval
    let pingIntervalId;
    // timer for waiting for a PING response
    let pingTimeoutId;
    // keep track of GOAWAY - gracefully shut down open streams / wait for connection to error
    let receivedGoAway = false;
    // keep track of GOAWAY with ENHANCE_YOUR_CALM and with debug data too_many_pings
    let receivedGoAwayEnhanceYourCalmTooManyPings = false;
    // timer for closing connections without open streams, must be initialized
    let idleTimeoutId;
    resetIdleTimeout();
    const state = {
        t: "ready",
        conn,
        streamCount () {
            return streamCount;
        },
        requiresVerify () {
            const elapsedMs = Date.now() - lastAliveAt;
            return elapsedMs > options.pingIntervalMs;
        },
        isShuttingDown () {
            return receivedGoAway;
        },
        onClose: undefined,
        onError: undefined,
        registerRequest (stream) {
            streamCount++;
            if (streamCount == 1) {
                conn.ref();
                resetPingInterval(); // reset to ping with the appropriate interval for "open"
                stopIdleTimeout();
            }
            stream.once("response", ()=>{
                lastAliveAt = Date.now();
                resetPingInterval();
            });
            stream.once("close", ()=>{
                streamCount--;
                if (streamCount == 0) {
                    conn.unref();
                    resetPingInterval(); // reset to ping with the appropriate interval for "idle"
                    resetIdleTimeout();
                }
            });
        },
        responseByteRead (stream) {
            if (stream.session !== conn) {
                return;
            }
            if (conn.closed || conn.destroyed) {
                return;
            }
            if (streamCount <= 0) {
                return;
            }
            lastAliveAt = Date.now();
            resetPingInterval();
        },
        verify () {
            conn.ref();
            return new Promise((resolve)=>{
                commonPing(()=>{
                    if (streamCount == 0) conn.unref();
                    resolve(true);
                });
                conn.once("error", ()=>resolve(false));
            });
        },
        abort (reason) {
            if (!conn.destroyed) {
                conn.once("error", ()=>{
                // conn.destroy() may raise an error after onExitState() was called
                // and our error listeners are removed.
                // We attach this one to swallow uncaught exceptions.
                });
                conn.destroy(reason, __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_CANCEL);
            }
        },
        onExitState () {
            if (state.isShuttingDown()) {
                // Per the interface, this method is called when the manager is leaving
                // the state. We maintain this connection in the session manager until
                // all streams have finished, so we do not detach event listeners here.
                return;
            }
            cleanup();
            this.onError = undefined;
            this.onClose = undefined;
        }
    };
    // start or restart the ping interval
    function resetPingInterval() {
        stopPingInterval();
        if (streamCount > 0 || options.pingIdleConnection) {
            pingIntervalId = safeSetTimeout(onPingInterval, options.pingIntervalMs);
        }
    }
    function stopPingInterval() {
        clearTimeout(pingIntervalId);
        clearTimeout(pingTimeoutId);
    }
    function onPingInterval() {
        commonPing(resetPingInterval);
    }
    function commonPing(onSuccess) {
        clearTimeout(pingTimeoutId);
        pingTimeoutId = safeSetTimeout(()=>{
            conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("PING timed out", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Unavailable), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_CANCEL);
        }, options.pingTimeoutMs);
        conn.ping((err, duration)=>{
            clearTimeout(pingTimeoutId);
            if (err !== null) {
                // We will receive an ERR_HTTP2_PING_CANCEL here if we destroy the
                // connection with a pending ping.
                // We might also see other errors, but they should be picked up by the
                // "error" event listener.
                return;
            }
            if (duration > options.pingTimeoutMs) {
                // setTimeout is not precise, and HTTP/2 pings take less than 1ms in
                // tests.
                conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("PING timed out", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Unavailable), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_CANCEL);
                return;
            }
            lastAliveAt = Date.now();
            onSuccess();
        });
    }
    function stopIdleTimeout() {
        clearTimeout(idleTimeoutId);
    }
    function resetIdleTimeout() {
        idleTimeoutId = safeSetTimeout(onIdleTimeout, options.idleConnectionTimeoutMs);
    }
    function onIdleTimeout() {
        conn.close();
        onClose(); // trigger a state change right away, so we are not open to races
    }
    function onGoaway(errorCode, lastStreamID, opaqueData) {
        receivedGoAway = true;
        const tooManyPingsAscii = Buffer.from("too_many_pings", "ascii");
        if (errorCode === __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_ENHANCE_YOUR_CALM && opaqueData != null && opaqueData.equals(tooManyPingsAscii)) {
            // double pingIntervalMs, following the last paragraph of https://github.com/grpc/proposal/blob/0ba0c1905050525f9b0aee46f3f23c8e1e515489/A8-client-side-keepalive.md#basic-keepalive
            options.pingIntervalMs = options.pingIntervalMs * 2;
            receivedGoAwayEnhanceYourCalmTooManyPings = true;
        }
        if (errorCode === __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_NO_ERROR) {
            const nodeMajor = parseInt(process.versions.node.split(".")[0], 10);
            // Node.js v16 closes a connection on its own when it receives a GOAWAY
            // frame and there are no open streams (emitting a "close" event and
            // destroying the session), but more recent versions do not.
            // Calling close() ourselves is ineffective here - it appears that the
            // method is already being called, see https://github.com/nodejs/node/blob/198affc63973805ce5102d246f6b7822be57f5fc/lib/internal/http2/core.js#L681
            if (streamCount == 0 && nodeMajor >= 18) {
                conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("received GOAWAY without any open streams", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_NO_ERROR);
            }
        }
    }
    function onClose() {
        var _a;
        cleanup();
        (_a = state.onClose) === null || _a === void 0 ? void 0 : _a.call(state);
    }
    function onError(err) {
        var _a, _b;
        cleanup();
        if (receivedGoAwayEnhanceYourCalmTooManyPings) {
            // We cannot prevent node from destroying session and streams with its own
            // error that does not carry debug data, but at least we can wrap the error
            // we surface on the manager.
            const ce = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${__TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
            (_a = state.onError) === null || _a === void 0 ? void 0 : _a.call(state, ce);
        } else {
            (_b = state.onError) === null || _b === void 0 ? void 0 : _b.call(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(err));
        }
    }
    function cleanup() {
        stopPingInterval();
        stopIdleTimeout();
        conn.off("error", onError);
        conn.off("close", onClose);
        conn.off("goaway", onGoaway);
    }
    conn.on("error", onError);
    conn.on("close", onClose);
    conn.on("goaway", onGoaway);
    return state;
}
/**
 * setTimeout(), but simply ignores values larger than the maximum supported
 * value (signed 32-bit integer) instead of calling the callback right away,
 * and does not block Node.js from exiting.
 */ function safeSetTimeout(callback, ms) {
    if (ms > 0x7fffffff) {
        return;
    }
    return setTimeout(callback, ms).unref();
}
function assertSessionOpen(conn) {
    if (conn.connecting) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is connecting", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    if (conn.destroyed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is destroyed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    if (conn.closed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is closed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "createNodeHttpClient": ()=>createNodeHttpClient
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/protocol/signals.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function createNodeHttpClient(options) {
    var _a;
    if (options.httpVersion == "1.1") {
        return createNodeHttp1Client(options.nodeOptions);
    }
    const sessionProvider = (_a = options.sessionProvider) !== null && _a !== void 0 ? _a : (url)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Http2SessionManager"](url);
    return createNodeHttp2Client(sessionProvider);
}
/**
 * Create an HTTP client using the Node.js `http` or `https` package.
 *
 * The HTTP client is a simple function conforming to the type UniversalClientFn.
 * It takes an UniversalClientRequest as an argument, and returns a promise for
 * an UniversalClientResponse.
 */ function createNodeHttp1Client(httpOptions) {
    return async function request(req) {
        const sentinel = createSentinel(req.signal);
        return new Promise((resolve, reject)=>{
            sentinel.catch((e)=>{
                reject(e);
            });
            h1Request(sentinel, req.url, Object.assign(Object.assign({}, httpOptions), {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(req.header, httpOptions === null || httpOptions === void 0 ? void 0 : httpOptions.headers),
                method: req.method
            }), (request)=>{
                void sinkRequest(req, request, sentinel);
                request.on("response", (response)=>{
                    var _a;
                    response.on("error", sentinel.reject);
                    sentinel.catch((reason)=>response.destroy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason)));
                    const trailer = new Headers();
                    resolve({
                        status: (_a = response.statusCode) !== null && _a !== void 0 ? _a : 0,
                        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(response.headers),
                        body: h1ResponseIterable(sentinel, response, trailer),
                        trailer
                    });
                });
            });
        });
    };
}
/**
 * Create an HTTP client using the Node.js `http2` package.
 *
 * The HTTP client is a simple function conforming to the type UniversalClientFn.
 * It takes an UniversalClientRequest as an argument, and returns a promise for
 * an UniversalClientResponse.
 */ function createNodeHttp2Client(sessionProvider) {
    return function request(req) {
        const sentinel = createSentinel(req.signal);
        const sessionManager = sessionProvider(req.url);
        return new Promise((resolve, reject)=>{
            sentinel.catch((e)=>{
                reject(e);
            });
            h2Request(sentinel, sessionManager, req.url, req.method, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(req.header), {}, (stream)=>{
                void sinkRequest(req, stream, sentinel);
                stream.on("response", (headers)=>{
                    var _a;
                    const response = {
                        status: (_a = headers[":status"]) !== null && _a !== void 0 ? _a : 0,
                        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(headers),
                        body: h2ResponseIterable(sentinel, stream, sessionManager),
                        trailer: h2ResponseTrailer(stream)
                    };
                    resolve(response);
                });
            });
        });
    };
}
function h1Request(sentinel, url, options, onRequest) {
    let request;
    if (new URL(url).protocol.startsWith("https")) {
        request = __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__["request"](url, options);
    } else {
        request = __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["request"](url, options);
    }
    sentinel.catch((reason)=>request.destroy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason)));
    // Node.js will only send headers with the first request body byte by default.
    // We force it to send headers right away for consistent behavior between
    // HTTP/1.1 and HTTP/2.2 clients.
    request.flushHeaders();
    request.on("error", sentinel.reject);
    request.on("socket", function onRequestSocket(socket) {
        function onSocketConnect() {
            socket.off("connect", onSocketConnect);
            onRequest(request);
        }
        // If readyState is open, then socket is already open due to keepAlive, so
        // the 'connect' event will never fire so call onRequest explicitly
        if (socket.readyState === "open") {
            onRequest(request);
        } else {
            socket.on("connect", onSocketConnect);
        }
    });
}
function h1ResponseIterable(sentinel, response, trailer) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(response.trailers).forEach((value, key)=>{
                            trailer.set(key, value);
                        });
                        sentinel.resolve();
                        await sentinel;
                    }
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
function h2Request(sentinel, sm, url, method, headers, options, onStream) {
    const requestUrl = new URL(url);
    if (requestUrl.origin !== sm.authority) {
        const message = `cannot make a request to ${requestUrl.origin}: the http2 session is connected to ${sm.authority}`;
        sentinel.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](message, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal));
        return;
    }
    sm.request(method, requestUrl.pathname + requestUrl.search, headers, {}).then((stream)=>{
        sentinel.catch((reason)=>{
            if (stream.closed) {
                return;
            }
            // Node.js http2 streams that are aborted via an AbortSignal close with
            // an RST_STREAM with code INTERNAL_ERROR.
            // To comply with the mapping between gRPC and HTTP/2 codes, we need to
            // close with code CANCEL.
            // See https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#errors
            // See https://www.rfc-editor.org/rfc/rfc7540#section-7
            const rstCode = reason instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"] && reason.code == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["H2Code"].CANCEL : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["H2Code"].INTERNAL_ERROR;
            return new Promise((resolve)=>stream.close(rstCode, resolve));
        });
        stream.on("error", function h2StreamError(e) {
            if (stream.writableEnded && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unwrapNodeErrorChain"])(e).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNodeErrorProps"]).some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
                return;
            }
            sentinel.reject(e);
        });
        stream.on("close", function h2StreamClose() {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromH2ResetCode"])(stream.rstCode);
            if (err) {
                sentinel.reject(err);
            }
        });
        onStream(stream);
    }, (reason)=>{
        sentinel.reject(reason);
    });
}
function h2ResponseTrailer(response) {
    const trailer = new Headers();
    response.on("trailers", (args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(args).forEach((value, key)=>{
            trailer.set(key, value);
        });
    });
    return trailer;
}
function h2ResponseIterable(sentinel, response, sm) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        sentinel.resolve();
                        await sentinel;
                    }
                    sm === null || sm === void 0 ? void 0 : sm.notifyResponseByteRead(response);
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
async function sinkRequest(request, nodeRequest, sentinel) {
    if (request.body === undefined) {
        await new Promise((resolve)=>nodeRequest.end(resolve));
        return;
    }
    const it = request.body[Symbol.asyncIterator]();
    return new Promise((resolve)=>{
        writeNext();
        function writeNext() {
            if (sentinel.isRejected()) {
                return;
            }
            it.next().then((r)=>{
                if (r.done === true) {
                    nodeRequest.end(resolve);
                    return;
                }
                nodeRequest.write(r.value, "binary", function(e) {
                    if (e === null || e === undefined) {
                        writeNext();
                        return;
                    }
                    if (it.throw !== undefined) {
                        it.throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e)).catch(()=>{
                        //
                        });
                    }
                    // If the server responds and closes the connection before the client has written the entire response
                    // body, we get an ERR_STREAM_WRITE_AFTER_END error code from Node.js here.
                    // We do want to notify the iterable of the error condition, but we do not want to reject our sentinel,
                    // because that would also affect the reading side.
                    if (nodeRequest.writableEnded && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unwrapNodeErrorChain"])(e).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNodeErrorProps"]).some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
                        return;
                    }
                    sentinel.reject(e);
                });
            }, (e)=>{
                sentinel.reject(e);
            });
        }
    });
}
function createSentinel(signal) {
    let res;
    let rej;
    let resolved = false;
    let rejected = false;
    const p = new Promise((resolve, reject)=>{
        res = resolve;
        rej = reject;
    });
    const c = {
        resolve () {
            if (!resolved && !rejected) {
                resolved = true;
                res === null || res === void 0 ? void 0 : res();
            }
        },
        isResolved () {
            return resolved;
        },
        reject (reason) {
            if (!resolved && !rejected) {
                rejected = true;
                rej === null || rej === void 0 ? void 0 : rej((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason));
            }
        },
        isRejected () {
            return rejected;
        },
        async race (promise) {
            const r = await Promise.race([
                promise,
                p
            ]);
            if (r === undefined && resolved) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("sentinel completed early", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
            }
            return r;
        }
    };
    const s = Object.assign(p, c);
    function onSignalAbort() {
        c.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbortSignalReason"])(this));
    }
    if (signal) {
        if (signal.aborted) {
            c.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbortSignalReason"])(signal));
        } else {
            signal.addEventListener("abort", onSignalAbort);
        }
        p.finally(()=>signal.removeEventListener("abort", onSignalAbort)).catch(()=>{
        // We intentionally swallow sentinel rejection - errors must
        // propagate through the request or response iterables.
        });
    }
    return s;
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "validateNodeTransportOptions": ()=>validateNodeTransportOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/protocol/limit-io.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
;
;
;
;
;
;
;
function validateNodeTransportOptions(options) {
    var _a, _b, _c, _d;
    let httpClient;
    if (options.httpVersion == "2") {
        let sessionManager;
        if (options.sessionManager) {
            sessionManager = options.sessionManager;
        } else {
            sessionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Http2SessionManager"](options.baseUrl, {
                pingIntervalMs: options.pingIntervalMs,
                pingIdleConnection: options.pingIdleConnection,
                pingTimeoutMs: options.pingTimeoutMs,
                idleConnectionTimeoutMs: options.idleConnectionTimeoutMs
            }, options.nodeOptions);
        }
        httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNodeHttpClient"])({
            httpVersion: "2",
            sessionProvider: ()=>sessionManager
        });
    } else {
        httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNodeHttpClient"])({
            httpVersion: "1.1",
            nodeOptions: options.nodeOptions
        });
    }
    return Object.assign(Object.assign(Object.assign({}, options), {
        httpClient,
        useBinaryFormat: (_a = options.useBinaryFormat) !== null && _a !== void 0 ? _a : true,
        interceptors: (_b = options.interceptors) !== null && _b !== void 0 ? _b : [],
        sendCompression: (_c = options.sendCompression) !== null && _c !== void 0 ? _c : null,
        acceptCompression: (_d = options.acceptCompression) !== null && _d !== void 0 ? _d : [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compressionGzip"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compressionBrotli"]
        ]
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateReadWriteMaxBytes"])(options.readMaxBytes, options.writeMaxBytes, options.compressMinBytes));
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-web-transport.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "createGrpcWebTransport": ()=>createGrpcWebTransport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2d$web$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/protocol-grpc-web/transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-rsc] (ecmascript)");
;
;
function createGrpcWebTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2d$web$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-transport.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "createGrpcTransport": ()=>createGrpcTransport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/protocol-grpc/transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-rsc] (ecmascript)");
;
;
function createGrpcTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "createConnectTransport": ()=>createConnectTransport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/protocol-connect/transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-rsc] (ecmascript)");
;
;
function createConnectTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "universalRequestFromNodeRequest": ()=>universalRequestFromNodeRequest,
    "universalResponseToNodeResponse": ()=>universalResponseToNodeResponse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)");
var __asyncValues = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var __await = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
;
;
;
function universalRequestFromNodeRequest(nodeRequest, ...rest) {
    var _a, _b;
    const nodeResponse = rest.length === 3 ? rest[0] : undefined;
    const parsedJsonBody = rest.length === 3 ? rest[1] : rest[0];
    const contextValues = rest.length === 3 ? rest[2] : rest[1];
    const encrypted = "encrypted" in nodeRequest.socket && nodeRequest.socket.encrypted;
    const protocol = encrypted ? "https" : "http";
    const authority = "authority" in nodeRequest ? nodeRequest.authority : nodeRequest.headers.host;
    const pathname = (_a = nodeRequest.url) !== null && _a !== void 0 ? _a : "";
    if (authority === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("unable to determine request authority from Node.js server request", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    const body = parsedJsonBody !== undefined ? parsedJsonBody : asyncIterableFromNodeServerRequest(nodeRequest);
    const abortController = new AbortController();
    if ("stream" in nodeRequest) {
        // HTTP/2 has error codes we want to honor
        nodeRequest.once("close", ()=>{
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromH2ResetCode"])(nodeRequest.stream.rstCode);
            if (err !== undefined) {
                abortController.abort(err);
            } else {
                abortController.abort();
            }
        });
    } else {
        // HTTP/1.1 does not have error codes, but Node.js has ECONNRESET
        const nodeResponsOrRequest = nodeResponse !== null && nodeResponse !== void 0 ? nodeResponse : nodeRequest;
        const onH1Error = (e)=>{
            nodeRequest.off("error", onH1Error);
            nodeResponsOrRequest.off("close", onH1Close);
            abortController.abort((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e));
        };
        const onH1Close = ()=>{
            nodeRequest.off("error", onH1Error);
            nodeResponsOrRequest.off("close", onH1Close);
            // When subscribed to the response, this can get called before "error"
            abortController.abort(nodeRequest.errored ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(nodeRequest.errored) : undefined);
        };
        nodeRequest.once("error", onH1Error);
        // Node emits close on the request as soon as all data is read.
        // We instead subscribe to the response (if available)
        //
        // Ref: https://github.com/nodejs/node/issues/40775
        nodeResponsOrRequest.once("close", onH1Close);
    }
    return {
        httpVersion: nodeRequest.httpVersion,
        method: (_b = nodeRequest.method) !== null && _b !== void 0 ? _b : "",
        url: new URL(pathname, `${protocol}://${authority}`).toString(),
        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(nodeRequest.headers),
        body,
        signal: abortController.signal,
        contextValues: contextValues
    };
}
async function universalResponseToNodeResponse(universalResponse, nodeResponse) {
    var _a, _b, _c;
    const it = (_a = universalResponse.body) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]();
    let isWriteError = false;
    try {
        if (it !== undefined) {
            let chunk = await it.next();
            isWriteError = true;
            // we deliberately send headers after first read, not before,
            // because we have to give the implementation a chance to
            // set response headers
            nodeResponse.writeHead(universalResponse.status, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.header));
            isWriteError = false;
            for(; chunk.done !== true; chunk = await it.next()){
                isWriteError = true;
                await write(nodeResponse, chunk.value);
                if ("flush" in nodeResponse && typeof nodeResponse.flush == "function") {
                    // The npm package "compression" is an express middleware that is widely used,
                    // for example in next.js. It uses the npm package "compressible" to determine
                    // whether to apply compression to a response. Unfortunately, "compressible"
                    // matches every mime type that ends with "+json", causing our server-streaming
                    // RPCs to be buffered.
                    // The package modifies the response object, and adds a flush() method, which
                    // flushes the underlying gzip or deflate stream from the Node.js zlib module.
                    // The method is added here:
                    // https://github.com/expressjs/compression/blob/ad5113b98cafe1382a0ece30bb4673707ac59ce7/index.js#L70
                    nodeResponse.flush();
                }
                isWriteError = false;
            }
        }
        if (!nodeResponse.headersSent) {
            nodeResponse.writeHead(universalResponse.status, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.header));
        }
        if (universalResponse.trailer) {
            nodeResponse.addTrailers((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.trailer));
        }
        await new Promise((resolve)=>{
            // The npm package "compression" crashes when a callback is passed to end()
            // https://github.com/expressjs/compression/blob/ad5113b98cafe1382a0ece30bb4673707ac59ce7/index.js#L115
            nodeResponse.once("end", resolve);
            nodeResponse.end();
        });
    } catch (e) {
        // Report write errors to the handler.
        if (isWriteError) {
            (_b = it === null || it === void 0 ? void 0 : it.throw) === null || _b === void 0 ? void 0 : _b.call(it, e).catch(()=>{});
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e);
    } finally{
        (_c = it === null || it === void 0 ? void 0 : it.return) === null || _c === void 0 ? void 0 : _c.call(it).catch(()=>{});
    }
}
function asyncIterableFromNodeServerRequest(request) {
    return __asyncGenerator(this, arguments, function* asyncIterableFromNodeServerRequest_1() {
        var _a, e_1, _b, _c;
        const it = request.iterator({
            // Node.js v16 closes request and response when this option isn't disabled.
            // When one of our handlers receives invalid data (such as an unexpected
            // compression flag in a streaming request), we're unable to write the error
            // response.
            // Later major versions have a more sensible behavior - we can revert this
            // workaround once we stop supporting v16.
            destroyOnReturn: false
        });
        try {
            for(var _d = true, it_1 = __asyncValues(it), it_1_1; it_1_1 = yield __await(it_1.next()), _a = it_1_1.done, !_a; _d = true){
                _c = it_1_1.value;
                _d = false;
                const chunk = _c;
                yield yield __await(chunk);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_d && !_a && (_b = it_1.return)) yield __await(_b.call(it_1));
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    });
}
function write(stream, data) {
    return new Promise((resolve, reject)=>{
        if (stream.errored) {
            return error(stream.errored);
        }
        stream.once("error", error);
        stream.once("drain", drain);
        // flushed == false: the stream wishes for the calling code to wait for
        // the 'drain' event to be emitted before continuing to write additional
        // data.
        const flushed = stream.write(data, "binary", function(err) {
            if (err && !flushed) {
                // We are never getting a "drain" nor an "error" event if the stream
                // has already ended (ERR_STREAM_WRITE_AFTER_END), so we have to
                // resolve our promise in this callback.
                error(err);
                // However, once we do that (and remove our event listeners), we _do_
                // get an "error" event, which ends up as an uncaught exception.
                // We silence this error specifically with the following listener.
                // All of this seems very fragile.
                stream.once("error", ()=>{
                //
                });
            }
        });
        if (flushed) {
            drain();
        }
        function error(err) {
            stream.off("error", error);
            stream.off("drain", drain);
            reject(err);
        }
        function drain() {
            stream.off("error", error);
            stream.off("drain", drain);
            resolve();
        }
    });
}
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-node-adapter.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s({
    "connectNodeAdapter": ()=>connectNodeAdapter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/router.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$universal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect/dist/esm/protocol/universal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)");
;
;
;
;
function connectNodeAdapter(options) {
    var _a;
    if (options.acceptCompression === undefined) {
        options.acceptCompression = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compressionGzip"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compressionBrotli"]
        ];
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createConnectRouter"])(options);
    options.routes(router);
    const prefix = (_a = options.requestPathPrefix) !== null && _a !== void 0 ? _a : "";
    const paths = new Map();
    for (const uHandler of router.handlers){
        paths.set(prefix + uHandler.requestPath, uHandler);
    }
    return function nodeRequestHandler(req, res) {
        var _a, _b, _c, _d;
        // Strip the query parameter when matching paths.
        const uHandler = paths.get((_b = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split("?", 2)[0]) !== null && _b !== void 0 ? _b : "");
        if (!uHandler) {
            ((_c = options.fallback) !== null && _c !== void 0 ? _c : fallback)(req, res);
            return;
        }
        const uReq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["universalRequestFromNodeRequest"])(req, res, undefined, (_d = options.contextValues) === null || _d === void 0 ? void 0 : _d.call(options, req));
        uHandler(uReq).then((uRes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["universalResponseToNodeResponse"])(uRes, res)).catch((reason)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"].from(reason).code == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Aborted) {
                return;
            }
            // eslint-disable-next-line no-console
            console.error(`handler for rpc ${uHandler.method.name} of ${uHandler.service.typeName} failed`, reason);
        });
    };
}
const fallback = (request, response)=>{
    response.writeHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$universal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uResponseNotFound"].status);
    response.end();
};
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Polyfill the Headers API for Node versions < 18
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$headers$2d$polyfill$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-headers-polyfill.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$grpc$2d$web$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-web-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$grpc$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$node$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-node-adapter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$headers$2d$polyfill$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-headers-polyfill.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$grpc$2d$web$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-web-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$grpc$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$node$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-node-adapter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/@arcjet/transport/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createTransport": ()=>createTransport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-rsc] (ecmascript)");
;
/**
 * Create a transport that talks over HTTP/2 using Connect RPC.
 *
 * A thin wrapper around {@linkcode createConnectTransport}.
 *
 * @param baseUrl
 *   Base URI for all HTTP requests (example: `https://example.com/my-api`).
 * @returns
 *   Connect transport used to make RPC calls.
 */ function createTransport(baseUrl) {
    // We create our own session manager so we can attempt to pre-connect
    const sessionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Http2SessionManager"](baseUrl, {
        // AWS Global Accelerator doesn't support PING so we use a very high idle
        // timeout. Ref:
        // https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works.html#about-idle-timeout
        idleConnectionTimeoutMs: 340 * 1000
    });
    // We ignore the promise result because this is an optimistic pre-connect
    sessionManager.connect();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createConnectTransport"])({
        baseUrl,
        httpVersion: "2",
        sessionManager
    });
}
;
}),
"[project]/node_modules/@arcjet/next/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createMiddleware": ()=>createMiddleware,
    "createRemoteClient": ()=>createRemoteClient,
    "default": ()=>arcjet,
    "request": ()=>request,
    "withArcjet": ()=>withArcjet
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$body$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/body/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/ip/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/env/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/logger/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/protocol/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$transport$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/transport/index.js [app-rsc] (ecmascript)");
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
;
/**
 * Get minimal request details (cookies, headers).
 *
 * This function can be used in server components, server actions,
 * route handlers, and middleware.
 *
 * @returns
 *   Promise that resolves to the request details.
 */ async function request() {
    const hdrs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const cook = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const cookieEntries = cook.getAll().map((cookie)=>[
            cookie.name,
            cookie.value
        ]);
    return {
        headers: hdrs,
        cookies: Object.fromEntries(cookieEntries)
    };
}
/**
 * Create a remote client.
 *
 * @param options
 *   Configuration (optional).
 * @returns
 *   Client.
 */ function createRemoteClient(options) {
    const url = options?.baseUrl ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"])(process.env);
    const timeout = options?.timeout ?? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env) ? 1000 : 500);
    // Transport is the HTTP client that the client uses to make requests.
    const transport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$transport$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])(url);
    const sdkStack = "NEXTJS";
    const sdkVersion = "1.0.0-beta.17";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])({
        transport,
        baseUrl: url,
        timeout,
        sdkStack,
        sdkVersion
    });
}
function isIterable(val) {
    return typeof val?.[Symbol.iterator] === "function";
}
function cookiesToArray(cookies) {
    if (typeof cookies === "undefined") {
        return [];
    }
    if (isIterable(cookies)) {
        return Array.from(cookies).map(([_, cookie])=>cookie);
    } else {
        return Object.entries(cookies).map(([name, value])=>({
                name,
                value: value ?? ""
            }));
    }
}
function cookiesToString(cookies) {
    // This is essentially the implementation of `RequestCookies#toString` in
    // Next.js but normalized for NextApiRequest cookies object
    return cookiesToArray(cookies).map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
}
/**
 * Create a new Next.js integration of Arcjet.
 *
 * > 👉 **Tip**:
 * > build your initial base client with as many rules as possible outside of a
 * > request handler;
 * > if you need more rules inside handlers later then you can call `withRule()`
 * > on that base client.
 *
 * @template Rules
 *   List of rules.
 * @template Characteristics
 *   Characteristics to track a user by.
 * @param options
 *   Configuration.
 * @returns
 *   Next.js integration of Arcjet.
 */ function arcjet(options) {
    const client = options.client ?? createRemoteClient();
    const log = options.log ? options.log : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Logger"]({
        level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logLevel"])(process.env)
    });
    const proxies = Array.isArray(options.proxies) ? options.proxies.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseProxy"]) : undefined;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env)) {
        log.warn("Arcjet will use 127.0.0.1 when missing public IP address in development mode");
    }
    function toArcjetRequest(request, props) {
        // We construct an ArcjetHeaders to normalize over Headers
        const headers = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArcjetHeaders"](request.headers);
        const xArcjetIp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env) ? headers.get("x-arcjet-ip") : undefined;
        let ip = xArcjetIp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            ip: request.ip,
            socket: request.socket,
            info: request.info,
            requestContext: request.requestContext,
            headers
        }, {
            platform: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["platform"])(process.env),
            proxies
        });
        if (ip === "") {
            // If the `ip` is empty but we're in development mode, we default the IP
            // so the request doesn't fail.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env)) {
                ip = "127.0.0.1";
            } else {
                log.warn(`Client IP address is missing. If this is a dev environment set the ARCJET_ENV env var to "development"`);
            }
        }
        const method = request.method ?? "";
        const host = headers.get("host") ?? "";
        let path = "";
        let query = "";
        let protocol = "";
        // TODO(#36): nextUrl has formatting logic when you `toString` but
        // we don't account for that here
        if (typeof request.nextUrl !== "undefined") {
            path = request.nextUrl.pathname ?? "";
            if (typeof request.nextUrl.search !== "undefined") {
                query = request.nextUrl.search;
            }
            if (typeof request.nextUrl.protocol !== "undefined") {
                protocol = request.nextUrl.protocol;
            }
        } else {
            if (typeof request.socket?.encrypted !== "undefined") {
                protocol = request.socket.encrypted ? "https:" : "http:";
            } else {
                protocol = "http:";
            }
            // Do some very simple validation, but also try/catch around URL parsing
            if (typeof request.url !== "undefined" && request.url !== "" && host !== "") {
                try {
                    const url = new URL(request.url, `${protocol}//${host}`);
                    path = url.pathname;
                    query = url.search;
                    protocol = url.protocol;
                } catch  {
                    // If the parsing above fails, just set the path as whatever url we
                    // received.
                    path = request.url ?? "";
                    log.warn('Unable to parse URL. Using "%s" as `path`.', path);
                }
            } else {
                path = request.url ?? "";
            }
        }
        const cookies = cookiesToString(request.cookies);
        const extra = {};
        // If we're running on Vercel, we can add some extra information
        if (process.env["VERCEL"]) {
            // Vercel ID https://vercel.com/docs/concepts/edge-network/headers
            extra["vercel-id"] = headers.get("x-vercel-id") ?? "";
            // Vercel deployment URL
            // https://vercel.com/docs/concepts/edge-network/headers
            extra["vercel-deployment-url"] = headers.get("x-vercel-deployment-url") ?? "";
            // Vercel git commit SHA
            // https://vercel.com/docs/environment-variables/system-environment-variables#VERCEL_GIT_COMMIT_SHA
            extra["vercel-git-commit-sha"] = process.env["VERCEL_GIT_COMMIT_SHA"] ?? "";
        }
        return {
            ...props,
            ...extra,
            ip,
            method,
            protocol,
            host,
            path,
            headers,
            cookies,
            query
        };
    }
    function withClient(aj) {
        return Object.freeze({
            withRule (rule) {
                const client = aj.withRule(rule);
                return withClient(client);
            },
            async protect (request, ...[props]) {
                // TODO(#220): The generic manipulations get really mad here, so we cast
                // Further investigation makes it seem like it has something to do with
                // the definition of `props` in the signature but it's hard to track down
                const req = toArcjetRequest(request, props ?? {});
                const getBody = async ()=>{
                    if (typeof request.clone === "function") {
                        const clonedRequest = request.clone();
                        let expectedLength;
                        // TODO: This shouldn't need to build headers again but the type
                        // for `req` above is overly relaxed
                        const headers = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArcjetHeaders"](request.headers);
                        const expectedLengthString = headers.get("content-length");
                        if (typeof expectedLengthString === "string") {
                            expectedLength = parseInt(expectedLengthString, 10);
                        }
                        // HEAD and GET requests do not have a body.
                        if (!clonedRequest.body) {
                            throw new Error("Cannot read body: body is missing");
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$body$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readBodyWeb"])(clonedRequest.body, {
                            expectedLength
                        });
                    }
                    // The body is `null` if there was no body with the request.
                    // See: <https://nextjs.org/docs/pages/building-your-application/routing/api-routes#request-helpers>
                    if (request.body === null || request.body === undefined) {
                        throw new Error("Cannot read body: body is missing");
                    }
                    if (typeof request.body === "string") {
                        return request.body;
                    }
                    return JSON.stringify(request.body);
                };
                return aj.protect({
                    getBody
                }, req);
            }
        });
    }
    const aj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
        ...options,
        client,
        log
    });
    return withClient(aj);
}
/**
 * Protect your Next.js application using Arcjet as middleware.
 *
 * @param arcjet
 *   Next.js integration of Arcjet.
 * @param existingMiddleware
 *   Existing middleware to be called after Arcjet decides that a request is
 *   allowed.
 * @returns
 *   Next.js middleware that will run Arcjet and when it allows the request
 *   call further middleware,
 *   but when it denies the request will immediately return a JSON
 *   `NextResponse` with `403` or `429`.
 */ function createMiddleware(arcjet, existingMiddleware) {
    return async function middleware(request, event) {
        const decision = await arcjet.protect(request);
        if (decision.isDenied()) {
            // TODO(#222): Content type negotiation using `Accept` header
            if (decision.reason.isRateLimit()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    code: 429,
                    message: "Too Many Requests"
                }, {
                    status: 429
                });
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    code: 403,
                    message: "Forbidden"
                }, {
                    status: 403
                });
            }
        } else {
            if (typeof existingMiddleware === "function") {
                return existingMiddleware(request, event);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next();
            }
        }
    };
}
function isNextApiResponse(val) {
    if (val === null) {
        return false;
    }
    if (typeof val !== "object") {
        return false;
    }
    if (!("status" in val)) {
        return false;
    }
    if (!("json" in val)) {
        return false;
    }
    if (typeof val.status !== "function" || typeof val.json !== "function") {
        return false;
    }
    return true;
}
/**
 * Wrap a Next.js page route, edge middleware, or an API route running on the
 * Edge Runtime.
 *
 * @param arcjet
 *   Next.js integration of Arcjet.
 * @param handler
 *   Request handler to be called after Arcjet decides that a request is
 *   allowed.
 * @returns
 *   Function that will run Arcjet on a request and when it is allowed call
 *   `handler`,
 *   but when it is denied will immediately return a JSON `NextResponse` or
 *   `NextApiResponse` with `403` or `429`.
 */ function withArcjet(arcjet, handler) {
    return async (...args)=>{
        const request = args[0];
        const response = args[1];
        const decision = await arcjet.protect(request);
        if (decision.isDenied()) {
            if (isNextApiResponse(response)) {
                // TODO(#222): Content type negotiation using `Accept` header
                if (decision.reason.isRateLimit()) {
                    return response.status(429).json({
                        code: 429,
                        message: "Too Many Requests"
                    });
                } else {
                    return response.status(403).json({
                        code: 403,
                        message: "Forbidden"
                    });
                }
            } else {
                // TODO(#222): Content type negotiation using `Accept` header
                if (decision.reason.isRateLimit()) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        code: 429,
                        message: "Too Many Requests"
                    }, {
                        status: 429
                    });
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        code: 403,
                        message: "Forbidden"
                    }, {
                        status: 403
                    });
                }
            }
        } else {
            return handler(...args);
        }
    };
}
;
}),
"[project]/node_modules/@arcjet/next/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$body$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/body/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/ip/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/env/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/logger/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/protocol/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$transport$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/transport/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/next/index.js [app-rsc] (ecmascript) <locals>");
}),

};

//# sourceMappingURL=_74120952._.js.map