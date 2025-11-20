import { prisma } from "../../utils/prisma";
import { paginate } from "../../utils/pagination";
import { RoomTable } from "./room.types";

export const roomService = {
  // Create RoomTable
  async createRoomTable(data: {
    category: string;
    createdById: string;
  }): Promise<RoomTable> {
    return prisma.roomTable.create({
      data,
      include: {
        createdBy: true,
        uploadTables: true,
      },
    }) as unknown as RoomTable;
  },

  // Paginated RoomTable List
  async getPaginatedRoomTables(
    query?: { category?: string; createdById?: string },
    page: number = 1,
    limit: number = 10
  ) {
    return paginate<RoomTable>(
      // findMany callback
      () =>
        prisma.roomTable.findMany({
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
        }) as unknown as Promise<RoomTable[]>,

      // count callback
      () =>
        prisma.roomTable.count({
          where: {
            ...(query?.category && {
              category: { contains: query.category, mode: "insensitive" },
            }),
            ...(query?.createdById && {
              createdById: query.createdById,
            }),
          },
        }),

      { page, limit }
    );
  },

  // Update RoomTable Category
  async updateRoomTable(id: string, category: string): Promise<RoomTable> {
    return prisma.roomTable.update({
      where: { id },
      data: { category },
      include: {
        createdBy: true,
        uploadTables: true,
      },
    }) as unknown as RoomTable;
  },

  // Delete
  async deleteRoomTable(id: string): Promise<RoomTable> {
    return prisma.roomTable.delete({
      where: { id },
    }) as unknown as RoomTable;
  },
};
