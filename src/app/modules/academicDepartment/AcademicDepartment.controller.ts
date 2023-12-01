import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicDepartmentSecrvices } from './academicDepartment.services';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentSecrvices.createAcademicDepartmentInTomDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic-Department is created successfully.......',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentSecrvices.getAllAcademicDepartmentFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Academic-Department is loaded successfully.......',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { DepartmentId } = req.params;
  const result =
    await academicDepartmentSecrvices.getSingleAcademicDepartmentFromDb(
      DepartmentId,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Academic-Department is loaded successfully.......',
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await academicDepartmentSecrvices.updateAcademicDepartmentInToDb(
      semesterId,
      req.body,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated Academic-Department is updated successfully.......',
    data: result,
  });
});

export const academicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
