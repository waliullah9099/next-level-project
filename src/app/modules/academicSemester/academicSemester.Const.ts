import {
  TAcademicSemesterNameCodeMapper,
  TMonths,
  TacademicSemesterCode,
  TacademicSemesterName,
} from './academicSemester.interface';

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterName: TacademicSemesterName[] = [
  'Autum',
  'Summer',
  'Fall',
];
export const academicSemesterCode: TacademicSemesterCode[] = ['01', '02', '03'];

export const AcademicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autum: '01',
  Summer: '02',
  Fall: '03',
};
