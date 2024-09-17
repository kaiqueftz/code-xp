const db = require('../config/database');

// Obter todos os produtos
exports.getProdutos = (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Adicionar um novo produto
exports.addProduto = (req, res) => {
  const { nome, descricao } = req.body;
  db.query('INSERT INTO produtos (nome, descricao) VALUES (?, ?)', [nome, descricao], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId });
  });
};
