import { Schema, model } from 'mongoose'

import {
  Guardian,
  LoacalGuardian,
  Student,
  UserName,
} from './student/student.interfase'

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
  },
  middleName: { type: String },
  lastame: {
    type: String,
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
  },
  fatherOccupation: { type: String },
  fatherContact: { type: String, required: true },
  motherName: {
    type: String,
  },
  motherOccupation: { type: String },
  motherContact: { type: String, required: true },
})

const localGuradianSchema = new Schema<LoacalGuardian>({
  name: {
    type: String,
  },
  age: { type: Number },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
})

const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, 'Please input id'], unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gerder: {
    type: String,
    enum: {
      values: ['Male', 'Female'],
      message: '{VALUE} is not valid',
    },
  },
  email: {
    type: String,
    required: [true, 'Bhai email is required'],
    unique: true,
  },
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergrncyNo: { type: String },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAdress: { type: String },
  parmnentAdress: { type: String },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuradian: localGuradianSchema,
  profileImage: { type: String },
  active: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
})

// modal
export const StudentModel = model<Student>('Student', studentSchema)
