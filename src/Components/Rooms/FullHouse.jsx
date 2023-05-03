import { useState, useEffect } from 'react';
import style from './CSS/Room.module.css'

import scoreSelect from './audio/miniRetro-yahtzeeScoreSelect2.mp3'

const FullHouse = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [scoreSelect2] = useState(new Audio(scoreSelect))
  const [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => setGameOn(true), 450)
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

  function fullHouseScore(roll) {
    const uniqDice = [...new Set(roll)] // returns an array of unique dice
    if (uniqDice.length !== 2) return 0

    const countDice = [0, 0]
    roll.forEach((die) => { 
      if (die === uniqDice[0]) {countDice[0] += 1 }
      if (die === uniqDice[1]) {countDice[1] += 1 }
    })

    if (countDice.includes(3 || 2)) return 25
    else return 0
  }

  const score = fullHouseScore(props.values)

  useEffect(() => {
    setTimeout(() => {
      if (props.isBot && props.botDecision && !isDisabled && props.botPlayerRooms[8].chosen && props.activePlayer === props.playerNumber) {
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
    <div className={`${style['room']} ${gameOn && style['game-on']} ${style['reverse']} ${isDisabled && style['is-used']} ${rollZero && !isDisabled && style['is-disabled']} ${score > 0 && !rollZero && style['is-potential']}`}>
      <button onClick={useRoom} disabled={isDisabled || rollZero}>Full House</button>
      <div>
        <p>{rollZero && props.savedScore === 0 ? '0' : isDisabled ? props.savedScore : score}</p>
      </div>
    </div>
  );
};

export default FullHouse;