const express = require('express');
const router = express.Router();

const PlayersController = require('../controllers/players');

router.post('/player', PlayersController.CreatePlayer);
router.get('/player', PlayersController.GetPlayersData);

module.exports = router;