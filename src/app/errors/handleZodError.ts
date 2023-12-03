import { ZodError, ZodIssue } from 'zod';
import { TErrorSourse } from '../interface/error';

const zodErrorHandlar = (err: ZodError) => {
  const errorSourses: TErrorSourse = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSourses,
  };
};

export default zodErrorHandlar;
