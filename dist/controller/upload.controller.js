"use strict";
// src/upload/upload.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadController = void 0;
const upload_service_1 = require("../service/upload.service");
exports.uploadController = {
    // ================================
    //  Create Upload
    // ================================
    async create(req, res) {
        try {
            const { name, title, description, videoFilesList, roomTableId, chatListId, rating } = req.body;
            if (!name || !title || !roomTableId) {
                return res.status(400).json({
                    message: "name, title, and roomTableId are required",
                });
            }
            const newUpload = await upload_service_1.uploadService.createUpload({
                name,
                title,
                description,
                videoFilesList: videoFilesList || [],
                roomTableId,
                chatListId,
                rating,
            });
            res.status(201).json(newUpload);
        }
        catch (error) {
            res.status(500).json({
                message: "Failed to create upload",
                error,
            });
        }
    },
    // ================================
    //  List Uploads (with Pagination)
    // ================================
    async list(req, res) {
        try {
            const { roomTableId, chatListId, page, limit, } = req.query;
            const uploads = await upload_service_1.uploadService.getPaginatedUploads({
                roomTableId,
                chatListId,
            }, Number(page) || 1, Number(limit) || 10);
            res.json(uploads);
        }
        catch (error) {
            res.status(500).json({
                message: "Failed to fetch uploads",
                error,
            });
        }
    },
    // ================================
    //  Update Upload
    // ================================
    async update(req, res) {
        try {
            const { id } = req.params;
            const body = req.body;
            const updated = await upload_service_1.uploadService.updateUpload(id, { body });
            res.json(updated);
        }
        catch (error) {
            res.status(500).json({
                message: "Failed to update upload",
                error,
            });
        }
    },
    // ================================
    //  Delete Upload
    // ================================
    async remove(req, res) {
        try {
            const { id } = req.params;
            await upload_service_1.uploadService.deleteUpload(id);
            res.json({ message: "Upload deleted" });
        }
        catch (error) {
            res.status(500).json({
                message: "Failed to delete upload",
                error,
            });
        }
    },
};
//# sourceMappingURL=upload.controller.js.map