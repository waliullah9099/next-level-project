import { AcademicSemesterNameCodeMapper } from './academicSemester.Const';
import { TacademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicValidationSemesterIntoDb = async (
  payload: TacademicSemester,
) => {
  if (AcademicSemesterNameCodeMapper[payload.year] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const academicSemesterServices = {
  createAcademicValidationSemesterIntoDb,
};
