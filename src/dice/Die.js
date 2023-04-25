import React, { useState } from 'react'
import './Die.css'

const Die = (props) => {
  const { value, locked, onClick } = props

  // const toggleLock = () => {
  //   setLocked(!locked);
  //   console.log(locked);
  // }

  return (
    <div className={`die ${locked ? "locked" : ""}`} onClick={onClick}>
      <img src={`./assets/dice-${value}.png`} width="70" alt=""/>
    </div>
  )
}

export default Die;