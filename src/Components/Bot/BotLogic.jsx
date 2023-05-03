import React, {useEffect, useState} from 'react'

const BotLogic = (props) => {

  useEffect(() => {
      if(props.isBot && props.activePlayer === props.playerNumber) {

        if(isYahtzee() && props.botPlayerRooms[11].empty) {
          yahtzee()
        } else if(isLargeStraight() && props.botPlayerRooms[10].empty) {
          largeStraight()
        } else if(isSmallStraight() && props.botPlayerRooms[9].empty) {
          smallStraight()
        } else if(isFullHouse() && props.botPlayerRooms[8].empty) {
          fullHouse()
        } else if(isFourOfAKind() && props.botPlayerRooms[7].empty) {
          return fourOfAKind();
        } else if (isThreeOfAKind() && props.botPlayerRooms[6].empty) {
          return threeOfAKind();
        } else if (props.botPlayerRooms[12].empty && props.sum > 22) {
          chance();
        } else {
          incrementalRoomSelect()
          basicOneToSix()
        }

      }
  }, [props.counts])

  useEffect(() => {
    if(props.isBot && props.activePlayer === props.playerNumber) {
      resetBotRooms()
    }
}, [props.activePlayer])


  // -------------------------------------
  //-- DECISION ATTEMPT FUNCTIONS -------
  //------------------------------------
  const chance = () => {
    console.log("c")
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[12].empty) {
      updatedRooms[12] = {...props.botPlayerRooms[12], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }

  const yahtzee = () => {
    console.log("y")
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[11].empty) {
      updatedRooms[11] = {...props.botPlayerRooms[11], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }

  const largeStraight = () => {
    console.log("l-s")
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[10].empty) {
      updatedRooms[10] = {...props.botPlayerRooms[10], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }

  const smallStraight = () => {
    console.log("s-s called")
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[9].empty) {
      updatedRooms[9] = {...props.botPlayerRooms[9], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }


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


  // -------------------------------------
  //-- HELPER FUNCTIONS -----------------
  //------------------------------------
  const isThreeOfAKind = () => {
    for (let i = 0; i < 6; i++) {
      if(props.counts[i] >= 3) {
          return true;
      }      
    }
    return false
  }

  const isTwoOfAKind = () => {
    for (let i = 0; i < 6; i++) {
      if(props.counts[i] >= 2) {
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

  const isSmallStraight = () => {
    const counts = [...props.counts];

    // Checks 1, 2, 3, 4
    if (counts[0] >= 1 && counts[1] >= 1 && counts[2] >= 1 && counts[3] >= 1) {
      return true;
    }

    // Checks 2, 3, 4, 5
    if (counts[1] >= 1 && counts[2] >= 1 && counts[3] >= 1 && counts[4] >= 1) {
      return true;
    }

    // Checks 3, 4, 5, 6
    if (counts[2] >= 1 && counts[3] >= 1 && counts[4] >= 1 && counts[5] >= 1) {
      return true;
    }

    return false;
  }

  const isLargeStraight = () => {
    const counts = [...props.counts];

    // Checks 1, 2, 3, 4, 5
    if (counts[0] >= 1 && counts[1] >= 1 && counts[2] >= 1 && counts[3] >= 1 && counts[4]) {
      return true;
    }

    // Checks 2, 3, 4, 5, 6
    if (counts[1] >= 1 && counts[2] >= 1 && counts[3] >= 1 && counts[4] >= 1 && counts[5]) {
      return true;
    }

    return false;
  }

  const isYahtzee = () =>  {
    for(let i = 0; i < 6; i++) {
        if(props.counts[i] == 5) {
        return true;
        }  
    }
    return false;
  }

  const lowerHalfAvailable = () => {
    for (let i = 0; i < 6; i++) {
      if(props.counts[i] === 0) {
        return true
      }
    }
    return false
  }

  return(<></>)
}
export default BotLogic;


