import React, { useState } from 'react'

const Die = () => {
  const [value, setValue] = useState(1);
  const diceImages = [
    "./assets/dice-one.png",
    "./assets/dice-two.png",
    "./assets/dice-three.png",
    "./assets/dice-four.png",
    "./assets/dice-five.png",
    "./assets/dice-six.png"
  ];

  const rollDie = () => {
    const result = Math.floor(Math.random() * 6);
    setValue(result);
  }

  const placeholderStyle = {
    backgroundColor: '#ff0000'
  }

  return (
    <div style={placeholderStyle} onClick={rollDie}>
      <img src={diceImages[value]}/>
    </div>
  )
}

export default Die;