"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomService = void 0;
const prisma_1 = require("../utils/prisma");
const pagination_1 = require("../utils/pagination");
exports.roomService = {
    // Create RoomTable
    async createRoomTable(data) {
        const slug = data.title.toLowerCase().replace(/\s+/g, "-");
        return prisma_1.prisma.roomTable.create({
            data: {
                title: data.title,
                slug,
                category: data.category,
                createdById: data.createdById,
            },
            include: {
                uploadTables: true,
            },
        });
    },
    // Paginated RoomTable List
    async getPaginatedRoomTables(query, page = 1, limit = 10) {
        return (0, pagination_1.paginate)(
        // findMany callback
        () => prisma_1.prisma.roomTable.findMany({
            where: {
                ...(query?.category && {
                    category: { contains: query.category, mode: "insensitive" },
                }),
                ...(query?.createdById && {
                    createdById: query.createdById,
                }),
            },
            orderBy: { createdAt: "desc" },
            skip: (page - 1) * limit,
            take: limit,
            include: {
                createdBy: true,
                uploadTables: true,
            },
        }), 
        // count callback
        () => prisma_1.prisma.roomTable.count({
            where: {
                ...(query?.category && {
                    category: { contains: query.category, mode: "insensitive" },
                }),
                ...(query?.createdById && {
                    createdById: query.createdById,
                }),
            },
        }), { page, limit });
    },
    // Update RoomTable Category
    async updateRoomTable(id, category) {
        return prisma_1.prisma.roomTable.update({
            where: { id },
            data: { category },
            include: {
                createdBy: true,
                uploadTables: true,
            },
        });
    },
    // Delete
    async deleteRoomTable(id) {
        return prisma_1.prisma.roomTable.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=room.service.js.map