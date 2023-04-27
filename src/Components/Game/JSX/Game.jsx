import {useEffect, useState} from 'react'
import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';
import HowToPlay from '../../HowToPlay/JSX/HowToPlay';
import GameTotalScore from './GameTotalScore';
import DiceContainer from '../../Dice/DiceContainer';

import GameMenu from './GameMenu';

const Game = () => {
  //this below is used to add class yahtzee-celebration to css
  // it can be used for other purposes
  // but if not, please set this to true when Yahtzee
  const [isYahtzee, setIsYahtzee] = useState(false)
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

  const [rollCount, setRollCount] = useState(0)

  const [total, setTotal] = useState(0)

  const updateTotal = (score) => {
    setTotal((prevTotal) => {
      return prevTotal += score
    })
  } 

  console.log('TOTAL', total)

  const hoverHandler = () => {
    setIsHovered(!isHovered)
  }
  //console.log("sum: ",  diceValueSum);
  //console.log("counts",  counts);
  //console.log("values", values)

  // const countRolls = () => {


  //   if (roll === 3) {
      // 
      // set all dice .locked false
      // set roll number back to 0
  //   }
  // }
  
  return (
    <div className={`${style['god-container']} ${isYahtzee && style['yahtzee-celebration']}`}>
      <GameHeader />
      <GameMenu />
      <div className={`${style['game-container']} ${isHovered && style['lights-up']}`}>
        <GameTotalScore isHovered={isHovered} total={total} />
        <GameRooms rollCount={rollCount} values={values} updateTotal={updateTotal} isYahtzee={setIsYahtzee} />
        <DiceContainer onBtnHover={hoverHandler}
          isHovered={isHovered}
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