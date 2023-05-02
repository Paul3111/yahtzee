import {useState, useEffect} from 'react'

import Player from "./Player";
import GameHeader from '../../Game/JSX/GameHeader'
import GameMenu from '../../Game/JSX/GameMenu'

import style from '../CSS/Multiplayer.module.css'


const Multiplayer = () => {
  const [players, setPlayers] = useState([1, 2])
  const [activePlayer, setActivePlayer] = useState(1)
  const [key, setKey] = useState(2)
  
  // ADD PLAYER LOGIC
  const addKey = async () => {
    setKey((prevKey) => {
      return prevKey += 1
    }) 
  }
  useEffect(() => {
    if (key > 2) {
      setPlayers((prevPlayers) => {
        return [...prevPlayers, key]
      })
    }
  }, [key])

  // TURN SYSTEM LOGIC
  const nextPlayer = () => {
    if (activePlayer === key) {
      setActivePlayer(1)
    }
    else {
      setActivePlayer((prevPlayerNumber) => {
        return prevPlayerNumber += 1
      })
    }
  }
  console.log('active player after', activePlayer)
  console.log('key after', key)
  return (
    <div className={`${style['multiplayer-god-container']}`}>
      <GameHeader />
      <GameMenu />

      <div className={style['players-container']}>
        {players.map( key => {
          return (
            <Player
              key={key}
              playerNumber={key}
              activePlayer={activePlayer}
              nextPlayer={nextPlayer}
            />
              
          )
        })}
      </div>

      
        {/* <audio src={backgroundMusic} loop/> */}
      {/* <GameToggleBtns
        isPlaying={isPlaying}
        audioEnabled={audioEnabled}
        cheatMode={cheatMode}
        onlyYahtzees={onlyYahtzees}
        toggleMusic={toggleMusic}
        toggleSFX={toggleSFX}
        toggleCheatMode={toggleCheatMode}
        toggleOnlyYahtzees={toggleOnlyYahtzees}
      /> */}
      {/* <HowToPlay />

      { !startGame && <StartPopup start={start} /> }
      <button onClick={() => setCheatMode(!cheatMode)}>Cheat Mode</button>
      <EndGame totalScore={total} getEndScore={props.getEndScore} savingData={props.savingData} gameRound={gameRound} total={total}/> */}
      <button onClick={addKey}>Add player</button>
    </div>
  );
};

export default Multiplayer;