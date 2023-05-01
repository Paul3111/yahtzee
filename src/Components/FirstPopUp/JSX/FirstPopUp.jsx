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

    // const handleSave = (event) => {
    //   event.preventDefault();
    //   props.saveScore(name);
    //   fetch('/players', {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({name: name, score: props.total})
    //   })
    //   .then(response => {
    //     if(response.status === 201) {
    //       // console.log(name); //works
    //       console.log(response);
    //       console.log('Added')
    //     } else {
    //       console.error("Not addedd");
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error while adding the score' ,error);
    //   })
    // }

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
              </form>
            </div>

            <div className={style['leaderboard-first-popup-btn-container']}>
                {/* <button onClick={props.saveScore} className={style['leaderboard-first-popup__btn']}>Save</button>    */}
                <button onClick={handleSave} className={style['leaderboard-first-popup__btn']}>Save</button>                   <button onClick={props.savingData} className={style['leaderboard-first-popup__btn']}>Cancel</button>   
            </div>

        </div>     
      </div>
    </section>
  );

};

export default FirstPopUp;