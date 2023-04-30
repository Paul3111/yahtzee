import { useState } from 'react';
import style from './CSS/Room.module.css'

import scoreSelect from './audio/miniRetro-yahtzeeScoreSelect3.mp3'

const LargeStraight = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [scoreSelect3] = useState(new Audio(scoreSelect))

  const clickAudio = () => {
    scoreSelect3.currentTime = 0;
    if(props.audioEnabled) {
      scoreSelect3.play()
    } else {
      scoreSelect3.pause()
    }
  }

  function LGstraightScore(roll) {
    if (roll.length === 0) return 0

    roll.sort();
    for (let i = 1; i < roll.length; i++) {
      if (roll[i] !== roll[i - 1] + 1) {
        return 0;
      }
    }
    return 40;
  }

  const score = LGstraightScore(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
    props.resetRollCount(0)

    clickAudio()
    
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
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Large Straight</button>
      <div>
        <p>{rollZero && props.savedScore === 0 ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default LargeStraight;