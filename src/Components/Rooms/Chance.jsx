import { useEffect, useState } from 'react';
import style from './CSS/Room.module.css'

import scoreSelect from './audio/miniRetro-yahtzeeScoreSelect3.mp3'

const Chance = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [scoreSelect3] = useState(new Audio(scoreSelect))
  const [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => setGameOn(true), 300)
    }
  }, [props.startEffect])

  const clickAudio = () => {
    scoreSelect3.currentTime = 0;
    if(props.audioEnabled) {
      scoreSelect3.play()
    } else {
      scoreSelect3.pause()
    }
  }

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
    props.resetRollCount(0)

    clickAudio();
    
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
    <div className={`${style['room']} ${gameOn && style['game-on']} ${style['reverse']} ${isDisabled && style['is-used']} ${rollZero && !isDisabled && style['is-disabled']} ${score > 0 && !rollZero && style['is-potential']}`} >
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Chance</button>
      <div>
        <p>{rollZero && props.savedScore === 0 ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default Chance;