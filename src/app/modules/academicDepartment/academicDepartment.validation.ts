import { z } from 'zod';

const careteAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty must be string...',
      required_error: 'Name is required',
    }),
    academicDepartment: z.string({
      invalid_type_error: 'Academic Department must be string...',
      required_error: 'Faculty is required',
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Faculty must be string...',
        required_error: 'Name is required',
      })
      .optional(),
    academicDepartment: z
      .string({
        invalid_type_error: 'Academic Department must be string...',
        required_error: 'Faculty is required',
      })
      .optional(),
  }),
});

export const academicDepartmentValidationSchema = {
  careteAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
