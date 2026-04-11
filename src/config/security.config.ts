// src/config/security.config.ts
import helmet from "helmet";
import cors from "cors";
import { sanitizeMiddleware } from "../utils/sanitizer";
import { apiLimiter } from "../middlewares/rateLimit.middleware";

export const security = (app: any) => {
  app.set('trust proxy', 1);
  app.use(apiLimiter);
  app.use(helmet());

  // ⚠️ Dev/Prototype: allow all origins
  app.use(
    cors({
      origin: true, // allows all origins dynamically
      credentials: true, // allow cookies
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
  );

  app.use(sanitizeMiddleware());
};