const { useAsyncError } = require('react-router-dom');
const Player = require('../models/player');
const { ObjectId } = require("mongodb");

const PlayersController = {
    CreatePlayer: (req, res) => {
        const player = new Player();
        player.username = req.body.username
        // player.email = req.body.email
        // player.password = req.body.password
        player.scores.score = [...player.scores.score, req.body.score]

        player.save().then(user => {
            res.status(201).json({ message: 'OK', data: user });
        })
    },

    GetPlayersData: async (req, res) => {
        let players = await Player.find({}).exec();
        res.json(players);
    }

};

module.exports = PlayersController;