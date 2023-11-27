import { TeacherModel } from './teacher.model';
import { Teacher } from './teacher.interface';

const createTeacherFromDB = async (teacher: Teacher) => {
  const result = await TeacherModel.create(teacher);
  return result;
};

const getAllTeacherFromDB = async () => {
  const result = await TeacherModel.find();
  return result;
};

const getSingleTeacherFromDB = async (id: string) => {
  const result = await TeacherModel.find({ id });
  return result;
};

export const TeacherServices = {
  createTeacherFromDB,
  getAllTeacherFromDB,
  getSingleTeacherFromDB,
};
