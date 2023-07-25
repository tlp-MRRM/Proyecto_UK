const router = require('express').Router();

const {
    renderRegisterInstitute,
    renderRegisterCareers,
    renderInstituteProfile,
    findAllProvinces,
    findAllLocalities,
    findAllLocalitiesById
} = require('../controllers/register.controllers');

router.get('/nuevaInstitucion', renderRegisterInstitute);

router.get('/instituto/:id/nueva/carrera', renderRegisterCareers)

router.get('/instituto/:id', renderInstituteProfile);


router.get('/api/provincias', findAllProvinces);
router.get('/api/provincia/:id/localidades', findAllLocalitiesById)
router.get('/api/localidades', findAllLocalities)

module.exports = router;