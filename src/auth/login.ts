import { Request, Response } from "express";
import {prisma} from "../utils/prisma";
import jwt from "jsonwebtoken";

export const Login = async (req: Request, res: Response) => {
  try {
    const { name, email, photoUrl } = req.body;

    // user check
    let user = await prisma.user.findUnique({
      where: { email }
    });

    // user create
    if (!user) {
      user = await prisma.user.create({
        data: {
          name,
          email,
          photoUrl
        }
      });
    }

    // JWT token generate
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user
    });

  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};