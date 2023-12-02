import { Schema, model } from 'mongoose';
import { TacademicDepartment } from './academicDepartment.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

export const academicDepartmentSchema = new Schema<TacademicDepartment>(
  {
    name: { type: String, required: true, unique: true },
    academicFaculty: { type: Schema.Types.ObjectId, ref: 'AcademicFaculty' },
  },
  {
    timestamps: true,
  },
);

academicDepartmentSchema.pre('save', async function (next) {
  const isDeptExists = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDeptExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This department already exists......',
    );
  }
  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDeptExists = await AcademicDepartment.findOne(query);

  if (!isDeptExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This department does not exists......',
    );
  }
  next();
});

export const AcademicDepartment = model<TacademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
