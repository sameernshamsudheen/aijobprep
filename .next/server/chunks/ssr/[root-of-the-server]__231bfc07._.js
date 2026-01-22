module.exports = {

"[project]/src/features/jobinfos/dbCache.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getJobInfoGlobalTag": ()=>getJobInfoGlobalTag,
    "getJobInfoIdTag": ()=>getJobInfoIdTag,
    "getJobInfoUserTag": ()=>getJobInfoUserTag,
    "revalidateJobInfoCache": ()=>revalidateJobInfoCache
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dataCache.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
;
;
function getJobInfoGlobalTag() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalTag"])("jobInfos");
}
function getJobInfoUserTag(userId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserTag"])("jobInfos", userId);
}
function getJobInfoIdTag(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIdTag"])("jobInfos", id);
}
function revalidateJobInfoCache({ id, userId }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(getJobInfoGlobalTag());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(getJobInfoUserTag(userId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(getJobInfoIdTag(id));
}
}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
// "use client"
// import { Button } from "@/components/ui/button"
// import { clientEnv } from "@/data/env/client"
// import { JobInfoTable } from "@/drizzle/schema"
// import { createInterview, updateInterview } from "@/features/interviews/actions"
// import { errorToast } from "@/lib/errorToast"
// import { CondensedMessages } from "@/services/hume/components/CondensedMessages"
// import { condenseChatMessages } from "@/services/hume/lib/condenseChatMessages"
// import { useVoice, VoiceReadyState } from "@humeai/voice-react"
// import { Loader2Icon, MicIcon, MicOffIcon, PhoneOffIcon } from "lucide-react"
// import { useRouter } from "next/navigation"
// import { useEffect, useMemo, useRef, useState } from "react"
// export function StartCall({
//   jobInfo,
//   user,
//   accessToken,
// }: {
//   accessToken: string
//   jobInfo: Pick<
//     typeof JobInfoTable.$inferSelect,
//     "id" | "title" | "description" | "experienceLevel"
//   >
//   user: {
//     name: string
//     imageUrl: string
//   }
// }) {
//   const { connect, readyState, chatMetadata, callDurationTimestamp } =
//     useVoice()
//   const [interviewId, setInterviewId] = useState<string | null>(null)
//   const durationRef = useRef(callDurationTimestamp)
//   const router = useRouter()
//   durationRef.current = callDurationTimestamp
//   // Sync chat ID
//   useEffect(() => {
//     if (chatMetadata?.chatId == null || interviewId == null) {
//       return
//     }
//     updateInterview(interviewId, { humeChatId: chatMetadata.chatId })
//   }, [chatMetadata?.chatId, interviewId])
//   // Sync duration
//   useEffect(() => {
//     if (interviewId == null) return
//     const intervalId = setInterval(() => {
//       if (durationRef.current == null) return
//       updateInterview(interviewId, { duration: durationRef.current })
//     }, 10000)
//     return () => clearInterval(intervalId)
//   }, [interviewId])
//   // Handle disconnect
//   useEffect(() => {
//     if (readyState !== VoiceReadyState.CLOSED) return
//     if (interviewId == null) {
//       return router.push(`/app/job-infos/${jobInfo.id}/interviews`)
//     }
//     if (durationRef.current != null) {
//       updateInterview(interviewId, { duration: durationRef.current })
//     }
//     router.push(`/app/job-infos/${jobInfo.id}/interviews/${interviewId}`)
//   }, [interviewId, readyState, router, jobInfo.id])
//   if (readyState === VoiceReadyState.IDLE) {
//     return (
//       <div className="flex justify-center items-center h-screen-header">
//         <Button
//           size="lg"
//           onClick={async () => {
//             const res = await createInterview({ jobInfoId: jobInfo.id })
//             if (res.error) {
//               return errorToast(res.message)
//             }
//             setInterviewId(res.id)
//             connect({
//               auth: { type: "accessToken", value: accessToken },
//               configId: clientEnv.NEXT_PUBLIC_HUME_CONFIG_ID,
//               sessionSettings: {
//                 type: "session_settings",
//                 variables: {
//                   userName: user.name,
//                   title: jobInfo.title || "Not Specified",
//                   description: jobInfo.description,
//                   experienceLevel: jobInfo.experienceLevel,
//                 },
//               },
//             })
//           }}
//         >
//           Start Interview
//         </Button>
//       </div>
//     )
//   }
//   if (
//     readyState === VoiceReadyState.CONNECTING ||
//     readyState === VoiceReadyState.CLOSED
//   ) {
//     return (
//       <div className="h-screen-header flex items-center justify-center">
//         <Loader2Icon className="animate-spin size-24" />
//       </div>
//     )
//   }
//   return (
//     <div className="overflow-y-auto h-screen-header flex flex-col-reverse">
//       <div className="container py-6 flex flex-col items-center justify-end gap-4">
//         <Messages user={user} />
//         <Controls />
//       </div>
//     </div>
//   )
// }
// function Messages({ user }: { user: { name: string; imageUrl: string } }) {
//   const { messages, fft } = useVoice()
//   const condensedMessages = useMemo(() => {
//     return condenseChatMessages(messages)
//   }, [messages])
//   return (
//     <CondensedMessages
//       messages={condensedMessages}
//       user={user}
//       maxFft={Math.max(...fft)}
//       className="max-w-5xl"
//     />
//   )
// }
// function Controls() {
//   const { disconnect, isMuted, mute, unmute, micFft, callDurationTimestamp } =
//     useVoice()
//   return (
//     <div className="flex gap-5 rounded border px-5 py-2 w-fit sticky bottom-6 bg-background items-center">
//       <Button
//         variant="ghost"
//         size="icon"
//         className="-mx-3"
//         onClick={() => (isMuted ? unmute() : mute())}
//       >
//         {isMuted ? <MicOffIcon className="text-destructive" /> : <MicIcon />}
//         <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
//       </Button>
//       <div className="self-stretch">
//         <FftVisualizer fft={micFft} />
//       </div>
//       <div className="text-sm text-muted-foreground tabular-nums">
//         {callDurationTimestamp}
//       </div>
//       <Button
//         variant="ghost"
//         size="icon"
//         className="-mx-3"
//         onClick={disconnect}
//       >
//         <PhoneOffIcon className="text-destructive" />
//         <span className="sr-only">End Call</span>
//       </Button>
//     </div>
//   )
// }
// function FftVisualizer({ fft }: { fft: number[] }) {
//   return (
//     <div className="flex gap-1 items-center h-full">
//       {fft.map((value, index) => {
//         const percent = (value / 4) * 100
//         return (
//           <div
//             key={index}
//             className="min-h-0.5 bg-primary/75 w-0.5 rounded"
//             style={{ height: `${percent < 10 ? 0 : percent}%` }}
//           />
//         )
//       })}
//     </div>
//   )
// }
}}),
"[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"e0016cf89e1c5dd194f0f2133193296f3bcb93634c":"$$RSC_SERVER_CACHE_0"},"",""] */ __turbopack_context__.s({
    "$$RSC_SERVER_CACHE_0": ()=>$$RSC_SERVER_CACHE_0,
    "default": ()=>NewInterviewPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/cache-wrapper.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$job$2d$info$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/job-info.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobinfos$2f$dbCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobinfos/dbCache.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/lib/getcurrentUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-rsc] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/use-cache/cache-tag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hume$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hume/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$_StartCall$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/_StartCall.tsx [app-rsc] (ecmascript)");
