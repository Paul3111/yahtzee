import React, {useEffect, useState} from 'react'
import style from '../CSS/Game.module.css';
import GameHeader from './GameHeader';
import GameMenu from './GameMenu';
import GameRooms from './GameRooms';
import GameTotalScore from './GameTotalScore';
import DiceContainer from '../../Dice/DiceContainer';
import Dots from './GameDots';
import HowToPlay from '../../HowToPlay/JSX/HowToPlay';
import StartPopup from '../../StartPopup/JSX/StartPopup';
import backgroundMusic from '../audio/miniRetro-yahtzeeBackgroundv2.mp3'
import startSFX from '../audio/miniRetro-yahtzeeStartGame.mp3'
import EndGame from '../../EndGame/JSX/EndGame';
import GameToggleBtns from './GameToggleBtns';
import BotLogic from '../../Bot/BotLogic.jsx'

export const GameContext = React.createContext() // {Provider: fn, Consumer: fn}

const Game = (props) => {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const [audioEnabled, setAudioEnabled] = useState(false)

  const [music] = useState(new Audio(backgroundMusic))
  const [startSound] = useState(new Audio(startSFX))

  const [cheatMode, setCheatMode] = useState(false)
  const [onlyYahtzees, setOnlyYahtzees] = useState(false)

  const [isYahtzee, setIsYahtzee] = useState(false)
  
  const [isHovered, setIsHovered] = useState(false)

  const [gameRound, setGameRound] = useState(0)
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const [diceValueSum, setDiceValueSum] = useState(0);
  const [values, setValues] = useState([])

  const [rollCount, setRollCount] = useState(0)
  const [total, setTotal] = useState(0)

  const [startGame, setStartGame] = useState(false)
  const [startEffect, setStartEffect] = useState(false)

  const [dice, setDice] = useState([
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false },
    { value: 1, locked: false }
  ]);

  const start = () => {
    setStartGame(true)
  }
  useEffect(() => {
    setTimeout(() => {
      start()
    }, 1000)
  }, [])

  useEffect(() => {
    if (startGame) {
      setTimeout(() => {
        setStartEffect(true)
      }, 1200)
    }
  }, [startGame])

  // -- AUDIO -------
  useEffect(() => {
    if (startGame) {
      setIsPlaying(true)
      setAudioEnabled(true)
      startSound.play();
    }
  },[startGame])
  
  useEffect(() => {
    if(isPlaying) {
      music.play();
    }else {
      music.pause();
    }
  }, [isPlaying])

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }
  const toggleSFX = () => {
    setAudioEnabled(!audioEnabled)
  }
  // ---------------
  

  // -- CHEAT MODE and ONLY YAHTZEE MODE
  const toggleCheatMode = () => {
    setCheatMode(!cheatMode)
  }
  const toggleOnlyYahtzees = () => {
    setOnlyYahtzees(!onlyYahtzees)
  }
  // ---------------

  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      if (values.filter(x => x === i).length === 5) {
        setIsYahtzee(true)
        setTimeout(() => setIsYahtzee(false), 2000)
      }
    }
  }, [values])
    
  const updateTotal = (score) => {
    if (score !== 100)
      {setGameRound((prevRound) => {
        return prevRound += 1;
      })};
    setTotal((prevTotal) => {
      return prevTotal += score
    })
  }

  useEffect(() => {
    setIsHovered(false)
  }, [values])
  const hoverHandler = () => {
    setIsHovered(!isHovered)
  }
  const isHoveredTrue = () => {
    setIsHovered(true)
  }
  const isHoveredFalse = () => {
    setIsHovered(false)
  }

  const countRolls = () => {
    if (cheatMode) setRollCount(1)
    else if (rollCount < 3) {
      setTimeout(() => {
        setRollCount((prevRollCount) => prevRollCount += 1)
      }, 800)
    }
  }

  return (
    <GameContext.Provider value={{
      isPlaying: isPlaying,
      audioEnabled: audioEnabled

    }}>
      <div className={`${style['god-container']} ${isYahtzee && style['yahtzee-celebration']}`}>
        <GameHeader startEffect={startGame} />
        <GameMenu />
        <div className={`${style['game-container']} ${startEffect && style['game-on']} ${isHovered && style['lights-up']}`}>
        
          <GameTotalScore
            startEffect={startGame}
            isHovered={isHovered}
            total={total} />

          <GameRooms
            startEffect={startGame}
            disableLights={hoverHandler}
            isHovered={isHovered}
            resetDice={setDice}
            rollCount={rollCount}
            resetRollCount={setRollCount}
            values={values} updateTotal={updateTotal}
            triggerYahtzee={setIsYahtzee}
            setGameRound={setGameRound}
          />
        
          <DiceContainer
            onlyYahtzees={onlyYahtzees}
            startEffect={startGame}
            isHoveredTrue={isHoveredTrue}
            isHoveredFalse={isHoveredFalse}
            isHovered={isHovered}
            dice={dice}
            setDice={setDice}
            counts={counts}
            setCounts={setCounts}
            diceValueSum={diceValueSum}
            setDiceValueSum={setDiceValueSum}
            values={values}
            setValues={setValues}
            countRolls={countRolls}
            rollCount={rollCount}
          />

          <Dots rollCount={rollCount} />

          <audio src={backgroundMusic} loop/>
          
        </div>
        <GameToggleBtns
          audioEnabled={audioEnabled}
          cheatMode={cheatMode}
          onlyYahtzees={onlyYahtzees}
          toggleMusic={toggleMusic}
          toggleSFX={toggleSFX}
          toggleCheatMode={toggleCheatMode}
          toggleOnlyYahtzees={toggleOnlyYahtzees}
        />
        <HowToPlay />

        {/* { !startGame && <StartPopup start={start} /> } */}
        <EndGame totalScore={total} gameRound={gameRound} total={total}/>
      </div>  
    </GameContext.Provider>
  );
};
  
export default Game;