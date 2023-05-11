import React, { useState, useEffect, useContext } from 'react'
import './Die.css'
import { GameContext } from '../../Game/JSX/Game'

const Die = (props) => {
  // this props declaration makes JSX more readable and easier to add parent components!
  const { value, locked, onClick, rolling } = props

  const gameContext = useContext(GameContext)
  const [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    if (props.startEffect) {
      setTimeout(() => setGameOn(true), 800)
    }
  }, [props.startEffect])

  const rollZero = props.rollCount === 0

  // images files for dice need to be formatted to contain a number.
  return (
    <div className={`die ${locked ? "locked" : ""} ${rolling ? "rolling" : ""} ${rollZero && 'is-inactive'} ${gameContext.isHovered && 'is-hovered'} `} onClick={onClick}>
      <img className={gameOn ? 'game-on' : ''} src={`./assets/dice-${value}.png`} alt=""/>
    </div>
  )
}

export default Die;