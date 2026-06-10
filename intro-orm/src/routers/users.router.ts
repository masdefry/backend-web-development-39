import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';

export const UsersRouter = Router();

UsersRouter.post('/', UsersController.create);
UsersRouter.get('/', UsersController.getAll);
UsersRouter.put('/:id', UsersController.update);
UsersRouter.delete('/:id', UsersController.delete);
