module.exports = {

"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/json.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Serialize a value to JSON
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @returns JSON string
 */ __turbopack_context__.s({
    "fromJson": ()=>fromJson,
    "toJson": ()=>toJson
});
const toJson = (value, replacer, space)=>{
    return JSON.stringify(value, replacer, space);
};
function fromJson(text, reviver) {
    return JSON.parse(text, reviver);
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/runtime/runtime.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * A constant that indicates which environment and version the SDK is running in.
 */ __turbopack_context__.s({
    "RUNTIME": ()=>RUNTIME
});
const RUNTIME = evaluateRuntime();
function evaluateRuntime() {
    var _a, _b, _c, _d, _e;
    /**
     * A constant that indicates whether the environment the code is running is a Web Browser.
     */ const isBrowser = "undefined" !== "undefined" && typeof window.document !== "undefined";
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    /**
     * A constant that indicates whether the environment the code is running is Cloudflare.
     * https://developers.cloudflare.com/workers/runtime-apis/web-standards/#navigatoruseragent
     */ const isCloudflare = typeof globalThis !== "undefined" && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === "Cloudflare-Workers";
    if (isCloudflare) {
        return {
            type: "workerd"
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Edge Runtime.
     * https://vercel.com/docs/functions/runtimes/edge-runtime#check-if-you're-running-on-the-edge-runtime
     */ const isEdgeRuntime = typeof EdgeRuntime === "string";
    if (isEdgeRuntime) {
        return {
            type: "edge-runtime"
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is a Web Worker.
     */ const isWebWorker = typeof self === "object" && typeof (self === null || self === void 0 ? void 0 : self.importScripts) === "function" && (((_b = self.constructor) === null || _b === void 0 ? void 0 : _b.name) === "DedicatedWorkerGlobalScope" || ((_c = self.constructor) === null || _c === void 0 ? void 0 : _c.name) === "ServiceWorkerGlobalScope" || ((_d = self.constructor) === null || _d === void 0 ? void 0 : _d.name) === "SharedWorkerGlobalScope");
    if (isWebWorker) {
        return {
            type: "web-worker"
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Deno.
     * FYI Deno spoofs process.versions.node, see https://deno.land/std@0.177.0/node/process.ts?s=versions
     */ const isDeno = typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";
    if (isDeno) {
        return {
            type: "deno",
            version: Deno.version.deno
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Bun.sh.
     */ const isBun = typeof Bun !== "undefined" && typeof Bun.version !== "undefined";
    if (isBun) {
        return {
            type: "bun",
            version: Bun.version
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is Node.JS.
     */ const isNode = typeof process !== "undefined" && "version" in process && !!process.version && "versions" in process && !!((_e = process.versions) === null || _e === void 0 ? void 0 : _e.node);
    if (isNode) {
        return {
            type: "node",
            version: process.versions.node,
            parsedVersion: Number(process.versions.node.split(".")[0])
        };
    }
    /**
     * A constant that indicates whether the environment the code is running is in React-Native.
     * https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Core/setUpNavigator.js
     */ const isReactNative = typeof navigator !== "undefined" && (navigator === null || navigator === void 0 ? void 0 : navigator.product) === "ReactNative";
    if (isReactNative) {
        return {
            type: "react-native"
        };
    }
    return {
        type: "unknown"
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/qs.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toQueryString": ()=>toQueryString
});
const defaultQsOptions = {
    arrayFormat: "indices",
    encode: true
};
function encodeValue(value, shouldEncode) {
    if (value === undefined) {
        return "";
    }
    if (value === null) {
        return "";
    }
    const stringValue = String(value);
    return shouldEncode ? encodeURIComponent(stringValue) : stringValue;
}
function stringifyObject(obj, prefix = "", options) {
    const parts = [];
    for (const [key, value] of Object.entries(obj)){
        const fullKey = prefix ? `${prefix}[${key}]` : key;
        if (value === undefined) {
            continue;
        }
        if (Array.isArray(value)) {
            if (value.length === 0) {
                continue;
            }
            for(let i = 0; i < value.length; i++){
                const item = value[i];
                if (item === undefined) {
                    continue;
                }
                if (typeof item === "object" && !Array.isArray(item) && item !== null) {
                    const arrayKey = options.arrayFormat === "indices" ? `${fullKey}[${i}]` : fullKey;
                    parts.push(...stringifyObject(item, arrayKey, options));
                } else {
                    const arrayKey = options.arrayFormat === "indices" ? `${fullKey}[${i}]` : fullKey;
                    const encodedKey = options.encode ? encodeURIComponent(arrayKey) : arrayKey;
                    parts.push(`${encodedKey}=${encodeValue(item, options.encode)}`);
                }
            }
        } else if (typeof value === "object" && value !== null) {
            if (Object.keys(value).length === 0) {
                continue;
            }
            parts.push(...stringifyObject(value, fullKey, options));
        } else {
            const encodedKey = options.encode ? encodeURIComponent(fullKey) : fullKey;
            parts.push(`${encodedKey}=${encodeValue(value, options.encode)}`);
        }
    }
    return parts;
}
function toQueryString(obj, options) {
    if (obj == null || typeof obj !== "object") {
        return "";
    }
    const parts = stringifyObject(obj, "", Object.assign(Object.assign({}, defaultQsOptions), options));
    return parts.join("&");
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/websocket/events.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CloseEvent": ()=>CloseEvent,
    "ErrorEvent": ()=>ErrorEvent,
    "Event": ()=>Event
});
class Event {
    constructor(type, target){
        this.target = target;
        this.type = type;
    }
}
class ErrorEvent extends Event {
    constructor(error, target){
        super("error", target);
        this.message = error.message;
        this.error = error;
    }
}
class CloseEvent extends Event {
    constructor(code = 1000, reason = "", target){
        super("close", target);
        this.wasClean = true;
        this.code = code;
        this.reason = reason;
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/websocket/ws.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ReconnectingWebSocket": ()=>ReconnectingWebSocket
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/ws/wrapper.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$websocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WebSocket$3e$__ = __turbopack_context__.i("[project]/node_modules/ws/lib/websocket.js [app-ssr] (ecmascript) <export default as WebSocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/runtime/runtime.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$qs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/qs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$websocket$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/websocket/events.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$version$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/version.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const getGlobalWebSocket = ()=>{
    if (typeof WebSocket !== "undefined") {
        // @ts-ignore
        return WebSocket;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RUNTIME"].type === "node") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ws$2f$lib$2f$websocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WebSocket$3e$__["WebSocket"];
    }
    return undefined;
};
/**
 * Returns true if given argument looks like a WebSocket class
 */ const isWebSocket = (w)=>typeof w !== "undefined" && !!w && w.CLOSING === 2;
const DEFAULT_OPTIONS = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false
};
function addApiKeyFromHeader({ headers, queryParameters }) {
    var _a;
    const apiKeyValue = (_a = Object.entries(headers !== null && headers !== void 0 ? headers : {}).find(([k])=>k.toLowerCase() === "x-hume-api-key")) === null || _a === void 0 ? void 0 : _a[1];
    if (apiKeyValue && !(queryParameters === null || queryParameters === void 0 ? void 0 : queryParameters["api_key"])) {
        return Object.assign(Object.assign({}, queryParameters), {
            api_key: apiKeyValue
        });
    }
    return queryParameters;
}
function addAccessTokenFromHeader({ headers, queryParameters }) {
    const authHeaderValue = (headers === null || headers === void 0 ? void 0 : headers["Authorization"]) || (headers === null || headers === void 0 ? void 0 : headers["authorization"]);
    if (!authHeaderValue) {
        return queryParameters;
    }
    if (!authHeaderValue.startsWith("Bearer ")) {
        return queryParameters;
    }
    if (queryParameters === null || queryParameters === void 0 ? void 0 : queryParameters["access_token"]) {
        return queryParameters;
    }
    const token = authHeaderValue.substring("Bearer ".length);
    return Object.assign(Object.assign({}, queryParameters), {
        access_token: token
    });
}
function addSdkTracking(queryParameters) {
    return Object.assign(Object.assign({}, queryParameters), {
        fernSdkLanguage: "JavaScript",
        fernSdkVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$version$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SDK_VERSION"]
    });
}
class ReconnectingWebSocket {
    constructor({ url, protocols, options, headers, queryParameters }){
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: []
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = "blob";
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */ this.onclose = null;
        /**
         * An event listener to be called when an error occurs
         */ this.onerror = null;
        /**
         * An event listener to be called when a message is received from the server
         */ this.onmessage = null;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */ this.onopen = null;
        this._handleOpen = (event)=>{
            this._debug("open event");
            const { minUptime = DEFAULT_OPTIONS.minUptime } = this._options;
            clearTimeout(this._connectTimeout);
            this._uptimeTimeout = setTimeout(()=>this._acceptOpen(), minUptime);
            this._ws.binaryType = this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            this._messageQueue.forEach((message)=>{
                var _a;
                return (_a = this._ws) === null || _a === void 0 ? void 0 : _a.send(message);
            });
            this._messageQueue = [];
            if (this.onopen) {
                this.onopen(event);
            }
            this._listeners.open.forEach((listener)=>this._callEventListener(event, listener));
        };
        this._handleMessage = (event)=>{
            this._debug("message event");
            if (this.onmessage) {
                this.onmessage(event);
            }
            this._listeners.message.forEach((listener)=>this._callEventListener(event, listener));
        };
        this._handleError = (event)=>{
            this._debug("error event", event.message);
            this._disconnect(undefined, event.message === "TIMEOUT" ? "timeout" : undefined);
            if (this.onerror) {
                this.onerror(event);
            }
            this._debug("exec error listeners");
            this._listeners.error.forEach((listener)=>this._callEventListener(event, listener));
            this._connect();
        };
        this._handleClose = (event)=>{
            this._debug("close event");
            this._clearTimeouts();
            if (event.code === 1000) {
                this._shouldReconnect = false;
            }
            if (this._shouldReconnect) {
                this._connect();
            }
            if (this.onclose) {
                this.onclose(event);
            }
            this._listeners.close.forEach((listener)=>this._callEventListener(event, listener));
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options !== null && options !== void 0 ? options : DEFAULT_OPTIONS;
        this._headers = headers;
        this._queryParameters = addSdkTracking(addAccessTokenFromHeader({
            headers,
            queryParameters: addApiKeyFromHeader({
                headers,
                queryParameters
            })
        }));
        if (this._options.startClosed) {
            this._shouldReconnect = false;
        }
        this._connect();
    }
    static get CONNECTING() {
        return 0;
    }
    static get OPEN() {
        return 1;
    }
    static get CLOSING() {
        return 2;
    }
    static get CLOSED() {
        return 3;
    }
    get CONNECTING() {
        return ReconnectingWebSocket.CONNECTING;
    }
    get OPEN() {
        return ReconnectingWebSocket.OPEN;
    }
    get CLOSING() {
        return ReconnectingWebSocket.CLOSING;
    }
    get CLOSED() {
        return ReconnectingWebSocket.CLOSED;
    }
    get binaryType() {
        return this._ws ? this._ws.binaryType : this._binaryType;
    }
    set binaryType(value) {
        this._binaryType = value;
        if (this._ws) {
            this._ws.binaryType = value;
        }
    }
    /**
     * Returns the number or connection retries
     */ get retryCount() {
        return Math.max(this._retryCount, 0);
    }
    /**
     * The number of bytes of data that have been queued using calls to send() but not yet
     * transmitted to the network. This value resets to zero once all queued data has been sent.
     * This value does not reset to zero when the connection is closed; if you keep calling send(),
     * this will continue to climb. Read only
     */ get bufferedAmount() {
        const bytes = this._messageQueue.reduce((acc, message)=>{
            if (typeof message === "string") {
                acc += message.length; // not byte size
            } else if (message instanceof Blob) {
                acc += message.size;
            } else {
                acc += message.byteLength;
            }
            return acc;
        }, 0);
        return bytes + (this._ws ? this._ws.bufferedAmount : 0);
    }
    /**
     * The extensions selected by the server. This is currently only the empty string or a list of
     * extensions as negotiated by the connection
     */ get extensions() {
        return this._ws ? this._ws.extensions : "";
    }
    /**
     * A string indicating the name of the sub-protocol the server selected;
     * this will be one of the strings specified in the protocols parameter when creating the
     * WebSocket object
     */ get protocol() {
        return this._ws ? this._ws.protocol : "";
    }
    /**
     * The current state of the connection; this is one of the Ready state constants
     */ get readyState() {
        if (this._ws) {
            return this._ws.readyState;
        }
        return this._options.startClosed ? ReconnectingWebSocket.CLOSED : ReconnectingWebSocket.CONNECTING;
    }
    /**
     * The URL as resolved by the constructor
     */ get url() {
        return this._ws ? this._ws.url : "";
    }
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */ close(code = 1000, reason) {
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug("close enqueued: no ws instance");
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug("close: already closed");
            return;
        }
        this._ws.close(code, reason);
    }
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */ reconnect(code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        } else {
            this._disconnect(code, reason);
            this._connect();
        }
    }
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */ send(data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug("send", data);
            this._ws.send(data);
        } else {
            const { maxEnqueuedMessages = DEFAULT_OPTIONS.maxEnqueuedMessages } = this._options;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug("enqueue", data);
                this._messageQueue.push(data);
            }
        }
    }
    /**
     * Register an event handler of a specific event type
     */ addEventListener(type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    }
    dispatchEvent(event) {
        const listeners = this._listeners[event.type];
        if (listeners) {
            for (const listener of listeners){
                this._callEventListener(event, listener);
            }
        }
        return true;
    }
    /**
     * Removes an event listener
     */ removeEventListener(type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(// @ts-ignore
            (l)=>l !== listener);
        }
    }
    _debug(...args) {
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            // biome-ignore lint/suspicious/noConsole: allow console
            console.log.apply(console, [
                "RWS>",
                ...args
            ]);
        }
    }
    _getNextDelay() {
        const { reconnectionDelayGrowFactor = DEFAULT_OPTIONS.reconnectionDelayGrowFactor, minReconnectionDelay = DEFAULT_OPTIONS.minReconnectionDelay, maxReconnectionDelay = DEFAULT_OPTIONS.maxReconnectionDelay } = this._options;
        let delay = 0;
        if (this._retryCount > 0) {
            delay = minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug("next delay", delay);
        return delay;
    }
    _wait() {
        return new Promise((resolve)=>{
            setTimeout(resolve, this._getNextDelay());
        });
    }
    _getNextUrl(urlProvider) {
        if (typeof urlProvider === "string") {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === "function") {
            const url = urlProvider();
            if (typeof url === "string") {
                return Promise.resolve(url);
            }
            // @ts-ignore redundant check
            if (url.then) {
                return url;
            }
        }
        throw Error("Invalid URL");
    }
    _connect() {
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        const { maxRetries = DEFAULT_OPTIONS.maxRetries, connectionTimeout = DEFAULT_OPTIONS.connectionTimeout, WebSocket: WebSocket1 = getGlobalWebSocket() } = this._options;
        if (this._retryCount >= maxRetries) {
            this._debug("max retries reached", this._retryCount, ">=", maxRetries);
            return;
        }
        this._retryCount++;
        this._debug("connect", this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket1)) {
            throw Error("No valid WebSocket class provided");
        }
        this._wait().then(()=>this._getNextUrl(this._url)).then((url)=>{
            if (this._closeCalled) {
                return;
            }
            const options = {};
            if (this._headers) {
                options.headers = this._headers;
            }
            if (this._queryParameters && Object.keys(this._queryParameters).length > 0) {
                const queryString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$qs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryString"])(this._queryParameters, {
                    arrayFormat: "repeat"
                });
                if (queryString) {
                    url = `${url}?${queryString}`;
                }
            }
            this._ws = new WebSocket1(url, this._protocols, options);
            this._ws.binaryType = this._binaryType;
            this._connectLock = false;
            this._addListeners();
            this._connectTimeout = setTimeout(()=>this._handleTimeout(), connectionTimeout);
        });
    }
    _handleTimeout() {
        this._debug("timeout event");
        this._handleError(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$websocket$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorEvent"](Error("TIMEOUT"), this));
    }
    _disconnect(code = 1000, reason) {
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$websocket$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseEvent"](code, reason, this));
        } catch (error) {
        // ignore
        }
    }
    _acceptOpen() {
        this._debug("accept open");
        this._retryCount = 0;
    }
    _callEventListener(event, listener) {
        if ("handleEvent" in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        } else {
            // @ts-ignore
            listener(event);
        }
    }
    _removeListeners() {
        if (!this._ws) {
            return;
        }
        this._debug("removeListeners");
        this._ws.removeEventListener("open", this._handleOpen);
        this._ws.removeEventListener("close", this._handleClose);
        this._ws.removeEventListener("message", this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener("error", this._handleError);
    }
    _addListeners() {
        if (!this._ws) {
            return;
        }
        this._debug("addListeners");
        this._ws.addEventListener("open", this._handleOpen);
        this._ws.addEventListener("close", this._handleClose);
        this._ws.addEventListener("message", this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener("error", this._handleError);
    }
    _clearTimeouts() {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
;
;
;
;
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SchemaType": ()=>SchemaType
});
const SchemaType = {
    BIGINT: "bigint",
    DATE: "date",
    ENUM: "enum",
    LIST: "list",
    STRING_LITERAL: "stringLiteral",
    BOOLEAN_LITERAL: "booleanLiteral",
    OBJECT: "object",
    ANY: "any",
    BOOLEAN: "boolean",
    NUMBER: "number",
    STRING: "string",
    UNKNOWN: "unknown",
    RECORD: "record",
    SET: "set",
    UNION: "union",
    UNDISCRIMINATED_UNION: "undiscriminatedUnion",
    NULLABLE: "nullable",
    OPTIONAL: "optional",
    OPTIONAL_NULLABLE: "optionalNullable"
};
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getErrorMessageForIncorrectType": ()=>getErrorMessageForIncorrectType
});
function getErrorMessageForIncorrectType(value, expectedType) {
    return `Expected ${expectedType}. Received ${getTypeAsString(value)}.`;
}
function getTypeAsString(value) {
    if (Array.isArray(value)) {
        return "list";
    }
    if (value === null) {
        return "null";
    }
    if (value instanceof BigInt) {
        return "BigInt";
    }
    switch(typeof value){
        case "string":
            return `"${value}"`;
        case "bigint":
        case "number":
        case "boolean":
        case "undefined":
            return `${value}`;
    }
    return typeof value;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "maybeSkipValidation": ()=>maybeSkipValidation
});
function maybeSkipValidation(schema) {
    return Object.assign(Object.assign({}, schema), {
        json: transformAndMaybeSkipValidation(schema.json),
        parse: transformAndMaybeSkipValidation(schema.parse)
    });
}
function transformAndMaybeSkipValidation(transform) {
    return (value, opts)=>{
        const transformed = transform(value, opts);
        const { skipValidation = false } = opts !== null && opts !== void 0 ? opts : {};
        if (!transformed.ok && skipValidation) {
            // biome-ignore lint/suspicious/noConsole: allow console
            console.warn([
                "Failed to validate.",
                ...transformed.errors.map((error)=>"  - " + (error.path.length > 0 ? `${error.path.join(".")}: ${error.message}` : error.message))
            ].join("\n"));
            return {
                ok: true,
                value: value
            };
        } else {
            return transformed;
        }
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/stringifyValidationErrors.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "stringifyValidationError": ()=>stringifyValidationError
});
function stringifyValidationError(error) {
    if (error.path.length === 0) {
        return error.message;
    }
    return `${error.path.join(" -> ")}: ${error.message}`;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/JsonError.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JsonError": ()=>JsonError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$stringifyValidationErrors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/stringifyValidationErrors.mjs [app-ssr] (ecmascript)");
;
class JsonError extends Error {
    constructor(errors){
        super(errors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$stringifyValidationErrors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyValidationError"]).join("; "));
        this.errors = errors;
        Object.setPrototypeOf(this, JsonError.prototype);
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/ParseError.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ParseError": ()=>ParseError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$stringifyValidationErrors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/stringifyValidationErrors.mjs [app-ssr] (ecmascript)");
;
class ParseError extends Error {
    constructor(errors){
        super(errors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$stringifyValidationErrors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyValidationError"]).join("; "));
        this.errors = errors;
        Object.setPrototypeOf(this, ParseError.prototype);
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getSchemaUtils": ()=>getSchemaUtils,
    "nullable": ()=>nullable,
    "optional": ()=>optional,
    "optionalNullable": ()=>optionalNullable,
    "transform": ()=>transform
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$JsonError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/JsonError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$ParseError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/ParseError.mjs [app-ssr] (ecmascript)");
;
;
;
function getSchemaUtils(schema) {
    return {
        nullable: ()=>nullable(schema),
        optional: ()=>optional(schema),
        optionalNullable: ()=>optionalNullable(schema),
        transform: (transformer)=>transform(schema, transformer),
        parseOrThrow: (raw, opts)=>{
            const parsed = schema.parse(raw, opts);
            if (parsed.ok) {
                return parsed.value;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$ParseError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseError"](parsed.errors);
        },
        jsonOrThrow: (parsed, opts)=>{
            const raw = schema.json(parsed, opts);
            if (raw.ok) {
                return raw.value;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$JsonError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonError"](raw.errors);
        }
    };
}
function nullable(schema) {
    const baseSchema = {
        parse: (raw, opts)=>{
            if (raw == null) {
                return {
                    ok: true,
                    value: null
                };
            }
            return schema.parse(raw, opts);
        },
        json: (parsed, opts)=>{
            if (parsed == null) {
                return {
                    ok: true,
                    value: null
                };
            }
            return schema.json(parsed, opts);
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].NULLABLE
    };
    return Object.assign(Object.assign({}, baseSchema), getSchemaUtils(baseSchema));
}
function optional(schema) {
    const baseSchema = {
        parse: (raw, opts)=>{
            if (raw == null) {
                return {
                    ok: true,
                    value: undefined
                };
            }
            return schema.parse(raw, opts);
        },
        json: (parsed, opts)=>{
            if ((opts === null || opts === void 0 ? void 0 : opts.omitUndefined) && parsed === undefined) {
                return {
                    ok: true,
                    value: undefined
                };
            }
            if (parsed == null) {
                return {
                    ok: true,
                    value: null
                };
            }
            return schema.json(parsed, opts);
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].OPTIONAL
    };
    return Object.assign(Object.assign({}, baseSchema), getSchemaUtils(baseSchema));
}
function optionalNullable(schema) {
    const baseSchema = {
        parse: (raw, opts)=>{
            if (raw === undefined) {
                return {
                    ok: true,
                    value: undefined
                };
            }
            if (raw === null) {
                return {
                    ok: true,
                    value: null
                };
            }
            return schema.parse(raw, opts);
        },
        json: (parsed, opts)=>{
            if (parsed === undefined) {
                return {
                    ok: true,
                    value: undefined
                };
            }
            if (parsed === null) {
                return {
                    ok: true,
                    value: null
                };
            }
            return schema.json(parsed, opts);
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].OPTIONAL_NULLABLE
    };
    return Object.assign(Object.assign({}, baseSchema), getSchemaUtils(baseSchema));
}
function transform(schema, transformer) {
    const baseSchema = {
        parse: (raw, opts)=>{
            const parsed = schema.parse(raw, opts);
            if (!parsed.ok) {
                return parsed;
            }
            return {
                ok: true,
                value: transformer.transform(parsed.value)
            };
        },
        json: (transformed, opts)=>{
            const parsed = transformer.untransform(transformed);
            return schema.json(parsed, opts);
        },
        getType: ()=>schema.getType()
    };
    return Object.assign(Object.assign({}, baseSchema), getSchemaUtils(baseSchema));
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/bigint.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "bigint": ()=>bigint
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
;
;
;
;
function bigint() {
    const baseSchema = {
        parse: (raw, { breadcrumbsPrefix = [] } = {})=>{
            if (typeof raw === "bigint") {
                return {
                    ok: true,
                    value: raw
                };
            }
            if (typeof raw === "number") {
                return {
                    ok: true,
                    value: BigInt(raw)
                };
            }
            return {
                ok: false,
                errors: [
                    {
                        path: breadcrumbsPrefix,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(raw, "bigint | number")
                    }
                ]
            };
        },
        json: (bigint, { breadcrumbsPrefix = [] } = {})=>{
            if (typeof bigint !== "bigint") {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(bigint, "bigint")
                        }
                    ]
                };
            }
            return {
                ok: true,
                value: bigint
            };
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].BIGINT
    };
    return Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema));
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "bigint": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$bigint$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bigint"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$bigint$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/bigint.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "bigint": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["bigint"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/date.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "date": ()=>date
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
;
;
;
;
// https://stackoverflow.com/questions/12756159/regex-and-iso8601-formatted-datetime
const ISO_8601_REGEX = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
function date() {
    const baseSchema = {
        parse: (raw, { breadcrumbsPrefix = [] } = {})=>{
            if (typeof raw !== "string") {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(raw, "string")
                        }
                    ]
                };
            }
            if (!ISO_8601_REGEX.test(raw)) {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(raw, "ISO 8601 date string")
                        }
                    ]
                };
            }
            return {
                ok: true,
                value: new Date(raw)
            };
        },
        json: (date, { breadcrumbsPrefix = [] } = {})=>{
            if (date instanceof Date) {
                return {
                    ok: true,
                    value: date.toISOString()
                };
            } else {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(date, "Date object")
                        }
                    ]
                };
            }
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].DATE
    };
    return Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema));
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "date": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$date$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["date"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$date$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/date.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "date": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["date"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createIdentitySchemaCreator": ()=>createIdentitySchemaCreator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
;
;
function createIdentitySchemaCreator(schemaType, validate) {
    return ()=>{
        const baseSchema = {
            parse: validate,
            json: validate,
            getType: ()=>schemaType
        };
        return Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema));
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/enum.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "enum_": ()=>enum_
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
;
;
;
function enum_(values) {
    const validValues = new Set(values);
    const schemaCreator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIdentitySchemaCreator"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].ENUM, (value, { allowUnrecognizedEnumValues, breadcrumbsPrefix = [] } = {})=>{
        if (typeof value !== "string") {
            return {
                ok: false,
                errors: [
                    {
                        path: breadcrumbsPrefix,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "string")
                    }
                ]
            };
        }
        if (!validValues.has(value) && !allowUnrecognizedEnumValues) {
            return {
                ok: false,
                errors: [
                    {
                        path: breadcrumbsPrefix,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "enum")
                    }
                ]
            };
        }
        return {
            ok: true,
            value: value
        };
    });
    return schemaCreator();
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "enum_": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$enum$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enum_"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$enum$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/enum.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "enum_": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["enum_"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/lazy.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "constructLazyBaseSchema": ()=>constructLazyBaseSchema,
    "getMemoizedSchema": ()=>getMemoizedSchema,
    "lazy": ()=>lazy
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
;
function lazy(getter) {
    const baseSchema = constructLazyBaseSchema(getter);
    return Object.assign(Object.assign({}, baseSchema), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema));
}
function constructLazyBaseSchema(getter) {
    return {
        parse: (raw, opts)=>getMemoizedSchema(getter).parse(raw, opts),
        json: (parsed, opts)=>getMemoizedSchema(getter).json(parsed, opts),
        getType: ()=>getMemoizedSchema(getter).getType()
    };
}
function getMemoizedSchema(getter) {
    const castedGetter = getter;
    if (castedGetter.__zurg_memoized == null) {
        castedGetter.__zurg_memoized = getter();
    }
    return castedGetter.__zurg_memoized;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/entries.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "entries": ()=>entries
});
function entries(object) {
    return Object.entries(object);
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/filterObject.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "filterObject": ()=>filterObject
});
function filterObject(obj, keysToInclude) {
    const keysToIncludeSet = new Set(keysToInclude);
    return Object.entries(obj).reduce((acc, [key, value])=>{
        if (keysToIncludeSet.has(key)) {
            acc[key] = value;
        }
        return acc;
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    }, {});
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/isPlainObject.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// borrowed from https://github.com/lodash/lodash/blob/master/isPlainObject.js
__turbopack_context__.s({
    "isPlainObject": ()=>isPlainObject
});
function isPlainObject(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    let proto = value;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/keys.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "keys": ()=>keys
});
function keys(object) {
    return Object.keys(object);
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/partition.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "partition": ()=>partition
});
function partition(items, predicate) {
    const trueItems = [], falseItems = [];
    for (const item of items){
        if (predicate(item)) {
            trueItems.push(item);
        } else {
            falseItems.push(item);
        }
    }
    return [
        trueItems,
        falseItems
    ];
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/getObjectLikeUtils.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getObjectLikeUtils": ()=>getObjectLikeUtils,
    "withParsedProperties": ()=>withParsedProperties
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$filterObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/filterObject.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$isPlainObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/isPlainObject.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
;
;
;
;
function getObjectLikeUtils(schema) {
    return {
        withParsedProperties: (properties)=>withParsedProperties(schema, properties)
    };
}
function withParsedProperties(objectLike, properties) {
    const objectSchema = {
        parse: (raw, opts)=>{
            const parsedObject = objectLike.parse(raw, opts);
            if (!parsedObject.ok) {
                return parsedObject;
            }
            const additionalProperties = Object.entries(properties).reduce((processed, [key, value])=>{
                return Object.assign(Object.assign({}, processed), {
                    [key]: typeof value === "function" ? value(parsedObject.value) : value
                });
            }, {});
            return {
                ok: true,
                value: Object.assign(Object.assign({}, parsedObject.value), additionalProperties)
            };
        },
        json: (parsed, opts)=>{
            var _a;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$isPlainObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(parsed)) {
                return {
                    ok: false,
                    errors: [
                        {
                            path: (_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(parsed, "object")
                        }
                    ]
                };
            }
            // strip out added properties
            const addedPropertyKeys = new Set(Object.keys(properties));
            const parsedWithoutAddedProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$filterObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterObject"])(parsed, Object.keys(parsed).filter((key)=>!addedPropertyKeys.has(key)));
            return objectLike.json(parsedWithoutAddedProperties, opts);
        },
        getType: ()=>objectLike.getType()
    };
    return Object.assign(Object.assign(Object.assign({}, objectSchema), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(objectSchema)), getObjectLikeUtils(objectSchema));
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/property.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isProperty": ()=>isProperty,
    "property": ()=>property
});
function property(rawKey, valueSchema) {
    return {
        rawKey,
        valueSchema,
        isProperty: true
    };
}
function isProperty(maybeProperty) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return maybeProperty.isProperty;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/object.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getObjectUtils": ()=>getObjectUtils,
    "object": ()=>object
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$entries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/entries.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$filterObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/filterObject.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$isPlainObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/isPlainObject.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$partition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/partition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/getObjectLikeUtils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/property.mjs [app-ssr] (ecmascript)");
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
function object(schemas) {
    const baseSchema = {
        _getRawProperties: ()=>Object.entries(schemas).map(([parsedKey, propertySchema])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProperty"])(propertySchema) ? propertySchema.rawKey : parsedKey),
        _getParsedProperties: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(schemas),
        parse: (raw, opts)=>{
            const rawKeyToProperty = {};
            const requiredKeys = [];
            for (const [parsedKey, schemaOrObjectProperty] of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$entries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entries"])(schemas)){
                const rawKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProperty"])(schemaOrObjectProperty) ? schemaOrObjectProperty.rawKey : parsedKey;
                const valueSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProperty"])(schemaOrObjectProperty) ? schemaOrObjectProperty.valueSchema : schemaOrObjectProperty;
                const property = {
                    rawKey,
                    parsedKey: parsedKey,
                    valueSchema
                };
                rawKeyToProperty[rawKey] = property;
                if (isSchemaRequired(valueSchema)) {
                    requiredKeys.push(rawKey);
                }
            }
            return validateAndTransformObject({
                value: raw,
                requiredKeys,
                getProperty: (rawKey)=>{
                    const property = rawKeyToProperty[rawKey];
                    if (property == null) {
                        return undefined;
                    }
                    return {
                        transformedKey: property.parsedKey,
                        transform: (propertyValue)=>{
                            var _a;
                            return property.valueSchema.parse(propertyValue, Object.assign(Object.assign({}, opts), {
                                breadcrumbsPrefix: [
                                    ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                                    rawKey
                                ]
                            }));
                        }
                    };
                },
                unrecognizedObjectKeys: opts === null || opts === void 0 ? void 0 : opts.unrecognizedObjectKeys,
                skipValidation: opts === null || opts === void 0 ? void 0 : opts.skipValidation,
                breadcrumbsPrefix: opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix,
                omitUndefined: opts === null || opts === void 0 ? void 0 : opts.omitUndefined
            });
        },
        json: (parsed, opts)=>{
            const requiredKeys = [];
            for (const [parsedKey, schemaOrObjectProperty] of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$entries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entries"])(schemas)){
                const valueSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProperty"])(schemaOrObjectProperty) ? schemaOrObjectProperty.valueSchema : schemaOrObjectProperty;
                if (isSchemaRequired(valueSchema)) {
                    requiredKeys.push(parsedKey);
                }
            }
            return validateAndTransformObject({
                value: parsed,
                requiredKeys,
                getProperty: (parsedKey)=>{
                    const property = schemas[parsedKey];
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    if (property == null) {
                        return undefined;
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProperty"])(property)) {
                        return {
                            transformedKey: property.rawKey,
                            transform: (propertyValue)=>{
                                var _a;
                                return property.valueSchema.json(propertyValue, Object.assign(Object.assign({}, opts), {
                                    breadcrumbsPrefix: [
                                        ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                                        parsedKey
                                    ]
                                }));
                            }
                        };
                    } else {
                        return {
                            transformedKey: parsedKey,
                            transform: (propertyValue)=>{
                                var _a;
                                return property.json(propertyValue, Object.assign(Object.assign({}, opts), {
                                    breadcrumbsPrefix: [
                                        ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                                        parsedKey
                                    ]
                                }));
                            }
                        };
                    }
                },
                unrecognizedObjectKeys: opts === null || opts === void 0 ? void 0 : opts.unrecognizedObjectKeys,
                skipValidation: opts === null || opts === void 0 ? void 0 : opts.skipValidation,
                breadcrumbsPrefix: opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix,
                omitUndefined: opts === null || opts === void 0 ? void 0 : opts.omitUndefined
            });
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].OBJECT
    };
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectLikeUtils"])(baseSchema)), getObjectUtils(baseSchema));
}
function validateAndTransformObject({ value, requiredKeys, getProperty, unrecognizedObjectKeys = "fail", skipValidation = false, breadcrumbsPrefix = [] }) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$isPlainObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(value)) {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "object")
                }
            ]
        };
    }
    const missingRequiredKeys = new Set(requiredKeys);
    const errors = [];
    const transformed = {};
    for (const [preTransformedKey, preTransformedItemValue] of Object.entries(value)){
        const property = getProperty(preTransformedKey);
        if (property != null) {
            missingRequiredKeys.delete(preTransformedKey);
            const value = property.transform(preTransformedItemValue);
            if (value.ok) {
                transformed[property.transformedKey] = value.value;
            } else {
                transformed[preTransformedKey] = preTransformedItemValue;
                errors.push(...value.errors);
            }
        } else {
            switch(unrecognizedObjectKeys){
                case "fail":
                    errors.push({
                        path: [
                            ...breadcrumbsPrefix,
                            preTransformedKey
                        ],
                        message: `Unexpected key "${preTransformedKey}"`
                    });
                    break;
                case "strip":
                    break;
                case "passthrough":
                    transformed[preTransformedKey] = preTransformedItemValue;
                    break;
            }
        }
    }
    errors.push(...requiredKeys.filter((key)=>missingRequiredKeys.has(key)).map((key)=>({
            path: breadcrumbsPrefix,
            message: `Missing required key "${key}"`
        })));
    if (errors.length === 0 || skipValidation) {
        return {
            ok: true,
            value: transformed
        };
    } else {
        return {
            ok: false,
            errors
        };
    }
}
function getObjectUtils(schema) {
    return {
        extend: (extension)=>{
            const baseSchema = {
                _getParsedProperties: ()=>[
                        ...schema._getParsedProperties(),
                        ...extension._getParsedProperties()
                    ],
                _getRawProperties: ()=>[
                        ...schema._getRawProperties(),
                        ...extension._getRawProperties()
                    ],
                parse: (raw, opts)=>{
                    return validateAndTransformExtendedObject({
                        extensionKeys: extension._getRawProperties(),
                        value: raw,
                        transformBase: (rawBase)=>schema.parse(rawBase, opts),
                        transformExtension: (rawExtension)=>extension.parse(rawExtension, opts)
                    });
                },
                json: (parsed, opts)=>{
                    return validateAndTransformExtendedObject({
                        extensionKeys: extension._getParsedProperties(),
                        value: parsed,
                        transformBase: (parsedBase)=>schema.json(parsedBase, opts),
                        transformExtension: (parsedExtension)=>extension.json(parsedExtension, opts)
                    });
                },
                getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].OBJECT
            };
            return Object.assign(Object.assign(Object.assign(Object.assign({}, baseSchema), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectLikeUtils"])(baseSchema)), getObjectUtils(baseSchema));
        },
        passthrough: ()=>{
            const baseSchema = {
                _getParsedProperties: ()=>schema._getParsedProperties(),
                _getRawProperties: ()=>schema._getRawProperties(),
                parse: (raw, opts)=>{
                    const transformed = schema.parse(raw, Object.assign(Object.assign({}, opts), {
                        unrecognizedObjectKeys: "passthrough"
                    }));
                    if (!transformed.ok) {
                        return transformed;
                    }
                    return {
                        ok: true,
                        value: Object.assign(Object.assign({}, raw), transformed.value)
                    };
                },
                json: (parsed, opts)=>{
                    const transformed = schema.json(parsed, Object.assign(Object.assign({}, opts), {
                        unrecognizedObjectKeys: "passthrough"
                    }));
                    if (!transformed.ok) {
                        return transformed;
                    }
                    return {
                        ok: true,
                        value: Object.assign(Object.assign({}, parsed), transformed.value)
                    };
                },
                getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].OBJECT
            };
            return Object.assign(Object.assign(Object.assign(Object.assign({}, baseSchema), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectLikeUtils"])(baseSchema)), getObjectUtils(baseSchema));
        }
    };
}
function validateAndTransformExtendedObject({ extensionKeys, value, transformBase, transformExtension }) {
    const extensionPropertiesSet = new Set(extensionKeys);
    const [extensionProperties, baseProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$partition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partition"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(value), (key)=>extensionPropertiesSet.has(key));
    const transformedBase = transformBase((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$filterObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterObject"])(value, baseProperties));
    const transformedExtension = transformExtension((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$filterObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterObject"])(value, extensionProperties));
    if (transformedBase.ok && transformedExtension.ok) {
        return {
            ok: true,
            value: Object.assign(Object.assign({}, transformedBase.value), transformedExtension.value)
        };
    } else {
        return {
            ok: false,
            errors: [
                ...transformedBase.ok ? [] : transformedBase.errors,
                ...transformedExtension.ok ? [] : transformedExtension.errors
            ]
        };
    }
}
function isSchemaRequired(schema) {
    return !isSchemaOptional(schema);
}
function isSchemaOptional(schema) {
    switch(schema.getType()){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].ANY:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].UNKNOWN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].OPTIONAL:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].OPTIONAL_NULLABLE:
            return true;
        default:
            return false;
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/lazyObject.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "lazyObject": ()=>lazyObject
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/object.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/getObjectLikeUtils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$lazy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/lazy.mjs [app-ssr] (ecmascript)");
;
;
;
;
function lazyObject(getter) {
    const baseSchema = Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$lazy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructLazyBaseSchema"])(getter)), {
        _getRawProperties: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$lazy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMemoizedSchema"])(getter)._getRawProperties(),
        _getParsedProperties: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$lazy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMemoizedSchema"])(getter)._getParsedProperties()
    });
    return Object.assign(Object.assign(Object.assign(Object.assign({}, baseSchema), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectLikeUtils"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectUtils"])(baseSchema));
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "lazy": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$lazy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"],
    "lazyObject": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$lazyObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazyObject"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$lazy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/lazy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$lazyObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/lazyObject.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "lazy": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lazy"],
    "lazyObject": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lazyObject"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/list.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "list": ()=>list
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
;
;
;
;
function list(schema) {
    const baseSchema = {
        parse: (raw, opts)=>validateAndTransformArray(raw, (item, index)=>{
                var _a;
                return schema.parse(item, Object.assign(Object.assign({}, opts), {
                    breadcrumbsPrefix: [
                        ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                        `[${index}]`
                    ]
                }));
            }),
        json: (parsed, opts)=>validateAndTransformArray(parsed, (item, index)=>{
                var _a;
                return schema.json(item, Object.assign(Object.assign({}, opts), {
                    breadcrumbsPrefix: [
                        ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                        `[${index}]`
                    ]
                }));
            }),
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].LIST
    };
    return Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema));
}
function validateAndTransformArray(value, transformItem) {
    if (!Array.isArray(value)) {
        return {
            ok: false,
            errors: [
                {
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "list"),
                    path: []
                }
            ]
        };
    }
    const maybeValidItems = value.map((item, index)=>transformItem(item, index));
    return maybeValidItems.reduce((acc, item)=>{
        if (acc.ok && item.ok) {
            return {
                ok: true,
                value: [
                    ...acc.value,
                    item.value
                ]
            };
        }
        const errors = [];
        if (!acc.ok) {
            errors.push(...acc.errors);
        }
        if (!item.ok) {
            errors.push(...item.errors);
        }
        return {
            ok: false,
            errors
        };
    }, {
        ok: true,
        value: []
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "list": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/list.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "list": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["list"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/booleanLiteral.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "booleanLiteral": ()=>booleanLiteral
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
;
;
;
function booleanLiteral(literal) {
    const schemaCreator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIdentitySchemaCreator"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].BOOLEAN_LITERAL, (value, { breadcrumbsPrefix = [] } = {})=>{
        if (value === literal) {
            return {
                ok: true,
                value: literal
            };
        } else {
            return {
                ok: false,
                errors: [
                    {
                        path: breadcrumbsPrefix,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, `${literal.toString()}`)
                    }
                ]
            };
        }
    });
    return schemaCreator();
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/stringLiteral.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "stringLiteral": ()=>stringLiteral
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
;
;
;
function stringLiteral(literal) {
    const schemaCreator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIdentitySchemaCreator"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].STRING_LITERAL, (value, { breadcrumbsPrefix = [] } = {})=>{
        if (value === literal) {
            return {
                ok: true,
                value: literal
            };
        } else {
            return {
                ok: false,
                errors: [
                    {
                        path: breadcrumbsPrefix,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, `"${literal}"`)
                    }
                ]
            };
        }
    });
    return schemaCreator();
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "booleanLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$booleanLiteral$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanLiteral"],
    "stringLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$stringLiteral$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringLiteral"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$booleanLiteral$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/booleanLiteral.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$stringLiteral$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/stringLiteral.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "booleanLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["booleanLiteral"],
    "stringLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stringLiteral"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
