import { useState } from 'react';
import style from './CSS/Room.module.css'

const ThreeOfAKind = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function threeOfAKindScore(roll) {
    for (let i = 1; i <= 6; i++) {
      if (roll.filter(x => x === i).length >= 3) {
        return roll.reduce(function(x, y) {
          return x + y;
        });     
      }
    }
    return 0;
  }

  const score = threeOfAKindScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    setIsDisabled(true)
  }

  const rollZero = props.rollCount === 0

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Three of a kind</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default ThreeOfAKind;