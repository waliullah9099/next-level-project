import QueryBuilder from '../../builders/QueryBuilders';
import { courseSearchableFields } from './coures.const';
import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseInToDb = async () => {
  const result = await Course.create();
  return result;
};
const getAllCourseFromDb = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourses.course'),
    query,
  )
    .search(courseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await courseQuery.modelQuery;
  return result;
};
const getSingleCourseFromDb = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};
const updateSingleCourseInToDb = async (
  id: string,
  payload: Partial<TCourse>,
) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { payload },
    { new: true, runValidators: true },
  );
  return result;
};
const deleteSingleCourseFromDb = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const courseServices = {
  createCourseInToDb,
  getAllCourseFromDb,
  getSingleCourseFromDb,
  updateSingleCourseInToDb,
  deleteSingleCourseFromDb,
};
