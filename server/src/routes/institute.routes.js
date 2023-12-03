
import { Router } from 'express';
import {
  getAllInstitutes,
  getInstituteById
} from '../controllers/institute.controllers.js';

//import { instituteSchemaValidation } from '../models/validations/institute.schema.js';
import { validateSchema } from '../middlewares/express-validator/express-validator.js';

const router = Router();

router.get('/institute', getAllInstitutes);
router.get('/institute/:id', getInstituteById);


//router.post('/institute', instituteSchemaValidation, validateSchema, createInstituteCtrl);

export default router
