import {Router} from 'express';
const router = Router()
import ctrl from'../controllers/home.controllers.js'
const {
    renderHome,
    renderFaq,
    renderWorkWithUs,
    renderAboutUs
} = ctrl

router.get("/", renderHome);

router.get('/preguntas-frecuentes', renderFaq);

router.get('/trabaja-con-nosotros', renderWorkWithUs);

router.get('/acerca-de-nosotros', renderAboutUs)

export default router