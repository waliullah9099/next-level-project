import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastame: z.string(),
});

const createGuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContact: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContact: z.string(),
});

const createLocalGuardianValidationSchema = z.object({
  name: z.string(),
  age: z.number(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .max(20, { message: "password cann't be more than 20 characters" }),
    student: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['Male', 'Female']),
      dateOfBirth: z.string(),
      email: z.string().email({ message: 'Invalid email address' }),
      contactNo: z.string(),
      emergrncyNo: z.string(),
      guardian: createGuardianValidationSchema,
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      localGuardian: createLocalGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImage: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContact: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContact: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  age: z.number().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z
    .object({
      student: z
        .object({
          name: updateUserNameValidationSchema.optional(),
          gender: z.enum(['Male', 'Female']).optional(),
          dateOfBirth: z.string().optional(),
          email: z
            .string()
            .email({ message: 'Invalid email address' })
            .optional(),
          contactNo: z.string().optional(),
          emergencyNo: z.string().optional(),
          guardian: updateGuardianValidationSchema.optional(),
          bloodGroup: z
            .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
            .optional(),
          presentAddress: z.string().optional(),
          permanentAddress: z.string().optional(),
          localGuardian: updateLocalGuardianValidationSchema.optional(),
          admissionSemester: z.string().optional(),
          profileImage: z.string().optional(),
          academicDepartment: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
