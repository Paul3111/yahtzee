import { useState } from 'react';
import style from './CSS/Room.module.css'

const SmallStraight = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function SMstraightScore(roll) {
    let uniqDice = [];
    roll.sort();
    for (let element of roll) {
      if(uniqDice.indexOf(element) === -1){
        uniqDice.push(element);
      }
    }
    if (uniqDice.length >= 4) {
      return 30
    } else {
      return 0
    }
  };

  const score = SMstraightScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Small Straight</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default SmallStraight;