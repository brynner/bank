const express = require('express');
const balanceRouter = require('./api/balance');
const eventRouter = require('./api/event');
const resetRouter = require('./api/reset');

const app = express();
const PORT = process.env.PORT || 3000;

// Objeto de contas em memória
let accounts = {};

// Middleware para interpretar JSON
app.use(express.json());

// Rotas, passando o objeto accounts como parâmetro
app.use('/balance', balanceRouter(accounts));
app.use('/event', eventRouter(accounts));
app.use('/reset', resetRouter(accounts));

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});