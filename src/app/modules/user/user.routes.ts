import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/create-student', userController.createUser);

export const userRoutes = router;
