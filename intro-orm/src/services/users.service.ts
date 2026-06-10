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
};
