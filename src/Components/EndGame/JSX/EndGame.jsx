import {useState, useEffect} from 'react'
import EndGamePopUp from './EndGamePopUp';

const EndGame = (props) => {
  const [gameEnd, setGameEnd] = useState(false)

  useEffect(() => {
    if(props.gameRound === 13) {
      setGameEnd(true)
    }
  }, [props.gameRound])

  return (
    <div>
      {gameEnd && <EndGamePopUp totalScore={props.totalScore} getEndScore={props.getEndScore} savingData={props.savingData} total={props.total}/>}
    </div>
  );
};

export default EndGame;