import mongoose from 'mongoose';
import { TErrorSourses, TGenericResponse } from '../interface/error';

const handleCastError = (err: mongoose.Error.CastError): TGenericResponse => {
  const errorSourses: TErrorSourses = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid Id',
    errorSourses,
  };
};

export default handleCastError;
