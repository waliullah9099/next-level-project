import { Types } from 'mongoose';

export type TacademicDepartment = {
  name: string;
  academicDepartment: Types.ObjectId;
};
