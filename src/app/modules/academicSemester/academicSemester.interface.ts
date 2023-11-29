type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TacademicSemester = {
  name: 'Autum' | ' Summer' | 'Fall';
  code: '01' | '02' | ' 03';
  year: TMonth;
  startMonth: TMonth;
};
