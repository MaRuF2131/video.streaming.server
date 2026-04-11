"use strict";
// src/upload/upload.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadService = void 0;
const prisma_1 = require("../utils/prisma");
const pagination_1 = require("../utils/pagination");
exports.uploadService = {
    //  CREATE UploadTable
    async createUpload(data) {
        return prisma_1.prisma.uploadTable.create({
            data,
            include: {
                roomTable: true,
                chatList: true,
            },
        });
    },
    //  PAGINATED UploadTable LIST
    async getPaginatedUploads(query, page = 1, limit = 10) {
        return (0, pagination_1.paginate)(
        // findMany callback
        () => prisma_1.prisma.uploadTable.findMany({
            where: {
                ...(query?.roomTableId && {
                    roomTableId: query.roomTableId,
                }),
                ...(query?.chatListId && {
                    chatListId: query.chatListId,
                }),
            },
            orderBy: { createdAt: "desc" },
            skip: (page - 1) * limit,
            take: limit,
            include: {
                roomTable: true,
                chatList: true,
            },
        }), 
        // count callback
        () => prisma_1.prisma.uploadTable.count({
            where: {
                ...(query?.roomTableId && {
                    roomTableId: query.roomTableId,
                }),
                ...(query?.chatListId && {
                    chatListId: query.chatListId,
                }),
            },
        }), { page, limit });
    },
    //  UPDATE UploadTable
    async updateUpload(id, data) {
        return prisma_1.prisma.uploadTable.update({
            where: { id },
            data: data,
            include: {
                roomTable: true,
                chatList: true,
            },
        });
    },
    //  DELETE Upload
    async deleteUpload(id) {
        return prisma_1.prisma.uploadTable.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=upload.service.js.map