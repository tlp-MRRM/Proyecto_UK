import { Router } from 'express';
import { authLogin } from "../controllers/auth.js";
import { registerUser } from '../controllers/registerUser.controllers.js'

const authRoutes = Router()

// Registrar nuevo usuario para institucion
authRoutes.post('/api/registro-usuario', registerUser);

// Inicio de sesion de la institucion/administrador
authRoutes.post('/api/iniciar-sesion', authLogin);

export default authRoutes