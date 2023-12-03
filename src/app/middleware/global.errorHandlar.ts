/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSourse } from '../interface/error';
import config from '../config';
import zodErrorHandlar from '../errors/handleZodError';

const globalErrorHandlar: ErrorRequestHandler = (err, req, res, next) => {
  // settting defalut value
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Someting is wrong.......';

  let errorSourses: TErrorSourse = [
    {
      path: '',
      message: 'Someting is wrong.......',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = zodErrorHandlar(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSourses = simplifiedError?.errorSourses;

    console.log(simplifiedError);
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSourses,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
    // error: err,
  });
};

export default globalErrorHandlar;
