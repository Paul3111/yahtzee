import { useEffect, useState } from 'react';
import style from './CSS/Room.module.css'

const Yahtzee = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function YahtzeeScore(roll) {
    for (let i = 1; i <= 6; i++) {
      if (roll.filter(x => x === i).length === 5) {
        return 50
      }     
    }
    return 0 
  }

  useEffect(() => {
    console.log('IN THE EFFECT')
    if (isDisabled) {
      for (let i = 1; i <= 6; i++) {
        if (props.values.filter(x => x === i).length === 5) {
          props.updateYahtzeeScore(100)
          props.updateTotal(100)
        }     
      }
    }
  }, [props.values])

  const score = YahtzeeScore(props.values)

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
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']} ${rollZero && style['is-disabled']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Yahtzee</button>
      <div>
        <p>{rollZero ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Yahtzee;