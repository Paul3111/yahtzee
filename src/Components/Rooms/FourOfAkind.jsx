import { useState } from 'react';
import style from './CSS/Room.module.css'

const FourOfAKind = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function fourOfAKindScore(roll) {
    for (let i = 1; i <= 6; i++) {
      if (roll.filter(x => x === i).length >= 4) {
        return roll.reduce(function(x, y) {
          return x + y;
        });     
      }
    }
    return 0;
  }

  const score = fourOfAKindScore(props.values)

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
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']} ${rollZero && !isDisabled && style['is-disabled']} ${score > 0 && !rollZero && style['is-potential']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Four of a kind</button>
      <div>
        <p>{rollZero && props.savedScore === 0 ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default FourOfAKind;