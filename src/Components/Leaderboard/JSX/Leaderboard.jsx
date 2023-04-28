import { useNavigate } from 'react-router-dom';
import style from '../CSS/Leaderboard.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  const homeRedirect = () => {
    navigate('/home')
  }


  //const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('/players')
      .then(response => {
        //console.log('response');
        setPlayers(response.data);
        //console.log(response.data)
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
          {players.sort((a,b) => a.scores.score < b.scores.score ? 1:-1).map(player => { return (
            <div className={style['score-container']} key={player.username}>
                {player.username}: {player.scores.score}
            </div>  
          )})}
      </div>


        <button className={style['go-to-home']} 
        onClick={homeRedirect}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;