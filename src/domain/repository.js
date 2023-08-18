const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(
    "CREATE TABLE carros (id INTEGER PRIMARY KEY AUTOINCREMENT, modelo TEXT, marca TEXT, cor TEXT)"
  );

  const popularBanco = db.prepare(
    "INSERT INTO carros (modelo, marca, cor) VALUES (?, ?, ?)"
  );
  popularBanco.run("City", "Honda", "Branco");
  popularBanco.run("Civic", "Honda", "Preto");
  popularBanco.finalize();
});

module.exports = db;
