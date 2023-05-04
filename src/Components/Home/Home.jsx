import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Home.module.css';
import GameHeader from '../Game/JSX/GameHeader';
import '../Game/CSS/GameHeader.module.css';
import GameMenu from '../Game/JSX/GameMenu';

import video from './videoBackground.mp4'

const Home = () => {
  const navigate = useNavigate();

  const gameRedirect = () => {
    navigate('/game')
  }

  return (
    <div className={style['god-container']}>
      <ul className={style['home-header-container']}>
        <li><a className={style['home-header-link']} href="/game">Arcade Mode</a></li>
        <li><a className={style['home-header-link']} href="/multiplayer">Multiplayer(BETA)</a></li>
        <li><a className={style['home-header-link']} href="/leaderboard">Leaderboard</a></li>
      </ul>
      <div className={style['home-content-container']}>
        <div className={style['video-container']}>
          <video src={video} autoPlay loop muted ></video>
          
        </div>
        <div className={style['home-title__container']}>
          <div className={`${style['home-title__letter-container']}  ${style['flickering']}`}>
            <img src="/yahtzee_letters/Y.png" alt="" />
          </div>
          <div className={`${style['home-title__letter-container']}`}>
            <img src="/yahtzee_letters/A.png" alt="" />
          </div>
          <div className={`${style['home-title__letter-container']}`}>
            <img src="/yahtzee_letters/H.png" alt="" />
          </div>
          <div className={`${style['home-title__letter-container']}`}>
            <img src="/yahtzee_letters/T.png" alt="" />
          </div>
          <div className={`${style['home-title__letter-container']}  ${style['hanging']}`}>
            <img src="/yahtzee_letters/Z.png" alt="" />
          </div>
          <div className={`${style['home-title__letter-container']} `}>
            <img src="/yahtzee_letters/E.png" alt="" />
          </div>
          <div className={`${style['home-title__letter-container']} `}>
            <img src="/yahtzee_letters/E.png" alt="" />
          </div>
        </div>
        <button className={style['enter-to-start']} onClick={gameRedirect}>
          PLAY
        </button>
      </div>
    </div>
  );
};

export default Home;