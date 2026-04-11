// user.types.ts
import type { RoomTable } from "./room.types";
import type { Message } from "./message.types";

export interface IUser {
  id: string;

  // Basic Info

  name: string;

  email: string;
  phone?: string | null;

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
