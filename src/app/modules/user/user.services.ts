import config from '../../config';
import { Student } from '../student/student.model';
import { TStudent } from '../student/student.interfase';
import { TUser } from './user.interface';
import { User } from './user.model';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { generateStudentId } from './user.utils';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import mongoose from 'mongoose';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if doesn't given password, use default password
  userData.password = password || (config.default_passwors as string);

  // set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  if (!admissionSemester) {
    throw new AppError(httpStatus.NOT_FOUND, 'admissionSemester not found');
  }

  // start session

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // set id
    userData.id = await generateStudentId(admissionSemester);

    // create a user (transection - 1)
    const newUser = await User.create([userData], { session });

    // create a student
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user....');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; // reference _id

    // create a student (transection - 2)
    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to create student....',
      );
    }

    // save parmanently
    await session.commitTransaction();
    await session.endSession();

    return newStudent;

    return newUser;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userServices = {
  createStudentIntoDB,
};
