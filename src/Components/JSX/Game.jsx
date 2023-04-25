import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';


const Game = () => {
  return (
    <div className={style['game-container']}>
      <GameHeader />
    </div>
  );
};

export default Game;