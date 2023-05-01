import { useState, useEffect } from 'react';
import style from './CSS/Room.module.css'

const Bonus = (props) => {
  const [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => setGameOn(true), 550)
    }
  }, [props.startEffect])

  const bonus = () => {
    if (props.subTotal >= 63) return 35
    else return 63 - props.subTotal
  }

  const score = bonus(props.values)

  const useRoom = () => {
    props.onRollDice(score)
    props.updateTotal(score)
  }

  return (
    <div className={`${style['room']} ${gameOn && style['game-on']} ${props.subTotal >= 63 ? style['is-granted'] : style['is-disabled']}`}>
      <button onClick={useRoom} disabled={true}>Bonus</button>
      <div>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default Bonus;