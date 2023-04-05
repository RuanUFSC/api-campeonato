const express = require('express');
const router = express.Router();
const controllerEquipeDecrescente = require("./../controllers/equipeDecrescenteController.js")
const controllerAtualizarTime1= require("./../controllers/atualizarTime1Controller.js")
const controllerDeletarTime = require('./../controllers/deletarTimeController');


router.get("/equipe-decrescente", controllerEquipeDecrescente.equipeDecrescente)
router.put("/atualizar-time1/:id", controllerAtualizarTime1.atualizarTime1)
router.delete("/deletar-time/:id", controllerDeletarTime.deletarTime)

module.exports = router;