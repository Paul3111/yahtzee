
import style from '../CSS/GameToggleBtns.module.css'

import { useContext } from 'react';
import { GameContext } from './Game';

const GameToggleBtns = (props) => {
  const gameContext = useContext(GameContext)

  return (
    <div className={style['checkbox-container']}>

      <div className={style['audio-checkbox']}>
        <div className={style['audio-checkbox-btn-container']}>
          <input checked={gameContext.isPlaying} className={style['audio-checkbox-btn']} type="checkbox" value="ToggleMusic" onChange={props.toggleMusic}></input>
          <div className={style['audio-checkbox-btn-filled']}></div>
        </div>
        <label htmlFor="ToggleMusic">Music</label>
      </div>

      <div className={style['audio-checkbox']}>
        <div className={style['audio-checkbox-btn-container']}>
          <input checked={gameContext.audioEnabled} className={style['audio-checkbox-btn']} type="checkbox" value="ToggleSFX" onChange={props.toggleSFX}></input>
          <div className={style['audio-checkbox-btn-filled']}></div>
        </div>
        <label htmlFor="ToggleSFX">SFX</label>
      </div>

      <div className={style['audio-checkbox']}>
        <div className={style['audio-checkbox-btn-container']}>
          <input checked={gameContext.cheatMode} className={style['audio-checkbox-btn']} type="checkbox" value="ToggleCheatMode" onChange={props.toggleCheatMode}></input>
          <div className={style['audio-checkbox-btn-filled']}></div>
        </div>
        <label htmlFor="ToggleCheatMode">Demo Mode</label>
      </div>

      <div className={style['audio-checkbox']}>
        <div className={style['audio-checkbox-btn-container']}>
          <input checked={gameContext.onlyYahtzees} className={style['audio-checkbox-btn']} type="checkbox" value="ToggleCheatMode" onChange={props.toggleOnlyYahtzees}></input>
          <div className={style['audio-checkbox-btn-filled']}></div>
        </div>
        <label htmlFor="ToggleCheatMode">Only Yahtzees</label>
      </div>

    </div>
  );
};

export default GameToggleBtns;