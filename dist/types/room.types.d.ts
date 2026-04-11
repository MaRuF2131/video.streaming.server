import type { IUser } from "./user.types";
import type { UploadTable } from "./upload.types";
export interface RoomTable {
    id: string;
    category: string;
    createdById: string;
    createdBy?: IUser;
    uploadTables?: UploadTable[];
    createdAt?: Date;
}
//# sourceMappingURL=room.types.d.ts.map