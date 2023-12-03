import { TErrorSourses } from '../interface/error';

/* eslint-disable @typescript-eslint/no-explicit-any */
const handleDublicateError = (err: any) => {
  // eslint-disable-next-line no-useless-escape
  const match = err.message.match(/\"(.*?)\"/);

  const extractedMessage = match && match[1];

  const errorSourses: TErrorSourses = [
    {
      path: '',
      message: `${extractedMessage} is already exists.......`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid Id',
    errorSourses,
  };
};

export default handleDublicateError;
