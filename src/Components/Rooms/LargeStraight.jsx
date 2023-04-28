import { useState } from 'react';
import style from './CSS/Room.module.css'

const LargeStraight = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function LGstraightScore(roll) {
    if (roll.length === 0) return 0

    roll.sort();
    for (let i = 1; i < roll.length; i++) {
      if (roll[i] !== roll[i - 1] + 1) {
        return 0;
      }
    }
    return 40;
  }

  const score = LGstraightScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
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
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']} ${rollZero && !isDisabled && style['is-disabled']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Large Straight</button>
      <div>
        <p>{rollZero ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default LargeStraight;