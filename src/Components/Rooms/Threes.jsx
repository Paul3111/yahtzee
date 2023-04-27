import { useState } from 'react';
import style from './CSS/Room.module.css'

const Threes = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function threeScore(roll) {
    let three_score = 0
    for (let dice of roll) {
      if (dice === 3) {
        three_score += 3 
      }
    }
    return three_score
  }

  const score = threeScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Threes</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Threes;