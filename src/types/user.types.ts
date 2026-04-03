// user.types.ts
import { RoomTable } from "./room.types";
import { Message } from "./message.types";

export interface IUser {
  id: string;

  // Basic Info

  name: string;

  email: string;
  phone?: string;

  // Profile Media
  photoUrl?: string | null;
  coverPhoto?: string | null;

  // Contact Info
  website?: string | null;
  location?: string | null;

  // Professional Info
  jobTitle?: string | null;
  about?: string  | null;

  // Social Links
  facebook?: string | null;
  twitter?: string | null;
  linkedin?: string | null;

  // Relations
  roomTables?: RoomTable[];
  messages?: Message[];

  // Meta
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  phone?: string;

  photoUrl?: string;
  coverPhoto?: string;

  website?: string;
  location?: string;

  jobTitle?: string;
  about?: string;

  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface UpdateUserDTO {
  name?: string;

  phone?: string;
  photoUrl?: string;
  coverPhoto?: string;

  website?: string;
  location?: string;

  jobTitle?: string;
  about?: string;

  facebook?: string;
  twitter?: string;
  linkedin?: string;
}
