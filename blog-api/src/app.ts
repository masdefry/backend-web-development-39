import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'dotenv/config';

const PORT: number = parseInt(process.env.PORT!) || 8001;

const app = express();

app.use(express.json());

app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err?.message,
    data: null,
  });
});

if (process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    console.log(`[⚡APP] Application is running on port: ${PORT}`);
  });
}

export default app;
