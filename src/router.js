const express = require('express');
const router = express.Router();
const controller = require("../src/controller/montadoraController");
const middlewares = require("./middlewares/carrosmiddlewares");

router.get('/', controller.mostrarLista);

// NOVA ROTA: buscar por id
router.get('/:id', middlewares.validaIdParam, controller.mostrarPorId);

// (opcional, mas recomendado) validar :id também no PUT/DELETE
router.post('/', middlewares.valideBody, controller.salvarCarro);
router.put('/:id', middlewares.validaIdParam, middlewares.valideBody, controller.atualizaCarro);
router.delete('/:id', middlewares.validaIdParam, controller.deleteCarro);

module.exports = router;
