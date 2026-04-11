import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,

  message: {
    success: false,
    message: "Too many requests, try again later.",
  },

  standardHeaders: true,
  legacyHeaders: false,

  //  IMPORTANT FIX
  keyGenerator: (req) => {
      return (
          req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
          req.socket.remoteAddress ||""
      );
  },
});