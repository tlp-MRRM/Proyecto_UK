import { registerUser } from "../controllers/registerUser.controllers.js";
import { Router } from 'express';

const adminRoutes = Router()

// Registrar nuevo usuario para institucion
adminRoutes.post('/api/registro-usuario', registerUser);

export default adminRoutes