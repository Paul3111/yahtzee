import { useNavigate } from 'react-router-dom';
import style from '../CSS/Leaderboard.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FirstPopUp from '../../FirstPopUp/JSX/FirstPopUp';

const Leaderboard = (props) => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [saveGame, setSaveGame] = useState(false)

  const homeRedirect = () => {
    navigate('/home')
  }

  const playRedirect = () => {
    navigate('/game')
  }

  const saveScore = (name) => {
    props.savingData();
    setSaveGame(true);
    
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

  const skipSave = () => {
    setSaveGame(false)
  }

  useEffect(() => {
    axios.get('/players')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error  => {
        console.error(error);
      });
  }, []);


  return (
  <div className={`${style['god-container']}`}>
    <div className={style['page-container']}>
      <div className={style['game-header']}>
        <h1>LEADERBOARD</h1>
      </div>
      <div className={style['leaderboard-container']}>
          {players.sort((a,b) => parseInt(a.scores.score) < parseInt(b.scores.score) ? 1:-1).map(player => { return (
          <div className={style['score-container']} key={player.username}>
            {player.username}: {player.scores.score}
          </div>  
          )})}
      </div>

      <div className={style['footer-container']}>
        <button className={style['go-to-home']} 
          onClick={homeRedirect}>
          Home
        </button>

        <button className={style['go-to-play']} 
          onClick={playRedirect}>
          Play again
        </button>
      </div>
      
    </div>
      <div className={style['save-popup']}>
          {props.showSavePopUp && <FirstPopUp saveScore={saveScore} skipSave={skipSave} savingData={props.savingData}/>}
      </div>
  </div>
  );
};

export default Leaderboard;