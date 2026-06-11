import { prisma } from "../configs/prisma-client.config";

export const UserRepository = {
  async findById(userId: string) {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  },
};
