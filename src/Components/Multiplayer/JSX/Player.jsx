import {useEffect, useState} from 'react'

import style from '../../Game/CSS/Game.module.css';
import ownStyle from '../CSS/Player.module.css';

import GameRooms from '../../Game/JSX/GameRooms';
import GameTotalScore from '../../Game/JSX/GameTotalScore';
import DiceContainer from '../../Dice/DiceContainer';
import Dots from '../../Game/JSX/GameDots';

import BotLogic from '../../Bot/BotLogic.jsx'

const Player = (props) => {
  const [isYahtzee, setIsYahtzee] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const [gameRound, setGameRound] = useState(0)
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const [diceValueSum, setDiceValueSum] = useState(0);
  const [values, setValues] = useState([])

  const [rollCount, setRollCount] = useState(0)
  const [total, setTotal] = useState(0)

  const [startGame, setStartGame] = useState(true)
  const [startEffect, setStartEffect] = useState(false)

  const [dice, setDice] = useState([
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false }
  ]);

  const [botPlayerRooms, setBotPlayerRooms] = useState([
    {name: 'ones', empty: true, chosen: false},
    {name: 'twos', empty: true, chosen: false},
    {name: 'threes', empty: true, chosen: false},
    {name: 'fours', empty: true, chosen: false},
    {name: 'fives', empty: true, chosen: false},
    {name: 'sixes', empty: true, chosen: false},
    {name: 'three of a kind', empty: true, chosen: false},
    {name: 'four of a kind', empty: true, chosen: false},
    {name: 'full house', empty: true, chosen: false},
    {name: 'small straight', empty: true, chosen: false},
    {name: 'large straight', empty: true, chosen: false},
    {name: 'yahtzee', empty: true, chosen: false},
  ])
  console.log(props.isBot)
  const start = () => {
    setStartGame(true)
  }

  useEffect(() => {
    if (startGame) {
      setTimeout(() => {
        setStartEffect(true)
      }, 1200)
    }
  }, [startGame])

  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      if (values.filter(x => x === i).length === 5) {
        setIsYahtzee(true)
        setTimeout(() => setIsYahtzee(false), 2000)
      }
    }
  }, [values])
    
  const updateTotal = (score) => {
    if (score !== 100) {
      props.nextPlayer()
      setGameRound((prevRound) => {
        return prevRound += 1;
      })
    };

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
    if (rollCount < 3) {
      setTimeout(() => {
        setRollCount((prevRollCount) => prevRollCount += 1)
      }, 800)
    }
  }
 
  const isActivePlayer = props.activePlayer === props.playerNumber

  return (
    <div className={`${style['game-container']} ${ownStyle['multiplayer-game-container']} ${(startEffect && !isActivePlayer) && ownStyle['inactive-player']} ${isYahtzee && style['yahtzee-celebration']} ${startEffect && style['game-on']} ${isHovered && style['lights-up']}`}>
      <GameTotalScore
        startEffect={startGame}
        isHovered={isHovered}
        total={total} />

      <GameRooms
        startEffect={startGame}
        disableLights={hoverHandler}
        isHovered={isHovered}
        resetDice={setDice}
        rollCount={rollCount}
        resetRollCount={setRollCount}
        values={values} updateTotal={updateTotal}
        triggerYahtzee={setIsYahtzee}
        isBot={props.isBot}
        botPlayerRooms={botPlayerRooms}
      />

      <DiceContainer
        startEffect={startGame}
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
        isBot={props.isBot}
      />
      <BotLogic/>
      <Dots rollCount={rollCount} />
    </div>
  );
};

export default Player;