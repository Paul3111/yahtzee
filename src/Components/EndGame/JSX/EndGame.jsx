import {useState, useEffect, useContext} from 'react'
import EndGamePopUp from './EndGamePopUp';
import { GameContext } from '../../Game/JSX/Game';

const EndGame = (props) => {
  const gameContext = useContext(GameContext)
  const [gameEnd, setGameEnd] = useState(false)

  useEffect(() => {
    if(gameContext.gameRound === 13) {
      setGameEnd(true)
    }
  }, [gameContext.gameRound])

  return (
    <div>
      {gameEnd && <EndGamePopUp totalScore={props.totalScore} total={props.total}/>}
    </div>
  );
};

export default EndGame;