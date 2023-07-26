ctrl= {}

const jwk = require('jsonwebtoken');
const bcrypts = require('bcryptjs')
const conexion = require('../db')
const {promisify} = require('util')

ctrl.sesion = (req, res) => {
    res.render('userInstitute/index.ejs')
}

ctrl.login = (req, res) => {
    res.render('login/login.ejs')
} 

module.exports =  ctrl