import { Router } from 'express';
import { renderInstituteProfile, renderRegisterCareers, renderRegisterInstitute, renderRegisterUser } from '../controllers/render.js';
import { renderLogin } from "../controllers/render.js";
import { renderAboutUs, renderFaq, renderHome, renderSearch, renderWorkWithUs } from '../controllers/render.js';


const renderRoutes = Router()

renderRoutes.get('/registro-usuario', renderRegisterUser);

renderRoutes.get('/nuevaInstitucion', renderRegisterInstitute);

renderRoutes.get('/instituto/:id/nueva/carrera', renderRegisterCareers)

renderRoutes.get('/instituto/:id', renderInstituteProfile);

renderRoutes.get('/iniciar-sesion', renderLogin)

renderRoutes.get("/", renderHome);

renderRoutes.get('/preguntas-frecuentes', renderFaq);

renderRoutes.get('/trabaja-con-nosotros', renderWorkWithUs);

renderRoutes.get('/acerca-de-nosotros', renderAboutUs)

renderRoutes.get('/busqueda', renderSearch);

export default renderRoutes