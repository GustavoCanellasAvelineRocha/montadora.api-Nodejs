const service = require("../services/repositoryService");

async function listarCarros(req, res) {
  try {
    const lista = await service.getAll();
    return res.status(200).json(lista);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar carros", error: error.message });
  }
}

async function criarCarro(req, res) {
  try {
    const carroData = req.body;

    if (!carroData || !carroData.modelo || !carroData.marca) {
      return res.status(400).json({ message: "Dados do carro incompletos." });
    }

    const carroCriado = await service.saveCarro(carroData);
    return res.status(201).json(carroCriado);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao salvar carro", error: error.message });
  }
}

async function atualizarCarro(req, res) {
  try {
    const { id } = req.params;
    const carroData = req.body;

    const carroExistente = await service.getById(id);
    if (!carroExistente) {
      return res.status(404).json({ message: "Carro não encontrado" });
    }

    const carroAtualizado = await service.atualizaCarro(id, carroData);
    return res.status(200).json(carroAtualizado);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar carro", error: error.message });
  }
}

async function excluirCarro(req, res) {
  try {
    const { id } = req.params;

    const carroExistente = await service.getById(id);
    if (!carroExistente) {
      return res.status(404).json({ message: "Carro não encontrado" });
    }

    await service.deleteCarro(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Erro ao excluir carro", error: error.message });
  }
}

module.exports = {
  listarCarros,
  criarCarro,
  atualizarCarro,
  excluirCarro
};
