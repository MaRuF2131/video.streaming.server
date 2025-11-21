// src/upload/upload.controller.ts

import { Request, Response } from "express";
import { uploadService } from "./upload.service";
import { UploadTable } from "./upload.types";

export const uploadController = {

  // ================================
  // 📌 Create Upload
  // ================================
  async create(req: Request, res: Response) {
    try {
      const {
        name,
        title,
        description,
        videoFilesList,
        roomTableId,
        chatListId,
        rating
      } = req.body as Partial<UploadTable>;

      if (!name || !title || !roomTableId) {
        return res.status(400).json({
          message: "name, title, and roomTableId are required",
        });
      }

      const newUpload = await uploadService.createUpload({
        name,
        title,
        description,
        videoFilesList: videoFilesList || [],
        roomTableId,
        chatListId,
        rating,
      }as unknown as UploadTable);

      res.status(201).json(newUpload);
    } catch (error) {
      res.status(500).json({
        message: "Failed to create upload",
        error,
      });
    }
  },

  // ================================
  // 📌 List Uploads (with Pagination)
  // ================================
  async list(req: Request, res: Response) {
    try {
      const {
        roomTableId,
        chatListId,
        page,
        limit,
      } = req.query as any;

      const uploads = await uploadService.getPaginatedUploads(
        {
          roomTableId,
          chatListId,
        },
        Number(page) || 1,
        Number(limit) || 10
      );

      res.json(uploads);
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch uploads",
        error,
      });
    }
  },

  // ================================
  // 📌 Update Upload
  // ================================
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };
      const body = req.body as Partial<UploadTable>;

      const updated = await uploadService.updateUpload(id, { body } as unknown as UploadTable);

      res.json(updated);
    } catch (error) {
      res.status(500).json({
        message: "Failed to update upload",
        error,
      });
    }
  },

  // ================================
  // 📌 Delete Upload
  // ================================
  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };

      await uploadService.deleteUpload(id);

      res.json({ message: "Upload deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Failed to delete upload",
        error,
      });
    }
  },
};
