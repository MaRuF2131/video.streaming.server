// upload.types.ts
import { RoomTable } from "./room.types";
import { ChatList } from "./chat.types";

export interface UploadTable {
  id: string;
  name: string;
  title: string;
  description: string;
  videoFilesList: string[];

  chatListId?: string;
  chatList?: ChatList;

  roomTableId: string;
  roomTable?: RoomTable;

  rating?: number;
  createdAt: Date;
}
