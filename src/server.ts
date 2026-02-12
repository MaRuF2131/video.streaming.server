import express, { Request, Response } from 'express'; 
import { security } from "./config/security.config";
import roomRoutes from "./modules/room/room.routes";
import { sanitizeMiddleware } from "./utils/sanitizer";
import { errorHandler } from "./middlewares/error.middleware";
import uploadRoutes from './modules/upload/upload.routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

// Apply global security headers
security(app);


app.get('/',async(req:Request , res:Response )=>{
    res.send('Hello, World!');
});
/* app.use("/api/rooms", roomRoutes); */
app.use("/api/rooms",async (req:Request , res:Response , next)=>{
    console.log("Rooms route accessed");
    next();
}, roomRoutes);

app.use("/api/uploads",async (req:Request , res:Response , next)=>{
    console.log("Uploads route accessed");
    next();
}, uploadRoutes);

// Final error handler
app.use(errorHandler);

export default app;
