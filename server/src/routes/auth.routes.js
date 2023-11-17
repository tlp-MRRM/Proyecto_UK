import { Router } from 'express';
import { authLogin, authLogout, authRegister } from "../controllers/auth.controllers.js";
import { getInstitutesByUser } from '../controllers/institute.controllers.js';
import { registerSchema } from '../models/validations/authUser.js';

const authRoutes = Router()



// Inicio de sesion de la institucion/administrador
authRoutes.post('/api/login', authLogin);

authRoutes.post('/api/register', authRegister, registerSchema);

authRoutes.post('/api/get-institutes-by-user', getInstitutesByUser)

authRoutes.get('/api/logout', authLogout)

export default authRoutes