import express from 'express';
import { FacultyControllers } from './faculty.controller';
import validateRequest from '../../middleware/validatedRequest';
import { updateFacultyValidationSchema } from './faculty.validation';
const router = express.Router();

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get('/', FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;
