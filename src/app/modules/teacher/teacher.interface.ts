export type TeacherName = {
  firstName: string
  middleName: string
  lastName: string
}

export type Classess = {
  six: string
  seven: string
  ten: string
  nine: string
}

export type Address = {
  district: string
  upazila: string
  postOffice: string
  zipCode: string
}

export type Teacher = {
  id: string
  age: number
  name: TeacherName
  email?: string
  gender: 'Male' | 'Female'
  isMarried: boolean
  blooddGroup: 'A' | 'A+' | 'O' | 'O+' | 'AB' | 'AB+'
  classess: Classess
  dateOfBirth: string
  contactNo: string
  presentAdress: Address
  parmanentAdress: Address
  institute: string
}
