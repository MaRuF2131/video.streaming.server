// chat.types.ts
import { UploadTable } from "../upload/upload.types";
import { Message } from "./message.types";

export interface ChatList {
  id: string;

  messages?: Message[];

  uploadTable?: UploadTable;

  createdAt: Date;
}
