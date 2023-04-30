import { useState, useEffect } from 'react'

import style from '../CSS/GameTotalScore.module.css'

const GameTotalScore = (props) => {
  const [isIncremented, setIsIncremented] = useState(false)
  useEffect(() => {
    setIsIncremented(true)
    setTimeout(() => {
      setIsIncremented(false)
    }, 300);
  }, [props.total])

  return (
    <div className={style['score__container']}>
      <div className={style['score__inner-container']}>
        <div className={`${style['score__decoration']} ${(props.isHovered || isIncremented) && style['lights-up']}`}></div>
        <p className={`${isIncremented && style['is-incremented']}`}>{props.total}</p>
        <div className={`${style['score__decoration']} ${(props.isHovered || isIncremented) && style['lights-up']}`}></div>
      </div>
    </div>
  );
};

export default GameTotalScore;