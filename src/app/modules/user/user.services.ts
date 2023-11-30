import config from '../../config';
import { Student } from '../student/student.model';
import { TStudent } from '../student/student.interfase';
import { TUser } from './user.interface';
import { User } from './user.model';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { generateStudentId } from './user.utils';

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
    throw new Error('admissionSemester not found');
  }

  // set  id
  userData.id = await generateStudentId(admissionSemester);

  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id; // reference _id

    const newStudent = await Student.create(payload);
    return newStudent;
  }

  return newUser;
};

export const userServices = {
  createStudentIntoDB,
};
