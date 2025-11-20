import express, { Request, Response } from 'express'; 
import { security } from "./config/security.config";
import roomRoutes from "./modules/room/room.routes";
import { sanitizeMiddleware } from "./utils/sanitizer";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

// Apply global security headers
security(app);

// Global sanitization middleware
app.use(sanitizeMiddleware());

app.get('/',async(req:Request , res:Response )=>{
    res.send('Hello, World!');
});
app.use("/api/rooms", roomRoutes);

// Final error handler
app.use(errorHandler);

export default app;
