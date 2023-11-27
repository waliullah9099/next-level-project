import Joi from 'joi'

const userValodationNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .max(20)
    .pattern(/^[A-Z][a-zA-Z]*$/)
    .messages({
      'any.required': 'Bhai first name is required',
      'string.max': "First name can't be more than 20 characters",
      'string.pattern.base':
        '{#label} should start with an uppercase letter and contain only letters',
    }),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .pattern(/^[a-zA-Z]*$/)
    .messages({
      'any.required': 'Bhai last name is required',
      'string.pattern.base': '{#label} should contain only letters',
    }),
})

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': 'Bhai father name is required',
  }),
  fatherOccupation: Joi.string(),
  fatherContact: Joi.string().required(),
  motherName: Joi.string().required().messages({
    'any.required': 'Bhai mother name is required',
  }),
  motherOccupation: Joi.string(),
  motherContact: Joi.string().required(),
})

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Bhai local guardian name is required',
  }),
  age: Joi.number().integer().min(0),
  occupation: Joi.string(),
  contactNo: Joi.string(),
  address: Joi.string(),
})

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'Please input id',
  }),
  name: userValodationNameSchema.required(),
  gender: Joi.string().valid('Male', 'Female').required().messages({
    'any.only': '{#label} should be Male or Female',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Bhai email is required',
    'string.email': '{#label} is not a valid email type',
  }),
  dateOfBirth: Joi.string(),
  contactNo: Joi.string().required(),
  emergencyNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema,
  profileImage: Joi.string(),
  active: Joi.string().valid('active', 'blocked').default('active'),
})

export default studentValidationSchema
