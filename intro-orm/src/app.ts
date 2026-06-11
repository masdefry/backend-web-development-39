import express, { NextFunction, Request, Response } from 'express';
import { UsersRouter } from './routers/users.router';
import { StatusCodes } from 'http-status-codes';
import { TodosRouter } from './routers/todos.router';

const PORT: number = 8000;

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello, world!',
  });
});

app.use('/users', UsersRouter);
app.use('/todos', TodosRouter);

// Centralized Error Handlers
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err?.message,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`[⚡APP] Application is running on port: ${PORT}`);
});
