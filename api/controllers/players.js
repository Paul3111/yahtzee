const { useAsyncError } = require('react-router-dom');
const Player = require('../models/player');
const { ObjectId } = require("mongodb");

const PlayersController = {
    CreatePlayer: (req, res) => {

        const itExists = (username) => {
            if (player.username.find(username) === false) {
                console.log('This is player.username', player.username)
                console.log('This is username', username)
                return player.username.concat(parse(new Date.parse()))
                // return player.username.concat(parse(new Date()))
            } else {
                return player.username
            }
        }

        const player = new Player();
        player.username = req.body.username
        player.avatar = req.body.avatar
        player.scores.score = [...player.scores.score, req.body.score]
        
        // if (player.username.find(username) === false) {
        //     player.save().then(user => {
        //         res.status(201).json({ message: 'OK', data: user });
        //     });
        // } else {
        //     console.log('Could not add.');
        // }
        // },
        
        player.save().then(user => {
            // console.log('This is req.body.username' , user.username)
            // console.log('This is player.username', user.username)
            // console.log('This is username', username)
            res.status(201).json({ message: 'OK', data: user });
        })
    },

    GetPlayersData: async (req, res) => {
        let players = await Player.find({}).exec();
        res.json(players);
    }

};

module.exports = PlayersController;