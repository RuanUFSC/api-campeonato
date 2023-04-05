const express = require('express');
const router = express.Router();
const controller = require('./controllers/endpoint-7');

router.get('/menorPlacar', controller.consultarmenorplacar);
router.put('/atualizarNomeTime', controller.atualizarnometime);
router.delete('/deletar-partida/:id', controller.removerPartida);

const consultTeams = require("../controllers/consultTeams");
const insertTeams = require("../controllers/insertTeamspoints");

router.get('/Times', consultTeams.getTimes)
router.post('/Times/insere', insertTeams.insertTeam)


module.exports = router;