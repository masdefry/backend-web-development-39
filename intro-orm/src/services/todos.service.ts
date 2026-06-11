import { prisma } from '../configs/prisma-client.config';
import { TodosCreateRequest } from '../models/todos.model';
import { UserRepository } from '../repositories/user.repository';

export const TodosService = {
  async create({ title, schedule, userId }: TodosCreateRequest) {
    const findUserById = await UserRepository.findById(userId);

    if (!findUserById) throw new Error(`User with id = ${userId} not found!`);

    const createdTodo = await prisma.todo.create({
      data: {
        title,
        schedule,
        userId,
      },
    });

    return createdTodo;
  },

  async getAll(page: number, limit: number, userId: string) {
    const findUserById = await UserRepository.findById(userId);

    if(!findUserById) throw new Error(`User with id = ${userId} not found!`)

    const offset = (page - 1) * limit;

    const todosData = await prisma.todo.findMany({
      skip: offset,
      take: limit,
      where: {
        deletedAt: null,
        userId,
      },
    });

    const totalTodosData = await prisma.todo.count();

    return {
      todosData,
      meta: {
        page,
        limit,
        totalData: totalTodosData,
        totalPage: Math.ceil(totalTodosData / limit),
      },
    };
  },
};
