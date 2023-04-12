const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/players', playerController.getAllPlayers);

router.get('/players/:id', playerController.getPlayerById);

router.get('/players/team/:id', playerController.getPlayersByTeam);


module.exports = router;

