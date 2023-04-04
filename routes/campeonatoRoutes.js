const express = require('express');
const router = express.Router();

const consultTeams = require("../controllers/consultTeams");
const insertTeams = require("../controllers/insertTeamspoints");

router.get('/Times', consultTeams.getTimes)
router.post('/Times/insere', insertTeams.insertTeam)


module.exports = router;