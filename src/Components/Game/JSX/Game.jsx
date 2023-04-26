import {useState} from 'react'

import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';
import HowToPlay from '../../HowToPlay/JSX/HowToPlay';
import GameTotalScore from './GameTotalScore';
import DiceContainer from '../../Dice/DiceContainer';

const Game = () => {
  const [isHovered, setIsHovered] = useState(false) 
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0])
  const rolls = [3, 5, 2, 4, 5] //expecting array of 6 numbers[0, 1, 1, 1, 2, 0]

  const hoverHandler = () => {
    setIsHovered(!isHovered)
  }

  const generateCounts = () => {
    let newCounts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
      newCounts[(rolls[i] ) -1 ] += 1;
    }
    setCounts(newCounts);
    return counts
  }

  const logCounts = () => {
    const result = generateCounts();
    console.log(result);
  }

  return (
    <div className={style['god-container']}>
      <GameHeader />
      <div className={`${style['game-container']} ${isHovered && style['lights-up']}`}>
        <GameTotalScore isHovered={isHovered} />
        <GameRooms />  
        <DiceContainer onBtnHover={hoverHandler} />
        <button onClick={logCounts}>logCounts</button>
      </div>
        <HowToPlay />
    </div>
  );

  
};



export default Game;