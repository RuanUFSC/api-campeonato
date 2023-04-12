const express = require('express');
const router = express.Router();
const controllerCampeonato = require('../controllers/campeonatoController');

router.get ('/consultar-registro', controllerCampeonato.consultaRegistro);
router.delete ('/deletar-registro/:id', controllerCampeonato.deletarTime);

module.exports = router;