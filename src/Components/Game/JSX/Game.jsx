import {useState, useEffect} from 'react'

import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';
import HowToPlay from '../../HowToPlay/JSX/HowToPlay';
import GameTotalScore from './GameTotalScore';
import DiceContainer from '../../Dice/DiceContainer';
import GameMenu from './GameMenu';

const Game = () => {
  const [isHovered, setIsHovered] = useState(false)

  //this below is used to add class yahtzee-celebration to css
  // it can be used for other purposes
  // but if not, please set this to true when Yahtzee
  const [isYahtzee, setIsYahtzee] = useState(false)

  const hoverHandler = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div className={`${style['god-container']} ${isYahtzee && style['yahtzee-celebration']}`}>
      <GameHeader />
      <GameMenu />
      <div className={`${style['game-container']} ${isHovered && style['lights-up']}`}>
        <GameTotalScore isHovered={isHovered} />
        <GameRooms />  
        <DiceContainer isHovered={isHovered} onBtnHover={hoverHandler} />
      </div>
        <HowToPlay />
    </div>
  );
};

export default Game;