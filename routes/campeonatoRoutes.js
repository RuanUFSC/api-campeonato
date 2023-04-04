const express = require('express');
const router = express.Router();
const controller = require('./controllers/endpoint-7');

router.get('/menorPlacar', controller.consultarmenorplacar);
router.put('/atualizarNomeTime', controller.atualizarnometime);

module.exports = router;