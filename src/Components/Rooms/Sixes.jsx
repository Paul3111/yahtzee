import { useState } from 'react';
import style from './CSS/Room.module.css'

const Sixes = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function sixScore(roll) {
    let six_score = 0
    for (let dice of roll) {
      if (dice === 6) {
        six_score += 6
      }
    }
    return six_score
  }

  const score = sixScore(props.values)

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
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Sixes</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Sixes;