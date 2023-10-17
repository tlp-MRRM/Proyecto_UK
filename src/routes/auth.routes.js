import { Router } from 'express';
import { authLogin } from "../controllers/auth.controllers.js";
import { getInstitutesByUser } from '../controllers/institute.controllers.js';

const authRoutes = Router()



// Inicio de sesion de la institucion/administrador
authRoutes.post('/api/login', authLogin);

authRoutes.post('/api/get-institutes-by-user', getInstitutesByUser)
export default authRoutes