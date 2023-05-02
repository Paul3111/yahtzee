const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  username: {
    type: String,
    default: 'unknown'
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  avatar: {
    type: String,
    default: '/default_avatar_1.jpeg'
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
