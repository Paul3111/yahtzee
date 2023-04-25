import React, { useState } from 'react'
import Die from './Die'
import './DiceContainer.css'

const DiceContainer = () => {
  const [dice, setDice] = useState([
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false }
  ]);

  const toggleLock = (index) =>  {
    const updatedDice = [...dice];
    updatedDice[index].locked = !updatedDice[index].locked;
    setDice(updatedDice);
    console.log(updatedDice);
  }

  const rollDice = () => {
    const rolledDice = dice.map(die => (die.locked ? die : { ...die, value: rollDie()}));
    setDice(rolledDice);
    console.log("rollAll called: " + rolledDice)
    }
  
  const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
  }
  return (
    <div className="wrapper">
      <div className="dice-container">
        { dice.map((die, index) => (
          <Die key={index} value={die.value} locked={die.locked} onClick={() => toggleLock(index)}/>
        ))}
      </div>
      <button className="roll-button" onClick={rollDice}>Roll Dice</button>
      </div>
  )

}
export default DiceContainer;

      



// {/* values.forEach(value => {
      //   return <Dice img={diceImages[value - 1]} />
      // }) */}




// const diceImages = [
//   "./assets/dice-one.png",
//   "./assets/dice-two.png",
//   "./assets/dice-three.png",
//   "./assets/dice-four.png",
//   "./assets/dice-five.png",
//   "./assets/dice-six.png"
// ];
