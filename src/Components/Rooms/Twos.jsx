import { useState } from 'react';
import style from './CSS/Room.module.css'

const Twos = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function twoScore(roll) {
    let two_score = 0
    for (let dice of roll) {
      if (dice === 2) {
        two_score += 2
      }
    }
    return two_score
  }

  const score = twoScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    props.updateSubTotal(score)
    props.resetRollCount(0)
    props.resetDice((prevDiceSet) => {
      return [
        { value: prevDiceSet[0].value, locked: false },
        { value: prevDiceSet[1].value, locked: false },
        { value: prevDiceSet[2].value, locked: false },
        { value: prevDiceSet[3].value, locked: false },
        { value: prevDiceSet[4].value, locked: false }
      ]
    })
    setIsDisabled(true)
  }

  const rollZero = props.rollCount === 0
  
  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']} ${rollZero && !isDisabled && style['is-disabled']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Twos</button>
      <div>
        <p>{rollZero ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Twos;