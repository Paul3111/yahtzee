const PlayersController = require('../../controllers/players');
const Player = require('../../models/player');
require("../mongodb_helper");

jest.mock('../../models/player');

describe('PlayersController', () => {
  beforeEach( async () => {
    await Player.deleteMany({});
    jest.clearAllMocks()
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
        json: jest.fn()
      };

      const player = {
        username: 'testuser',
        avatar: 'testavatar',
        scores: { score: [10] },
        save: jest.fn().mockResolvedValue(),
      };

      Player.findOne.mockResolvedValue(null);
      Player.mockReturnValue(player);

      await PlayersController.CreatePlayer(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'OK'});
    });

      
    it('should update username if player already exists', async () => {
      // -- first user
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
      const player = {
        username: 'testuser',
        avatar: 'testavatar',
        scores: { score: [10] },
        save: jest.fn().mockResolvedValue(),
      };

      Player.findOne.mockResolvedValue(null);
      Player.mockReturnValue(player);

      await PlayersController.CreatePlayer(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'OK'});

      // -- second user
      const req2 = {
        body: {
          username: 'testuser',
          avatar: 'testavatar',
          score: 15
        }
      };
      const res2 = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const player2 = {
        username: 'testuser1683068400000',
        avatar: 'testavatar',
        scores: { score: [15] },
        save: jest.fn().mockResolvedValue(),
      };

      const parseSpy = jest.spyOn(Date, 'parse');
      parseSpy.mockImplementation(() => 1683068400000);

      const dateString = '2023-05-02T23:00:00.000Z';
      const expectedDate = new Date(1683068400000);
      
      Player.findOne.mockResolvedValue(player);
      Player.mockReturnValue(player2);

      await PlayersController.CreatePlayer(req2, res2);
      
      expect(parseSpy).toHaveBeenCalled();
      expect(Player.findOne).toHaveBeenCalledTimes(2);
      expect(Player.findOne).toHaveBeenCalledWith({ username: 'testuser' });
      expect(player.save).toHaveBeenCalled();
      expect(res2.status).toHaveBeenCalledWith(201);
      expect(res2.json).toHaveBeenCalledWith({ message: 'OK'});
      parseSpy.mockRestore();
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

/*
beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-10-20'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

*/