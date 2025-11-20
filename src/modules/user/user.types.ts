// user.types.ts
import { RoomTable } from "../room/room.types";
import { Message } from "../chat/message.types";

export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;

  roomTables?: RoomTable[];
  messages?: Message[];

  createdAt: Date;
}
