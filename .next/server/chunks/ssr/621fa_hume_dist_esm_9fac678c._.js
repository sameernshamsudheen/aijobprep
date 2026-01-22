module.exports = {

"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/checkForAudioTracks.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @name checkForAudioTracks
 * @description
 * Check if a MediaStream has audio tracks.
 * @param stream
 * The MediaStream to check
 */ __turbopack_context__.s({
    "checkForAudioTracks": ()=>checkForAudioTracks
});
const checkForAudioTracks = (stream)=>{
    const tracks = stream.getAudioTracks();
    if (tracks.length === 0) {
        throw new Error("No audio tracks");
    }
    if (tracks.length > 1) {
        throw new Error("Multiple audio tracks");
    }
    const track = tracks[0];
    if (!track) {
        throw new Error("No audio track");
    }
};
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/getBrowserSupportedMimeType.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Enum representing the supported MIME types for audio recording.
 */ __turbopack_context__.s({
    "MimeType": ()=>MimeType,
    "getBrowserSupportedMimeType": ()=>getBrowserSupportedMimeType
});
var MimeType;
(function(MimeType) {
    MimeType["WEBM"] = "audio/webm";
    MimeType["MP4"] = "audio/mp4";
    MimeType["WAV"] = "audio/wav";
})(MimeType || (MimeType = {}));
/**
 * Checks whether the `MediaRecorder` API is supported in the current environment.
 *
 * @returns {boolean} Returns `true` if the `MediaRecorder` API is supported, otherwise `false`.
 */ function isMediaRecorderSupported() {
    return typeof MediaRecorder !== "undefined";
}
/**
 * Finds and returns the first MIME type from the given array that is supported by the `MediaRecorder`.
 *
 * @param {MimeType[]} mimeTypes - An array of MIME types to check for compatibility.
 * @returns {MimeType | null} The first supported MIME type or `null` if none are supported.
 */ function getSupportedMimeType(mimeTypes) {
    return mimeTypes.find((type)=>MediaRecorder.isTypeSupported(type)) || null;
}
function getBrowserSupportedMimeType() {
    // Check if the MediaRecorder API is supported in the current environment.
    if (!isMediaRecorderSupported()) {
        return {
            success: false,
            error: new Error("MediaRecorder is not supported")
        };
    }
    const COMPATIBLE_MIME_TYPES = [
        MimeType.WEBM,
        MimeType.MP4,
        MimeType.WAV
    ];
    // Find the first compatible MIME type that the browser's MediaRecorder supports.
    const supportedMimeType = getSupportedMimeType(COMPATIBLE_MIME_TYPES);
    // If no compatible MIME type is found, return a failure result with an appropriate error message.
    if (!supportedMimeType) {
        return {
            success: false,
            error: new Error("Browser does not support any compatible mime types")
        };
    }
    // If a compatible MIME type is found, return a success result with the supported MIME type.
    return {
        success: true,
        mimeType: supportedMimeType
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/convertBase64ToBlob.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Converts a base64-encoded string into a `Blob` object with the specified content type.
 *
 * @param {string} base64 - The base64-encoded string representing binary data.
 * @param {string} contentType - The MIME type to assign to the resulting `Blob`.
 * @returns {Blob} A `Blob` object containing the binary data from the base64 string.
 */ __turbopack_context__.s({
    "convertBase64ToBlob": ()=>convertBase64ToBlob
});
function convertBase64ToBlob(base64, contentType) {
    // Decode base64 string to a binary string
    const binaryString = window.atob(base64);
    // Create a Uint8Array with the same length as the binary string
    const byteArray = new Uint8Array(binaryString.length);
    // Fill the Uint8Array by converting each character's Unicode value to a byte
    for(let i = 0; i < binaryString.length; i++){
        byteArray[i] = binaryString.charCodeAt(i);
    }
    // Create and return a Blob with the specified content type
    return new Blob([
        byteArray
    ], {
        type: contentType
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/batch/Job.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Job": ()=>Job
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$errors$2f$HumeTimeoutError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/errors/HumeTimeoutError.mjs [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
class Job {
    constructor(jobId, client){
        this.jobId = jobId;
        this.client = client;
    }
    awaitCompletion() {
        return __awaiter(this, arguments, void 0, function*(timeoutInSeconds = 300) {
            return new Promise((resolve, reject)=>{
                const poller = new JobCompletionPoller(this.jobId, this.client);
                poller.start(resolve);
                setTimeout(()=>{
                    poller.stop();
                    reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$errors$2f$HumeTimeoutError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HumeTimeoutError"]("Timeout exceeded when polling for job completion"));
                }, timeoutInSeconds * 1000);
            });
        });
    }
}
class JobCompletionPoller {
    constructor(jobId, client){
        this.jobId = jobId;
        this.client = client;
        this.isPolling = true;
    }
    start(onTerminal) {
        this.isPolling = true;
        this.poll(onTerminal);
    }
    stop() {
        this.isPolling = false;
    }
    poll(onTerminal) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const jobDetails = yield this.client.getJobDetails(this.jobId);
                if (jobDetails.state.status === "COMPLETED" || jobDetails.state.status === "FAILED") {
                    onTerminal();
                    this.stop();
                }
            } catch (_a) {
            // swallow errors while polling
            }
            if (this.isPolling) {
                setTimeout(()=>this.poll(onTerminal), 1000);
            }
        });
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/batch/BatchClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BatchClient": ()=>BatchClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$expressionMeasurement$2f$resources$2f$batch$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/api/resources/expressionMeasurement/resources/batch/client/Client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$batch$2f$Job$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/batch/Job.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$HttpResponsePromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/HttpResponsePromise.mjs [app-ssr] (ecmascript)");
;
;
;
;
class BatchClient extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$expressionMeasurement$2f$resources$2f$batch$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Batch"] {
    // This just wraps the return value of the base class's `startInferenceJob` and `startInferenceJobFromLocalFile` methods
    // and returns a `Job` instance (has helper functions to await the job's result) instead of a raw job ID.
    startInferenceJob(request = {}, requestOptions) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$HttpResponsePromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpResponsePromise"].fromPromise(super.startInferenceJob(request, requestOptions).withRawResponse().then((result)=>{
            return {
                data: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$batch$2f$Job$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Job"](result.data.jobId, this),
                rawResponse: result.rawResponse
            };
        }));
    }
    startInferenceJobFromLocalFile(request, requestOptions) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$HttpResponsePromise$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpResponsePromise"].fromPromise(super.startInferenceJobFromLocalFile(request, requestOptions).withRawResponse().then((result)=>{
            return {
                data: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$batch$2f$Job$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Job"](result.data.jobId, this),
                rawResponse: result.rawResponse
            };
        }));
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/base64Encode.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "base64Encode": ()=>base64Encode
});
function base64Encode(str) {
    if (typeof Buffer === "function") {
        // Node.js environment
        return Buffer.from(str).toString("base64");
    } else if (typeof btoa === "function") {
        // Browser environment
        return btoa(str);
    } else {
        throw new Error("Base64 encoding not supported in this environment.");
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/streaming/StreamSocket.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "StreamSocket": ()=>StreamSocket
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/ws/wrapper.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ws/wrapper.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$streaming$2f$StreamingClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/streaming/StreamingClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$base64Encode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/base64Encode.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$errors$2f$HumeError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/errors/HumeError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$serialization$2f$resources$2f$expressionMeasurement$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__expressionMeasurement$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/serialization/resources/expressionMeasurement/index.mjs [app-ssr] (ecmascript) <export * as expressionMeasurement>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
;
;
;
;
;
;
;
;
class StreamSocket {
    constructor({ websocket, config, streamWindowMs }){
        this.websocket = websocket;
        this.config = config;
        this.streamWindowMs = streamWindowMs;
    }
    /**
     * Send file on the `StreamSocket`
     *
     * @param file A fs.ReadStream | File | Blob
     * @param config This method is intended for use with a `LanguageConfig`.
     * When the socket is configured for other modalities this method will fail.
     */ sendFile(_a) {
        return __awaiter(this, arguments, void 0, function*({ file, config }) {
            var _b, file_1, file_1_1;
            var _c, e_1, _d, _e;
            if (config != null) {
                this.config = config;
            }
            let contents = "";
            if (file instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["ReadStream"]) {
                const chunks = [];
                try {
                    for(_b = true, file_1 = __asyncValues(file); file_1_1 = yield file_1.next(), _c = file_1_1.done, !_c; _b = true){
                        _e = file_1_1.value;
                        _b = false;
                        const chunk = _e;
                        chunks.push(Buffer.from(chunk));
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (!_b && !_c && (_d = file_1.return)) yield _d.call(file_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
                contents = Buffer.concat(chunks).toString("base64");
            } else if (file instanceof Blob) {
                const toBase64 = (file)=>new Promise((res)=>{
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = ()=>res(reader.result);
                    });
                contents = yield toBase64(file);
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$errors$2f$HumeError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HumeError"]({
                    message: `file must be one of ReadStream or Blob.`
                });
            }
            const request = {
                payloadId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                data: contents,
                models: this.config,
                rawText: false
            };
            if (this.streamWindowMs != null) {
                request.streamWindowMs = this.streamWindowMs;
            }
            const response = yield this.send(request);
            if (response == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$errors$2f$HumeError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HumeError"]({
                    message: `Received no response after sending file: ${file}`
                });
            }
            return response;
        });
    }
    /**
     * Send text on the `StreamSocket`
     *
     * @param text Text to send to the language model.
     * @param config This method is intended for use with a `LanguageConfig`.
     * When the socket is configured for other modalities this method will fail.
     */ sendText(_a) {
        return __awaiter(this, arguments, void 0, function*({ text, config }) {
            if (config != null) {
                this.config = config;
            }
            const request = {
                payloadId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                data: text,
                rawText: true,
                models: this.config
            };
            if (this.streamWindowMs != null) {
                request.streamWindowMs = this.streamWindowMs;
            }
            const response = yield this.send(request);
            if (response == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$errors$2f$HumeError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HumeError"]({
                    message: `Received no response after sending text: ${text}`
                });
            }
            return response;
        });
    }
    /**
     * Send facemesh landmarks on the `StreamSocket`
     *
     * @param landmarks List of landmark points for multiple faces.
     * The shape of this 3-dimensional list should be (n, 478, 3) where n is the number
     * of faces to be processed, 478 is the number of MediaPipe landmarks per face and 3
     * represents the (x, y, z) coordinates of each landmark.
     * @param config List of model configurations.
     * If set these configurations will overwrite existing configurations
     */ sendFacemesh(_a) {
        return __awaiter(this, arguments, void 0, function*({ landmarks, config }) {
            const response = this.sendText({
                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$base64Encode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base64Encode"])(JSON.stringify(landmarks)),
                config
            });
            return response;
        });
    }
    /**
     *
     * Reset the streaming sliding window.
     *
     * Call this method when some media has been fully processed and you want to continue using the same
     * streaming connection without leaking context across media samples.
     */ reset() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.send({
                resetStream: true
            });
        });
    }
    /**
     *
     * Get details associated with the current streaming connection.
     *
     */ getJobDetails() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.send({
                jobDetails: true
            });
        });
    }
    /**
     * Closes the underlying socket.
     */ close() {
        this.websocket.close();
    }
    send(payload) {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.tillSocketOpen();
            const jsonPayload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$serialization$2f$resources$2f$expressionMeasurement$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__expressionMeasurement$3e$__["expressionMeasurement"].stream.StreamModelsEndpointPayload.jsonOrThrow(payload, {
                unrecognizedObjectKeys: "strip"
            });
            this.websocket.send(JSON.stringify(jsonPayload));
            const response = yield new Promise((resolve)=>{
                this.websocket.addEventListener("message", (event)=>{
                    const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$streaming$2f$StreamingClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(event.data);
                    resolve(response);
                });
            });
            if (response != null && isError(response)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$errors$2f$HumeError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HumeError"]({
                    message: `CODE ${response.code}: ${response.error}`
                });
            }
            return response;
        });
    }
    tillSocketOpen() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.websocket.readyState === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].OPEN) {
                return this.websocket;
            }
            return new Promise((resolve, reject)=>{
                this.websocket.addEventListener("open", ()=>{
                    resolve(this.websocket);
                });
                this.websocket.addEventListener("error", (event)=>{
                    reject(event);
                });
            });
        });
    }
}
function isError(response) {
    return response.error != null;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/streaming/StreamingClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "StreamClient": ()=>StreamClient,
    "parse": ()=>parse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$serialization$2f$resources$2f$expressionMeasurement$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__expressionMeasurement$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/serialization/resources/expressionMeasurement/index.mjs [app-ssr] (ecmascript) <export * as expressionMeasurement>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$streaming$2f$StreamSocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/streaming/StreamSocket.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/ws/wrapper.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ws/wrapper.mjs [app-ssr] (ecmascript) <locals>");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
;
class StreamClient {
    constructor(_options){
        this._options = _options;
    }
    connect(args) {
        const websocket = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](`wss://api.hume.ai/v0/stream/models`, {
            headers: {
                "X-Hume-Api-Key": typeof this._options.apiKey === "string" ? this._options.apiKey : ""
            },
            timeout: 10
        });
        websocket.addEventListener("open", (event)=>{
            var _a;
            (_a = args.onOpen) === null || _a === void 0 ? void 0 : _a.call(args, event);
        });
        websocket.addEventListener("error", (e)=>{
            var _a;
            (_a = args.onError) === null || _a === void 0 ? void 0 : _a.call(args, {
                code: e.type,
                error: e.message
            });
        });
        websocket.addEventListener("message", (_a)=>__awaiter(this, [
                _a
            ], void 0, function*({ data }) {
                parse(data, {
                    onMessage: args.onMessage,
                    onError: args.onError
                });
            }));
        websocket.addEventListener("close", (event)=>{
            var _a;
            (_a = args.onClose) === null || _a === void 0 ? void 0 : _a.call(args, event);
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$streaming$2f$StreamSocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StreamSocket"]({
            websocket,
            streamWindowMs: args.streamWindowMs,
            config: args.config
        });
    }
}
function parse(data, args = {}) {
    var _a, _b;
    const message = JSON.parse(data);
    const parsedResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$serialization$2f$resources$2f$expressionMeasurement$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__expressionMeasurement$3e$__["expressionMeasurement"].stream.Config.parse(message, {
        unrecognizedObjectKeys: "passthrough",
        allowUnrecognizedUnionMembers: true,
        allowUnrecognizedEnumValues: true,
        breadcrumbsPrefix: [
            "response"
        ]
    });
    if (parsedResponse.ok) {
        (_a = args.onMessage) === null || _a === void 0 ? void 0 : _a.call(args, parsedResponse.value);
        return parsedResponse.value;
    }
    const parsedError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$serialization$2f$resources$2f$expressionMeasurement$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__expressionMeasurement$3e$__["expressionMeasurement"].stream.StreamErrorMessage.parse(message, {
        unrecognizedObjectKeys: "passthrough",
        allowUnrecognizedUnionMembers: true,
        allowUnrecognizedEnumValues: true,
        breadcrumbsPrefix: [
            "response"
        ]
    });
    if (parsedError.ok) {
        (_b = args.onError) === null || _b === void 0 ? void 0 : _b.call(args, parsedError.value);
        return parsedError.value;
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/ExpressionMeasurementClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ExpressionMeasurement": ()=>ExpressionMeasurement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$expressionMeasurement$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/api/resources/expressionMeasurement/client/Client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$batch$2f$BatchClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/batch/BatchClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$streaming$2f$StreamingClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/streaming/StreamingClient.mjs [app-ssr] (ecmascript)");
;
;
;
class ExpressionMeasurement extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$expressionMeasurement$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExpressionMeasurement"] {
    // BatchClient here is overridden from the generated version, we wrap expression measurement jobs in
    // a helper that makes it easier to await the result of a job.
    get batch() {
        var _a;
        return (_a = this._batch) !== null && _a !== void 0 ? _a : this._batch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$batch$2f$BatchClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BatchClient"](this._options);
    }
    get stream() {
        var _a;
        return (_a = this._stream) !== null && _a !== void 0 ? _a : this._stream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$streaming$2f$StreamingClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StreamClient"](this._options);
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/HumeClient.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HumeClient": ()=>HumeClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/Client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$Supplier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/Supplier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$ExpressionMeasurementClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/wrapper/expressionMeasurement/ExpressionMeasurementClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$version$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/version.mjs [app-ssr] (ecmascript)");
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
class HumeClient extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HumeClient"] {
    constructor(_options){
        var _a;
        let options;
        let oldEnvironment;
        _a = _options || {}, ({ environment: oldEnvironment } = _a), options = __rest(_a, [
            "environment"
        ]);
        // Check if both accessToken and Authorization header are provided (case-insensitive)
        if (_options.accessToken && _options.headers) {
            const hasAuthHeader = Object.keys(_options.headers).some((key)=>key.toLowerCase() === "authorization");
            if (hasAuthHeader) {
                throw new Error("Cannot provide both 'accessToken' and 'headers.Authorization'. Please use only one.");
            }
        }
        if (_options.accessToken) {
            options.headers = Object.assign(Object.assign({}, options.headers), {
                Authorization: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$Supplier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Supplier"].map(_options.accessToken, (token)=>`Bearer ${token}`)
            });
        }
        // Add telemetry headers
        options.headers = Object.assign(Object.assign({}, options.headers), {
            "X-Hume-Client-Name": "typescript_sdk",
            "X-Hume-Client-Version": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$version$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SDK_VERSION"]
        });
        // Allow setting a single url http://... or https://... for environment'
        if (oldEnvironment) {
            const environment = _options.environment ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$Supplier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Supplier"].map(_options.environment, (e)=>{
                if (typeof e === "string") {
                    if (e.startsWith("http://")) {
                        return {
                            base: e,
                            evi: e.replace("http://", "ws://") + "/v0/evi",
                            tts: e.replace("http://", "ws://") + "/v0/tts",
                            stream: e.replace("http://", "ws://") + "/v0/stream"
                        };
                    }
                    if (e.startsWith("https://")) {
                        return {
                            base: e,
                            evi: e.replace("https://", "wss://") + "/v0/evi",
                            tts: e.replace("https://", "wss://") + "/v0/tts",
                            stream: e.replace("https://", "wss://") + "/v0/stream"
                        };
                    }
                    return {
                        base: "https://" + e,
                        evi: "wss://" + e + "/v0/evi",
                        tts: "wss://" + e + "/v0/tts",
                        stream: "wss://" + e + "/v0/stream"
                    };
                } else {
                    return e;
                }
            }) : undefined;
            options.environment = environment;
        }
        super(options);
    }
    get expressionMeasurement() {
        var _a;
        return (_a = this._expressionMeasurement) !== null && _a !== void 0 ? _a : this._expressionMeasurement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$wrapper$2f$expressionMeasurement$2f$ExpressionMeasurementClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExpressionMeasurement"](this._options);
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/errors/HumeError.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// This file was auto-generated by Fern from our API Definition.
__turbopack_context__.s({
    "HumeError": ()=>HumeError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/json.mjs [app-ssr] (ecmascript)");
;
class HumeError extends Error {
    constructor({ message, statusCode, body, rawResponse }){
        super(buildMessage({
            message,
            statusCode,
            body
        }));
        Object.setPrototypeOf(this, HumeError.prototype);
        this.statusCode = statusCode;
        this.body = body;
        this.rawResponse = rawResponse;
    }
}
function buildMessage({ message, statusCode, body }) {
    const lines = [];
    if (message != null) {
        lines.push(message);
    }
    if (statusCode != null) {
        lines.push(`Status code: ${statusCode.toString()}`);
    }
    if (body != null) {
        lines.push(`Body: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJson"])(body, undefined, 2)}`);
    }
    return lines.join("\n");
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/errors/HumeTimeoutError.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// This file was auto-generated by Fern from our API Definition.
__turbopack_context__.s({
    "HumeTimeoutError": ()=>HumeTimeoutError
});
class HumeTimeoutError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, HumeTimeoutError.prototype);
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/version.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SDK_VERSION": ()=>SDK_VERSION
});
const SDK_VERSION = "0.15.9";
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/environments.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// This file was auto-generated by Fern from our API Definition.
__turbopack_context__.s({
    "HumeEnvironment": ()=>HumeEnvironment
});
const HumeEnvironment = {
    Prod: {
        base: "https://api.hume.ai",
        evi: "wss://api.hume.ai/v0/evi",
        tts: "wss://api.hume.ai/v0/tts",
        stream: "wss://api.hume.ai/v0/stream"
    }
};
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/Client.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// This file was auto-generated by Fern from our API Definition.
__turbopack_context__.s({
    "HumeClient": ()=>HumeClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$empathicVoice$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/api/resources/empathicVoice/client/Client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$expressionMeasurement$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/api/resources/expressionMeasurement/client/Client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$tts$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/api/resources/tts/client/Client.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$headers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/headers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__logging$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <export * as logging>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/runtime/runtime.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
class HumeClient {
    constructor(_options = {}){
        this._options = Object.assign(Object.assign({}, _options), {
            logging: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__logging$3e$__["logging"].createLogger(_options === null || _options === void 0 ? void 0 : _options.logging),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$headers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeHeaders"])({
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.15.9",
                "User-Agent": "hume/0.15.9",
                "X-Fern-Runtime": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RUNTIME"].type,
                "X-Fern-Runtime-Version": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RUNTIME"].version
            }, _options === null || _options === void 0 ? void 0 : _options.headers)
        });
    }
    get empathicVoice() {
        var _a;
        return (_a = this._empathicVoice) !== null && _a !== void 0 ? _a : this._empathicVoice = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$empathicVoice$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmpathicVoice"](this._options);
    }
    get tts() {
        var _a;
        return (_a = this._tts) !== null && _a !== void 0 ? _a : this._tts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$tts$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tts"](this._options);
    }
    get expressionMeasurement() {
        var _a;
        return (_a = this._expressionMeasurement) !== null && _a !== void 0 ? _a : this._expressionMeasurement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$api$2f$resources$2f$expressionMeasurement$2f$client$2f$Client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExpressionMeasurement"](this._options);
    }
}
}),

};

//# sourceMappingURL=621fa_hume_dist_esm_9fac678c._.js.map