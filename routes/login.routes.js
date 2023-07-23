const router = require('express').Router();

const { 
    login 
} = require('../controllers/login.controllers')

const {
    sesion
} = require('../controllers/login.controllers')

router.get("/iniciar-sesion", login)


router.post('/inciar-sesion', sesion)

module.exports = router;