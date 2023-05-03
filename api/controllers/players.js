const { useAsyncError } = require('react-router-dom');
const Player = require('../models/player');
const { ObjectId } = require("mongodb");

const PlayersController = {
    CreatePlayer: async (req, res) => {
      const player = new Player();
      player.username = req.body.username;
      player.avatar = req.body.avatar;
      player.scores.score = [...player.scores.score, req.body.score];
  
      const existingPlayer = await Player.findOne({ username: player.username });
      if (existingPlayer) {
      const dateString = new Date();
      const dateMilliseconds = Date.parse(dateString);
        player.username = player.username.concat(dateMilliseconds);
      }
      player.save().then(user => {
        res.status(201).json({ message: 'OK', data: user });
      });
    },
  
    GetPlayersData: async (req, res) => {
      let players = await Player.find({}).exec();
      res.json(players);
    }
  };

module.exports = PlayersController;