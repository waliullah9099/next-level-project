import { ZodError, ZodIssue } from 'zod';
import { TErrorSourses, TGenericResponse } from '../interface/error';

const zodErrorHandlar = (err: ZodError): TGenericResponse => {
  const errorSourses: TErrorSourses = err.issues.map((issue: ZodIssue) => {
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
