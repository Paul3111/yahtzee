import style from '../CSS/FirstPopUp.module.css';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const FirstPopUp = (props) => {
    // const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleNameInput = (event) => {
      setName(event.target.value);
    }
    
    const handleSave = () => {
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
              <input type="text" placeholder="enter name here" value={name} onChange={handleNameInput} />
            </div>

            <div className={style['leaderboard-first-popup-btn-container']}>
                <button onClick={props.saveScore} className={style['leaderboard-first-popup__btn']}>Save</button>   
                <button onClick={props.savingData} className={style['leaderboard-first-popup__btn']}>Cancel</button>   
            </div>
        </div>     
      </div>
    </section>
  );

};

export default FirstPopUp;