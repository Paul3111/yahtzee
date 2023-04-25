import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';


const Game = () => {

  return (
    <div className={style['god-container']}>
      <div className={style['game-container']}>
        <GameHeader />
        <GameRooms /> 
        {/* <DiceContainer /> */}

      </div>
    </div>
  );
};

export default Game;