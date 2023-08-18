const { OK } = require("sqlite3");
const db = require("../domain/repository");

async function getAll() {
  const lista = await getAllPromisse();
  return lista;
}

function getAllPromisse() {
  return new Promise((resolve) => {
    db.all("SELECT * FROM carros", (err, carros) => {
      resolve(carros);
    });
  });
}

function saveCarro(carro) {
  return new Promise((resolve) => {
    const { modelo, cor } = carro;
    const marca = "honda";

    const salvarCarro = db.prepare(
      "INSERT INTO carros (modelo, marca, cor) VALUES (?, ?, ?)"
    );
    salvarCarro.run(modelo, marca, cor, function () {
      const id = this.lastID;
      salvarCarro.finalize();

      const carroCriado = {
        id: id,
        modelo: modelo,
        marca: marca,
        cor: cor,
      };

      resolve(carroCriado);
    });
  });
}

function atualizaCarro(id,carro) {
    return new Promise((resolve) => {
        const { modelo, cor } = carro;

        const updateCarro = db.prepare("UPDATE carros SET modelo = ?,cor = ? WHERE id= ?");
        updateCarro.run(modelo,cor,id, function () {
          updateCarro.finalize();

          const carroAtualizado = {
            id: id,
            modelo: modelo,
            marca: "Honda",
            cor: cor
          };
          resolve(carroAtualizado);
        });
      });
}

async function deleteCarro(id) {
  return new Promise((resolve) => {
    const deletarCarro = db.prepare("DELETE FROM carros WHERE id= ?", [id]);
    deletarCarro.run(id, function () {
      deletarCarro.finalize();
      resolve();
    });
  });
}

module.exports = { getAll, saveCarro, deleteCarro, atualizaCarro };
