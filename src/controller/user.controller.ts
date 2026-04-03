// user.controller.ts
import { Request, Response } from "express";
import * as userService from "../service/user.service";

//  Get all users (Pagination + Search)
export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers(req.query);

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error,
    });
  }
};

// Get single user
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id as string);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
      error,
    });
  }
};

//  Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await userService.deleteUser(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deleted,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error,
    });
  }
};