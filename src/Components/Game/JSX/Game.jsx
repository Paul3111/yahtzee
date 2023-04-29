import {useEffect, useState} from 'react'
import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';
import HowToPlay from '../../HowToPlay/JSX/HowToPlay';
import GameTotalScore from './GameTotalScore';
import DiceContainer from '../../Dice/DiceContainer';
import GameMenu from './GameMenu';

const Game = () => {
  const [cheatMode, setCheatMode] = useState(false)

  const [isYahtzee, setIsYahtzee] = useState(false)
  
  const [isHovered, setIsHovered] = useState(false)

  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const [diceValueSum, setDiceValueSum] = useState(0);
  const [values, setValues] = useState([])

  const [rollCount, setRollCount] = useState(0)
  const [total, setTotal] = useState(0)

  const [dice, setDice] = useState([
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false }
  ]);

  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      if (values.filter(x => x === i).length === 5) {
        setIsYahtzee(true)
        setTimeout(() => setIsYahtzee(false), 1000)
      }
    }
  }, [values])
  // const triggerYatzee = () => { 
  //   for (let i = 1; i <= 6; i++) {
  //     if (values.filter(x => x === i).length === 5) {
  //       setIsYahtzee(true)
  //     }
  //   }
  // }
  console.log('ISYAHTZEE', isYahtzee)
    
  const updateTotal = (score) => {
    setTotal((prevTotal) => {
      return prevTotal += score
    })
  }

  useEffect(() => {
    setIsHovered(false)
  }, [values])
  const hoverHandler = () => {
    setIsHovered(!isHovered)
  }
  const isHoveredTrue = () => {
    setIsHovered(true)
  }
  const isHoveredFalse = () => {
    setIsHovered(false)
  }

  const countRolls = () => {
    if (cheatMode) setRollCount(1)
    else if (rollCount < 3) {
      setTimeout(() => {
        setRollCount((prevRollCount) => prevRollCount += 1)
      }, 800)
    }
  }

  return (
    <div className={`${style['god-container']} ${isYahtzee && style['yahtzee-celebration']}`}>
      <GameHeader />
      <GameMenu />
      <div className={`${style['game-container']} ${isHovered && style['lights-up']}`}>
      
        <GameTotalScore
          isHovered={isHovered}
          total={total} />

        <GameRooms
          disableLights={hoverHandler}
          isHovered={isHovered}
          resetDice={setDice}
          rollCount={rollCount}
          resetRollCount={setRollCount}
          values={values} updateTotal={updateTotal}
          triggerYahtzee={setIsYahtzee}
        />
      
        <DiceContainer
          isHoveredTrue={isHoveredTrue}
          isHoveredFalse={isHoveredFalse}
          isHovered={isHovered}
          dice={dice}
          setDice={setDice}
          counts={counts}
          setCounts={setCounts}
          diceValueSum={diceValueSum}
          setDiceValueSum={setDiceValueSum}
          values={values}
          setValues={setValues}
          countRolls={countRolls}
          rollCount={rollCount}
        />
        
      </div>
      <HowToPlay />
      <button onClick={() => setCheatMode(!cheatMode)}>Cheat Mode</button>
    </div>
  );
};
  
export default Game;