import mongoose from 'mongoose';
import httpStatus from 'http-status';
import { Student } from './student.model';
import { User } from '../user/user.model';
import AppError from '../../errors/AppError';
import { TStudent } from './student.interfase';
import QueryBuilder from '../../builders/QueryBuilders';
import { studentSearchableQuery } from './student.const';

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  /* console.log('base query', query);
  const queryObj = { ...query };

  const studentSearchableQuery = ['email', 'name.firstName', 'gender'];

  let searchTerm = '';

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Student.find({
    $or: studentSearchableQuery.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // filtering
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
  excludeFields.forEach((el) => delete queryObj[el]);

  // console.log({ query }, { queryObj });

  const filterQuery = searchQuery
    .find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

  let sort = '-createdAt';

  if (query?.sort) {
    sort = query.sort as string;
  }

  const sortQuery = filterQuery.sort(sort);


  let page = 1;
  let limit = 1;
  let skip = 0;

  if (query?.limit) {
    limit = Number(query.limit);
  }
  if (query?.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = paginateQuery.limit(limit);


  // field limiting
  let fields = '-__v';

  if (query?.fields) {
    fields = (query.fields as string).split(',').join(' ');
    // console.log({ fields });
  }

  const fieldsQuery = await limitQuery.select(fields);

  return fieldsQuery;

      */

  const StudentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  )
    .search(studentSearchableQuery)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await StudentQuery.modelQuery;
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id })

  const result = await Student.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const updateStudentInToDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuradian, ...remainingStudentData } = payload;

  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdateData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdateData[`guardian.${key}`] = value;
    }
  }
  if (localGuradian && Object.keys(localGuradian).length) {
    for (const [key, value] of Object.entries(localGuradian)) {
      modifiedUpdateData[`localGuradian.${key}`] = value;
    }
  }

  const result = await Student.findByIdAndUpdate(id, modifiedUpdateData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const userExists = await Student.isUserExixts(id);
    if (!userExists) {
      throw new AppError(httpStatus.NOT_FOUND, 'Student not found');
    }

    const deleteStudent = await Student.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to deleted student');
    }

    // get user _id from deleted student
    const userId = deleteStudent.user;

    const deleteUser = await User.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to deleted user');
    }

    (await session).commitTransaction();
    (await session).endSession();

    return deleteStudent;
  } catch (err) {
    (await session).abortTransaction();
    (await session).endSession();

    throw new Error('Failed to delete student');
  }
};

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentInToDB,
  deleteSingleStudentFromDB,
};
