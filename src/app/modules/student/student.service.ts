import mongoose from 'mongoose';
import httpStatus from 'http-status';
import { Student } from './student.model';
import { User } from '../user/user.model';
import AppError from '../../errors/AppError';
import { TStudent } from './student.interfase';

const getAllStudentFromDB = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id })

  const result = await Student.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const updateStudentInToDB = async (id: string, payload: Partial<TStudent>) => {
  const result = await Student.findOneAndUpdate({ id }, payload);
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const userExists = await Student.isUserExixts(id);
    if (!userExists) {
      throw new AppError(httpStatus.NOT_FOUND, 'Student not found');
    }

    const deleteStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to deleted student');
    }

    const deleteUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to deleted user');
    }

    (await session).commitTransaction();
    (await session).endSession();

    return deleteStudent;
  } catch (err) {
    (await session).abortTransaction();
    (await session).endSession();
  }
};

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentInToDB,
  deleteSingleStudentFromDB,
};
