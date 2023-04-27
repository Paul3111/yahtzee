import {useEffect, useState} from 'react'
import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';
import HowToPlay from '../../HowToPlay/JSX/HowToPlay';
import GameTotalScore from './GameTotalScore';
import DiceContainer from '../../Dice/DiceContainer';
const Game = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const [diceValueSum, setDiceValueSum] = useState(0);
  const [values, setValues] = useState([])
  const [dice, setDice] = useState([
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false }
  ]);
  const hoverHandler = () => {
    setIsHovered(!isHovered)
  }
  //console.log("sum: ",  diceValueSum);
  //console.log("counts",  counts);
  //console.log("values", values)
  
  return (
    <div className={style['god-container']}>
      <GameHeader />
      <div className={`${style['game-container']} ${isHovered && style['lights-up']}`}>
        <GameTotalScore isHovered={isHovered} />
        <GameRooms dice={dice}/>
        <DiceContainer onBtnHover={hoverHandler}
          dice={dice}
          setDice={setDice}
          counts={counts} setCounts={setCounts}
          diceValueSum={diceValueSum} setDiceValueSum={setDiceValueSum}
          values={values} setValues={setValues}/>
      </div>
        <HowToPlay />
    </div>
  );
};
export default Game;