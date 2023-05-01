
import style from '../CSS/GameToggleBtns.module.css'

const GameToggleBtns = (props) => {
  return (
    <div className={style['checkbox-container']}>

      <div className={style['audio-checkbox']}>
        <div className={style['audio-checkbox-btn-container']}>
          <input checked={props.isPlaying} className={style['audio-checkbox-btn']} type="checkbox" value="ToggleMusic" onChange={() => props.toggleMusic()}></input>
          <div className={style['audio-checkbox-btn-filled']}></div>
        </div>
        <label htmlFor="ToggleMusic">Music</label>
      </div>

      <div className={style['audio-checkbox']}>
        <div className={style['audio-checkbox-btn-container']}>
          <input checked={props.audioEnabled} className={style['audio-checkbox-btn']} type="checkbox" value="ToggleSFX" onChange={() => props.toggleSFX()}></input>
          <div className={style['audio-checkbox-btn-filled']}></div>
        </div>
        <label htmlFor="ToggleSFX">SFX</label>
      </div>

      <div className={style['audio-checkbox']}>
        <div className={style['audio-checkbox-btn-container']}>
          <input checked={props.cheatMode} className={style['audio-checkbox-btn']} type="checkbox" value="ToggleCheatMode" onChange={props.toggleCheatMode}></input>
          <div className={style['audio-checkbox-btn-filled']}></div>
        </div>
        <label htmlFor="ToggleCheatMode">Cheat Mode</label>
      </div>

    </div>
  );
};

export default GameToggleBtns;