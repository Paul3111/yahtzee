import { useEffect, useState } from 'react';
import style from './CSS/Room.module.css'

const Yahtzee = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  // Algorithm to identify Yahtzee
  // Used in YahtzeeScore() and useEffect
  const isYahtzee = (roll) => {
    for (let i = 1; i <= 6; i++) {
      if (roll.filter(x => x === i).length === 5) return true    
    }
    return false 
  }

  function YahtzeeScore(roll) {
    if (isYahtzee(roll)) { 
      return 50
    } 
    else return 0
  }

  useEffect(() => {
    if (isDisabled && isYahtzee(props.values)) {
      props.updateYahtzeeScore(100)
      props.updateTotal(100)
    }
  }, [props.values])

  const score = YahtzeeScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    props.resetRollCount(0)
    props.resetDice((prevDiceSet) => {
      return prevDiceSet.map((object) => {
        return {value: object.value, locked: false}
      })
    })
    setIsDisabled(true)
  }

  const rollZero = props.rollCount === 0

  return (
    <div className={
      `${style['room']} 
      ${style['reverse']} 
      ${isDisabled && style['is-used']} 
      ${rollZero && !isDisabled && style['is-disabled']} 
      ${score > 0 && !rollZero && style['is-potential']}`}
    >
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Yahtzee</button>
      <div>
        <p>{rollZero && props.savedScore === 0 ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Yahtzee;