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
    props.resetRollCount(0)
    props.resetDice((prevDiceSet) => {
      return [
        { value: prevDiceSet[0].value, locked: false },
        { value: prevDiceSet[1].value, locked: false },
        { value: prevDiceSet[2].value, locked: false },
        { value: prevDiceSet[3].value, locked: false },
        { value: prevDiceSet[4].value, locked: false }
      ]
    })
    setIsDisabled(true)
  }

  const rollZero = props.rollCount === 0

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']} ${rollZero && !isDisabled && style['is-disabled']} ${score > 0 && !rollZero && style['is-potential']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Small Straight</button>
      <div>
        <p>{rollZero && props.savedScore === 0 ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default SmallStraight;