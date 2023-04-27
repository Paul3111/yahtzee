import React, { useState } from 'react'
import './Die.css'

const Die = (props) => {
  // this props declaration makes JSX more readable and easier to add parent components!
  const { value, locked, onClick, rolling } = props

  // images files for dice need to be formatted to contain a number.
  return (
    <div className={`die ${locked ? "locked" : ""} ${rolling ? "rolling" : ""}`} onClick={onClick}>
      <img src={`./assets/dice-${value}.png`} alt=""/>
    </div>
  )
}

export default Die;