import {Router} from 'express';
const router = Router()


import ctrl from '../controllers/register.controllers.js'
const {
    renderRegisterInstitute,
    renderRegisterCareers,
    renderInstituteProfile,
    findAllProvinces,
    findAllLocalitiesById,
    newContact,
    newUbication,
    newInstitute
} = ctrl

router.get('/nuevaInstitucion', renderRegisterInstitute);

router.get('/instituto/:id/nueva/carrera', renderRegisterCareers)

router.get('/instituto/:id', renderInstituteProfile);


router.get('/api/provincias', findAllProvinces);
router.get('/api/provincia/:id/localidades', findAllLocalitiesById);

router.post('/api/contacto', newContact);

router.post('/api/ubicacion', newUbication);

router.post('/api/instituto', newInstitute);

export default router;