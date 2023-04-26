const express = require('express');
const router = express.Router();

const PlayersController = require('../controllers/players');

router.get('/players', PlayersController.Index);

module.exports = router;