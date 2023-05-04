import {useState, useEffect} from 'react'
import EndGamePopUpMp from './EndGamePopUpMp';

import style from '../CSS/EndGameMpPopUp.module.css'

const EndGameMp = (props) => {
  const [gameEnd, setGameEnd] = useState(false)

  useEffect(() => {
    if(props.gameRound === 13) {
      setGameEnd(true)
    }
  }, [props.gameRound])

  return (
    <div className={`${style['end-game-popup-container']} ${gameEnd && style['show-pop-up']}`}>
      {gameEnd && <EndGamePopUpMp totalScore={props.totalScore} getEndScore={props.getEndScore} savingData={props.savingData} />}
    </div>
);

};

export default EndGameMp;