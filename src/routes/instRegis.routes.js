import { Router } from 'express';
import { findAllLocalitiesById, findAllProvinces, newInstitute } from '../controllers/register.controllers.js'
import { createInstituteSchema } from '../models/validations/institute.schema.js';
import { validateSchema } from '../middlewares/express-validator/express-validator.js';
import { authRequired } from '../middlewares/jsonwebtoken/validateToken.js';

const instiRegisterRoutes = Router()

// Select localities
instiRegisterRoutes.get('/api/provincias', findAllProvinces);
instiRegisterRoutes.get('/api/provincia/:id/localidades', findAllLocalitiesById);

//register new institute
instiRegisterRoutes.post('/api/instituto', authRequired, createInstituteSchema, validateSchema, newInstitute);

export default instiRegisterRoutes;