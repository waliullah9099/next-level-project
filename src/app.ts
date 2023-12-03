/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandlar from './app/middleware/global.errorHandlar';
import notFound from './app/middleware/notFound';
import router from './app/routes';

const app: Application = express();

const test = async (req: Request, res: Response) => {
  // Promise.reject();
};
app.get('/', test);

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1', router);

// error handlar funciton call
app.use(globalErrorHandlar);

// API not found
app.use(notFound);

export default app;
