import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middleware/validatedRequest';
import { createStudentValidationSchema } from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  userController.createUser,
);

export const userRoutes = router;
