const express = require('express');
const router = express.Router();
const consultMatches = require('../controllers/campeonatoController')

router.get('/consultar-partidas',consultMatches.getConsultarPartidas);
router.post('/inserir-registro', consultMatches.postInserirRegistro);
router.delete('/deletar-registro/:id', consultMatches.deleteRegistro);

module.exports = router;