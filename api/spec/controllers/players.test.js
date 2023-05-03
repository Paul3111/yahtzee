const PlayersController = require('../../controllers/players');
const Player = require('../../models/player');
require("../mongodb_helper");
const { connect, closeDatabase } = require("../mongodb_helper");

describe('PlayersController', () => {
  beforeEach( async () => {
    await Player.deleteMany({});
  });
  
  afterAll(async () => {
    await closeDatabase();
  });

  describe('CreatePlayer', () => {
    it('should create a new player', async () => {
      // Arrange
      const req = {
        body: {
          username: 'testuser',
          avatar: 'testavatar',
          score: 10
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn()
      };
      await PlayersController.CreatePlayer(req, res);
      console.log(res.status.mock.calls);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith({ message: 'Player created successfully' });
    }, 10000);

      
    xit('should update username if player already exists', async () => {
      // Arrange
      const req = {
        body: {
          username: 'testuser',
          avatar: 'testavatar',
          score: 10
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const existingPlayer = {
        username: 'testuser'
      };
      const saveSpy = jest.spyOn(Player.prototype, 'save').mockResolvedValueOnce({
        _id: 'testid',
        username: 'testuser1234567890',
        avatar: 'testavatar',
        scores: {
          score: [10]
        }
      });
      jest.spyOn(Player, 'findOne').mockResolvedValueOnce(existingPlayer);
      // Act
      await PlayersController.CreatePlayer(req, res);
      // Assert
      expect(saveSpy).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'OK',
        data: {
          _id: 'testid',
          username: 'testuser1234567890',
          avatar: 'testavatar',
          scores: {
            score: [10]
          }
        }
      });
    });
  });
  describe('GetPlayersData', () => {
    xit('should return all players', async () => {
      // Arrange
      const req = {};
      const res = {
        json: jest.fn()
      };
      const players = [
        {
          _id: 'testid1',
          username: 'testuser1',
          avatar: 'testavatar1',
          scores: {
            score: [10]
          }
        },
        {
          _id: 'testid2',
          username: 'testuser2',
          avatar: 'testavatar2',
          scores: {
            score: [20]
          }
        }
      ];
      jest.spyOn(Player, 'find').mockResolvedValueOnce(players);
      // Act
      await PlayersController.GetPlayersData(req, res);
      // Assert
      expect(res.json).toHaveBeenCalledWith(players);
    });
  });
})