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

const getAcademicSemesterIntoDb = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterIntoDb = async (id: string) => {
  const result = await AcademicSemester.findOne({ id });
  return result;
};

const updateAcademicSemesterIntoDb = async (
  id: string,
  payload: Partial<TacademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    AcademicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid semester code!');
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const academicSemesterServices = {
  createAcademicValidationSemesterIntoDb,
  getAcademicSemesterIntoDb,
  getSingleAcademicSemesterIntoDb,
  updateAcademicSemesterIntoDb,
};
