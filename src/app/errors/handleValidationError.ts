import mongoose from 'mongoose';
import { TErrorSourses, TGenericResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericResponse => {
  const errorSourses: TErrorSourses = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 500;

  return {
    statusCode,
    message: 'Validation Error',
    errorSourses,
  };
};

export default handleValidationError;
