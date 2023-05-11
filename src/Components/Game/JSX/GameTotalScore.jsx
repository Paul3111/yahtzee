import { useState, useEffect, useContext } from 'react'

import style from '../CSS/GameTotalScore.module.css'
import { GameContext } from './Game';

const GameTotalScore = (props) => {
  const gameContext = useContext(GameContext)
  const [isIncremented, setIsIncremented] = useState(false)
  const [gameOn, setGameOn] = useState(false)
  const [scoreOn, setScoreOn] = useState(false)

  useEffect(() => {
    if (props.startEffect) {
      setGameOn(true)
      setTimeout(() => { 
        setGameOn(false)
      }, 1400)
      setTimeout(() => { 
        setScoreOn(true)
      }, 1200)
    }
  }, [props.startEffect])

  useEffect(() => {
    setIsIncremented(true)
    setTimeout(() => {
      setIsIncremented(false)
    }, 200);
  }, [props.total])

  return (
    <div className={style['score__container']}>
      <div className={style['score__inner-container']}>
        <div className={`${style['score__decoration']} ${(gameOn || gameContext.isHovered) && style['lights-up']} ${isIncremented && style['all-lights-up']}`}></div>
        <p className={`${scoreOn && style['score-on']} ${isIncremented && style['is-incremented']}`}>{props.total}</p>
        <div className={`${style['score__decoration']} ${(gameOn || gameContext.isHovered) && style['lights-up']} ${isIncremented && style['all-lights-up']}`}></div>
      </div>
    </div>
  );
};

export default GameTotalScore