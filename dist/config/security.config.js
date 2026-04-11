"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.security = void 0;
// src/config/security.config.ts
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const sanitizer_1 = require("../utils/sanitizer");
const rateLimit_middleware_1 = require("../middlewares/rateLimit.middleware");
const security = (app) => {
    app.set('trust proxy', 1);
    app.use(rateLimit_middleware_1.apiLimiter);
    app.use((0, helmet_1.default)());
    // ⚠️ Dev/Prototype: allow all origins
    app.use((0, cors_1.default)({
        origin: true, // allows all origins dynamically
        credentials: true, // allow cookies
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    }));
    app.use((0, sanitizer_1.sanitizeMiddleware)());
};
exports.security = security;
//# sourceMappingURL=security.config.js.map