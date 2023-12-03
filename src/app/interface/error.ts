export type TErrorSourses = {
  path: string | number;
  message: string;
}[];

export type TGenericResponse = {
  statusCode: number;
  message: string;
  errorSourses: TErrorSourses;
};
