const express = require('express')
const router = express.Router();


const login = require('../controllers/login.controllers')

router.get("/login", login.get)

module.exports = router;