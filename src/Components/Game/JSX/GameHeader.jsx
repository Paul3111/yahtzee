import style from '../CSS/GameHeader.module.css';

const GameHeader = () => {
  return (
    <div className={style['game-header']}>
      <h1>YAHTZEE</h1>
    </div>
  );
};

export default GameHeader;