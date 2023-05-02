const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  username: {
    type: String,
    default: 'unknown'
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
    default: '/avatar_1.jpeg'
  },
  ngames: {
    type: Number,
    default: 0
  },
  scores: {
    score: [Number]
  },
  wins: {
    type: Number,
  }
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
