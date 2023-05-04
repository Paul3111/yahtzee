import { useState, useEffect } from 'react'

import style from './RollDiceButton.module.css'
import roll1 from './audio/miniRetro-yahtzeeRoll1.mp3'
import roll2 from './audio/miniRetro-yahtzeeRoll2.mp3'
import roll3 from './audio/miniRetro-yahtzeeRoll3.mp3'

const RollDiceButton = (props) => {
  const [isWaiting, setIsWaiting] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const [gameOn, setGameOn] = useState(false)

  // -- AUDIO-----
  const [rollSound1] = useState(new Audio(roll1));
  const [rollSound2] = useState(new Audio(roll2));
  const [rollSound3] = useState(new Audio(roll3));

  const rollAudio = () => {
    let rollSounds = [rollSound1, rollSound2, rollSound3]
    for (let i = 0; i < rollSounds.length; i++) {
      rollSounds[i].currentTime = 0
      if (props.rollCount === i && props.audioEnabled) {
        rollSounds[i].play()
      } else {
        rollSounds[i].pause();
      }
    }
  }
  // ----------------

  //--BOT -----
  useEffect(() => {
    setTimeout(() => {
      if(props.isBot && props.activePlayer === props.playerNumber) {
        clickHandler();
      }
    }, 900)
  }, [props.activePlayer])

  useEffect(() => {
    setTimeout(() => {
      if(props.isBot && !props.botDecision && props.activePlayer === props.playerNumber && props.rollCount > 0 && props.rollCount < 3) {
        clickHandler();
      }
    }, 1100)
  }, [props.rollCount])

  
  //--BOT END---

  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => { 
        setGameOn(true)
      }, 1200)
    }
  }, [props.startEffect])

  useEffect(() => {
    if (props.rollCount === 3) setIsDisabled(true)
    else setIsDisabled(false)
  }, [props.rollCount])

  const clickHandler = () => {
    props.isHoveredTrue()
    props.onRoll()
    setIsWaiting(true)

    setTimeout(() => {
      setIsWaiting(false)
    }, 800)
  }

  return (
    <div className={style['roll-dice-btn-container']}>

      <audio src={roll1}/>
      <audio src={roll2}/>
      <audio src={roll3}/>

      <button className={`${style['roll-dice-btn']} ${gameOn && style['game-on']} ${(!gameOn || isDisabled || isWaiting) && style['is-disabled']}`}
        disabled={!gameOn || isDisabled || isWaiting}
        onClick={() => {clickHandler(); rollAudio()}}
        onMouseEnter={props.isHoveredTrue}
        onMouseLeave={props.isHoveredFalse}
      >
        ROLL
      </button>
      {/* dots */}
    </div>
  );
};

export default RollDiceButton;