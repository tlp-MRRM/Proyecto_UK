const router = require('express').Router();

const {
    inicio
} = require('../controllers/home.controllers')

router.get("/", inicio);


module.exports = router;