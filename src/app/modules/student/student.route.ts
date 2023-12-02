import express from 'express';
import { studetController } from './student.controller';
import validateRequest from '../../middleware/validatedRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// will call controller function

router.get('/', studetController.getAllStudent);

router.get('/:studentId', studetController.getSingleStudent);

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  studetController.updateStudent,
);

router.delete('/:studentId', studetController.deldeteSingleStudent);

export const studentRoutes = router;
