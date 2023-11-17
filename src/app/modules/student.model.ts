import { Schema, model } from 'mongoose'
import {
  Guardian,
  LoacalGuardian,
  Student,
  UserName,
} from './student/student.interfase'

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastame: { type: String, required: true },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContact: { type: String, required: true },
})

const localGuradianSchema = new Schema<LoacalGuardian>({
  name: { type: String, required: true },
  age: { type: Number },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
})

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: userNameSchema,
  gerder: ['Male', 'Female'],
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergrncyNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAdress: { type: String, required: true },
  parmnentAdress: { type: String, required: true },
  guardian: guardianSchema,
  localGuradian: localGuradianSchema,
  profileImage: { type: String },
  active: ['active', 'blocked'],
})

// modal
export const StudentModel = model<Student>('Student', studentSchema)
