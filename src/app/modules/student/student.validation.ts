import { z } from 'zod';

const UserNameValidation = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastame: z.string(),
});

const GuardianValidation = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContact: z.string().optional(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContact: z.string().optional(),
});

const LocalGuardianValidation = z
  .object({
    name: z.string(),
    age: z.number().optional(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
  })
  .optional();

export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .max(20, { message: "password cann't be more than 20 characters" }),
    student: z.object({
      name: UserNameValidation,
      gender: z.enum(['Male', 'Female']),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: 'Invalid email address' }),
      contactNo: z.string(),
      emergrncyNo: z.string().optional(),
      guardian: GuardianValidation,
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      localGuardian: LocalGuardianValidation,
      profileImage: z.string().optional(),
      admissionSemester: z.string(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
