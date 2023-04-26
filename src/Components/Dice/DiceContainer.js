import React, { useState } from 'react'
import RollDiceButton from '../RollDiceButton/RollDiceButton'
import Die from './Die/Die'
import './DiceContainer.css'

const DiceContainer = (props) => {
  const [dice, setDice] = useState([
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false }
  ]);

  //console log functions ------------
  const logRolls = (rolls) => {
    let r = [];
    rolls.forEach(die => {
      r.push(die.value);
    })
    console.log(r);
  }

  const logLockedState = (rolls) => {
    let l = [];
    rolls.forEach(die => {
      l.push(die.locked);
    })
    console.log(l)
  }
  // ---------------------------------


  // toggles dice state between locked and unlocked
  const toggleLock = (index) =>  {
    const updatedDice = [...dice];
    updatedDice[index].locked = !updatedDice[index].locked;
    setDice(updatedDice);
    logLockedState(updatedDice);
  }

  // rolls dice that are not locked and updates the dice values
  const rollDice = () => {
    const rolledDice = dice.map(die => (die.locked ? die : { ...die, rolling: true, value: rollDie()}));
    setDice(rolledDice);
    logRolls(rolledDice);

    setTimeout(() => {
      const finishedDice = rolledDice.map(die => ({ ...die, rolling: false }));
      setDice(finishedDice);
    }, 1000);

    }
  
  // returns a random number 1 - 6
  const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  return (
    <div className="wrapper">
      <div className="dice-container">
        { dice.map((die, index) => (
          <Die key={index} value={die.value} locked={die.locked} rolling={die.rolling} onClick={() => toggleLock(index)}/>
        ))}
      </div>
      <RollDiceButton onBtnHover={props.onBtnHover} onRoll={rollDice}/>
      </div>
  )
}
export default DiceContainer;
