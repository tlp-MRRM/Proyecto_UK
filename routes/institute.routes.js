import { Router } from 'express';
import {
  createInstituteCtrl,
  getInstituteCtrl,
  getInstituteByIdCtrl
} from '../controllers/institute.controllers.js';
import { validator } from '../validations/validator.js';
import { instituteSchemaValidation } from '../validations/institute.schema.js';

const router = Router();

router.get('/institute', getInstituteCtrl);
router.get('/institute/:id', getInstituteByIdCtrl);


router.post('/institute', instituteSchemaValidation, validator, createInstituteCtrl);

export default router
