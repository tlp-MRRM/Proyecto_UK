const router = require("express").Router();
const { login, sesion } = require("../controllers/login.controllers");

router.get("/iniciar-sesion", login);
router.post("/iniciar-sesion", sesion);

module.exports = router;
