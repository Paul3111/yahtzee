import { useState } from 'react';
import style from './CSS/Room.module.css'

const Twos = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function twoScore(roll) {
    let two_score = 0
    for (let dice of roll) {
      if (dice === 2) {
        two_score += 2
      }
    }
    return two_score
  }

  const score = twoScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    props.updateSubTotal(score)
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Twos</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Twos;