const express = require('express');
const router = express.Router();

const PlayersController = require('../controllers/players');

router.post('/players', PlayersController.CreatePlayer);

module.exports = router;