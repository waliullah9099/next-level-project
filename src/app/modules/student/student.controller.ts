import { Request, Response } from 'express'
import { studentServices } from './student.service'
import studentValidationSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation with joy

    const { student: studentData } = req.body
    const { error } = studentValidationSchema.validate(studentData)
    //will call service func to call data
    const result = await studentServices.createStudentIntoDB(studentData)
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong from joi servis.......',
        error: error.details,
      })
    }

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong.......',
      error: err,
    })
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
