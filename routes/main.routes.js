const express = require('express')
const router = express.Router();

const controllers = require('../controllers/inicio.controllers');


router.get("/inicio", controllers.get);

router.post("/registra-tu-institucion", controllers.post);

router.put("/edita-tu-institucion", controllers.put)

module.exports = router;