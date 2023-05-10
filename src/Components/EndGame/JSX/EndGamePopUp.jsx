import { useNavigate } from 'react-router-dom';
import style from '../CSS/EndGamePopUp.module.css';
import { useContext } from 'react';
import EndGameContext from '../../../Context/EndGameContext';

const EndGamePopUp = (props) => {
  const context = useContext(EndGameContext)
  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate('/home')
  }

  const leaderboardRedirect = () => {
    props.getEndScore(props.totalScore)
    context.savingData()
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
            <h2 className={style['score']}>{props.total}</h2>
          </div>
          <div className={style['end-game-popup__btns']}>
            <button className={style['end-game-popup__btn']} onClick={homeRedirect}>Home</button>
            <button className={style['end-game-popup__btn']} onClick={leaderboardRedirect}>Save</button>
          </div>
        </div>     
      </div>
    </section>
  );
};

export default EndGamePopUp;