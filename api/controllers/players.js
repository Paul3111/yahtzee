const Player = require('../models/player');
const { ObjectId } = require("mongodb");

const PlayersController = {
    Index: (_req, res) => {
        res.status(200).json({data: [
            {username: "Paul", score: [100]},
            {username: "Chang", score: [100]}
        ]});

    //     Player.find(async (err, players) => {
    //         console.log('IN THE METHOD')
    //         if (err) {
    //             throw err;
    //         }
    //         res.status(200).json({players: players});
    //     });
    // }
}};

module.exports = PlayersController;