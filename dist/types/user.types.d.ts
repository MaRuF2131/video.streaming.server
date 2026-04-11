import type { RoomTable } from "./room.types";
import type { Message } from "./message.types";
export interface IUser {
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    photoUrl?: string | null;
    coverPhoto?: string | null;
    website?: string | null;
    location?: string | null;
    jobTitle?: string | null;
    about?: string | null;
    facebook?: string | null;
    twitter?: string | null;
    linkedin?: string | null;
    roomTables?: RoomTable[];
    messages?: Message[];
    createdAt: Date;
    updatedAt?: Date;
}
export interface CreateUserDTO {
    name: string;
    email: string;
    phone?: string | null;
    photoUrl?: string | null;
    coverPhoto?: string | null;
    website?: string | null;
    location?: string | null;
    jobTitle?: string | null;
    about?: string | null;
    facebook?: string | null;
    twitter?: string | null;
    linkedin?: string | null;
}
export interface UpdateUserDTO {
    name?: string;
    phone?: string | null;
    photoUrl?: string | null;
    coverPhoto?: string | null;
    website?: string | null;
    location?: string | null;
    jobTitle?: string | null;
    about?: string | null;
    facebook?: string | null;
    twitter?: string | null;
    linkedin?: string | null;
}
//# sourceMappingURL=user.types.d.ts.map