const express = require('express');
const router = express.Router();
const controller = require('./controllers/endpoint-7');

router.get('/menorPlacar', controller.consultarmenorplacar);
router.put('/atualizarNomeTime', controller.atualizarnometime);
router.delete('/deletar-partida/:id', controller.removerPartida);
router.get('/consultaAsc', controller.consultaAsc);

module.exports = router;