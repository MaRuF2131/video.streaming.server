import { User } from "../user/user.types";
import { UploadTable } from "../upload/upload.types";

export interface RoomTable {
  id: string;
  category: string;

  createdById: string;
  createdBy?: User;

  uploadTables?: UploadTable[];

  createdAt: Date;
}
