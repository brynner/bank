const express = require('express');
const { processEvent } = require('../services/eventService');

module.exports = (accounts) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        const eventData = req.body;

        try {
            const result = processEvent(accounts, eventData);
            res.status(201).json(result); // Retorna o resultado
        } catch (error) {
            if (error.message === 'Conta não encontrada') {
                return res.status(404).json(0); // Conta não encontrada
            }
            res.status(400).json({ error: error.message }); // Erro de validação
        }
    });

    return router;
};