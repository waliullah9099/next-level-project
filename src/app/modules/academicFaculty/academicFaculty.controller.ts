import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicFacultySecrvices } from './academicFaculty.services';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultySecrvices.createAcademicFacultyFromDb(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic-faculty is created successfully.......',
    data: result,
  });
});

export const academicFaculty = {
  createAcademicFaculty,
};
