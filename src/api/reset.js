const express = require('express');

module.exports = (accounts) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    // Reseta as contas para um objeto vazio
    for (let key in accounts) {
      delete accounts[key];
    }
    res.sendStatus(200); // Retorna 200 OK sem conteúdo
  });

  return router;
};