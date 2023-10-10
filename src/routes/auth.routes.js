import { Router } from 'express';
import { authLogin, registerUser } from "../controllers/auth.controllers.js";

const authRoutes = Router()

// Registrar nuevo usuario para institucion
authRoutes.post('/api/registro-usuario', registerUser);

// Inicio de sesion de la institucion/administrador
authRoutes.post('/api/iniciar-sesion', authLogin);

export default authRoutes