import { IUser, CreateUserDTO, UpdateUserDTO } from "../types/user.types";
export declare const createUser: (payload: CreateUserDTO) => Promise<IUser>;
export declare const getUsers: (query: any) => Promise<{
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    };
    data: {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        photoUrl: string | null;
        coverPhoto: string | null;
        phone: string | null;
        website: string | null;
        location: string | null;
        jobTitle: string | null;
        about: string | null;
        facebook: string | null;
        twitter: string | null;
        linkedin: string | null;
        updatedAt: Date;
    }[];
}>;
export declare const getUserById: (id: string) => Promise<IUser | null>;
export declare const updateUser: (id: string, payload: UpdateUserDTO) => Promise<IUser>;
export declare const deleteUser: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    photoUrl: string | null;
    coverPhoto: string | null;
    phone: string | null;
    website: string | null;
    location: string | null;
    jobTitle: string | null;
    about: string | null;
    facebook: string | null;
    twitter: string | null;
    linkedin: string | null;
    updatedAt: Date;
}>;
//# sourceMappingURL=user.service.d.ts.map