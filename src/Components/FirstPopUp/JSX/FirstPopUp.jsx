import style from '../CSS/FirstPopUp.module.css';
import { useState, useContext } from 'react';
import EndGameContext from '../../../Context/EndGameContext';

const FirstPopUp = (props) => {
    const context = useContext(EndGameContext);
    const [name, setName] = useState('');
    const [isChecked, setIsChecked] = useState("/avatar_3.jpeg");
  
    const handleNameInput = (event) => {
      setName(event.target.value);
    }
  
  const imgSelectionHandler = (event) => {
    setIsChecked(event.target.value)
  }
 
  const handleSave = (event) => {
      event.preventDefault();
      props.saveScore(name, isChecked);
      props.markAsSaved()
    }

  return (
    <section className={style['leaderboard-first-popup-container']}>
      <div className={style['leaderboard-first-popup-container__inner']}>
        <div className={style['leaderboard-first-popup']}>
          <div className={style['leaderboard-first-popup__header']}>
            <h1>Save your game</h1>
          </div>
          <div className={style['leaderboard-first-popup__input-container']}>
            <h2>Your score: {context.endScore}</h2>
            <form onSubmit={handleSave}>
              <div className={style['name-prompt-container']}>
                <h2>Enter your name</h2>
                <input type="text" placeholder="username" value={name} onChange={handleNameInput} required /> 
              </div>

              
              <div className={style['avatar-selection-container']}>
                <h2>Choose an avatar</h2>
                <div className={style['avatar-selection']}>
                  <div className={`${style['avatar']} ${isChecked === "/avatar_1.jpeg"  && style['is-checked']}`}>
                    <input type="radio" name="avatar" value="/avatar_1.jpeg" onChange={imgSelectionHandler} />
                    <img src="/avatar_1.jpeg" alt="" />
                  </div>
                  <div className={`${style['avatar']} ${isChecked === "/avatar_2.jpeg" && style['is-checked']}`}>
                    <input type="radio" name="avatar" value="/avatar_2.jpeg" onChange={imgSelectionHandler} />
                    <img src="/avatar_2.jpeg" alt="" />
                  </div>
                  <div className={`${style['avatar']} ${isChecked === "/avatar_3.jpeg" && style['is-checked']}`}>
                    <input type="radio" name="avatar" value="/avatar_3.jpeg" onChange={imgSelectionHandler} />
                    <img src="/avatar_3.jpeg" alt="" />
                  </div>
                  <div className={`${style['avatar']} ${isChecked === "/avatar_4.jpeg" && style['is-checked']}`}>
                    <input type="radio" name="avatar" value="/avatar_4.jpeg" onChange={imgSelectionHandler} />
                    <img src="/avatar_4.jpeg" alt="" />
                  </div>
                  <div className={`${style['avatar']} ${isChecked === "/avatar_5.jpeg" && style['is-checked']}`}>
                    <input type="radio" name="avatar" value="/avatar_5.jpeg" onChange={imgSelectionHandler} />
                    <img src="/avatar_5.jpeg" alt="" />
                  </div>
              </div>

              </div>
              <div className={style['leaderboard-first-popup-btn-container']}>
                <button onClick={props.savingData} className={style['leaderboard-first-popup__btn']}>Cancel</button>
                <button type='submit' className={style['leaderboard-first-popup__btn']}>Save</button> 
              </div>
            </form>
          </div>

        </div>     
      </div>
    </section>
  );

};

export default FirstPopUp;