import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';


const Game = () => {
  return (
    <div className={style['game-container']}>
      <GameHeader />
      <GameRooms /> 
      {/* <DiceContainer /> */}
      
    </div>
  );
};

export default Game;