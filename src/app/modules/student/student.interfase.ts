import { Model, Types } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact?: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastame: string;
};

export type TLoacalGuardian = {
  name: string;
  age: number;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  user: Types.ObjectId;
  gender: 'Male' | 'Female';
  email: string;
  dateOfBirth?: Date;
  contactNo: string;
  emergrncyNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAdress: string;
  parmnentAdress: string;
  guardian: TGuardian;
  localGuradian: TLoacalGuardian;
  profileImage?: string;
  admissionSemester: Types.ObjectId;
  isDeleted: boolean;
};

// for creating static

export interface StudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExixts(id: string): Promise<TStudent | null>;
}

// for creating instance

// export type TStudentMethods = {
//   isExists(id: string): Promise<TStudent | null>
// }

// export type TStudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   TStudentMethods
// >
