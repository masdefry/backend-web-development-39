/*
    SERVICE: 
        1. Melakukan logika backend: Perhitungan discount, menentukan total harga
        2. Tempat untuk melakukan query ke database
*/

import { prisma } from '../configs/prisma-client.config';
import { UsersCreateRequest, UsersUpdateRequest } from '../models/users.model';

export const UsersService = {
  async create({ username, email, password, fullName }: UsersCreateRequest) {
    const createdUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
        fullName,
      },
    });

    return {
      email: createdUser?.email,
      username: createdUser?.username,
      fullName: createdUser?.fullName,
    };
  },

  async getAll(page: number, limit: number) {
    // page: 01 -> 0 data
    // page: 02 -> 10 data
    // page: 03 -> 20 data

    const offset: number = (page - 1) * limit;

    const usersData = await prisma.user.findMany({
      take: limit,
      skip: offset,
      where: {
        deletedAt: null
      }
    });

    const totalUsersData = await prisma.user.count();

    return {
      usersData,
      meta: {
        page,
        limit,
        totalData: totalUsersData,
        totalPage: Math.ceil(totalUsersData / limit),
      },
    };
  },

  async update({
    username,
    email,
    password,
    fullName,
    id,
  }: UsersUpdateRequest) {
    const findUserById = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!findUserById) throw new Error(`User with id=${id} not found!`);

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        username,
        email,
        password,
        fullName,
      },
    });

    return {
      username: updatedUser?.username,
      email: updatedUser?.email,
      fullName: updatedUser?.fullName,
    };
  },

  async delete(id: string) {
    const findUserById = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!findUserById) throw new Error(`User with id=${id} not found!`);

    // Hard Delete
    // await prisma.user.delete({
    //   where: {
    //     id
    //   }
    // })

    // Soft Delete
    await prisma.user.update({
      data: {
        deletedAt: new Date()
      }, 
      where: {
        id
      }
    })
  },
};
