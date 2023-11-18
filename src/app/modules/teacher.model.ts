import { Schema, model } from 'mongoose'
import {
  Address,
  Classess,
  Teacher,
  TeacherName,
} from './teacher/teacher.interface'

const teacherNameSchema = new Schema<TeacherName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
})

const addressSchema = new Schema<Address>({
  district: { type: String, required: true },
  upazila: { type: String, required: true },
  postOffice: { type: String, required: true },
  zipCode: { type: String },
})

const ClassessSchema = new Schema<Classess>({
  six: { type: String },
  seven: { type: String },
  ten: { type: String, required: true },
  nine: { type: String },
})

const teacherSchema = new Schema<Teacher>({
  id: { type: String, required: true },
  age: { type: Number },
  name: teacherNameSchema,
  email: { type: String },
  gender: ['Male', 'Female'],
  isMarried: { type: Boolean },
  blooddGroup: ['A', 'O+', 'AB', 'A+', 'AB+'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  classess: ClassessSchema,
  presentAdress: addressSchema,
  parmanentAdress: addressSchema,
  institute: { type: String, required: true },
})

// model according interface
export const TeacherModel = model<Teacher>('Teacher', teacherSchema)
