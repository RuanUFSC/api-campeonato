const express = require('express');
const router = express.Router();
const controllers = require('../controllers/campeonato')

// Endpoints
router.get('/menor_placar', controllers.menor_placar),
router.put('/atualizarTime/:id', controllers.atualizarTime)

module.exports = router; 