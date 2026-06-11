import { Router } from 'express';
import { TodosController } from '../controllers/todos.controller';

export const TodosRouter = Router({mergeParams: true});

TodosRouter.post('/', TodosController.create);
TodosRouter.get('/', TodosController.getAll);
TodosRouter.put('/:id', TodosController.update);
TodosRouter.delete('/:id', TodosController.delete);