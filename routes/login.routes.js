const router = require('express').Router();

const { 
    login 
} = require('../controllers/login.controllers')

router.get("/login", login)

module.exports = router;