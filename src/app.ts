/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import config from './app/config';
import { studentRoutes } from './app/modules/student/student.route';
import { teacherRouters } from './app/modules/teacher/teacher.route';
import { userRoutes } from './app/modules/user/user.routes';
import globalErrorHandlar from './app/middleware/global.errorHandlar';
import notFound from './app/middleware/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send(config.database_url);
});

// error handlar funciton call
app.use(globalErrorHandlar);

// API not found
app.use(notFound);

export default app;
