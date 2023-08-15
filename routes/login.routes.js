const express = require('express');
const authCtrl = require('../controllers/auth.controllers'); // Importa el controlador de autenticación
const ctrl = require('../controllers/login.controllers')

const router = express.Router();

// Manejar el envío del formulario de inicio de sesión

router.get('/iniciar-sesion', ctrl.login)
router.post('/iniciar-sesion', authCtrl.login);

module.exports = router;
