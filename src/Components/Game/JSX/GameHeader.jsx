import { useState, useEffect } from 'react'

import style from '../CSS/GameHeader.module.css';

const GameHeader = (props) => {
  const [gameOn, setGameOn] = useState(false)
  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => {
        setGameOn(true)
      }, 1200)
    }
  }, [props.startEffect])
  return (
    <div className={`${style['game-header']} ${gameOn && style['game-on']}`}>
      <h1>YAHTZEE</h1>
    </div>
  );
};

export default GameHeader;