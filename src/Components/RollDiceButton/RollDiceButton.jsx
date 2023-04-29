import { useState, useEffect } from 'react'

import style from './RollDiceButton.module.css'

const RollDiceButton = (props) => {
  const [isWaiting, setIsWaiting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if (props.rollCount === 3) setIsDisabled(true)
    else setIsDisabled(false)
  }, [props.rollCount])

  const clickHandler = () => {
    props.isHoveredTrue()
    props.onRoll()
    setIsWaiting(true)

    setTimeout(() => {
      setIsWaiting(false)
    }, 800)
  }

  return (
    <div className={style['roll-dice-btn-container']}>
      <button className={`${style['roll-dice-btn']} ${(isDisabled || isWaiting) && style['is-disabled']}`}
        disabled={isDisabled || isWaiting}
        onClick={clickHandler}
        onMouseEnter={props.isHoveredTrue}
        onMouseLeave={props.isHoveredFalse}
      >
        ROLL
      </button>
      {/* dots */}
    </div>
  );
};

export default RollDiceButton;