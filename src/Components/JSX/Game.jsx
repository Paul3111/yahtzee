import style from '../CSS/Game.module.css';
import RollDiceButton from '../RollDiceButton';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';


const Game = () => {

  return (
    <div className={style['god-container']}>
      <div className={style['game-container']}>
        <GameHeader />
        <GameRooms /> 
        {/* <DiceContainer /> */}
        <RollDiceButton />
      </div>
    </div>
  );
};

export default Game;