const { response } = require("express");
const service = require("../services/repositoryService");

function mostrarLista(req,res) {
  return response.status(200).json(service.mostrarLista())  
}

module.exports = { mostrarLista };
