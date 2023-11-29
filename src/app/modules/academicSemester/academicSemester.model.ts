import { Schema, model } from 'mongoose';
import { TMonths, TacademicSemester } from './academicSemester.interface';

const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterSchema = new Schema<TacademicSemester>(
  {
    name: {
      type: String,
      enum: ['Autum', ' Summer', 'Fall'],
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', ' 03'],
    },
    year: {
      type: Date,
    },
    startMonth: {
      type: String,
      enum: months,
    },
    endMonth: {
      type: String,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemester = model<TacademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
