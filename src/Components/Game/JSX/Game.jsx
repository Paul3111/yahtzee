import {useState, useEffect} from 'react'

import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameRooms from './GameRooms';
import HowToPlay from '../../HowToPlay/JSX/HowToPlay';
import GameTotalScore from './GameTotalScore';
import DiceContainer from '../../Dice/DiceContainer';

const Game = () => {
  const [isHovered, setIsHovered] = useState(false) 

  const hoverHandler = () => {
    setIsHovered(!isHovered)
  }

  const [data, setData] = useState({});


  useEffect(() => {
    fetch('http://localhost:8080/players')
      .then(res => res.json())
      .then(data => {
        setData(data)
      });
  }, []);

  return (
    <div className={style['god-container']}>
      <GameHeader />
      <div className={`${style['game-container']} ${isHovered && style['lights-up']}`}>
        <GameTotalScore isHovered={isHovered} />
        <GameRooms />  
        <DiceContainer onBtnHover={hoverHandler} />
      </div>
        <HowToPlay />
    </div>
  );
};

export default Game;