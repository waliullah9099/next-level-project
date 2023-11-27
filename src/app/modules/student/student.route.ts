import express from 'express';
import { studetController } from './student.controller';

const router = express.Router();

// will call controller function

router.get('/', studetController.getAllStudent);

router.get('/:studentId', studetController.getSingleStudent);

router.delete('/:studentId', studetController.deldeteSingleStudent);

export const studentRoutes = router;
