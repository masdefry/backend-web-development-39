import express, { Request, Response } from 'express';
import TodosRouter from './routers/todos.router';

const PORT: number = 8000;

const app = express();

// Body Parser  : Method untuk meng-allow request dari body
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello, world!',
  });
});

app.use('/todos', TodosRouter)

app.listen(PORT, () => {
  console.log(`Application is running on port: ${PORT}`);
});
