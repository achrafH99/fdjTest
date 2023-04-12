const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.get('/teams', teamController.getAllTeams);

router.get('/teams/:id', teamController.getTeamById);

router.get('/teams/league/:id', teamController.getTeamsByLeague);


module.exports = router;

