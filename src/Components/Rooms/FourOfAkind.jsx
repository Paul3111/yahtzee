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
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Four of a kind</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default FourOfAKind;