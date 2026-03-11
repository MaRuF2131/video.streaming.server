import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import jwt from "jsonwebtoken";

export const Login = async (req: Request, res: Response) => {
  try {
    const { name, email, image } = req.body;
     console.log(req.body);
     
    if (!name || !email) {
      return res.status(401).json({ error: "Name and email both are required" });
    }

    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: { name, email, photoUrl: image },
      });
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // ✅ Send JWT in a secure httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,                        // JS থেকে access করা যাবে না
      secure: process.env.NODE_ENV === "production", // HTTPS only in prod
      sameSite: "lax",                        // CSRF mitigation
      path: "/",                              // cookie path
      maxAge: 7 * 24 * 60 * 60 * 1000,        // 7 days
    });

    return res.json({ success: true, user }); // token cookie এ already পাঠানো হয়েছে

  } catch (error) {
    console.error("Login error:", error);
    if (!res.headersSent) {
      return res.status(500).json({ error: "Login failed" });
    }
  }
};