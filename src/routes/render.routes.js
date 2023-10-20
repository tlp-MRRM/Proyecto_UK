import { Router } from 'express';
import { renderGetAllUsers, renderInstituteProfile, renderRegister, renderRegisterAdmin, renderRegisterCareers, renderRegisterInstitute } from '../controllers/render.js';
import { renderLogin } from "../controllers/render.js";
import { renderAboutUs, renderFaq, renderHome, renderSearch, renderWorkWithUs } from '../controllers/render.js';
import { validateAdmin } from '../middlewares/jsonwebtoken/validateAdmin.js';
import { validateToken } from '../middlewares/jsonwebtoken/validateToken.js';


const renderRoutes = Router()

renderRoutes.get("/", renderHome);

renderRoutes.get('/registro-usuario-admin', validateToken, validateAdmin, renderRegisterAdmin);

renderRoutes.get('/nueva-institucion', renderRegisterInstitute);

renderRoutes.get('/instituto/:id/nueva/carrera', renderRegisterCareers)

renderRoutes.get('/instituto/:id', renderInstituteProfile);

renderRoutes.get('/iniciar-sesion', renderLogin)

renderRoutes.get('/registrate', renderRegister)

renderRoutes.get('/admin-users', validateToken, validateAdmin, renderGetAllUsers)


renderRoutes.get('/preguntas-frecuentes', renderFaq);

renderRoutes.get('/trabaja-con-nosotros', renderWorkWithUs);

renderRoutes.get('/acerca-de-nosotros', renderAboutUs)

renderRoutes.get('/busqueda', renderSearch);


export default renderRoutes