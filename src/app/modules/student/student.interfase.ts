export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContact: string
  motherName: string
  motherOccupation: string
  motherContact: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastame: string
}

export type LoacalGuardian = {
  name: string
  age: number
  occupation: string
  contactNo: string
  address: string
}

export type Student = {
  id: string
  name: UserName
  gerder: 'Male' | 'Female'
  email: string
  dateOfBirth?: string
  contactNo: string
  emergrncyNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAdress: string
  parmnentAdress: string
  guardian: Guardian
  localGuradian: LoacalGuardian
  profileImage: string
  active: 'active' | 'blocked'
}
