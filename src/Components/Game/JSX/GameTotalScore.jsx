import { useState, useEffect } from 'react'

import style from '../CSS/GameTotalScore.module.css'

const GameTotalScore = (props) => {
  const [isIncremented, setIsIncremented] = useState(false)
  useEffect(() => {
    setIsIncremented(true)
    setTimeout(() => {
      setIsIncremented(false)
    }, 200);
  }, [props.total])

  return (
    <div className={style['score__container']}>
      <div className={style['score__inner-container']}>
        <div className={`${style['score__decoration']} ${props.isHovered && style['lights-up']} ${isIncremented && style['all-lights-up']}`}></div>
        <p className={`${isIncremented && style['is-incremented']}`}>{props.total}</p>
        <div className={`${style['score__decoration']} ${props.isHovered && style['lights-up']} ${isIncremented && style['all-lights-up']}`}></div>
      </div>
    </div>
  );
};

export default GameTotalScore