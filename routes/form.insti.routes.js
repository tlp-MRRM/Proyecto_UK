const router = require('express').Router();

const {
    renderRegisterInstitute,
    renderRegisterCareers
} = require("../controllers/register.controllers");

router.get("/registrar-instituto", renderRegisterInstitute);

module.exports = router;