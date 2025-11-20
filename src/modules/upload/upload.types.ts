// upload.types.ts
import { RoomTable } from "../room/room.types";
import { ChatList } from "../chat/chat.types";

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
