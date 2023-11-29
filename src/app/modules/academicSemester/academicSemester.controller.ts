import catchAsync from '../../utils/catchAsync';
import { academicSemesterServices } from './academicSemester.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result =
    await academicSemesterServices.createAcademicValidationSemesterIntoDb(
      req.body,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic-semester is created successfully.......',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
