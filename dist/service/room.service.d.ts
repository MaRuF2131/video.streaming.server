import { RoomTable } from "../types/room.types";
export declare const roomService: {
    createRoomTable(data: {
        title: string;
        category: string;
        createdById: string;
    }): Promise<{
        uploadTables: {
            id: string;
            title: string;
            createdAt: Date;
            name: string;
            description: string;
            videoFilesList: string[];
            rating: number | null;
            chatListId: string | null;
            roomTableId: string;
        }[];
    } & {
        id: string;
        title: string;
        slug: string;
        category: string;
        createdAt: Date;
        createdById: string;
    }>;
    getPaginatedRoomTables(query?: {
        category?: string;
        createdById?: string;
    }, page?: number, limit?: number): Promise<import("../utils/pagination").PaginatedResult<RoomTable>>;
    updateRoomTable(id: string, category: string): Promise<RoomTable>;
    deleteRoomTable(id: string): Promise<RoomTable>;
};
//# sourceMappingURL=room.service.d.ts.map