"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomController = void 0;
const room_service_1 = require("../service/room.service");
exports.roomController = {
    // Create RoomTable
    async create(req, res) {
        try {
            const { category, createdById } = req.body;
            if (!category || !createdById) {
                return res
                    .status(400)
                    .json({ message: "Category and createdById are required" });
            }
            const roomTable = await room_service_1.roomService.createRoomTable({
                title: "Default Title", // You can modify this as needed
                category,
                createdById,
            });
            res.status(201).json(roomTable);
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Failed to create RoomTable", error });
        }
    },
    // List / Paginated RoomTables
    async list(req, res) {
        try {
            const { category, createdById, page, limit } = req.query;
            const roomTables = await room_service_1.roomService.getPaginatedRoomTables({
                category,
                createdById,
            }, Number(page) || 1, Number(limit) || 10);
            res.json(roomTables);
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Failed to fetch RoomTables", error });
        }
    },
    // Update RoomTable
    async update(req, res) {
        try {
            const { id } = req.params;
            const { category } = req.body;
            if (!category) {
                return res.status(400).json({ message: "Category is required" });
            }
            const updated = await room_service_1.roomService.updateRoomTable(id, category);
            res.json(updated);
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Failed to update RoomTable", error });
        }
    },
    // Delete RoomTable
    async remove(req, res) {
        try {
            const { id } = req.params;
            await room_service_1.roomService.deleteRoomTable(id);
            res.json({ message: "RoomTable deleted" });
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Failed to delete RoomTable", error });
        }
    },
};
//# sourceMappingURL=room.controller.js.map