import { User } from "./user.types";
import { UploadTable } from "./upload.types";

export interface RoomTable {
  id: string;
  category: string;

  createdById: string;
  createdBy?: User;

  uploadTables?: UploadTable[];

  createdAt: Date;
}
