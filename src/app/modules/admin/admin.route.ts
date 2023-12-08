import express from 'express';
import { AdminControllers } from './admin.controller';
import { updateAdminValidationSchema } from './admin.validation';
import validateRequest from '../../middleware/validatedRequest';

const router = express.Router();

router.get('/', AdminControllers.getAllAdmins);

router.get('/:id', AdminControllers.getSingleAdmin);

router.patch(
  '/:id',
  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete('/:adminId', AdminControllers.deleteAdmin);

export const adminRoutes = router;
