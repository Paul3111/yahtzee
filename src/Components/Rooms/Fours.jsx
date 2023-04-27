import { useState } from 'react';
import style from './CSS/Room.module.css'

const Fours = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function fourScore(roll) {
    let four_score = 0
    for (let dice of roll) {
      if (dice === 4) {
        four_score += 4
      }
    }
    return four_score
  }

  const score = fourScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    props.updateSubTotal(score)
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Fours</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Fours;