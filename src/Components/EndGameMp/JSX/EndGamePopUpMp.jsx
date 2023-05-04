import { useNavigate } from 'react-router-dom';
import style from '../CSS/EndGameMpPopUp.module.css';

const EndGamePopUpMp = (props) => {
  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate('/home')
  }

  const leaderboardRedirect = () => {
    props.getEndScore(props.totalScore)
    props.savingData()
    navigate('/leaderboard')
  }

  return (
    <section className={style['end-game-container']}>
      <div className={style['end-game-container__inner']}>
        <div className={style['end-game-popup']}>
          <div className={style['end-game-popup__header']}>
            <h1>CONGRATULATIONS!</h1>
          </div>
          <div className={style['end-game-popup__score-container']}>      
            <h2 className={style['summary']}>Your score:</h2>
            <h2 className={style['score']}>{props.totalScore}</h2>
          </div>
          <div className={style['end-game-popup__btns']}>
            <button className={style['end-game-popup__btn']}>Home</button>
            <button className={style['end-game-popup__btn']}>Save</button>
          </div>
        </div>     
      </div>
    </section>
  );
};

export default EndGamePopUpMp;