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
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Large Straight</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default LargeStraight;