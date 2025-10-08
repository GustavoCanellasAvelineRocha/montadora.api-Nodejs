const valideBody = (req, res, next) => {
  const { body } = req;

  if (body.modelo === undefined) {
    return res.status(400).json({ ErrorMessage: "Adicione o modelo ao json" });
  }
  if (body.modelo === "") {
    return res.status(400).json({ ErrorMessage: "Adicione qual o modelo ao json" });
  }
  if (body.cor === undefined) {
    return res.status(400).json({ ErrorMessage: "Adicione o cor ao json" });
  }
  if (body.cor === "") {
    return res.status(400).json({ ErrorMessage: "Adicione qual a cor ao json" });
  }

  next();
};

// NOVO: valida o parâmetro :id
const validaIdParam = (req, res, next) => {
  const { id } = req.params;
  const n = Number(id);
  if (!Number.isInteger(n) || n <= 0) {
    return res.status(400).json({ ErrorMessage: "O parâmetro :id deve ser um inteiro positivo." });
  }
  next();
};

module.exports = {
  valideBody,
  validaIdParam,
};
