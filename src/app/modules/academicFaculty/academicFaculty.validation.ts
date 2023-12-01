import { z } from 'zod';

const careteAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

export const academicFacultyValidation = {
  careteAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
