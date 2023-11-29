import { Schema, model } from 'mongoose';
import { TacademicSemester } from './academicSemester.interface';
import {
  Months,
  academicSemesterCode,
  academicSemesterName,
} from './academicSemester.Const';

export const academicSemesterSchema = new Schema<TacademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

// pre save middleware
academicSemesterSchema.pre('save', async function (next) {
  const isExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isExists) {
    throw new Error('This is alrady exisxts for this year!');
  }
  next();
});

// create a model
export const AcademicSemester = model<TacademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
