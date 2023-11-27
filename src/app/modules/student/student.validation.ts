import { z } from 'zod';

const UserNameValidation = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
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

const studentValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: "password cann't be more than 20 characters" }),
  name: UserNameValidation,
  email: z.string().email({ message: 'Invalid email address' }),
  contactNo: z.string(),
  guardian: GuardianValidation,
  // Add other optional properties if needed, but here are the required ones:
  gender: z.enum(['Male', 'Female']),
  emergencyNo: z.string().optional(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),
  localGuardian: LocalGuardianValidation,
  profileImage: z.string().optional(),
  active: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
