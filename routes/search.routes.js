const router = require('express').Router();

const {
    renderSearch
} = require('../controllers/search.controllers.js');

router.get('/busqueda', renderSearch);

module.exports = router;