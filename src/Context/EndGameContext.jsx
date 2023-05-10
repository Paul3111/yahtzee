import React, { useState } from "react";

const EndGameContext = React.createContext(); // { Provider: fn, Consumer: fn  }

export const EndGameContextProvider = (props) => {

  const [showSavePopUp, setShowSavePopUp] = useState(false)
  const [endScore, setEndScore] = useState(0)

  const savingData = () => {
    setShowSavePopUp(!showSavePopUp)
  }

  const getEndScore = (score) => {
    setEndScore(score)
  }

  return (
    <EndGameContext.Provider value={{
      showSavePopUp: showSavePopUp,
      endScore: endScore,
      savingData: savingData,
      getEndScore: getEndScore
    }}
    >
      {props.children}
    </EndGameContext.Provider>
  )
}

export default EndGameContext;