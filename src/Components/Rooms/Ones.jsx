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
    console.log('isHOVERED IN ONES', props.isHovered)
    if (props.isHovered) props.disableLights()
    
    props.onRollDice(score)
    props.updateTotal(score)
    props.updateSubTotal(score)
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
    <div className={`${style['room']} ${isDisabled && style['is-used']} ${rollZero && !isDisabled && style['is-disabled']} ${score > 0 && !rollZero && style['is-potential']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Ones</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Ones;