/*
    CONTROLLER  : 
        1. Melakukan request data dan mengirimkan response
        2. Melakukan validasi request data
*/

import { Request, Response } from 'express';
import { UsersService } from '../services/users.service';
import { StatusCodes } from 'http-status-codes';

export const UsersController = {
  async create(req: Request, res: Response) {
    try {
      const { username, email, password, fullName } = req.body;

      const createdUser = await UsersService.create({
        username,
        email,
        password,
        fullName,
      });

      res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'User created successfully',
        data: createdUser,
      });
    } catch (error: any) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error?.message,
        data: null,
      });
    }
  },
  async getAll(req: Request, res: Response) {
    const { page = 1, limit = 10 } = req?.query;

    const usersList = await UsersService.getAll(
      parseInt(page as string),
      parseInt(limit as string),
    );

    res.status(StatusCodes.OK).json({
      success: true,
      message: 'User retrieved successfully',
      data: usersList,
    });
  },
  async update() {},
  async delete() {},
};
