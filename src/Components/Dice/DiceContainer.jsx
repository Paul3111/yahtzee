import React, { useState, useEffect, useContext} from 'react'
import RollDiceButton from '../RollDiceButton/RollDiceButton'
import Die from './Die/Die'
import './DiceContainer.css'
import lockDie from './audio/miniRetro-yahtzeeLockDie.mp3'
import { GameContext } from '../Game/JSX/Game'

const DiceContainer = (props) => {
  const gameContext = useContext(GameContext);

  const { dice, setDice, counts, setCounts, diceValueSum, setDiceValueSum, values, setValues } = props
  const [lockDieSound] = useState(new Audio(lockDie))
  const [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => setGameOn(true), 600)
    }
  }, [props.startEffect])

  const lockDieAudio = () => {
    lockDieSound.currentTime = 0;
    if(gameContext.audioEnabled) {
      lockDieSound.play()
    } else {
      lockDieSound.pause()
    }
  }

  //--BOT START ---

  const selectDice = () => {
    const sum = props.diceWeights.reduce((sum, die) => sum + die.weight, 0)
    const threshold = props.threshold
    const selected = []

    if(props.threshold === 1) {
      const uniqueValues = new Set()
      for (let i = 0; i < 6; i++) {
        if (props.diceWeights[i].weight >= threshold && !uniqueValues.has(props.diceWeights[i].value) && !selected.some(die => die.value === props.diceWeights[i].value)) {
          if (!selected.some(die => die.value === props.diceWeights[i].value)) {
            selected.push(props.diceWeights[i])
            uniqueValues.add(props.diceWeights[i].value)
          }
        }
      }
    }
    else {
      for (let i = 0; i < 6; i++) {
        if (props.diceWeights[i].weight >= threshold) {
          selected.push(props.diceWeights[i]);
        }
      }
    }
    console.log("Threshold: ", threshold)
    console.log("Selected dice: ", selected)
    return selected
  }

  useEffect(() => {
    setTimeout(() => {
      if (props.isBot && props.activePlayer === props.playerNumber && props.rollCount ===1) {
        const selectedDice = selectDice()
        const updatedDice = [...dice]
        
        for (let i = 0; i < updatedDice.length; i++) {
          if (selectedDice.some(die => die.value === updatedDice[i].value)) {
            updatedDice[i].locked = true
          } else {
            updatedDice[i].locked = false
          }
        }
        setDice(updatedDice)
        lockDieAudio()
      }
    }, 200)
  }, [props.botHeldDice, props.diceWeights])

  //-- BOT END ----

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
    generateCounts(rolledDice);
    generateSum(rolledDice);

    setTimeout(() => {
      const finishedDice = rolledDice.map(die => ({ ...die, rolling: false }));
      setDice(finishedDice);
      returnRollValues(finishedDice)
    }, 800);

    props.countRolls()
  }
  
  // returns a random number 1 - 6
  const rollDie = () => {
    if(gameContext.onlyYahtzees) return 6
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
      <div className={`dice-container ${gameContext.isHovered && 'light-up'} ${gameOn && 'gameOn'}`}>
        { dice.map((die, index) => (
          <Die key={index}
            startEffect={props.startEffect}
            value={die.value} locked={die.locked}
            rolling={die.rolling}
            onClick={() => toggleLock(index)}
            rollCount={props.rollCount}
            isHovered={gameContext.isHovered}
          />
        ))}
      </div>
      <RollDiceButton
        startEffect={props.startEffect}
        isHoveredTrue={props.isHoveredTrue}
        isHoveredFalse={props.isHoveredFalse}
        onRoll={rollDice}
        rollCount={props.rollCount} 
        isBot={props.isBot}
        activePlayer={props.activePlayer}
        playerNumber={props.playerNumber}
        botDecision={props.botDecision}/>
    </div>
  )
}
export default DiceContainer;
