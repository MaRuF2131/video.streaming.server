import { UploadTable } from "./upload.types";
import { Message } from "./message.types";
export interface ChatList {
    id: string;
    messages?: Message[];
    uploadTable?: UploadTable;
    createdAt: Date;
}
//# sourceMappingURL=chat.types.d.ts.map