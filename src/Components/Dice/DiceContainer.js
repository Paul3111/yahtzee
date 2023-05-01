import React, { useState, useEffect } from 'react'
import RollDiceButton from '../RollDiceButton/RollDiceButton'
import Die from './Die/Die'
import './DiceContainer.css'
import lockDie from './audio/miniRetro-yahtzeeLockDie.mp3'

const DiceContainer = (props) => {

  const { dice, setDice, counts, setCounts, diceValueSum, setDiceValueSum, values, setValues, audioEnabled } = props
  const [lockDieSound] = useState(new Audio(lockDie))
  const [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => setGameOn(true), 600)
    }
  }, [props.startEffect])

  const lockDieAudio = () => {
    lockDieSound.currentTime = 0;
    if(props.audioEnabled) {
      lockDieSound.play()
    } else {
      lockDieSound.pause()
    }
  }

  // toggles dice state between locked and unlocked
  const toggleLock = (index) => {
    if (props.rollCount === 0) return
    const updatedDice = [...dice];
    updatedDice[index].locked = !updatedDice[index].locked;
    setDice(updatedDice);
    lockDieAudio()
  }

  // rolls dice that are not locked and updates the dice values
  const rollDice = () => {
    const rolledDice = dice.map(die => (die.locked ? die : { ...die, rolling: true, value: rollDie()})); //rollDie()
    setDice(rolledDice);

    setTimeout(() => {
      const finishedDice = rolledDice.map(die => ({ ...die, rolling: false }));
      setDice(finishedDice);
      generateCounts(finishedDice);
      generateSum(finishedDice);
      returnRollValues(finishedDice)
    }, 800);

    props.countRolls()
  }
  
  // returns a random number 1 - 6
  const rollDie = () => {
    if(props.onlyYahtzees) return 6
    return Math.floor(Math.random() * 6) + 1;
  }

  const generateCounts = (dice) => {
    let updatedCounts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
      updatedCounts[(dice[i].value ) -1 ] += 1;
    }
    setCounts(updatedCounts);
  }

  const generateSum = (dice) => {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
      sum += dice[i].value;
    }
    setDiceValueSum(sum);
  }

  const returnRollValues = (dice) => {
    const values = []
    for (let i = 0; i < 5; i++) {
      values.push(dice[i].value)
    }
    setValues(values);
  }

  return (
    <div className="wrapper">
      <div className={`dice-container ${props.isHovered && 'light-up'} ${gameOn && 'gameOn'}`}>
        { dice.map((die, index) => (
          <Die key={index}
            startEffect={props.startEffect}
            value={die.value} locked={die.locked}
            rolling={die.rolling}
            onClick={() => toggleLock(index)}
            rollCount={props.rollCount}
            isHovered={props.isHovered}
          />
        ))}
      </div>
      <RollDiceButton
        startEffect={props.startEffect}
        isHoveredTrue={props.isHoveredTrue}
        isHoveredFalse={props.isHoveredFalse}
        onRoll={rollDice}
        rollCount={props.rollCount} 
        audioEnabled={props.audioEnabled}/>
    </div>
  )
}
export default DiceContainer;
