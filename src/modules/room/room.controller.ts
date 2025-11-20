import { Request, Response } from "express";
import { roomService } from "./room.service";

export const roomController = {
  // Create RoomTable
  async create(req: Request, res: Response) {
    try {
      const { category, createdById } = req.body as {
        category: string;
        createdById: string;
      };

      if (!category || !createdById) {
        return res
          .status(400)
          .json({ message: "Category and createdById are required" });
      }

      const roomTable = await roomService.createRoomTable({
        category,
        createdById,
      });

      res.status(201).json(roomTable);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to create RoomTable", error });
    }
  },

  // List / Paginated RoomTables
  async list(req: Request, res: Response) {
    try {
      const { category, createdById, page, limit } = req.query as any;

      const roomTables = await roomService.getPaginatedRoomTables(
        {
          category,
          createdById,
        },
        Number(page) || 1,
        Number(limit) || 10
      );

      res.json(roomTables);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to fetch RoomTables", error });
    }
  },

  // Update RoomTable
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };
      const { category } = req.body as { category: string };

      if (!category) {
        return res.status(400).json({ message: "Category is required" });
      }

      const updated = await roomService.updateRoomTable(id, category);
      res.json(updated);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update RoomTable", error });
    }
  },

  // Delete RoomTable
  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };

      await roomService.deleteRoomTable(id);
      res.json({ message: "RoomTable deleted" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to delete RoomTable", error });
    }
  },
};
