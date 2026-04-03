// user.service.ts

import { prisma } from "../utils/prisma";
import { IUser, CreateUserDTO, UpdateUserDTO } from "../types/user.types";

//  Create User
export const createUser = async (payload: CreateUserDTO): Promise<IUser> => {

  const user = await prisma.user.create({
    data: {
      ...payload,
    },
  });

  return user;
};

//  Get All Users (Pagination + Search)
export const getUsers = async (query: any) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const search = query.search || "";

  const where = {
    OR: [
      {
        name: {
          contains: search,
          mode: "insensitive"as const,
        },
      },
      {
        email: {
          contains: search,
          mode: "insensitive"as const,
        },
      },
      {
        phone: {
          contains: search,
          mode: "insensitive"as const,
        },
      },
    ],
  };

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.user.count({ where }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPage: Math.ceil(total / limit),
    },
    data: users,
  };
};

//  Get Single User
export const getUserById = async (id: string): Promise<IUser | null> => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      roomTables: true,
    },
  });
};

//  Update User
export const updateUser = async (
  id: string,
  payload: UpdateUserDTO
): Promise<IUser> => {

  const user = await prisma.user.update({
    where: { id },
    data: {
      ...payload,
    },
  });

  return user;
};

//  Delete User (Reusable)
export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id },
  });

  return user;
};