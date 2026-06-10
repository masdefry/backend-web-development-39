/*
    SERVICE: 
        1. Melakukan logika backend: Perhitungan discount, menentukan total harga
        2. Tempat untuk melakukan query ke database
*/

import { prisma } from '../configs/prisma-client.config';
import { UsersCreateRequest } from '../models/users.model';

export const UsersService = {
  async create({ username, email, password, fullName }: UsersCreateRequest) {
    const createdUser = await prisma.user.create({
        data: {
            username, 
            email, 
            password, 
            fullName
        }
    });
    
    return {
      email: createdUser?.email, 
      username: createdUser?.username, 
      fullName: createdUser?.fullName
    }
  },

  async getAll(page: number, limit: number){
    // page: 01 -> 0 data
    // page: 02 -> 10 data
    // page: 03 -> 20 data

    const offset: number = (page-1) * limit

    return await prisma.user.findMany({
      take: limit, 
      skip: offset
    })
  }
};