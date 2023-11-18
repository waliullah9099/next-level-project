import { Request, Response } from 'express'
import { TeacherServices } from './teacher.services'

const createTeacher = async (req: Request, res: Response) => {
  try {
    const { Teacher: teacherData } = req.body
    const result = await TeacherServices.createTeacherFromDB(teacherData)

    // send response
    res.status(200).json({
      success: true,
      message: 'Create New Teacher Successfully......',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const getAllTeacher = async (req: Request, res: Response) => {
  try {
    const result = await TeacherServices.getAllTeacherFromDB()

    // send response
    res.status(200).json({
      success: true,
      message: 'All Teacher data here......',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getSingleTeacher = async (req: Request, res: Response) => {
  try {
    const { teacherId } = req.params
    const result = await TeacherServices.getSingleTeacherFromDB(teacherId)

    // send response
    res.status(200).json({
      success: true,
      message: 'Single teacher data here......',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const TeacherController = {
  createTeacher,
  getAllTeacher,
  getSingleTeacher,
}
