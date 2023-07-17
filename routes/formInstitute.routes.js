const router = require('express').Router();

const {
    renderRegisterInstitute,
    renderRegisterCareers,
    renderInstituteProfile
} = require('../controllers/register.controllers');
try {
    router.get('/new/institute', renderRegisterInstitute);
} catch (error) {
    console.log(error);
}


router.get('/institute/:id/new/career', renderRegisterCareers)

router.get('/institute/:id', renderInstituteProfile);


module.exports = router;