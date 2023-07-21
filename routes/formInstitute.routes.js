const router = require('express').Router();

const {
    renderRegisterInstitute,
    renderRegisterCareers,
    renderInstituteProfile,
    renderWorkWithUs
} = require('../controllers/register.controllers');


router.get('/nuevaInstitucion', renderRegisterInstitute);

router.get('/instituto/:id/nueva/carrera', renderRegisterCareers)

router.get('/instituto/:id', renderInstituteProfile);

module.exports = router;