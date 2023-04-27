import { useState } from 'react';
import style from './CSS/Room.module.css'

const Ones = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  console.log(props)

  function OneScore(roll) {
    let one_score = 0
    for (let dice of roll) {
      if (dice === 1) {
        one_score ++
      }
    }
    return one_score
  }

  const useRoom = () => {
    props.onRollDice(score)
    setIsDisabled(true)
  }

  const score = OneScore(props.values)
  
  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Ones</button>
      <div>
        <p>{`${score}`}</p>
      </div>
    </div>
  );
};

export default Ones;