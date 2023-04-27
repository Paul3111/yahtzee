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
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Sixes</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Sixes;