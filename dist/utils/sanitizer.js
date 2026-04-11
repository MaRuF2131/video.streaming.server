"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlainObject = isPlainObject;
exports.sanitizeString = sanitizeString;
exports.sanitizeObject = sanitizeObject;
exports.sanitizeMiddleware = sanitizeMiddleware;
const xss_1 = __importDefault(require("xss"));
const validator_1 = __importDefault(require("validator"));
// ===============================
//  SANITIZER + SECURITY HELPERS
// ===============================
function isPlainObject(val) {
    return Object.prototype.toString.call(val) === "[Object Object]";
}
function sanitizeString(str, options = {}) {
    if (typeof str !== "string")
        return str;
    let s = str.trim();
    s = s.replace(/\0/g, ""); // remove null bytes
    s = (0, xss_1.default)(s); // prevent XSS
    if (options.maxLength && s.length > options.maxLength) {
        s = s.slice(0, options.maxLength);
    }
    return s;
}
/**
 * Sanitize deeply any input object/array/string
 */
function sanitizeObject(input, options = {}) {
    const { maxStringLength = 2000, allowedKeysRegex = null, removeEmpty = false } = options;
    if (typeof input === "string")
        return sanitizeString(input, { maxLength: maxStringLength });
    if (typeof input === "number" || typeof input === "boolean" || input === null)
        return input;
    if (Array.isArray(input)) {
        return input
            .map((item) => sanitizeObject(item, options))
            .filter((v) => !(removeEmpty && v === ""));
    }
    if (isPlainObject(input)) {
        const out = {};
        for (const [rawKey, rawVal] of Object.entries(input)) {
            if (rawKey.startsWith("$"))
                continue;
            if (rawKey.includes("."))
                continue;
            if (["__proto__", "constructor", "prototype"].includes(rawKey))
                continue;
            if (allowedKeysRegex && !allowedKeysRegex.test(rawKey))
                continue;
            const safeKey = validator_1.default.whitelist(rawKey, "a-zA-Z0-9_\\-");
            if (!safeKey)
                continue;
            const cleanVal = sanitizeObject(rawVal, options);
            if (removeEmpty &&
                (cleanVal === "" || (Array.isArray(cleanVal) && cleanVal.length === 0))) {
                continue;
            }
            out[safeKey] = cleanVal;
        }
        return out;
    }
    return input;
}
/**
 * Middleware: sanitize req.body/query/params
 */
function sanitizeMiddleware(options = {}) {
    return async (req, res, next) => {
        try {
            if (req.body)
                req.body = sanitizeObject(req.body, options);
            if (req.query) {
                const cleanQuery = sanitizeObject(req.query, options);
                for (const key of Object.keys(req.query))
                    delete req.query[key];
                Object.assign(req.query, cleanQuery);
            }
            if (req.params) {
                const cleanParams = sanitizeObject(req.params, options);
                for (const key of Object.keys(req.params))
                    delete req.params[key];
                Object.assign(req.params, cleanParams);
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
}
//# sourceMappingURL=sanitizer.js.map