"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const security_config_1 = require("./config/security.config");
const room_routes_1 = __importDefault(require("./routes/room.routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
const upload_routes_1 = __importDefault(require("./routes/upload.routes"));
const login_1 = require("./auth/login");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Apply global security headers
(0, security_config_1.security)(app);
// Test route
app.get('/', async (req, res) => {
    res.send('Hello, World!');
});
// Auth route
app.post('/api/auth/login', login_1.Login);
// Module routes
app.use("/api/rooms", room_routes_1.default);
app.use("/api/uploads", upload_routes_1.default);
// Final error handler
app.use(error_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=server.js.map