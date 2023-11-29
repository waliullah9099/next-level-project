import { Router } from 'express';
import { studentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.routes';
import { teacherRouters } from '../modules/teacher/teacher.route';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRouter,
  },
  {
    path: '/teachers',
    route: teacherRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
