ctrl= {}

const jwk = require('jsonwebtoken');
const bcrypts = require('bcryptjs')
const conexion = require('../db')
const {promisify} = require('util')

ctrl.sesion = async (resquest, response) => {
    try {
        const user = req.body.username
        const password = req.body.password
        console.log(username + ' ' + password)
    } catch (error) {
        console.log(error)
    }
}

ctrl.login = (req, res) => {
    res.render('login/login.ejs')
} 

module.exports =  ctrl 