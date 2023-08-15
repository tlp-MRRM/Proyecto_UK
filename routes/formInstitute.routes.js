const router = require('express').Router();

const {
    renderRegisterInstitute,
    renderRegisterCareers,
    renderInstituteProfile,
    findAllProvinces,
    findAllLocalitiesById,
    findAllLocalities,
    newContact,
    newUbication,
    newInstitute
} = require('../controllers/register.controllers');

router.get('/nuevaInstitucion', renderRegisterInstitute);

router.get('/instituto/:id/nueva/carrera', renderRegisterCareers)

router.get('/instituto/:id', renderInstituteProfile);


router.get('/api/provincias', findAllProvinces);
router.get('/api/provincias/localidades', findAllLocalities);
router.get('/api/provincia/:id/localidades', findAllLocalitiesById);

router.post('/api/contacto', newContact);

router.post('/api/ubicacion', newUbication);

router.post('/api/instituto', newInstitute);
module.exports = router;