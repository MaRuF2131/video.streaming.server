// message.types.ts
import { IUser } from "./user.types";
import { ChatList } from "./chat.types";

export interface Message {
  id: string;
  message: string;
  messageAt: Date;

  messageById: string;
  messageBy?: IUser;

  chatListId?: string;
  chatList?: ChatList;
}
