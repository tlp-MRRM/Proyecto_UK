const express = require('express')
const Route = express.Router();
const form = require("../controllers/form.controllers")

Route.post("/agregar-instituto", form.post)