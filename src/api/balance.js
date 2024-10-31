const express = require('express');
const { getBalance } = require('../services/accountService');

module.exports = (accounts) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        const accountId = req.query.account_id;
        const balance = getBalance(accounts, accountId);

        if (balance === undefined) {
            return res.status(404).json(0); // Conta não encontrada
        }

        res.status(200).json(balance); // Retorna apenas o valor do saldo
    });

    return router;
};