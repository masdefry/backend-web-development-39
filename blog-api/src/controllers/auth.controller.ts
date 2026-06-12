import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { StatusCodes } from 'http-status-codes';

export const AuthController = {
  async register(req: Request, res: Response) {
    const { email, username, password, fullName } = req.body;

    const createdUser = await AuthService.register({
      email,
      username,
      password,
      fullName,
    });

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: `Account created successfully`,
      data: createdUser,
    });
  },
  async login(req: Request, res: Response) {
    const { usernameOrEmail, password } = req.body;

    const userLogin = await AuthService.login({ usernameOrEmail, password });

    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Account loged in successfully',
      data: userLogin,
    });
  },
};
