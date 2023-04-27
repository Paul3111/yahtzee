import { useState } from 'react';
import style from './CSS/Room.module.css'

const Yahtzee = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  function YahtzeeScore(roll) {
    for (let i = 1; i <= 6; i++) {
      if (roll.filter(x => x === i).length === 5) {
        props.isYahtzee(true)
        return 50
      }     
    }
    return 0 
    }

  const score = YahtzeeScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Yahtzee</button>
      <div>
        <p>{isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Yahtzee;