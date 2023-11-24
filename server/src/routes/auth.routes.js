import { Router } from 'express';
import { authLogin, authRegister } from "../controllers/auth.controllers.js";
import { getMainInstituteByUser } from '../controllers/institute.controllers.js';
import { registerSchema } from '../models/validations/registerAdmin.schema.js';
import { validateSchema } from '../middlewares/express-validator/express-validator.js';

const authRoutes = Router()



// Inicio de sesion de la institucion/administrador
authRoutes.post('/api/auth/login', authLogin);

authRoutes.post('/api/auth/signup', registerSchema, validateSchema, authRegister);

authRoutes.post('/api/get-institutes-by-user/:id_user', getMainInstituteByUser)


export default authRoutes
