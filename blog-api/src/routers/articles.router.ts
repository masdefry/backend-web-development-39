import { Router } from 'express';
import { ArticlesController } from '../controllers/articles.controller';

const ArticlesRouter = Router();

ArticlesRouter.post('/', ArticlesController.create);
ArticlesRouter.get('/', ArticlesController.getList);

export default ArticlesRouter