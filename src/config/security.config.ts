import helmet from "helmet";
import cors from "cors";
import { sanitizeMiddleware } from "../utils/sanitizer";

export const security = (app: any) => {
  app.use(helmet());

  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
  app.use(sanitizeMiddleware());
};
