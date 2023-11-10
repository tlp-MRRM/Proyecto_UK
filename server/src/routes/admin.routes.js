import { Router } from 'express';
import { getInstitutes } from "../controllers/admin.controllers.js";
import { getInstituteById } from "../controllers/institute.controllers.js";
import { eliminarUsuario, editarUsuario } from '../controllers/admin.controllers.js';
import { validateToken } from '../middlewares/jsonwebtoken/validateToken.js';
import { validateAdmin } from '../middlewares/jsonwebtoken/validateAdmin.js';
import { registerUserSchema } from '../models/validations/registerUser.schema.js';
import { validateSchema } from '../middlewares/express-validator/express-validator.js';
import { registerAdmin } from '../controllers/register,controllers.js';


const adminRoutes = Router();

adminRoutes.get('/api/get-all-institutes', getInstitutes);
adminRoutes.get('/api/get-institute/:id', getInstituteById);

// Registrar nuevo usuario para institución
adminRoutes.post('/api/register-admin', validateToken, validateAdmin, registerUserSchema, validateSchema, registerAdmin);


// Ruta para eliminar un usuario
adminRoutes.delete('/eliminar-usuario/:id', validateToken, validateAdmin, eliminarUsuario);

// Ruta para editar un usuario
adminRoutes.put('/editar-usuario/:userId', validateToken, validateAdmin, editarUsuario);


export default adminRoutes;

