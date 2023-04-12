const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');

router.get('/leagues', leagueController.getAllLeagues);

router.get('/leagues/:id', leagueController.getLeagueById);


module.exports = router;

