import React from 'react'
import Die from './Die'

const DiceContainer = () => {
return (
  <div style={{display: 'inline-block'}}>
    <Die/>
    <Die/>
    <Die/>
    <Die/>
    <Die/>
    <Die/>
  </div>
)
}

export default DiceContainer;