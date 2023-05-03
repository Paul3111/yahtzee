import React, {useEffect, useState} from 'react'
import FourOfAKind from '../Rooms/FourOfAkind'
import FullHouse from '../Rooms/FullHouse'

const BotLogic = (props) => {

  useEffect(() => {
      if(props.isBot && props.activePlayer === props.playerNumber) {

        if(isFullHouse()) {
          fullHouse()
        } else if(isFourOfAKind()) {
          return fourOfAKind();
        } else if (isThreeOfAKind()) {
          return threeOfAKind();
        } 
        incrementalRoomSelect()
        basicOneToSix()
      }
  }, [props.counts])

  useEffect(() => {
    if(props.isBot && props.activePlayer === props.playerNumber) {
      resetBotRooms()
    }
}, [props.activePlayer])


const fullHouse = () => {
  console.log("full-house called")
  const updatedRooms = [...props.botPlayerRooms];
  if (props.botPlayerRooms[8].empty) {
    updatedRooms[8] = {...props.botPlayerRooms[8], chosen: true, empty: false}
    return props.setBotPlayerRooms(updatedRooms)
  }
}


const fourOfAKind = () => {
  console.log("foak called")
  const updatedRooms = [...props.botPlayerRooms];
  if (props.botPlayerRooms[7].empty) {
    updatedRooms[7] = {...props.botPlayerRooms[7], chosen: true, empty: false}
    return props.setBotPlayerRooms(updatedRooms)
  }
}

const threeOfAKind = () => {
  console.log("toak called")
  const updatedRooms = [...props.botPlayerRooms];
  if (props.botPlayerRooms[6].empty) {
    updatedRooms[6] = {...props.botPlayerRooms[6], chosen: true, empty: false}
    return props.setBotPlayerRooms(updatedRooms)
  }
}

  const basicOneToSix = () => {
    console.log("b1-6 called")
    const updatedRooms = [...props.botPlayerRooms];
    let match = false;
    for (let i = 5; i > -1; i--) {
      if(props.botPlayerRooms[i].empty && props.counts[i] > 1) {
        updatedRooms[i] = {...props.botPlayerRooms[i], chosen: true, empty: false}
        match = true;
        break;
      }
    }
    if(match) return props.setBotPlayerRooms(updatedRooms)
  }

  const incrementalRoomSelect = () => {
    console.log("i-s called")
    const updatedRooms = [...props.botPlayerRooms];
    for (let i = 0; i < 13; i++) {
      if(props.botPlayerRooms[i].empty) {
        updatedRooms[i] = {...props.botPlayerRooms[i], chosen: true, empty: false}
        break;
      }
    }
    return props.setBotPlayerRooms(updatedRooms)
  }

  const resetBotRooms = () => {
    const resetRooms = [...props.botPlayerRooms];
    for (let i = 0; i < 13; i++) {
      resetRooms[i] = {...props.botPlayerRooms[i], chosen: false}
    }
    return props.setBotPlayerRooms(resetRooms)
  }

  // helper functions

  const isThreeOfAKind = () => {
    for (let i = 0; i < 6; i++) {
      if(props.counts[i] >= 3) {
           return true;
      }      
  }
  return false
  }

  const isFourOfAKind = () => {
    for (let i = 0; i < 6; i++) {
        if(props.counts[i] >= 4) {
             return true;
        }      
    }
    return false
}

const isFullHouse = () => {
  let hasTwo = false;
  let hasThree = false;

  for (let i = 0; i < 6; i++) {
    if (props.counts[i] === 2) {
      hasTwo = true;
    } else if (props.counts[i] === 3) {
      hasThree = true;
    }
  }

  return hasTwo && hasThree;
}

  return(<></>)
}

export default BotLogic;


