import express from 'express'
import { TeacherController } from './teacher.controller'

const router = express.Router()

router.post('/create-teacher', TeacherController.createTeacher)

router.get('/', TeacherController.getAllTeacher)

router.get('/:teacherId', TeacherController.getSingleTeacher)

export const teacherRouters = router
