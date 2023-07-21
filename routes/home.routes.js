const router = require('express').Router();

const {
    renderHome,
    renderFaq,
    renderWorkWithUs,
    renderAboutUs
} = require('../controllers/home.controllers')

router.get("/", renderHome);

router.get('/preguntas-frecuentes', renderFaq);

router.get('/trabaja-con-nosotros', renderWorkWithUs);

router.get('/acerca-de-nosotros', renderAboutUs)

module.exports = router;