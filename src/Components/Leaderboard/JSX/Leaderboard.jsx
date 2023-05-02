import { useNavigate } from 'react-router-dom';
import style from '../CSS/Leaderboard.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FirstPopUp from '../../FirstPopUp/JSX/FirstPopUp';

const Leaderboard = (props) => {
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
    setPlayerHasSaved(!playerHasSaved)
  }

  const saveScore = (name) => {
    props.savingData();
    
    fetch('http://localhost:8080/players', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username: name, score: props.endScore})
        }).then(res => {
          console.log(res)
        })
  }

  useEffect(() => {
    axios.get('/players')
    .then(response => {
      setPlayers(response.data);
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
          <li><a onClick={playRedirect} className={style['navbar-link']}>Play Again</a></li>
        </ul>
      </div>
    <div className={style['page-container']}>
        <div className={style['leaderboard-container']}>
          
          {players.sort((a, b) => parseInt(a.scores.score) < parseInt(b.scores.score) ? 1 : -1).map(player => {
            return (
            
            <div className={style['score-container']} key={player._id}>
              {player.username}: {player.scores.score}
            </div>
            
          )})}
      </div>
    </div>
      <div className={style['save-popup']}>
        {props.showSavePopUp && <FirstPopUp markAsSaved={markAsSaved} saveScore={saveScore} savingData={props.savingData}/>}
      </div>
  </div>
  );
};

export default Leaderboard;