import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: object; // অথবা যদি JWT payload type জানো, সেটাও দিতে পারো
    }
  }
}
