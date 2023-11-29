import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middleware/validatedRequest';
import { ceateAcademicValidationSemester } from './academicSemesterSchema.validation';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(ceateAcademicValidationSemester),
  AcademicSemesterControllers.createAcademicSemester,
);

export const academicSemesterRouter = router;
