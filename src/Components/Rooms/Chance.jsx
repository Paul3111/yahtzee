import { useState } from 'react';
import style from './CSS/Room.module.css'

const Chance = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function ChanceScore(roll) {
    if (roll.length === 0) return 0 
    return roll.reduce(function(x, y) {
        return x + y;
    });
  }

  const score = ChanceScore(props.values)
  
  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    setIsDisabled(true)
  }

  const rollZero = props.rollCount === 0
  
  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`} >
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Chance</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Chance;