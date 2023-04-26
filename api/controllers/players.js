const Player = require('../models/player');

const PlayersController = {
    Index: (req, res) => {
        Player,find(async (err, players) => {
            if (err) {
                throw err;
            }
            res.status(200).json({players: players});
        });
    }
};

module.exports = PlayersController;