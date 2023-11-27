import { Router } from 'express';
import { studentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.routes';
import { teacherRouters } from '../modules/teacher/teacher.route';

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
    path: '/teachers',
    route: teacherRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
