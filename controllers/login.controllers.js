ctrl= {}

const jwk = require('jsonwebtoken');
const bcrypts = require('bcryptjs')
const conexion = require('../db')
const {promisify} = require('util')

ctrl.login = (req, res) => {
    res.render('login/login.ejs')
} 

module.exports =  ctrl 