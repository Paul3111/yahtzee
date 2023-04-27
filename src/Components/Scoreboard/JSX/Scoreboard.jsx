import { useNavigate } from 'react-router-dom';
import style from '../CSS/Scoreboard.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Scoreboard = () => {
  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate('/home')
  }

const Dashboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('/players')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error  => {
        console.error(error);
      });
  }, []);
}

  return (
    <div className={`${style['god-container']}`}>
    <div>
      <h1>Dashboard</h1>
      <ul>
        {players.map(player => {
          <li key={player.username}>
            {player.username}: {player.scores}
          </li>
        })}
      </ul>
    </div>
        <div className={style['page-container']}>
          <button className={style['go-to-home']} 
          onClick={homeRedirect}>
            Home
          </button>
        </div>
    </div>
  );
};

export default Scoreboard;