import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';

const router = Router();

router.post(
  '/academic-emester',
  AcademicSemesterControllers.createAcademicSemester,
);

export const academicSemesterRouter = router;