;
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/objectWithoutOptionalProperties.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "objectWithoutOptionalProperties": ()=>objectWithoutOptionalProperties
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/object.mjs [app-ssr] (ecmascript)");
;
function objectWithoutOptionalProperties(schemas) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])(schemas);
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getObjectUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectUtils"],
    "isProperty": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProperty"],
    "object": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"],
    "objectWithoutOptionalProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$objectWithoutOptionalProperties$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objectWithoutOptionalProperties"],
    "property": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["property"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/object.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$objectWithoutOptionalProperties$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/objectWithoutOptionalProperties.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$property$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/property.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getObjectUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getObjectUtils"],
    "isProperty": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isProperty"],
    "object": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["object"],
    "objectWithoutOptionalProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["objectWithoutOptionalProperties"],
    "property": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["property"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getObjectLikeUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectLikeUtils"],
    "withParsedProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withParsedProperties"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/getObjectLikeUtils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getObjectLikeUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getObjectLikeUtils"],
    "withParsedProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["withParsedProperties"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
;
;
;
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/any.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "any": ()=>any
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)");
;
;
const any = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIdentitySchemaCreator"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].ANY, (value)=>({
        ok: true,
        value
    }));
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/boolean.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "boolean": ()=>boolean
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
;
;
;
const boolean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIdentitySchemaCreator"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].BOOLEAN, (value, { breadcrumbsPrefix = [] } = {})=>{
    if (typeof value === "boolean") {
        return {
            ok: true,
            value
        };
    } else {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "boolean")
                }
            ]
        };
    }
});
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/number.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "number": ()=>number
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
;
;
;
const number = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIdentitySchemaCreator"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].NUMBER, (value, { breadcrumbsPrefix = [] } = {})=>{
    if (typeof value === "number") {
        return {
            ok: true,
            value
        };
    } else {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "number")
                }
            ]
        };
    }
});
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/string.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "string": ()=>string
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
;
;
;
const string = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIdentitySchemaCreator"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].STRING, (value, { breadcrumbsPrefix = [] } = {})=>{
    if (typeof value === "string") {
        return {
            ok: true,
            value
        };
    } else {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "string")
                }
            ]
        };
    }
});
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/unknown.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "unknown": ()=>unknown
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/createIdentitySchemaCreator.mjs [app-ssr] (ecmascript)");
;
;
const unknown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$createIdentitySchemaCreator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIdentitySchemaCreator"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].UNKNOWN, (value)=>({
        ok: true,
        value
    }));
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "any": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$any$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["any"],
    "boolean": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$boolean$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
    "number": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$number$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
    "string": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$string$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"],
    "unknown": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$unknown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unknown"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$any$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/any.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$boolean$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/boolean.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$number$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/number.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$string$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/string.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$unknown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/unknown.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "any": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["any"],
    "boolean": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["boolean"],
    "number": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["number"],
    "string": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["string"],
    "unknown": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["unknown"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/record.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "record": ()=>record
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$entries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/entries.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$isPlainObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/isPlainObject.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
function record(keySchema, valueSchema) {
    const baseSchema = {
        parse: (raw, opts)=>{
            return validateAndTransformRecord({
                value: raw,
                isKeyNumeric: keySchema.getType() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].NUMBER,
                transformKey: (key)=>{
                    var _a;
                    return keySchema.parse(key, Object.assign(Object.assign({}, opts), {
                        breadcrumbsPrefix: [
                            ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                            `${key} (key)`
                        ]
                    }));
                },
                transformValue: (value, key)=>{
                    var _a;
                    return valueSchema.parse(value, Object.assign(Object.assign({}, opts), {
                        breadcrumbsPrefix: [
                            ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                            `${key}`
                        ]
                    }));
                },
                breadcrumbsPrefix: opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix
            });
        },
        json: (parsed, opts)=>{
            return validateAndTransformRecord({
                value: parsed,
                isKeyNumeric: keySchema.getType() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].NUMBER,
                transformKey: (key)=>{
                    var _a;
                    return keySchema.json(key, Object.assign(Object.assign({}, opts), {
                        breadcrumbsPrefix: [
                            ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                            `${key} (key)`
                        ]
                    }));
                },
                transformValue: (value, key)=>{
                    var _a;
                    return valueSchema.json(value, Object.assign(Object.assign({}, opts), {
                        breadcrumbsPrefix: [
                            ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                            `${key}`
                        ]
                    }));
                },
                breadcrumbsPrefix: opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix
            });
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].RECORD
    };
    return Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema));
}
function validateAndTransformRecord({ value, isKeyNumeric, transformKey, transformValue, breadcrumbsPrefix = [] }) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$isPlainObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(value)) {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "object")
                }
            ]
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$entries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entries"])(value).reduce((accPromise, [stringKey, value])=>{
        if (value === undefined) {
            return accPromise;
        }
        const acc = accPromise;
        let key = stringKey;
        if (isKeyNumeric) {
            const numberKey = stringKey.length > 0 ? Number(stringKey) : NaN;
            if (!Number.isNaN(numberKey)) {
                key = numberKey;
            }
        }
        const transformedKey = transformKey(key);
        const transformedValue = transformValue(value, key);
        if (acc.ok && transformedKey.ok && transformedValue.ok) {
            return {
                ok: true,
                value: Object.assign(Object.assign({}, acc.value), {
                    [transformedKey.value]: transformedValue.value
                })
            };
        }
        const errors = [];
        if (!acc.ok) {
            errors.push(...acc.errors);
        }
        if (!transformedKey.ok) {
            errors.push(...transformedKey.errors);
        }
        if (!transformedValue.ok) {
            errors.push(...transformedValue.errors);
        }
        return {
            ok: false,
            errors
        };
    }, {
        ok: true,
        value: {}
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "record": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$record$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$record$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/record.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "record": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["record"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
;
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JsonError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$JsonError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonError"],
    "ParseError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$ParseError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseError"],
    "getSchemaUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"],
    "optional": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"],
    "transform": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$JsonError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/JsonError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$ParseError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/ParseError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JsonError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["JsonError"],
    "ParseError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ParseError"],
    "getSchemaUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getSchemaUtils"],
    "optional": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["optional"],
    "transform": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["transform"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/set.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "set": ()=>set
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/list.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function set(schema) {
    const listSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"])(schema);
    const baseSchema = {
        parse: (raw, opts)=>{
            const parsedList = listSchema.parse(raw, opts);
            if (parsedList.ok) {
                return {
                    ok: true,
                    value: new Set(parsedList.value)
                };
            } else {
                return parsedList;
            }
        },
        json: (parsed, opts)=>{
            var _a;
            if (!(parsed instanceof Set)) {
                return {
                    ok: false,
                    errors: [
                        {
                            path: (_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(parsed, "Set")
                        }
                    ]
                };
            }
            const jsonList = listSchema.json([
                ...parsed
            ], opts);
            return jsonList;
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].SET
    };
    return Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema));
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "set": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$set$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$set$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/set.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "set": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["set"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/undiscriminatedUnion.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "undiscriminatedUnion": ()=>undiscriminatedUnion
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
;
;
;
function undiscriminatedUnion(schemas) {
    const baseSchema = {
        parse: (raw, opts)=>{
            return validateAndTransformUndiscriminatedUnion((schema, opts)=>schema.parse(raw, opts), schemas, opts);
        },
        json: (parsed, opts)=>{
            return validateAndTransformUndiscriminatedUnion((schema, opts)=>schema.json(parsed, opts), schemas, opts);
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].UNDISCRIMINATED_UNION
    };
    return Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema));
}
function validateAndTransformUndiscriminatedUnion(transform, schemas, opts) {
    const errors = [];
    for (const [index, schema] of schemas.entries()){
        const transformed = transform(schema, Object.assign(Object.assign({}, opts), {
            skipValidation: false
        }));
        if (transformed.ok) {
            return transformed;
        } else {
            for (const error of transformed.errors){
                errors.push({
                    path: error.path,
                    message: `[Variant ${index}] ${error.message}`
                });
            }
        }
    }
    return {
        ok: false,
        errors
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "undiscriminatedUnion": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$undiscriminatedUnion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["undiscriminatedUnion"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$undiscriminatedUnion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/undiscriminatedUnion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "undiscriminatedUnion": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["undiscriminatedUnion"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/discriminant.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "discriminant": ()=>discriminant
});
function discriminant(parsedDiscriminant, rawDiscriminant) {
    return {
        parsedDiscriminant,
        rawDiscriminant
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/union.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "union": ()=>union
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/Schema.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/getErrorMessageForIncorrectType.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$isPlainObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/isPlainObject.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/utils/maybeSkipValidation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$enum$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/enum.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/getObjectLikeUtils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/getSchemaUtils.mjs [app-ssr] (ecmascript)");
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
;
;
;
function union(discriminant, union) {
    const rawDiscriminant = typeof discriminant === "string" ? discriminant : discriminant.rawDiscriminant;
    const parsedDiscriminant = typeof discriminant === "string" ? discriminant : discriminant.parsedDiscriminant;
    const discriminantValueSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$enum$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enum_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(union));
    const baseSchema = {
        parse: (raw, opts)=>{
            return transformAndValidateUnion({
                value: raw,
                discriminant: rawDiscriminant,
                transformedDiscriminant: parsedDiscriminant,
                transformDiscriminantValue: (discriminantValue)=>{
                    var _a;
                    return discriminantValueSchema.parse(discriminantValue, {
                        allowUnrecognizedEnumValues: opts === null || opts === void 0 ? void 0 : opts.allowUnrecognizedUnionMembers,
                        breadcrumbsPrefix: [
                            ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                            rawDiscriminant
                        ]
                    });
                },
                getAdditionalPropertiesSchema: (discriminantValue)=>union[discriminantValue],
                allowUnrecognizedUnionMembers: opts === null || opts === void 0 ? void 0 : opts.allowUnrecognizedUnionMembers,
                transformAdditionalProperties: (additionalProperties, additionalPropertiesSchema)=>additionalPropertiesSchema.parse(additionalProperties, opts),
                breadcrumbsPrefix: opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix
            });
        },
        json: (parsed, opts)=>{
            return transformAndValidateUnion({
                value: parsed,
                discriminant: parsedDiscriminant,
                transformedDiscriminant: rawDiscriminant,
                transformDiscriminantValue: (discriminantValue)=>{
                    var _a;
                    return discriminantValueSchema.json(discriminantValue, {
                        allowUnrecognizedEnumValues: opts === null || opts === void 0 ? void 0 : opts.allowUnrecognizedUnionMembers,
                        breadcrumbsPrefix: [
                            ...(_a = opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix) !== null && _a !== void 0 ? _a : [],
                            parsedDiscriminant
                        ]
                    });
                },
                getAdditionalPropertiesSchema: (discriminantValue)=>union[discriminantValue],
                allowUnrecognizedUnionMembers: opts === null || opts === void 0 ? void 0 : opts.allowUnrecognizedUnionMembers,
                transformAdditionalProperties: (additionalProperties, additionalPropertiesSchema)=>additionalPropertiesSchema.json(additionalProperties, opts),
                breadcrumbsPrefix: opts === null || opts === void 0 ? void 0 : opts.breadcrumbsPrefix
            });
        },
        getType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$Schema$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SchemaType"].UNION
    };
    return Object.assign(Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$maybeSkipValidation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeSkipValidation"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$getSchemaUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"])(baseSchema)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$getObjectLikeUtils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectLikeUtils"])(baseSchema));
}
function transformAndValidateUnion({ value, discriminant, transformedDiscriminant, transformDiscriminantValue, getAdditionalPropertiesSchema, allowUnrecognizedUnionMembers = false, transformAdditionalProperties, breadcrumbsPrefix = [] }) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$isPlainObject$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(value)) {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$utils$2f$getErrorMessageForIncorrectType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessageForIncorrectType"])(value, "object")
                }
            ]
        };
    }
    const _a = value, _b = discriminant, discriminantValue = _a[_b], additionalProperties = __rest(_a, [
        typeof _b === "symbol" ? _b : _b + ""
    ]);
    if (discriminantValue == null) {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: `Missing discriminant ("${discriminant}")`
                }
            ]
        };
    }
    const transformedDiscriminantValue = transformDiscriminantValue(discriminantValue);
    if (!transformedDiscriminantValue.ok) {
        return {
            ok: false,
            errors: transformedDiscriminantValue.errors
        };
    }
    const additionalPropertiesSchema = getAdditionalPropertiesSchema(transformedDiscriminantValue.value);
    if (additionalPropertiesSchema == null) {
        if (allowUnrecognizedUnionMembers) {
            return {
                ok: true,
                value: Object.assign({
                    [transformedDiscriminant]: transformedDiscriminantValue.value
                }, additionalProperties)
            };
        } else {
            return {
                ok: false,
                errors: [
                    {
                        path: [
                            ...breadcrumbsPrefix,
                            discriminant
                        ],
                        message: "Unexpected discriminant value"
                    }
                ]
            };
        }
    }
    const transformedAdditionalProperties = transformAdditionalProperties(additionalProperties, additionalPropertiesSchema);
    if (!transformedAdditionalProperties.ok) {
        return transformedAdditionalProperties;
    }
    return {
        ok: true,
        value: Object.assign({
            [transformedDiscriminant]: discriminantValue
        }, transformedAdditionalProperties.value)
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "discriminant": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$discriminant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["discriminant"],
    "union": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$union$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["union"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$discriminant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/discriminant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$union$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/union.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "discriminant": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["discriminant"],
    "union": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["union"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JsonError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonError"],
    "ParseError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseError"],
    "any": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["any"],
    "bigint": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bigint"],
    "boolean": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
    "booleanLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanLiteral"],
    "date": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["date"],
    "discriminant": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["discriminant"],
    "enum_": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enum_"],
    "getObjectLikeUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectLikeUtils"],
    "getObjectUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectUtils"],
    "getSchemaUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"],
    "isProperty": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProperty"],
    "lazy": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"],
    "lazyObject": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazyObject"],
    "list": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    "number": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
    "object": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"],
    "objectWithoutOptionalProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objectWithoutOptionalProperties"],
    "optional": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"],
    "property": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["property"],
    "record": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"],
    "set": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"],
    "string": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"],
    "stringLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringLiteral"],
    "transform": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"],
    "undiscriminatedUnion": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["undiscriminatedUnion"],
    "union": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["union"],
    "unknown": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unknown"],
    "withParsedProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withParsedProperties"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$bigint$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/bigint/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$date$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/date/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$enum$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/enum/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$lazy$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/lazy/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$list$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/list/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$literals$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/literals/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$object$2d$like$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/object-like/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$primitives$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/primitives/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$record$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/record/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$schema$2d$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/schema-utils/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$set$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/set/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$undiscriminated$2d$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/undiscriminated-union/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$union$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/union/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JsonError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["JsonError"],
    "ParseError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ParseError"],
    "any": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["any"],
    "bigint": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["bigint"],
    "boolean": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["boolean"],
    "booleanLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["booleanLiteral"],
    "date": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["date"],
    "discriminant": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["discriminant"],
    "enum_": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["enum_"],
    "getObjectLikeUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getObjectLikeUtils"],
    "getObjectUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getObjectUtils"],
    "getSchemaUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getSchemaUtils"],
    "isProperty": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isProperty"],
    "lazy": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lazy"],
    "lazyObject": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lazyObject"],
    "list": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["list"],
    "number": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["number"],
    "object": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["object"],
    "objectWithoutOptionalProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["objectWithoutOptionalProperties"],
    "optional": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["optional"],
    "property": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["property"],
    "record": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["record"],
    "set": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["set"],
    "string": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["string"],
    "stringLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stringLiteral"],
    "transform": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["transform"],
    "undiscriminatedUnion": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["undiscriminatedUnion"],
    "union": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["union"],
    "unknown": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["unknown"],
    "withParsedProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["withParsedProperties"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JsonError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonError"],
    "ParseError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseError"],
    "any": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["any"],
    "bigint": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bigint"],
    "boolean": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
    "booleanLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanLiteral"],
    "date": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["date"],
    "discriminant": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["discriminant"],
    "enum_": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enum_"],
    "getObjectLikeUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectLikeUtils"],
    "getObjectUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getObjectUtils"],
    "getSchemaUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSchemaUtils"],
    "isProperty": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProperty"],
    "lazy": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"],
    "lazyObject": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazyObject"],
    "list": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    "number": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
    "object": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"],
    "objectWithoutOptionalProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objectWithoutOptionalProperties"],
    "optional": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optional"],
    "property": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["property"],
    "record": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["record"],
    "set": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"],
    "string": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"],
    "stringLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringLiteral"],
    "transform": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"],
    "undiscriminatedUnion": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["undiscriminatedUnion"],
    "union": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["union"],
    "unknown": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unknown"],
    "withParsedProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withParsedProperties"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$builders$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/builders/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JsonError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["JsonError"],
    "ParseError": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ParseError"],
    "any": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["any"],
    "bigint": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["bigint"],
    "boolean": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["boolean"],
    "booleanLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["booleanLiteral"],
    "date": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["date"],
    "discriminant": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["discriminant"],
    "enum_": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["enum_"],
    "getObjectLikeUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getObjectLikeUtils"],
    "getObjectUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getObjectUtils"],
    "getSchemaUtils": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getSchemaUtils"],
    "isProperty": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isProperty"],
    "lazy": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lazy"],
    "lazyObject": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lazyObject"],
    "list": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["list"],
    "number": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["number"],
    "object": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["object"],
    "objectWithoutOptionalProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["objectWithoutOptionalProperties"],
    "optional": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["optional"],
    "property": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["property"],
    "record": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["record"],
    "set": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["set"],
    "string": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["string"],
    "stringLiteral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stringLiteral"],
    "transform": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["transform"],
    "undiscriminatedUnion": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["undiscriminatedUnion"],
    "union": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["union"],
    "unknown": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["unknown"],
    "withParsedProperties": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["withParsedProperties"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript) <export * as serialization>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serialization": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$schemas$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/schemas/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
