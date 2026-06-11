import { Request, Response } from 'express';
import { TodosService } from '../services/todos.service';
import { StatusCodes } from 'http-status-codes';

export const TodosController = {
  async create(req: Request, res: Response) {
    const { title, schedule } = req.body;
    const { userId } = req.headers;

    if (!userId) throw new Error('User Id must be provide!');

    const createdTodo = await TodosService.create({
      title,
      schedule,
      userId: userId as string,
    });

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'User created successfully',
      data: createdTodo,
    });
  },
  async getAll(req: Request, res: Response) {
    const { page = 1, limit = 10 } = req.query;
    const { userId } = req.headers;

    if (!userId) throw new Error('User Id must be provide!');

    const { todosData, meta } = await TodosService.getAll(
      parseInt(page as string),
      parseInt(limit as string),
      userId as string,
    );

    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Todos retrived successfully',
      data: todosData,
      meta,
    });
  },
  update() {},
  delete() {},
};
