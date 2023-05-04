import React, {useEffect, useState} from 'react'

const BotLogic = (props) => {

  useEffect(() => {
      if(props.isBot && props.activePlayer === props.playerNumber) {

        if(isYahtzee() && props.botPlayerRooms[11].empty) {
          yahtzee()
          props.setBotDecision(true)
        } else if(isLargeStraight() && props.botPlayerRooms[10].empty) {
          largeStraight()
          props.setBotDecision(true)
        } else if(isSmallStraight() && props.botPlayerRooms[9].empty && props.rollCount >= 2) {
          smallStraight()
        } else if(isFullHouse() && props.botPlayerRooms[8].empty) {
          fullHouse()
          props.setBotDecision(true)
        } else if(isFourOfAKind() && props.botPlayerRooms[7].empty && props.rollCount >= 2) {
          fourOfAKind();
        } else if (isThreeOfAKind() && props.botPlayerRooms[6].empty && props.rollCount >= 2) {
          threeOfAKind();
        } else if (props.botPlayerRooms[12].empty && props.sum > 21 && props.rollCount >= 2) {
          chance();
        } else if (props.rollCount >= 2){
          incrementalRoomSelect()
          basicOneToSix()
        }

        if (props.rollCount >= 2) {
          props.setBotDecision(true)
        }
       // selectDice();
      }
  }, [props.counts])

  useEffect(() => {
    if(props.isBot && props.activePlayer === props.playerNumber) {
      //resetWeights();
      resetBotRooms()
      props.setBotDecision(false)
    }
}, [props.activePlayer])


  // -------------------------------------
  //-- WEIGHT SYSTEM (TOGGLE LOCK) ------
  //------------------------------------

  useEffect(() => {
    if(props.isBot && props.activePlayer === props.playerNumber) {
      adjustWeights();
    }

  }, [props.rollCount, props.counts])

  const adjustWeights = () => {
    if(props.rollCount === 1 || props.rollCount === 2) {
      const updatedWeights = [...props.diceWeights]
      for (let i = 0; i < 6; i++) {
        if(props.counts[i] > 0 ) {
          updatedWeights[i] = {...props.diceWeights[i], weight: props.diceWeights[i].value + 2}
        }
        if(props.counts[i] > 1 ) {
          updatedWeights[i] = {...props.diceWeights[i], weight: props.diceWeights[i].value + 2 + (5 * props.counts[i] - 5)}
        }
      }
      console.log("new weights: ", updatedWeights);
      return props.setDiceWeights(updatedWeights)
    }
  }


  const resetWeights = () => {
    const newWeightSet = props.diceWeights.map(die => ({value: die.value, weight: die.value}))
    console.log("Weights reset!")
    console.log("starting weights: ", newWeightSet)
    return props.setDiceWeights(newWeightSet)
  }


  // -------------------------------------
  //-- DECISION ATTEMPT FUNCTIONS -------
  //------------------------------------
  const chance = () => {
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[12].empty) {
      updatedRooms[12] = {...props.botPlayerRooms[12], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }

  const yahtzee = () => {
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[11].empty) {
      updatedRooms[11] = {...props.botPlayerRooms[11], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }

  const largeStraight = () => {
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[10].empty) {
      updatedRooms[10] = {...props.botPlayerRooms[10], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }

  const smallStraight = () => {
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[9].empty) {
      updatedRooms[9] = {...props.botPlayerRooms[9], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }


  const fullHouse = () => {
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[8].empty) {
      updatedRooms[8] = {...props.botPlayerRooms[8], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }


  const fourOfAKind = () => {
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[7].empty) {
      updatedRooms[7] = {...props.botPlayerRooms[7], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }

  const threeOfAKind = () => {
    const updatedRooms = [...props.botPlayerRooms];
    if (props.botPlayerRooms[6].empty) {
      updatedRooms[6] = {...props.botPlayerRooms[6], chosen: true, empty: false}
      return props.setBotPlayerRooms(updatedRooms)
    }
  }

  const basicOneToSix = () => {
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
        if(props.counts[i] === 5) {
        return true;
        }  
    }
    return false;
  }

  return(<></>)
}
export default BotLogic;


