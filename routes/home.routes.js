const express = require('express')
const router = express.Router();

const home = require('../controllers/home.controllers');
const search = require('../controllers/search.controllers')

router.get("/inicio", home.get);

router.get("/search", search.get)
router.post("/registra-tu-institucion", home.post);

router.put("/edita-tu-institucion", home.put)

module.exports = router;