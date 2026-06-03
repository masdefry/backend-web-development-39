import { Router } from 'express';
import { TodosController } from '../controllers/todos.controller';

const TodosRouter = Router();

TodosRouter.get('/', TodosController.getAll);
TodosRouter.post('/', TodosController.create);
TodosRouter.put('/:id', TodosController.update);

export default TodosRouter;
