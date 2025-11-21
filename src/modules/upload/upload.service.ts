// src/upload/upload.service.ts

import { prisma } from "../../utils/prisma";
import { paginate } from "../../utils/pagination";
import { UploadTable } from "./upload.types";

export const uploadService = {
  // =====================================
  // 📌 CREATE UploadTable
  // =====================================
  async createUpload(data: {
    name: string;
    title: string;
    description: string;
    videoFilesList: string[];
    roomTableId: string;
    chatListId?: string;
    rating?: number;
  }): Promise<UploadTable> {
    return prisma.uploadTable.create({
      data,
      include: {
        roomTable: true,
        chatList: true,
      },
    }) as unknown as UploadTable;
  },

  // =====================================
  // 📌 PAGINATED UploadTable LIST
  // =====================================
  async getPaginatedUploads(
    query?: { roomTableId?: string; chatListId?: string },
    page: number = 1,
    limit: number = 10
  ) {
    return paginate<UploadTable>(
      // findMany callback
      () =>
        prisma.uploadTable.findMany({
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
        }) as unknown as Promise<UploadTable[]>,

      // count callback
      () =>
        prisma.uploadTable.count({
          where: {
            ...(query?.roomTableId && {
              roomTableId: query.roomTableId,
            }),
            ...(query?.chatListId && {
              chatListId: query.chatListId,
            }),
          },
        }),

      { page, limit }
    );
  },

  // =====================================
  // 📌 UPDATE UploadTable
  // =====================================
  async updateUpload(
    id: string,
    data: Partial<UploadTable>
  ): Promise<UploadTable> {
    return prisma.uploadTable.update({
      where: { id },
      data: data as any,
      include: {
        roomTable: true,
        chatList: true,
      },
    }) as unknown as UploadTable;
  },

  // =====================================
  // 📌 DELETE Upload
  // =====================================
  async deleteUpload(id: string): Promise<UploadTable> {
    return prisma.uploadTable.delete({
      where: { id },
    }) as unknown as UploadTable;
  },
};
