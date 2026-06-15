import { Router } from 'express';
import { ArticlesController } from '../controllers/articles.controller';

const ArticlesRouter = Router();

ArticlesRouter.post('/', ArticlesController.create);

export default ArticlesRouter