import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TLoacalGuardian,
  TStudent,
  TUserName,
} from './student.interfase';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
  },
  middleName: { type: String },
  lastame: {
    type: String,
  },
});

const guardianSchema = new Schema<TGuardian>({
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
});

const localGuradianSchema = new Schema<TLoacalGuardian>({
  name: {
    type: String,
  },
  age: { type: Number },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: [true, 'Please input id'], unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'user id is required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ['Male', 'Female'],
      },
    },
    email: {
      type: String,
      required: [true, 'Bhai email is required'],
      unique: true,
    },
    dateOfBirth: { type: Date },
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// vistual
studentSchema.virtual('fullname').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastame}`;
});

// query middleware

studentSchema.pre('find', function (next) {
  // console.log(this)
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// [      {$match: isDeleted: {$ne: true}},    { '$match': { id: '3453557375' } } ]

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// creating a static methods

studentSchema.statics.isUserExixts = async function (id: string) {
  const existingUser = await Student.findOne({ id });

  return existingUser;
};

// creating a custom custom instance methods
// studentSchema.methods.isExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id: id })
//   return existingUser
// }

// modal
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
