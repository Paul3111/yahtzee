import { useState } from 'react';
import style from './CSS/Room.module.css'

const Ones = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function oneScore(roll) {
    let one_score = 0
    for (let dice of roll) {
      if (dice === 1) {
        one_score ++
      }
    }
    return one_score
  }

  const score = oneScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Ones</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Ones;