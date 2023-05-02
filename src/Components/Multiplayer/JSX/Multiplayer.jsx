import {useState, useEffect} from 'react'

import Player from "./Player";
import GameHeader from '../../Game/JSX/GameHeader'
import GameMenu from '../../Game/JSX/GameMenu'

import style from '../CSS/Multiplayer.module.css'

const Multiplayer = () => {
  const [players, setPlayers] = useState([1, 2])
  const [activePlayer, setActivePlayer] = useState(1)
  const [key, setKey] = useState(2)
  const [isBot, setIsBot] = useState(false)

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

  return (
    <div className={`${style['multiplayer-god-container']}`}>
      <div className={style['multiplayer-header']}>
        <GameHeader />
        <GameMenu />
      </div>
      <div className={style['players-container']}>
        {players.map( key => {
          const isBotPlayer = key > 1 ? true : false // all players past 1 are bots by default
          return (
            <Player
              key={key}
              playerNumber={key}
              activePlayer={activePlayer}
              nextPlayer={nextPlayer}
              isBot={isBotPlayer}
              setIsBot={setIsBot}
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
      <div className={style['multiplayer-add-player-btn-container']}>
        <button onClick={addKey}>Add player</button>
      </div>
    </div>
  );
};

export default Multiplayer;