import style from '../CSS/FirstPopUp.module.css';
import { useState } from 'react';

const FirstPopUp = (props) => {
    const [name, setName] = useState('');
  
    const handleNameInput = (event) => {
      setName(event.target.value);
    }
 
    const handleSave = (event) => {
      event.preventDefault();
      props.saveScore(name);
      props.markAsSaved()
    }

  return (
    <section className={style['leaderboard-first-popup-container']}>
      <div className={style['leaderboard-first-popup-container__inner']}>
        <div className={style['leaderboard-first-popup']}>
          <div className={style['leaderboard-first-popup__header']}>
            <h2>What is your player's name?</h2>
          </div>
          <div className={style['leaderboard-first-popup__input-container']}>
            <form onSubmit={handleSave}>
              <input type="text" placeholder="Your gamertag" value={name} onChange={handleNameInput} required/> 
              <div className={style['leaderboard-first-popup-btn-container']}>
                <button type='submit' className={style['leaderboard-first-popup__btn']}>Save</button> 
                <button onClick={props.savingData} className={style['leaderboard-first-popup__btn']}>Cancel</button>
              </div>
            </form>
          </div>

        </div>     
      </div>
    </section>
  );

};

export default FirstPopUp;