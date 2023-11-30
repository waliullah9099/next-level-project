import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middleware/validatedRequest';
import {
  ceateAcademicValidationSemester,
  updateAcademicSemesterValidationSchema,
} from './academicSemesterSchema.validation';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(ceateAcademicValidationSemester),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAcademicSemester);

router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.put(
  '/:semesterId',
  validateRequest(updateAcademicSemesterValidationSchema),
  AcademicSemesterControllers.updateAcademicSemester,
);

export const academicSemesterRouter = router;