;
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/encodePathParam.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodePathParam": ()=>encodePathParam
});
function encodePathParam(param) {
    if (param === null) {
        return "null";
    }
    const typeofParam = typeof param;
    switch(typeofParam){
        case "undefined":
            return "undefined";
        case "string":
        case "number":
        case "boolean":
            break;
        default:
            param = String(param);
            break;
    }
    return encodeURIComponent(param);
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/join.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "join": ()=>join
});
function join(base, ...segments) {
    if (!base) {
        return "";
    }
    if (segments.length === 0) {
        return base;
    }
    if (base.includes("://")) {
        let url;
        try {
            url = new URL(base);
        } catch (_a) {
            // Fallback to path joining if URL is malformed
            return joinPath(base, ...segments);
        }
        const lastSegment = segments[segments.length - 1];
        const shouldPreserveTrailingSlash = lastSegment === null || lastSegment === void 0 ? void 0 : lastSegment.endsWith("/");
        for (const segment of segments){
            const cleanSegment = trimSlashes(segment);
            if (cleanSegment) {
                url.pathname = joinPathSegments(url.pathname, cleanSegment);
            }
        }
        if (shouldPreserveTrailingSlash && !url.pathname.endsWith("/")) {
            url.pathname += "/";
        }
        return url.toString();
    }
    return joinPath(base, ...segments);
}
function joinPath(base, ...segments) {
    if (segments.length === 0) {
        return base;
    }
    let result = base;
    const lastSegment = segments[segments.length - 1];
    const shouldPreserveTrailingSlash = lastSegment === null || lastSegment === void 0 ? void 0 : lastSegment.endsWith("/");
    for (const segment of segments){
        const cleanSegment = trimSlashes(segment);
        if (cleanSegment) {
            result = joinPathSegments(result, cleanSegment);
        }
    }
    if (shouldPreserveTrailingSlash && !result.endsWith("/")) {
        result += "/";
    }
    return result;
}
function joinPathSegments(left, right) {
    if (left.endsWith("/")) {
        return left + right;
    }
    return `${left}/${right}`;
}
function trimSlashes(str) {
    if (!str) return str;
    let start = 0;
    let end = str.length;
    if (str.startsWith("/")) start = 1;
    if (str.endsWith("/")) end = str.length - 1;
    return start === 0 && end === str.length ? str : str.slice(start, end);
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodePathParam": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$encodePathParam$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodePathParam"],
    "join": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$join$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["join"],
    "toQueryString": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$qs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryString"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$encodePathParam$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/encodePathParam.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$join$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/join.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$qs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/qs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodePathParam": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["encodePathParam"],
    "join": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["join"],
    "toQueryString": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["toQueryString"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript) <export * as url>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "url": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/Supplier.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Supplier": ()=>Supplier
});
const Supplier = {
    get: (supplier)=>{
        if (typeof supplier === "function") {
            return supplier();
        } else {
            return supplier;
        }
    },
    map: (supplier, f)=>{
        if (typeof supplier === "function") {
            return ()=>f(Supplier.get(supplier));
        } else {
            return f(supplier);
        }
    }
};
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/headers.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "mergeHeaders": ()=>mergeHeaders,
    "mergeOnlyDefinedHeaders": ()=>mergeOnlyDefinedHeaders
});
function mergeHeaders(...headersArray) {
    const result = {};
    for (const [key, value] of headersArray.filter((headers)=>headers != null).flatMap((headers)=>Object.entries(headers))){
        const insensitiveKey = key.toLowerCase();
        if (value != null) {
            result[insensitiveKey] = value;
        } else if (insensitiveKey in result) {
            delete result[insensitiveKey];
        }
    }
    return result;
}
function mergeOnlyDefinedHeaders(...headersArray) {
    const result = {};
    for (const [key, value] of headersArray.filter((headers)=>headers != null).flatMap((headers)=>Object.entries(headers))){
        const insensitiveKey = key.toLowerCase();
        if (value != null) {
            result[insensitiveKey] = value;
        }
    }
    return result;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/HttpResponsePromise.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HttpResponsePromise": ()=>HttpResponsePromise
});
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
class HttpResponsePromise extends Promise {
    constructor(promise){
        // Initialize with a no-op to avoid premature parsing
        super((resolve)=>{
            resolve(undefined);
        });
        this.innerPromise = promise;
    }
    /**
     * Creates an `HttpResponsePromise` from a function that returns a promise.
     *
     * @param fn - A function that returns a promise resolving to a `WithRawResponse` object.
     * @param args - Arguments to pass to the function.
     * @returns An `HttpResponsePromise` instance.
     */ static fromFunction(fn, ...args) {
        return new HttpResponsePromise(fn(...args));
    }
    /**
     * Creates a function that returns an `HttpResponsePromise` from a function that returns a promise.
     *
     * @param fn - A function that returns a promise resolving to a `WithRawResponse` object.
     * @returns A function that returns an `HttpResponsePromise` instance.
     */ static interceptFunction(fn) {
        return (...args)=>{
            return HttpResponsePromise.fromPromise(fn(...args));
        };
    }
    /**
     * Creates an `HttpResponsePromise` from an existing promise.
     *
     * @param promise - A promise resolving to a `WithRawResponse` object.
     * @returns An `HttpResponsePromise` instance.
     */ static fromPromise(promise) {
        return new HttpResponsePromise(promise);
    }
    /**
     * Creates an `HttpResponsePromise` from an executor function.
     *
     * @param executor - A function that takes resolve and reject callbacks to create a promise.
     * @returns An `HttpResponsePromise` instance.
     */ static fromExecutor(executor) {
        const promise = new Promise(executor);
        return new HttpResponsePromise(promise);
    }
    /**
     * Creates an `HttpResponsePromise` from a resolved result.
     *
     * @param result - A `WithRawResponse` object to resolve immediately.
     * @returns An `HttpResponsePromise` instance.
     */ static fromResult(result) {
        const promise = Promise.resolve(result);
        return new HttpResponsePromise(promise);
    }
    unwrap() {
        if (!this.unwrappedPromise) {
            this.unwrappedPromise = this.innerPromise.then(({ data })=>data);
        }
        return this.unwrappedPromise;
    }
    /** @inheritdoc */ then(onfulfilled, onrejected) {
        return this.unwrap().then(onfulfilled, onrejected);
    }
    /** @inheritdoc */ catch(onrejected) {
        return this.unwrap().catch(onrejected);
    }
    /** @inheritdoc */ finally(onfinally) {
        return this.unwrap().finally(onfinally);
    }
    /**
     * Retrieves the data and raw response.
     *
     * @returns A promise resolving to a `WithRawResponse` object.
     */ withRawResponse() {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.innerPromise;
        });
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/logger.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ConsoleLogger": ()=>ConsoleLogger,
    "LogLevel": ()=>LogLevel,
    "Logger": ()=>Logger,
    "createLogger": ()=>createLogger
});
const LogLevel = {
    Debug: "debug",
    Info: "info",
    Warn: "warn",
    Error: "error"
};
const logLevelMap = {
    [LogLevel.Debug]: 1,
    [LogLevel.Info]: 2,
    [LogLevel.Warn]: 3,
    [LogLevel.Error]: 4
};
class ConsoleLogger {
    debug(message, ...args) {
        console.debug(message, ...args);
    }
    info(message, ...args) {
        console.info(message, ...args);
    }
    warn(message, ...args) {
        console.warn(message, ...args);
    }
    error(message, ...args) {
        console.error(message, ...args);
    }
}
class Logger {
    /**
     * Creates a new logger instance.
     * @param config - Logger configuration
     */ constructor(config){
        this.level = logLevelMap[config.level];
        this.logger = config.logger;
        this.silent = config.silent;
    }
    /**
     * Checks if a log level should be output based on configuration.
     * @param level - The log level to check
     * @returns True if the level should be logged
     */ shouldLog(level) {
        return !this.silent && this.level >= logLevelMap[level];
    }
    /**
     * Checks if debug logging is enabled.
     * @returns True if debug logs should be output
     */ isDebug() {
        return this.shouldLog(LogLevel.Debug);
    }
    /**
     * Logs a debug message if debug logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */ debug(message, ...args) {
        if (this.isDebug()) {
            this.logger.debug(message, ...args);
        }
    }
    /**
     * Checks if info logging is enabled.
     * @returns True if info logs should be output
     */ isInfo() {
        return this.shouldLog(LogLevel.Info);
    }
    /**
     * Logs an info message if info logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */ info(message, ...args) {
        if (this.isInfo()) {
            this.logger.info(message, ...args);
        }
    }
    /**
     * Checks if warning logging is enabled.
     * @returns True if warning logs should be output
     */ isWarn() {
        return this.shouldLog(LogLevel.Warn);
    }
    /**
     * Logs a warning message if warning logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */ warn(message, ...args) {
        if (this.isWarn()) {
            this.logger.warn(message, ...args);
        }
    }
    /**
     * Checks if error logging is enabled.
     * @returns True if error logs should be output
     */ isError() {
        return this.shouldLog(LogLevel.Error);
    }
    /**
     * Logs an error message if error logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */ error(message, ...args) {
        if (this.isError()) {
            this.logger.error(message, ...args);
        }
    }
}
function createLogger(config) {
    var _a, _b, _c;
    if (config == null) {
        return defaultLogger;
    }
    if (config instanceof Logger) {
        return config;
    }
    config = config !== null && config !== void 0 ? config : {};
    (_a = config.level) !== null && _a !== void 0 ? _a : config.level = LogLevel.Info;
    (_b = config.logger) !== null && _b !== void 0 ? _b : config.logger = new ConsoleLogger();
    (_c = config.silent) !== null && _c !== void 0 ? _c : config.silent = true;
    return new Logger(config);
}
const defaultLogger = new Logger({
    level: LogLevel.Info,
    logger: new ConsoleLogger(),
    silent: true
});
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/createRequestUrl.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createRequestUrl": ()=>createRequestUrl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$qs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/qs.mjs [app-ssr] (ecmascript)");
;
function createRequestUrl(baseUrl, queryParameters) {
    const queryString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$qs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryString"])(queryParameters, {
        arrayFormat: "repeat"
    });
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/EndpointSupplier.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EndpointSupplier": ()=>EndpointSupplier
});
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
const EndpointSupplier = {
    get: (supplier, arg)=>__awaiter(void 0, void 0, void 0, function*() {
            if (typeof supplier === "function") {
                return supplier(arg);
            } else {
                return supplier;
            }
        })
};
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/BinaryResponse.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getBinaryResponse": ()=>getBinaryResponse
});
function getBinaryResponse(response) {
    const binaryResponse = {
        get bodyUsed () {
            return response.bodyUsed;
        },
        stream: ()=>response.body,
        arrayBuffer: response.arrayBuffer.bind(response),
        blob: response.blob.bind(response)
    };
    if ("bytes" in response && typeof response.bytes === "function") {
        binaryResponse.bytes = response.bytes.bind(response);
    }
    return binaryResponse;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/ResponseWithBody.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isResponseWithBody": ()=>isResponseWithBody
});
function isResponseWithBody(response) {
    return response.body != null;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getResponseBody.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getResponseBody": ()=>getResponseBody
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/json.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$BinaryResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/BinaryResponse.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$ResponseWithBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/ResponseWithBody.mjs [app-ssr] (ecmascript)");
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
function getResponseBody(response, responseType) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$ResponseWithBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isResponseWithBody"])(response)) {
            return undefined;
        }
        switch(responseType){
            case "binary-response":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$BinaryResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBinaryResponse"])(response);
            case "blob":
                return yield response.blob();
            case "arrayBuffer":
                return yield response.arrayBuffer();
            case "sse":
                return response.body;
            case "streaming":
                return response.body;
            case "text":
                return yield response.text();
        }
        // if responseType is "json" or not specified, try to parse as JSON
        const text = yield response.text();
        if (text.length > 0) {
            try {
                const responseBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromJson"])(text);
                return responseBody;
            } catch (_err) {
                return {
                    ok: false,
                    error: {
                        reason: "non-json",
                        statusCode: response.status,
                        rawBody: text
                    }
                };
            }
        }
        return undefined;
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getErrorResponseBody.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getErrorResponseBody": ()=>getErrorResponseBody
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/json.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getResponseBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getResponseBody.mjs [app-ssr] (ecmascript)");
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
function getErrorResponseBody(response) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a, _b, _c;
        let contentType = (_a = response.headers.get("Content-Type")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (contentType == null || contentType.length === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getResponseBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponseBody"])(response);
        }
        if (contentType.indexOf(";") !== -1) {
            contentType = (_c = (_b = contentType.split(";")[0]) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : "";
        }
        switch(contentType){
            case "application/hal+json":
            case "application/json":
            case "application/ld+json":
            case "application/problem+json":
            case "application/vnd.api+json":
            case "text/json":
                {
                    const text = yield response.text();
                    return text.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromJson"])(text) : undefined;
                }
            default:
                if (contentType.startsWith("application/vnd.") && contentType.endsWith("+json")) {
                    const text = yield response.text();
                    return text.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromJson"])(text) : undefined;
                }
                // Fallback to plain text if content type is not recognized
                // Even if no body is present, the response will be an empty string
                return yield response.text();
        }
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getFetchFn.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getFetchFn": ()=>getFetchFn
});
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
function getFetchFn() {
    return __awaiter(this, void 0, void 0, function*() {
        return fetch;
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getRequestBody.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getRequestBody": ()=>getRequestBody
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/json.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$qs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/url/qs.mjs [app-ssr] (ecmascript)");
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
function getRequestBody(_a) {
    return __awaiter(this, arguments, void 0, function*({ body, type }) {
        if (type === "form") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$url$2f$qs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryString"])(body, {
                arrayFormat: "repeat",
                encode: true
            });
        }
        if (type.includes("json")) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJson"])(body);
        } else {
            return body;
        }
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/signals.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "anySignal": ()=>anySignal,
    "getTimeoutSignal": ()=>getTimeoutSignal
});
const TIMEOUT = "timeout";
function getTimeoutSignal(timeoutMs) {
    const controller = new AbortController();
    const abortId = setTimeout(()=>controller.abort(TIMEOUT), timeoutMs);
    return {
        signal: controller.signal,
        abortId
    };
}
function anySignal(...args) {
    // Allowing signals to be passed either as array
    // of signals or as multiple arguments.
    const signals = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
    const controller = new AbortController();
    for (const signal of signals){
        if (signal.aborted) {
            // Exiting early if one of the signals
            // is already aborted.
            controller.abort(signal === null || signal === void 0 ? void 0 : signal.reason);
            break;
        }
        // Listening for signals and removing the listeners
        // when at least one symbol is aborted.
        signal.addEventListener("abort", ()=>controller.abort(signal === null || signal === void 0 ? void 0 : signal.reason), {
            signal: controller.signal
        });
    }
    return controller.signal;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/makeRequest.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "makeRequest": ()=>makeRequest
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/signals.mjs [app-ssr] (ecmascript)");
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
const makeRequest = (fetchFn, url, method, headers, requestBody, timeoutMs, abortSignal, withCredentials, duplex)=>__awaiter(void 0, void 0, void 0, function*() {
        const signals = [];
        // Add timeout signal
        let timeoutAbortId;
        if (timeoutMs != null) {
            const { signal, abortId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimeoutSignal"])(timeoutMs);
            timeoutAbortId = abortId;
            signals.push(signal);
        }
        // Add arbitrary signal
        if (abortSignal != null) {
            signals.push(abortSignal);
        }
        const newSignals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anySignal"])(signals);
        const response = yield fetchFn(url, {
            method: method,
            headers,
            body: requestBody,
            signal: newSignals,
            credentials: withCredentials ? "include" : undefined,
            // @ts-ignore
            duplex
        });
        if (timeoutAbortId != null) {
            clearTimeout(timeoutAbortId);
        }
        return response;
    });
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/Headers.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Headers": ()=>Headers
});
let Headers;
if (typeof globalThis.Headers !== "undefined") {
    Headers = globalThis.Headers;
} else {
    Headers = class Headers {
        constructor(init){
            this.headers = new Map();
            if (init) {
                if (init instanceof Headers) {
                    init.forEach((value, key)=>this.append(key, value));
                } else if (Array.isArray(init)) {
                    for (const [key, value] of init){
                        if (typeof key === "string" && typeof value === "string") {
                            this.append(key, value);
                        } else {
                            throw new TypeError("Each header entry must be a [string, string] tuple");
                        }
                    }
                } else {
                    for (const [key, value] of Object.entries(init)){
                        if (typeof value === "string") {
                            this.append(key, value);
                        } else {
                            throw new TypeError("Header values must be strings");
                        }
                    }
                }
            }
        }
        append(name, value) {
            const key = name.toLowerCase();
            const existing = this.headers.get(key) || [];
            this.headers.set(key, [
                ...existing,
                value
            ]);
        }
        delete(name) {
            const key = name.toLowerCase();
            this.headers.delete(key);
        }
        get(name) {
            const key = name.toLowerCase();
            const values = this.headers.get(key);
            return values ? values.join(", ") : null;
        }
        has(name) {
            const key = name.toLowerCase();
            return this.headers.has(key);
        }
        set(name, value) {
            const key = name.toLowerCase();
            this.headers.set(key, [
                value
            ]);
        }
        forEach(callbackfn, thisArg) {
            const boundCallback = thisArg ? callbackfn.bind(thisArg) : callbackfn;
            this.headers.forEach((values, key)=>boundCallback(values.join(", "), key, this));
        }
        getSetCookie() {
            return this.headers.get("set-cookie") || [];
        }
        *entries() {
            for (const [key, values] of this.headers.entries()){
                yield [
                    key,
                    values.join(", ")
                ];
            }
        }
        *keys() {
            yield* this.headers.keys();
        }
        *values() {
            for (const values of this.headers.values()){
                yield values.join(", ");
            }
        }
        [Symbol.iterator]() {
            return this.entries();
        }
    };
}
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/RawResponse.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "abortRawResponse": ()=>abortRawResponse,
    "toRawResponse": ()=>toRawResponse,
    "unknownRawResponse": ()=>unknownRawResponse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$Headers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/Headers.mjs [app-ssr] (ecmascript)");
