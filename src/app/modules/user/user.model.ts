import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bycript from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'faculty', 'student'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['in-progress', 'block'],
      default: 'in-progress',
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // docu
  user.password = await bycript.hash(
    user.password,
    Number(config.bycript_sald_rounds),
  );
  next();
});

// post save middleware / hook
userSchema.post('save', function (doc, next) {
  // set '' after saving password
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
