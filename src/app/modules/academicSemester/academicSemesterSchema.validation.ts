import { z } from 'zod';
import {
  Months,
  academicSemesterCode,
  academicSemesterName,
} from './academicSemester.Const';

export const ceateAcademicValidationSemester = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const userValidation = {
  ceateAcademicValidationSemester,
};
