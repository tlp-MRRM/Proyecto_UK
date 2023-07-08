const router = require('express').Router();

const {
    renderRegisterInstitute,
    renderRegisterCareers,
    renderInstituteProfile
} = require('../controllers/register.controllers');

router.get('/new/institute', renderRegisterInstitute);

router.get('/new/career', renderRegisterCareers)

router.get('/institute/:id', renderInstituteProfile);


module.exports = router;