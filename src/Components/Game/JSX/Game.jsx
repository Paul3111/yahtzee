import {useState} from 'react'

import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';
import RollDiceButton from '../../RollDiceButton';
import HowToPlay from '../../HowToPlay';
import GameTotalScore from './GameTotalScore';


const Game = () => {
  const [isHovered, setIsHovered] = useState(false) 

  const hoverHandler = () => {
    setIsHovered(!isHovered)
  }


  return (
    <div className={style['god-container']}>
      <GameHeader />
      <div className={`${style['game-container']} ${isHovered && style['lights-up']}`}>
        <GameTotalScore isHovered={isHovered} />
        <GameRooms /> 
        
        {/* <Dice /> */}

        <RollDiceButton onBtnHover={hoverHandler} />
      </div>
        <HowToPlay />
    </div>
  );
};

export default Game;