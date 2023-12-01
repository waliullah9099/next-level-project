import { Router } from 'express';
import { academicDepartmentControllers } from './AcademicDepartment.controller';
import validateRequest from '../../middleware/validatedRequest';
import { academicDepartmentValidationSchema } from './academicDepartment.validation';

const router = Router();

router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidationSchema.careteAcademicDepartmentValidationSchema,
  ),
  academicDepartmentControllers.createAcademicDepartment,
);

router.get('/', academicDepartmentControllers.getAllAcademicDepartment);

router.get(
  '/:facultyId',
  academicDepartmentControllers.getSingleAcademicDepartment,
);

router.put(
  '/:facultyId',
  validateRequest(
    academicDepartmentValidationSchema.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentControllers.updateAcademicDepartment,
);

export const academicDepartmentRoutes = router;
