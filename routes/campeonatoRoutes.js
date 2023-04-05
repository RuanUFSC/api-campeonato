const express = require('express');
const router = express.Router();
const campeonatoController = require('../controller/campeonatoController');
const consultMatches = require('../controllers/campeonatoController')
const controller = require('../controllers/endpoint-7');
const consultTeams = require("../controllers/consultTeams");
const insertTeams = require("../controllers/insertTeamspoints");

router.get('/consultar-registros/:time',campeonatoController.consultarRegistros);
router.put('/atualizar-placar_1',campeonatoController.atualizarPlacar1);
router.delete('/deletar-partidas/:id',campeonatoController.deletarPartida);

router.get('/consultar-partidas',consultMatches.getConsultarPartidas);
router.post('/inserir-registro', consultMatches.postInserirRegistro);
router.delete('/deletar-registro/:id', consultMatches.deleteRegistro);

router.get('/menorPlacar', controller.consultarmenorplacar);
router.put('/atualizarNomeTime', controller.atualizarnometime);
router.delete('/deletar-partida/:id', controller.removerPartida);

router.get('/Times', consultTeams.getTimes)
router.post('/Times/insere', insertTeams.insertTeam)

module.exports = router;