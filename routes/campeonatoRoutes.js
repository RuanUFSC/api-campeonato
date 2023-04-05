const express = require('express');
const router = express.Router();
const controller = require('../controller/campeonatoController')

router.get('/consultar-partidas',controller.getConsultarPartidas);
router.post('/inserir-registro', controller.postInserirRegistro);
router.delete('/deletar-registro/:id', controller.deleteRegistro);

module.exports = router;