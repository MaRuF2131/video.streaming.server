"use strict";
// user.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const prisma_1 = require("../utils/prisma");
//  Create User
const createUser = async (payload) => {
    const user = await prisma_1.prisma.user.create({
        data: {
            ...payload,
        },
    });
    return user;
};
exports.createUser = createUser;
//  Get All Users (Pagination + Search)
const getUsers = async (query) => {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;
    const search = query.search || "";
    const where = {
        OR: [
            {
                name: {
                    contains: search,
                    mode: "insensitive",
                },
            },
            {
                email: {
                    contains: search,
                    mode: "insensitive",
                },
            },
            {
                phone: {
                    contains: search,
                    mode: "insensitive",
                },
            },
        ],
    };
    const [users, total] = await Promise.all([
        prisma_1.prisma.user.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
        }),
        prisma_1.prisma.user.count({ where }),
    ]);
    return {
        meta: {
            page,
            limit,
            total,
            totalPage: Math.ceil(total / limit),
        },
        data: users,
    };
};
exports.getUsers = getUsers;
//  Get Single User
const getUserById = async (id) => {
    return prisma_1.prisma.user.findUnique({
        where: { id },
        include: {
            roomTables: true,
        },
    });
};
exports.getUserById = getUserById;
//  Update User
const updateUser = async (id, payload) => {
    const user = await prisma_1.prisma.user.update({
        where: { id },
        data: {
            ...payload,
        },
    });
    return user;
};
exports.updateUser = updateUser;
//  Delete User (Reusable)
const deleteUser = async (id) => {
    const user = await prisma_1.prisma.user.delete({
        where: { id },
    });
    return user;
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.service.js.map