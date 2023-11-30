import { TacademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyFromDb = async (payload: TacademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyFromDb = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDb = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

export const academicFacultySecrvices = {
  createAcademicFacultyFromDb,
  getAllAcademicFacultyFromDb,
  getSingleAcademicFacultyFromDb,
};
