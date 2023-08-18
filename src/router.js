const express = require('express');
const router = express.Router();
const controller = require("../src/controller/montadoraController")
const middlewares = require("./middlewares/carrosmiddlewares")

router.get('/',controller.mostrarLista);
router.post('/',middlewares.valideBody,controller.salvarCarro);
router.put('/:id',controller.atualizaCarro)
router.delete('/:id',middlewares.valideBody,controller.deleteCarro)

module.exports = router;