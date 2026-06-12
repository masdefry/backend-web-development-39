import { AuthLoginRequest, AuthRegisterRequest } from '../models/auth.model';
import { prisma } from '../configs/prisma-client.config';

export const AuthService = {
  async register({ email, username, password, fullName }: AuthRegisterRequest) {
    const findUser = await prisma.user.findUnique({
      where: {
        email,
        username,
      },
    });

    if (!findUser) throw new Error('Email or username already registered');

    const createdUser = await prisma.user.create({
      data: {
        email,
        username,
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

  async login({ usernameOrEmail, password }: AuthLoginRequest) {
    const findUserLogin = await prisma.user.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
        AND: [
          {
            password,
          },
        ],
      },
    }); 

    if (!findUserLogin)
      throw new Error(
        'Account login failed. Please make sure your username/email and password',
      );

    return {
      id: findUserLogin?.id,
      email: findUserLogin?.email,
      username: findUserLogin?.username,
      fullName: findUserLogin?.fullName,
    };
  },
};
