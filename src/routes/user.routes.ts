// user.routes.ts
import { Router } from "express";
import * as userController from "../controller/user.controller";

const router = Router();

//  Get all users (with pagination & search)
router.get("/", userController.getUsers);

//  Get single user
router.get("/:id", userController.getUserById);

//  Delete user
router.delete("/:id", userController.deleteUser);

export default router;