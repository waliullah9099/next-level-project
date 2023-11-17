import express from 'express'
import { studetController } from './student.controller'

const router = express.Router()

// will call controller function
router.post('/create-student', studetController.createStudent)

router.get('/', studetController.getAllStudent)

router.get('/:studentId', studetController.getSingleStudent)

export const studentRoutes = router
