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
    }

  return (
    <section className={style['leaderboard-first-popup-container']}>
      <div className={style['leaderboard-first-popup-container__inner']}>
        <div className={style['leaderboard-first-popup']}>
          <div className={style['leaderboard-first-popup__header']}>
            <h2>enter user name</h2>
          </div>

            <div className={style['leaderboard-first-popup__input-container']}>
              <form onSubmit={handleSave} key={name}>
                <input type="text" placeholder="enter name here" value={name} onChange={handleNameInput} /> 
                <button type='submit' className={style['leaderboard-first-popup__btn']}>Save</button> 
                <button onClick={props.savingData} className={style['leaderboard-first-popup__btn']}>Cancel</button>  
              </form>
            </div>

        </div>     
      </div>
    </section>
  );

};

export default FirstPopUp;