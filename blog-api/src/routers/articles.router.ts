import { Router } from 'express';
import { ArticlesController } from '../controllers/articles.controller';

const ArticlesRouter = Router();

ArticlesRouter.post('/', ArticlesController.create);
ArticlesRouter.get('/', ArticlesController.getList);
ArticlesRouter.get('/:id', ArticlesController.getById);

export default ArticlesRouter