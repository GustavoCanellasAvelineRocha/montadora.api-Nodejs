const { response } = require("express");
const service = require("../services/repositoryService");
const { OPEN_CREATE } = require("sqlite3");

function mostrarLista(req, res) {
  service.getAll().then((lista) => {
    return res.status(200).json(lista);
  });
}

// NOVO: GET /:id
function mostrarPorId(req, res) {
  const { id } = req.params;
  service.getById(Number(id)).then((carro) => {
    if (!carro) {
      return res.status(404).json({ ErrorMessage: "Carro não encontrado" });
    }
    return res.status(200).json(carro);
  });
}

function salvarCarro(req, res) {
  const carroJson = req.body;
  service.saveCarro(carroJson).then((carroCriado) => {
    return res.status(201).json(carroCriado);
  });
}

function atualizaCarro(req, res) {
  const { id } = req.params;
  const carroJson = req.body;

  service.atualizaCarro(id, carroJson).then((carroAtualizado) => {
    return res.status(200).json(carroAtualizado);
  });
}

function deleteCarro(req, res) {
  const { id } = req.params;
  service.deleteCarro(id).then(() => {
    return res.status(204).json();
  });
}

module.exports = { mostrarLista, mostrarPorId, salvarCarro, deleteCarro, atualizaCarro };
