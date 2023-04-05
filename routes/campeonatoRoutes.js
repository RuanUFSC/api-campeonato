const express = require('express');
const router = express.Router();
const campeonatoController = require('../controller/campeonatoController');

router.get('/consultar-registros/:time',campeonatoController.consultarRegistros);
router.put('/atualizar-placar_1',campeonatoController.atualizarPlacar1);
router.delete('/deletar-partida/:id',campeonatoController.deletarPartida);

module.exports = router;