const router = require('express').Router();

const {
    renderRegisterInstitute,
    renderRegisterCareers,
    renderInstituteProfile
} = require('../controllers/register.controllers');

router.get('/registrar-instituto', renderRegisterInstitute);

router.get('/agregar-carrera', renderRegisterCareers)

router.get('/instituto/:id', renderInstituteProfile);
module.exports = router;