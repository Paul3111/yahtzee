const express = require('express');
const router = express.Router();

const PlayersController = require('../controllers/players');

router.get('/', PlayersController.Index);


module.exports = router;