;
const abortRawResponse = {
    headers: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$Headers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Headers"](),
    redirected: false,
    status: 499,
    statusText: "Client Closed Request",
    type: "error",
    url: ""
};
const unknownRawResponse = {
    headers: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$Headers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Headers"](),
    redirected: false,
    status: 0,
    statusText: "Unknown Error",
    type: "error",
    url: ""
};
function toRawResponse(response) {
    return {
        headers: response.headers,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/requestWithRetries.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "requestWithRetries": ()=>requestWithRetries
});
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
const INITIAL_RETRY_DELAY = 1000; // in milliseconds
const MAX_RETRY_DELAY = 60000; // in milliseconds
const DEFAULT_MAX_RETRIES = 2;
const JITTER_FACTOR = 0.2; // 20% random jitter
function addPositiveJitter(delay) {
    // Generate a random value between 0 and +JITTER_FACTOR
    const jitterMultiplier = 1 + Math.random() * JITTER_FACTOR;
    return delay * jitterMultiplier;
}
function addSymmetricJitter(delay) {
    // Generate a random value in a JITTER_FACTOR-sized percentage range around delay
    const jitterMultiplier = 1 + (Math.random() - 0.5) * JITTER_FACTOR;
    return delay * jitterMultiplier;
}
function getRetryDelayFromHeaders(response, retryAttempt) {
    // Check for Retry-After header first (RFC 7231), with no jitter
    const retryAfter = response.headers.get("Retry-After");
    if (retryAfter) {
        // Parse as number of seconds...
        const retryAfterSeconds = parseInt(retryAfter, 10);
        if (!Number.isNaN(retryAfterSeconds) && retryAfterSeconds > 0) {
            return Math.min(retryAfterSeconds * 1000, MAX_RETRY_DELAY);
        }
        // ...or as an HTTP date; both are valid
        const retryAfterDate = new Date(retryAfter);
        if (!Number.isNaN(retryAfterDate.getTime())) {
            const delay = retryAfterDate.getTime() - Date.now();
            if (delay > 0) {
                return Math.min(Math.max(delay, 0), MAX_RETRY_DELAY);
            }
        }
    }
    // Then check for industry-standard X-RateLimit-Reset header, with positive jitter
    const rateLimitReset = response.headers.get("X-RateLimit-Reset");
    if (rateLimitReset) {
        const resetTime = parseInt(rateLimitReset, 10);
        if (!Number.isNaN(resetTime)) {
            // Assume Unix timestamp in epoch seconds
            const delay = resetTime * 1000 - Date.now();
            if (delay > 0) {
                return addPositiveJitter(Math.min(delay, MAX_RETRY_DELAY));
            }
        }
    }
    // Fall back to exponential backoff, with symmetric jitter
    return addSymmetricJitter(Math.min(INITIAL_RETRY_DELAY * Math.pow(2, retryAttempt), MAX_RETRY_DELAY));
}
function requestWithRetries(requestFn_1) {
    return __awaiter(this, arguments, void 0, function*(requestFn, maxRetries = DEFAULT_MAX_RETRIES) {
        let response = yield requestFn();
        for(let i = 0; i < maxRetries; ++i){
            if ([
                408,
                429
            ].includes(response.status) || response.status >= 500) {
                // Get delay with appropriate jitter applied
                const delay = getRetryDelayFromHeaders(response, i);
                yield new Promise((resolve)=>setTimeout(resolve, delay));
                response = yield requestFn();
            } else {
                break;
            }
        }
        return response;
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/Fetcher.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "fetcher": ()=>fetcher,
    "fetcherImpl": ()=>fetcherImpl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/json.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$logger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/logger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$createRequestUrl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/createRequestUrl.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$EndpointSupplier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/EndpointSupplier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getErrorResponseBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getErrorResponseBody.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getFetchFn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getFetchFn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getRequestBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getRequestBody.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getResponseBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/getResponseBody.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$makeRequest$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/makeRequest.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$RawResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/RawResponse.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$requestWithRetries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/fetcher/requestWithRetries.mjs [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
const SENSITIVE_HEADERS = new Set([
    "authorization",
    "x-api-key",
    "api-key",
    "x-auth-token",
    "cookie",
    "set-cookie",
    "proxy-authorization",
    "x-csrf-token",
    "x-xsrf-token"
]);
function redactHeaders(headers) {
    const filtered = {};
    for (const [key, value] of Object.entries(headers)){
        if (SENSITIVE_HEADERS.has(key.toLowerCase())) {
            filtered[key] = "[REDACTED]";
        } else {
            filtered[key] = value;
        }
    }
    return filtered;
}
const SENSITIVE_QUERY_PARAMS = new Set([
    "api_key",
    "api-key",
    "apikey",
    "token",
    "access_token",
    "access-token",
    "auth_token",
    "auth-token",
    "password",
    "passwd",
    "secret",
    "api_secret",
    "api-secret",
    "apisecret",
    "key",
    "session",
    "session_id",
    "session-id"
]);
function redactQueryParameters(queryParameters) {
    if (queryParameters == null) {
        return queryParameters;
    }
    const redacted = {};
    for (const [key, value] of Object.entries(queryParameters)){
        if (SENSITIVE_QUERY_PARAMS.has(key.toLowerCase())) {
            redacted[key] = "[REDACTED]";
        } else {
            redacted[key] = value;
        }
    }
    return redacted;
}
function redactUrl(url) {
    const protocolIndex = url.indexOf("://");
    if (protocolIndex === -1) return url;
    const afterProtocol = protocolIndex + 3;
    const atIndex = url.indexOf("@", afterProtocol);
    if (atIndex !== -1) {
        const pathStart = url.indexOf("/", afterProtocol);
        const queryStart = url.indexOf("?", afterProtocol);
        const fragmentStart = url.indexOf("#", afterProtocol);
        const firstDelimiter = Math.min(pathStart === -1 ? url.length : pathStart, queryStart === -1 ? url.length : queryStart, fragmentStart === -1 ? url.length : fragmentStart);
        if (atIndex < firstDelimiter) {
            url = `${url.slice(0, afterProtocol)}[REDACTED]@${url.slice(atIndex + 1)}`;
        }
    }
    const queryStart = url.indexOf("?");
    if (queryStart === -1) return url;
    const fragmentStart = url.indexOf("#", queryStart);
    const queryEnd = fragmentStart !== -1 ? fragmentStart : url.length;
    const queryString = url.slice(queryStart + 1, queryEnd);
    if (queryString.length === 0) return url;
    // FAST PATH: Quick check if any sensitive keywords present
    // Using indexOf is faster than regex for simple substring matching
    const lower = queryString.toLowerCase();
    const hasSensitive = lower.includes("token") || // catches token, access_token, auth_token, etc.
    lower.includes("key") || // catches key, api_key, apikey, api-key, etc.
    lower.includes("password") || // catches password
    lower.includes("passwd") || // catches passwd
    lower.includes("secret") || // catches secret, api_secret, etc.
    lower.includes("session") || // catches session, session_id, session-id
    lower.includes("auth"); // catches auth_token, auth-token, etc.
    if (!hasSensitive) {
        return url; // Early exit - no sensitive params
    }
    // SLOW PATH: Parse and redact
    const redactedParams = [];
    const params = queryString.split("&");
    for (const param of params){
        const equalIndex = param.indexOf("=");
        if (equalIndex === -1) {
            redactedParams.push(param);
            continue;
        }
        const key = param.slice(0, equalIndex);
        let shouldRedact = SENSITIVE_QUERY_PARAMS.has(key.toLowerCase());
        if (!shouldRedact && key.includes("%")) {
            try {
                const decodedKey = decodeURIComponent(key);
                shouldRedact = SENSITIVE_QUERY_PARAMS.has(decodedKey.toLowerCase());
            } catch (_a) {}
        }
        redactedParams.push(shouldRedact ? `${key}=[REDACTED]` : param);
    }
    return url.slice(0, queryStart + 1) + redactedParams.join("&") + url.slice(queryEnd);
}
function getHeaders(args) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a;
        const newHeaders = {};
        if (args.body !== undefined && args.contentType != null) {
            newHeaders["Content-Type"] = args.contentType;
        }
        if (args.headers == null) {
            return newHeaders;
        }
        for (const [key, value] of Object.entries(args.headers)){
            const result = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$EndpointSupplier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EndpointSupplier"].get(value, {
                endpointMetadata: (_a = args.endpointMetadata) !== null && _a !== void 0 ? _a : {}
            });
            if (typeof result === "string") {
                newHeaders[key] = result;
                continue;
            }
            if (result == null) {
                continue;
            }
            newHeaders[key] = `${result}`;
        }
        return newHeaders;
    });
}
function fetcherImpl(args) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a, _b, _c;
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$createRequestUrl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestUrl"])(args.url, args.queryParameters);
        const requestBody = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getRequestBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRequestBody"])({
            body: args.body,
            type: (_a = args.requestType) !== null && _a !== void 0 ? _a : "other"
        });
        const fetchFn = (_b = args.fetchFn) !== null && _b !== void 0 ? _b : yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getFetchFn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFetchFn"])();
        const headers = yield getHeaders(args);
        const logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$logger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])(args.logging);
        if (logger.isDebug()) {
            const metadata = {
                method: args.method,
                url: redactUrl(url),
                headers: redactHeaders(headers),
                queryParameters: redactQueryParameters(args.queryParameters),
                hasBody: requestBody != null
            };
            logger.debug("Making HTTP request", metadata);
        }
        try {
            const response = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$requestWithRetries$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestWithRetries"])(()=>__awaiter(this, void 0, void 0, function*() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$makeRequest$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeRequest"])(fetchFn, url, args.method, headers, requestBody, args.timeoutMs, args.abortSignal, args.withCredentials, args.duplex);
                }), args.maxRetries);
            if (response.status >= 200 && response.status < 400) {
                if (logger.isDebug()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                        statusCode: response.status
                    };
                    logger.debug("HTTP request succeeded", metadata);
                }
                return {
                    ok: true,
                    body: yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getResponseBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponseBody"])(response, args.responseType),
                    headers: response.headers,
                    rawResponse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$RawResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRawResponse"])(response)
                };
            } else {
                if (logger.isError()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                        statusCode: response.status
                    };
                    logger.error("HTTP request failed with error status", metadata);
                }
                return {
                    ok: false,
                    error: {
                        reason: "status-code",
                        statusCode: response.status,
                        body: yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$getErrorResponseBody$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorResponseBody"])(response)
                    },
                    rawResponse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$RawResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRawResponse"])(response)
                };
            }
        } catch (error) {
            if ((_c = args.abortSignal) === null || _c === void 0 ? void 0 : _c.aborted) {
                if (logger.isError()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url)
                    };
                    logger.error("HTTP request was aborted", metadata);
                }
                return {
                    ok: false,
                    error: {
                        reason: "unknown",
                        errorMessage: "The user aborted a request"
                    },
                    rawResponse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$RawResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abortRawResponse"]
                };
            } else if (error instanceof Error && error.name === "AbortError") {
                if (logger.isError()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                        timeoutMs: args.timeoutMs
                    };
                    logger.error("HTTP request timed out", metadata);
                }
                return {
                    ok: false,
                    error: {
                        reason: "timeout"
                    },
                    rawResponse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$RawResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abortRawResponse"]
                };
            } else if (error instanceof Error) {
                if (logger.isError()) {
                    const metadata = {
                        method: args.method,
                        url: redactUrl(url),
                        errorMessage: error.message
                    };
                    logger.error("HTTP request failed with error", metadata);
                }
                return {
                    ok: false,
                    error: {
                        reason: "unknown",
                        errorMessage: error.message
                    },
                    rawResponse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$RawResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unknownRawResponse"]
                };
            }
            if (logger.isError()) {
                const metadata = {
                    method: args.method,
                    url: redactUrl(url),
                    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJson"])(error)
                };
                logger.error("HTTP request failed with unknown error", metadata);
            }
            return {
                ok: false,
                error: {
                    reason: "unknown",
                    errorMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJson"])(error)
                },
                rawResponse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$fetcher$2f$RawResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unknownRawResponse"]
            };
        }
    });
}
const fetcher = fetcherImpl;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/pagination/Page.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Page": ()=>Page
});
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
var __await = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
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
class Page {
    constructor({ response, rawResponse, hasNextPage, getItems, loadPage }){
        this.response = response;
        this.rawResponse = rawResponse;
        this.data = getItems(response);
        this._hasNextPage = hasNextPage;
        this.getItems = getItems;
        this.loadNextPage = loadPage;
    }
    /**
     * Retrieves the next page
     * @returns this
     */ getNextPage() {
        return __awaiter(this, void 0, void 0, function*() {
            const { data, rawResponse } = yield this.loadNextPage(this.response).withRawResponse();
            this.response = data;
            this.rawResponse = rawResponse;
            this.data = this.getItems(this.response);
            return this;
        });
    }
    /**
     * @returns whether there is a next page to load
     */ hasNextPage() {
        return this._hasNextPage(this.response);
    }
    iterMessages() {
        return __asyncGenerator(this, arguments, function* iterMessages_1() {
            for (const item of this.data){
                yield yield __await(item);
            }
            while(this.hasNextPage()){
                yield __await(this.getNextPage());
                for (const item of this.data){
                    yield yield __await(item);
                }
            }
        });
    }
    [Symbol.asyncIterator]() {
        return __asyncGenerator(this, arguments, function* _a() {
            var _b, e_1, _c, _d;
            try {
                for(var _e = true, _f = __asyncValues(this.iterMessages()), _g; _g = yield __await(_f.next()), _b = _g.done, !_b; _e = true){
                    _d = _g.value;
                    _e = false;
                    const message = _d;
                    yield yield __await(message);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (!_e && !_b && (_c = _f.return)) yield __await(_c.call(_f));
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        });
    }
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/utils/setObjectProperty.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Sets the value at path of object. If a portion of path doesn’t exist it’s created. This is
 * inspired by Lodash's set function, but is simplified to accommodate our use case.
 * For more details, see https://lodash.com/docs/4.17.15#set.
 *
 * @param object The object to modify.
 * @param path The path of the property to set.
 * @param value The value to set.
 * @return Returns object.
 */ __turbopack_context__.s({
    "setObjectProperty": ()=>setObjectProperty
});
function setObjectProperty(object, path, value) {
    if (object == null) {
        return object;
    }
    const keys = path.split(".");
    if (keys.length === 0) {
        // Invalid path; do nothing.
        return object;
    }
    let current = object;
    for(let i = 0; i < keys.length - 1; i++){
        const key = keys[i];
        if (key == null) {
            continue;
        }
        if (!current[key] || typeof current[key] !== "object") {
            current[key] = {};
        }
        current = current[key];
    }
    const lastKey = keys[keys.length - 1];
    if (lastKey == null) {
        // Unreachable.
        return object;
    }
    current[lastKey] = value;
    return object;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/file/file.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toBinaryUploadRequest": ()=>toBinaryUploadRequest,
    "toMultipartDataPart": ()=>toMultipartDataPart
});
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
function toBinaryUploadRequest(file) {
    return __awaiter(this, void 0, void 0, function*() {
        const { data, filename, contentLength, contentType } = yield getFileWithMetadata(file);
        const request = {
            body: data,
            headers: {}
        };
        if (filename) {
            request.headers["Content-Disposition"] = `attachment; filename="${filename}"`;
        }
        if (contentType) {
            request.headers["Content-Type"] = contentType;
        }
        if (contentLength != null) {
            request.headers["Content-Length"] = contentLength.toString();
        }
        return request;
    });
}
function toMultipartDataPart(file) {
    return __awaiter(this, void 0, void 0, function*() {
        const { data, filename, contentType } = yield getFileWithMetadata(file, {
            noSniffFileSize: true
        });
        return {
            data,
            filename,
            contentType
        };
    });
}
function getFileWithMetadata(file_1) {
    return __awaiter(this, arguments, void 0, function*(file, { noSniffFileSize } = {}) {
        var _a, _b, _c, _d, _e;
        if (isFileLike(file)) {
            return getFileWithMetadata({
                data: file
            }, {
                noSniffFileSize
            });
        }
        if ("path" in file) {
            const fs = yield __turbopack_context__.r("[externals]/fs [external] (fs, cjs, async loader)")(__turbopack_context__.i);
            if (!fs || !fs.createReadStream) {
                throw new Error("File path uploads are not supported in this environment.");
            }
            const data = fs.createReadStream(file.path);
            const contentLength = (_a = file.contentLength) !== null && _a !== void 0 ? _a : noSniffFileSize === true ? undefined : yield tryGetFileSizeFromPath(file.path);
            const filename = (_b = file.filename) !== null && _b !== void 0 ? _b : getNameFromPath(file.path);
            return {
                data,
                filename,
                contentType: file.contentType,
                contentLength
            };
        }
        if ("data" in file) {
            const data = file.data;
            const contentLength = (_c = file.contentLength) !== null && _c !== void 0 ? _c : yield tryGetContentLengthFromFileLike(data, {
                noSniffFileSize
            });
            const filename = (_d = file.filename) !== null && _d !== void 0 ? _d : tryGetNameFromFileLike(data);
            return {
                data,
                filename,
                contentType: (_e = file.contentType) !== null && _e !== void 0 ? _e : tryGetContentTypeFromFileLike(data),
                contentLength
            };
        }
        throw new Error(`Invalid FileUpload of type ${typeof file}: ${JSON.stringify(file)}`);
    });
}
function isFileLike(value) {
    return isBuffer(value) || isArrayBufferView(value) || isArrayBuffer(value) || isUint8Array(value) || isBlob(value) || isFile(value) || isStreamLike(value) || isReadableStream(value);
}
function tryGetFileSizeFromPath(path) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const fs = yield __turbopack_context__.r("[externals]/fs [external] (fs, cjs, async loader)")(__turbopack_context__.i);
            if (!fs || !fs.promises || !fs.promises.stat) {
                return undefined;
            }
            const fileStat = yield fs.promises.stat(path);
            return fileStat.size;
        } catch (_fallbackError) {
            return undefined;
        }
    });
}
function tryGetNameFromFileLike(data) {
    if (isNamedValue(data)) {
        return data.name;
    }
    if (isPathedValue(data)) {
        return getNameFromPath(data.path.toString());
    }
    return undefined;
}
function tryGetContentLengthFromFileLike(data_1) {
    return __awaiter(this, arguments, void 0, function*(data, { noSniffFileSize } = {}) {
        if (isBuffer(data)) {
            return data.length;
        }
        if (isArrayBufferView(data)) {
            return data.byteLength;
        }
        if (isArrayBuffer(data)) {
            return data.byteLength;
        }
        if (isBlob(data)) {
            return data.size;
        }
        if (isFile(data)) {
            return data.size;
        }
        if (noSniffFileSize === true) {
            return undefined;
        }
        if (isPathedValue(data)) {
            return yield tryGetFileSizeFromPath(data.path.toString());
        }
        return undefined;
    });
}
function tryGetContentTypeFromFileLike(data) {
    if (isBlob(data)) {
        return data.type;
    }
    if (isFile(data)) {
        return data.type;
    }
    return undefined;
}
function getNameFromPath(path) {
    const lastForwardSlash = path.lastIndexOf("/");
    const lastBackSlash = path.lastIndexOf("\\");
    const lastSlashIndex = Math.max(lastForwardSlash, lastBackSlash);
    return lastSlashIndex >= 0 ? path.substring(lastSlashIndex + 1) : path;
}
function isNamedValue(value) {
    return typeof value === "object" && value != null && "name" in value;
}
function isPathedValue(value) {
    return typeof value === "object" && value != null && "path" in value;
}
function isStreamLike(value) {
    return typeof value === "object" && value != null && ("read" in value || "pipe" in value);
}
function isReadableStream(value) {
    return typeof value === "object" && value != null && "getReader" in value;
}
function isBuffer(value) {
    return typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(value);
}
function isArrayBufferView(value) {
    return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
}
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isUint8Array(value) {
    return typeof Uint8Array !== "undefined" && value instanceof Uint8Array;
}
function isBlob(value) {
    return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFile(value) {
    return typeof File !== "undefined" && value instanceof File;
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/form-data-utils/FormDataWrapper.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FormDataWrapper": ()=>FormDataWrapper,
    "newFormData": ()=>newFormData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$file$2f$file$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/file/file.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/json.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/runtime/runtime.mjs [app-ssr] (ecmascript)");
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
function newFormData() {
    return __awaiter(this, void 0, void 0, function*() {
        return new FormDataWrapper();
    });
}
class FormDataWrapper {
    constructor(){
        this.fd = new FormData();
    }
    setup() {
        return __awaiter(this, void 0, void 0, function*() {
        // noop
        });
    }
    append(key, value) {
        this.fd.append(key, String(value));
    }
    appendFile(key, value) {
        return __awaiter(this, void 0, void 0, function*() {
            const { data, filename, contentType } = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$file$2f$file$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMultipartDataPart"])(value);
            const blob = yield convertToBlob(data, contentType);
            if (filename) {
                this.fd.append(key, blob, filename);
            } else {
                this.fd.append(key, blob);
            }
        });
    }
    getRequest() {
        return {
            body: this.fd,
            headers: {},
            duplex: "half"
        };
    }
}
function isStreamLike(value) {
    return typeof value === "object" && value != null && ("read" in value || "pipe" in value);
}
function isReadableStream(value) {
    return typeof value === "object" && value != null && "getReader" in value;
}
function isBuffer(value) {
    return typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(value);
}
function isArrayBufferView(value) {
    return ArrayBuffer.isView(value);
}
function streamToBuffer(stream) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a, stream_1, stream_1_1;
        var _b, e_1, _c, _d;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RUNTIME"].type === "node") {
            const { Readable } = yield __turbopack_context__.r("[externals]/stream [external] (stream, cjs, async loader)")(__turbopack_context__.i);
            if (stream instanceof Readable) {
                const chunks = [];
                try {
                    for(_a = true, stream_1 = __asyncValues(stream); stream_1_1 = yield stream_1.next(), _b = stream_1_1.done, !_b; _a = true){
                        _d = stream_1_1.value;
                        _a = false;
                        const chunk = _d;
                        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (!_a && !_b && (_c = stream_1.return)) yield _c.call(stream_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
                return Buffer.concat(chunks);
            }
        }
        if (isReadableStream(stream)) {
            const reader = stream.getReader();
            const chunks = [];
            try {
                while(true){
                    const { done, value } = yield reader.read();
                    if (done) break;
                    chunks.push(value);
                }
            } finally{
                reader.releaseLock();
            }
            const totalLength = chunks.reduce((sum, chunk)=>sum + chunk.length, 0);
            const result = new Uint8Array(totalLength);
            let offset = 0;
            for (const chunk of chunks){
                result.set(chunk, offset);
                offset += chunk.length;
            }
            return Buffer.from(result);
        }
        throw new Error(`Unsupported stream type: ${typeof stream}. Expected Node.js Readable stream or Web ReadableStream.`);
    });
}
function convertToBlob(value, contentType) {
    return __awaiter(this, void 0, void 0, function*() {
        if (isStreamLike(value) || isReadableStream(value)) {
            const buffer = yield streamToBuffer(value);
            return new Blob([
                buffer
            ], {
                type: contentType
            });
        }
        if (value instanceof Blob) {
            return value;
        }
        if (isBuffer(value)) {
            return new Blob([
                value
            ], {
                type: contentType
            });
        }
        if (value instanceof ArrayBuffer) {
            return new Blob([
                value
            ], {
                type: contentType
            });
        }
        if (isArrayBufferView(value)) {
            return new Blob([
                value
            ], {
                type: contentType
            });
        }
        if (typeof value === "string") {
            return new Blob([
                value
            ], {
                type: contentType
            });
        }
        if (typeof value === "object" && value !== null) {
            return new Blob([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$json$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJson"])(value)
            ], {
                type: contentType !== null && contentType !== void 0 ? contentType : "application/json"
            });
        }
        return new Blob([
            String(value)
        ], {
            type: contentType
        });
    });
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/stream/Stream.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Stream": ()=>Stream,
    "readableStreamAsyncIterable": ()=>readableStreamAsyncIterable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/runtime/runtime.mjs [app-ssr] (ecmascript)");
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
var __await = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
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
const DATA_PREFIX = "data:";
class Stream {
    constructor({ stream, parse, eventShape, signal }){
        this.controller = new AbortController();
        this.stream = stream;
        this.parse = parse;
        if (eventShape.type === "sse") {
            this.prefix = DATA_PREFIX;
            this.messageTerminator = "\n";
            this.streamTerminator = eventShape.streamTerminator;
        } else {
            this.messageTerminator = eventShape.messageTerminator;
        }
        signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", ()=>this.controller.abort());
        // Initialize shared TextDecoder
        if (typeof TextDecoder !== "undefined") {
            this.decoder = new TextDecoder("utf-8");
        }
    }
    iterMessages() {
        return __asyncGenerator(this, arguments, function* iterMessages_1() {
            var _a, e_1, _b, _c;
            this.controller.signal;
            const stream = readableStreamAsyncIterable(this.stream);
            let buf = "";
            let prefixSeen = false;
            try {
                for(var _d = true, stream_1 = __asyncValues(stream), stream_1_1; stream_1_1 = yield __await(stream_1.next()), _a = stream_1_1.done, !_a; _d = true){
                    _c = stream_1_1.value;
                    _d = false;
                    const chunk = _c;
                    buf += this.decodeChunk(chunk);
                    let terminatorIndex;
                    while((terminatorIndex = buf.indexOf(this.messageTerminator)) >= 0){
                        let line = buf.slice(0, terminatorIndex);
                        buf = buf.slice(terminatorIndex + this.messageTerminator.length);
                        if (!line.trim()) {
                            continue;
                        }
                        if (!prefixSeen && this.prefix != null) {
                            const prefixIndex = line.indexOf(this.prefix);
                            if (prefixIndex === -1) {
                                continue;
                            }
                            prefixSeen = true;
                            line = line.slice(prefixIndex + this.prefix.length);
                        }
                        if (this.streamTerminator != null && line.includes(this.streamTerminator)) {
                            return yield __await(void 0);
                        }
                        const message = yield __await(this.parse(JSON.parse(line)));
                        yield yield __await(message);
                        prefixSeen = false;
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = stream_1.return)) yield __await(_b.call(stream_1));
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        });
    }
    [Symbol.asyncIterator]() {
        return __asyncGenerator(this, arguments, function* _a() {
            var _b, e_2, _c, _d;
            try {
                for(var _e = true, _f = __asyncValues(this.iterMessages()), _g; _g = yield __await(_f.next()), _b = _g.done, !_b; _e = true){
                    _d = _g.value;
                    _e = false;
                    const message = _d;
                    yield yield __await(message);
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally{
                try {
                    if (!_e && !_b && (_c = _f.return)) yield __await(_c.call(_f));
                } finally{
                    if (e_2) throw e_2.error;
                }
            }
        });
    }
    decodeChunk(chunk) {
        let decoded = "";
        // If TextDecoder is available, use the streaming decoder instance
        if (this.decoder != null) {
            decoded += this.decoder.decode(chunk, {
                stream: true
            });
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$runtime$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RUNTIME"].type === "node" && typeof chunk !== "undefined") {
            decoded += Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        }
        return decoded;
    }
}
function readableStreamAsyncIterable(stream) {
    if (stream[Symbol.asyncIterator]) {
        return stream;
    }
    const reader = stream.getReader();
    return {
        next () {
            return __awaiter(this, void 0, void 0, function*() {
                try {
                    const result = yield reader.read();
                    if (result === null || result === void 0 ? void 0 : result.done) {
                        reader.releaseLock();
                    } // release lock when stream becomes closed
                    return result;
                } catch (e) {
                    reader.releaseLock(); // release lock when stream becomes errored
                    throw e;
                }
            });
        },
        return () {
            return __awaiter(this, void 0, void 0, function*() {
                const cancelPromise = reader.cancel();
                reader.releaseLock();
                yield cancelPromise;
                return {
                    done: true,
                    value: undefined
                };
            });
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
}
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ConsoleLogger": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$logger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsoleLogger"],
    "LogLevel": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$logger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogLevel"],
    "Logger": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$logger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"],
    "createLogger": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$logger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$logger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/logger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ConsoleLogger": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ConsoleLogger"],
    "LogLevel": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LogLevel"],
    "Logger": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Logger"],
    "createLogger": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createLogger"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <exports>");
}),
"[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript) <export * as logging>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "logging": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$humeai$2f$voice$2d$react$2f$node_modules$2f$hume$2f$dist$2f$esm$2f$core$2f$logging$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@humeai/voice-react/node_modules/hume/dist/esm/core/logging/index.mjs [app-ssr] (ecmascript)");
}),

};

//# sourceMappingURL=621fa_hume_dist_esm_core_35ff3267._.js.map