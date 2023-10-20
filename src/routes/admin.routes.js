import { Router } from 'express';
import { getInstitutes } from "../controllers/admin.controllers.js";
import { getInstituteById } from "../controllers/institute.controllers.js";
import { registerUser } from "../controllers/registerUser.controllers.js";
import { eliminarUsuario, editarUsuario } from '../controllers/admin.controllers.js';

const adminRoutes = Router();

adminRoutes.get('/api/get-all-institutes', getInstitutes);
adminRoutes.get('/api/get-institute/:id', getInstituteById);

// Registrar nuevo usuario para institución
adminRoutes.post('/api/create-user', registerUser);


// Ruta para eliminar un usuario
adminRoutes.delete('/eliminar-usuario/:id', eliminarUsuario);

// Ruta para editar un usuario
adminRoutes.put('/editar-usuario/:userId', editarUsuario);


export default adminRoutes;

