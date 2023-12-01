import { Schema, model } from 'mongoose';
import { TacademicDepartment } from './academicDepartment.interface';

export const academicDepartmentSchema = new Schema<TacademicDepartment>(
  {
    name: { type: String, required: true, unique: true },
    academicDepartment: { type: Schema.Types.ObjectId, ref: 'AcademicFaculty' },
  },
  {
    timestamps: true,
  },
);

export const AcademicDepartment = model<TacademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
