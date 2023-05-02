import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Home.module.css';
import GameHeader from '../Game/JSX/GameHeader';
import '../Game/CSS/GameHeader.module.css';
import GameMenu from '../Game/JSX/GameMenu';

const Home = () => {
  const navigate = useNavigate();

  const gameRedirect = () => {
    navigate('/game')
  }

  return (
    <div className={`${style['god-container']}`}>
      <GameMenu />
      <div className={style['page-container']}>
        <div className={style['game-header']}>
        <GameHeader />
        </div>
          <button className={style['enter-to-start']} 
          onClick={gameRedirect}>
            PLAY
          </button>
        </div>
    </div>
  );
};

export default Home;