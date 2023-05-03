import { useState, useEffect } from 'react';
import style from './CSS/Room.module.css'

import scoreSelect from './audio/miniRetro-yahtzeeScoreSelect2.mp3'

const SmallStraight = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [scoreSelect2] = useState(new Audio(scoreSelect))
  const [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => setGameOn(true), 400)
    }
  }, [props.startEffect])

  const clickAudio = () => {
    scoreSelect2.currentTime = 0;
    if(props.audioEnabled) {
      scoreSelect2.play()
    } else {
      scoreSelect2.pause()
    }
  }
  
    function SMstraightScore(roll) {
      const sorted = roll.sort()

      let potentialSMS = sorted.filter((element, index, array) => {
        return element + 1 === array[index + 1]
      })

      if (potentialSMS.length < 3) return 0

      for (let i = 0; i < potentialSMS.length - 1; i++) {
        if (potentialSMS[i] + 1 !== potentialSMS[i + 1]) return 0
      }
      return 30
  };

  const score = SMstraightScore(props.values)

  useEffect(() => {
    setTimeout(() => {
      if (props.isBot && props.botDecision && !isDisabled && props.botPlayerRooms[9].chosen && props.activePlayer === props.playerNumber) {
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
    }, 1200)
  }, [props.rollCount])

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
    <div className={`${style['room']} ${gameOn && style['game-on']} ${style['reverse']} ${isDisabled && style['is-used']} ${rollZero && !isDisabled && style['is-disabled']} ${score > 0 && !rollZero && style['is-potential']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Small Straight</button>
      <div>
        <p>{rollZero && props.savedScore === 0 ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default SmallStraight;