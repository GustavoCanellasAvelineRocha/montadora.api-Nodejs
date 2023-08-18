const express = require('express');
const router = express.Router();
const controller = require("../src/controller/montadoraController")

router.get('/',controller.mostrarLista);

module.exports = router;