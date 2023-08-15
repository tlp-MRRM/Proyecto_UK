import ctrl from "../controllers/login.controllers.js";
const { login, sesion } = ctrl
import ctrl from '../controllers/auth.controllers.js'
const {auth_login} = ctrl
import {Router} from 'express';
const router = Router()

// Manejar el envío del formulario de inicio de sesión

router.get('/iniciar-sesion', login)
router.post('/iniciar-sesion', auth_login);

export default router