// import { canCreateInterview } from "@/features/interviews/permissions"
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/env/server.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
;
async function NewInterviewPage({ params }) {
    const { jobInfoId } = await params;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen-header flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
                className: "animate-spin size-24"
            }, void 0, false, {
                fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx",
                lineNumber: 28,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SuspendedComponent, {
            jobInfoId: jobInfoId
        }, void 0, false, {
            fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
async function SuspendedComponent({ jobInfoId }) {
    const { userId, redirectToSignIn, user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$lib$2f$getcurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])({
        allData: true
    });
    if (userId == null || user == null) return redirectToSignIn();
    //   if (!(await canCreateInterview())) return redirect("/app/upgrade")
    const jobInfo = await getJobInfo(jobInfoId, userId);
    if (jobInfo == null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hume$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAccessToken"])({
        apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverEnv"].HUME_API_KEY,
        secretKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverEnv"].HUME_SECRET_KEY
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VoiceProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2f$job$2d$infos$2f5b$jobInfoId$5d2f$interviews$2f$new$2f$_StartCall$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StartCall"], {
            jobInfo: jobInfo,
            user: user,
            accessToken: accessToken
        }, void 0, false, {
            fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
var $$RSC_SERVER_CACHE_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])("default", "e0016cf89e1c5dd194f0f2133193296f3bcb93634c", 0, async function getJobInfo(id, userId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheTag"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobinfos$2f$dbCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobInfoIdTag"])(id));
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].query.JobInfoTable.findFirst({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$job$2d$info$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobInfoTable"].id, id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$job$2d$info$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobInfoTable"].userId, userId))
    });
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_0, "e0016cf89e1c5dd194f0f2133193296f3bcb93634c", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_0, "name", {
    value: "getJobInfo",
    writable: false
});
var getJobInfo = $$RSC_SERVER_CACHE_0;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/app/job-infos/[jobInfoId]/interviews/new/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__231bfc07._.js.map