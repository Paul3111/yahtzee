const express = require('express');
const router = express.Router();

const GameController = require('../controllers/game');

// add this route to your backend server
router.get('/game', (req, res) => {
  console.log("hello hello");
});

module.exports = router;