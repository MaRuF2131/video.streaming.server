// message.types.ts
import { User } from "../user/user.types";
import { ChatList } from "./chat.types";

export interface Message {
  id: string;
  message: string;
  messageAt: Date;

  messageById: string;
  messageBy?: User;

  chatListId?: string;
  chatList?: ChatList;
}
