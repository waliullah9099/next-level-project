import config from '../../config';
import { Student } from '../student/student.model';
import { TStudent } from '../student/student.interfase';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if doesn't given password, use default password
  userData.password = password || (config.default_passwors as string);

  // set student role
  userData.password = 'student';

  // set manually id
  userData.id = '2030100001';

  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }

  return newUser;
};

export const userServices = {
  createStudentIntoDB,
};
