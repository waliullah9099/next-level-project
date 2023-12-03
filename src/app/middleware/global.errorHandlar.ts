/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSourses } from '../interface/error';
import config from '../config';
import zodErrorHandlar from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';

const globalErrorHandlar: ErrorRequestHandler = (err, req, res, next) => {
  // settting defalut value
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Someting is wrong.......';

  let errorSourses: TErrorSourses = [
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
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSourses = simplifiedError?.errorSourses;
    console.log('ami error from mongoose........... bujso vaiya?');
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
