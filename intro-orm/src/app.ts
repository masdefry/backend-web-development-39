import express, { Request, Response } from 'express';
import { UsersRouter } from './routers/users.router';

const PORT: number = 8000;

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello, world!',
  });
});

app.use('/users', UsersRouter);

app.listen(PORT, () => {
  console.log(`[⚡APP] Application is running on port: ${PORT}`);
});
