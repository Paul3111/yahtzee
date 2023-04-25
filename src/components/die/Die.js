import React, { useState } from 'react'

const Die = () => {
  const [value, setValue] = useState(1);
  const diceImages = [
    "./assets/dice-1.png",
    "./assets/dice-2.png",
    "./assets/dice-3.png",
    "./assets/dice-4.png",
    "./assets/dice-5.png",
    "./assets/dice-6.png"
  ];

  const rollDie = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setValue(result);
  }

  return (
    <div onClick={rollDie}>
      <img
        className={`dice--image ${
          value === 1 ? `dice__image__one` :
          value === 2 ? `dice__image__two` :
          value === 3 ? `dice__image__three` :
          value === 4 ? `dice__image__four` :
          value === 5 ? `dice__image__five` :
          `dice__image__six`
        }`}
        src={diceImages[result -1]}
        alt={`Dice value: ${result}`}
      />
    </div>
  )
}

export default Die;