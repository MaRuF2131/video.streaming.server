import { UploadTable } from "../types/upload.types";
export declare const uploadService: {
    createUpload(data: {
        name: string;
        title: string;
        description: string;
        videoFilesList: string[];
        roomTableId: string;
        chatListId?: string;
        rating?: number;
    }): Promise<UploadTable>;
    getPaginatedUploads(query?: {
        roomTableId?: string;
        chatListId?: string;
    }, page?: number, limit?: number): Promise<import("../utils/pagination").PaginatedResult<UploadTable>>;
    updateUpload(id: string, data: Partial<UploadTable>): Promise<UploadTable>;
    deleteUpload(id: string): Promise<UploadTable>;
};
//# sourceMappingURL=upload.service.d.ts.map