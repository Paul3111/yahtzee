import style from '../CSS/LeaderboardPopUp.module.css';
import { useNavigate } from 'react-router-dom';

// close pop-up when user presses No
// save to DB then close pop-up when user presses Yes
const LeaderboardPopUp = (props) => {
    const navigate = useNavigate();
    const cancelSave = () => {
        navigate('/home')
       }

  return (
    <section className={style['leaderboard-end-game-container']}>
      <div className={style['leaderboard-end-game-container__inner']}>
        <div className={style['leaderboard-end-game-popup']}>
          <div className={style['leaderboard-end-game-popup__header']}>
            <h2>Save score?</h2>
          </div>
            <div className={style['leaderboard-end-game-btn-container']}>
                <button onClick={props.saveScore} className={style['leaderboard-end-game-popup__btn']}>Yes</button>   
                <button onClick={cancelSave} className={style['leaderboard-end-game-popup__btn']}>No</button>   
            </div>
        </div>     
      </div>
    </section>
  );
};

export default LeaderboardPopUp;