import express, { Request, Response } from 'express'; 
import { security } from "./config/security.config";
import roomRoutes from "./modules/room/room.routes";
import { sanitizeMiddleware } from "./utils/sanitizer";
import { errorHandler } from "./middlewares/error.middleware";
import uploadRoutes from './modules/upload/upload.routes';
import { Login } from './auth/login';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

// Apply global security headers
security(app);

// Test route
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Auth route
app.post('/api/auth/login', Login);

// Module routes
app.use("/api/rooms", roomRoutes);
app.use("/api/uploads", uploadRoutes);

// Final error handler
app.use(errorHandler);

export default app;