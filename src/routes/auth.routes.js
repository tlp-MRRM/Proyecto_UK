import { Router } from 'express';
import { authLogin } from "../controllers/auth.controllers.js";

const authRoutes = Router()



// Inicio de sesion de la institucion/administrador
authRoutes.post('/api/iniciar-sesion', authLogin);

export default authRoutes