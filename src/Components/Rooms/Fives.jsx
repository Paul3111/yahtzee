import { useState } from 'react';
import style from './CSS/Room.module.css'

const Fives = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function fiveScore(roll) {
    let five_score = 0
    for (let dice of roll) {
      if (dice === 5) {
        five_score += 5
      }
    }
    return five_score
  }

  const score = fiveScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Fives</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Fives;