import { useNavigate } from 'react-router-dom';
import style from '../CSS/Leaderboard.module.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import FirstPopUp from '../../FirstPopUp/JSX/FirstPopUp';

import EndGameContext from '../../../Context/EndGameContext';

const Leaderboard = (props) => {
  const context = useContext(EndGameContext)
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [playerHasSaved, setPlayerHasSaved] = useState(false)

  const homeRedirect = () => {
    navigate('/home')
  }

  const playRedirect = () => {
    navigate('/game')
  }

  const markAsSaved = () => {
    setPlayerHasSaved(true)
  }

  const saveScore = (name, avatar) => {
    context.savingData();
    
    fetch('http://localhost:8080/players', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username: name, avatar: avatar, score: props.endScore})
        }).then(res => {
          console.log(res)
        })
  }

  useEffect(() => {
    axios.get('http://localhost:8080/players')
    .then(response => {
      setPlayers(response.data);
      setPlayerHasSaved(false)
    })
    .catch(error  => {
      console.error(error);
    });
    
  }, [playerHasSaved]);

  return (
  <div className={`${style['god-container']}`}>
      <div className={style['game-header']}>
        <h1>LEADERBOARD</h1>
        <ul className={style['navbar-container']}>
          <li><a onClick={homeRedirect} className={style['navbar-link']}>Home</a></li>
          <li><a onClick={playRedirect} className={style['navbar-link']}>Play</a></li>
          <li><a className={style['navbar-link']} href="/multiplayer">Multiplayer(BETA)</a></li>
        </ul>
      </div>
    <div className={style['page-container']}>
        <div className={style['leaderboard-container']}>
          <article className={style['leaderboard-header']}>
            <div className={style['leaderboard-header-left-side']}>
              <h1>Player</h1>
            </div>
            <h1>Score</h1>
          </article>
          {players.sort((a, b) => parseInt(a.scores.score) < parseInt(b.scores.score) ? 1 : -1).map(player => {
            return (
              <article className={style['score-container']} key={player._id}>
                <div className={style['score-container-left-side']}>
                  <div><img src={player.avatar} alt="" /></div>
                  <h2>{player.username}</h2>
                </div>
                <h2>{player.scores.score}</h2>
              </article>
            )})}
      </div>
    </div>
      <div className={style['save-popup']}>
        {context.showSavePopUp && <FirstPopUp markAsSaved={markAsSaved} endScore={props.endScore} saveScore={saveScore} />}
      </div>
  </div>
  );
};

export default Leaderboard;