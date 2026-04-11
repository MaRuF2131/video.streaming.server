import type { IUser } from "./user.types";
import type { UploadTable } from "./upload.types";

export interface RoomTable {
  id: string;
  category: string;

  createdById: string;
  createdBy?: IUser; //  FIX

  uploadTables?: UploadTable[];

  createdAt?: Date;
}