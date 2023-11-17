import { Request, Response } from 'express'
import { studentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    //will call service func to call data
    const result = await studentServices.createStudentIntoDB(studentData)
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB()
    res.status(200).json({
      success: true,
      message: 'Data is loadede successsully.....',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.getSingleStudentFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Student data loadede successsully.....',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const studetController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
}
