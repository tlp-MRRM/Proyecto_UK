import ctrl from "../controllers/login.controllers.js";
const { login, sesion } = ctrl
import {Router} from 'express';
const router = Router()

router.get("/iniciar-sesion", login);
router.post("/iniciar-sesion", sesion);

export default router