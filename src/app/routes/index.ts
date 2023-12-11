import { Router } from 'express';
import { studentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.routes';
import { teacherRouters } from '../modules/teacher/teacher.route';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.router';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.router';
import { academicDepartmentRoutes } from '../modules/academicDepartment/AcademicDepartment.router';
import { facultyRoutes } from '../modules/faculty/faculty.route';
import { adminRoutes } from '../modules/admin/admin.route';
import { courseRouters } from '../modules/course/course.route';

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
    path: '/faculties',
    route: facultyRoutes,
  },
  {
    path: '/admins',
    route: adminRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRouter,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/courses',
    route: courseRouters,
  },
  {
    path: '/teachers',
    route: teacherRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
