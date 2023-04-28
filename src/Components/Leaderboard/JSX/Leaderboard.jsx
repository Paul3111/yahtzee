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
        console.log('response');
        setPlayers(response.data);
        console.log(response.data)
      })
      .catch(error  => {
        console.error(error);
      });
  }, []);


  return (
    <div className={`${style['god-container']}`}>
      <div className={style['page-container']}>
        <h1>Leaderboard</h1>
      <div className={style['leaderboard-container']}>
        <ul>
          {players.map(player => { return (
            <div className={style['score-container']} key={player.username}>
              <li>
                {player.username}: {player.scores.score}
              </li>
            </div>
          )})}
        </ul>
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