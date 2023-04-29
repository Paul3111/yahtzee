import React, { useState } from 'react'
import './Die.css'

const Die = (props) => {
  // this props declaration makes JSX more readable and easier to add parent components!
  const { value, locked, onClick, rolling } = props

  const rollZero = props.rollCount === 0

  // images files for dice need to be formatted to contain a number.
  return (
    <div className={`die ${locked ? "locked" : ""} ${rolling ? "rolling" : ""} ${rollZero && 'is-inactive'} ${props.isHovered && 'is-hovered'}`} onClick={onClick}>
      <img src={`./assets/dice-${value}.png`} alt=""/>
    </div>
  )
}

export default Die;