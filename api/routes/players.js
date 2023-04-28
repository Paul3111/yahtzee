const express = require('express');
const router = express.Router();

const PlayersController = require('../controllers/players');

router.post('/players', PlayersController.CreatePlayer);
router.get('/players', PlayersController.GetPlayersData);

module.exports = router;