import {useState, useEffect} from 'react'

import Player from "./Player";
import GameHeader from '../../Game/JSX/GameHeader'
import GameMenu from '../../Game/JSX/GameMenu'
import EndGameMp from '../../EndGameMp/JSX/EndGameMp';
import style from '../CSS/Multiplayer.module.css'

const Multiplayer = () => {
  const [players, setPlayers] = useState([1])
  const [activePlayer, setActivePlayer] = useState(1)
  const [key, setKey] = useState(1)
  const [isBot, setIsBot] = useState(false)
  const [botPlayers, setBotPlayers] = useState([])

  // ADD PLAYER LOGIC
  const addKey = async () => {
    setKey((prevKey) => {
      return prevKey += 1
    }) 
  }

  const addBot = () => {
    setBotPlayers(prevBotPlayers => [...prevBotPlayers, key + 1])
    addKey()
  }

  useEffect(() => {
    if (key > 1) {
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
        {/* <EndGameMp/> */}
      </div>
      <div className={style['players-container']}>
        {players.map( key => {
          const bot = botPlayers.includes(key) ? true : false
          return (
            <Player
              key={key}
              playerNumber={key}
              activePlayer={activePlayer}
              nextPlayer={nextPlayer}
              isBot={bot} // change to true for all bot players
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
        <button onClick={addBot}>Add bot</button>
      </div>
      
    </div>
  );
};

export default Multiplayer;