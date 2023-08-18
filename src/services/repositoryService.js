const repository = require("../domain/repository")

async function mostrarLista(){
    const lista = await repository.getAll()
    console.log(lista)
}

module.exports = {mostrarLista};