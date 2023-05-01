import { useNavigate } from 'react-router-dom';
import style from '../CSS/EndGamePopUp.module.css';

const EndGamePopUp = (props) => {
  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate('/home')
  }

  const leaderboardRedirect = () => {
    props.savingData()
    navigate('/leaderboard')
  }

  return (
    <section className={style['end-game-container']}>
      <div className={style['end-game-container__inner']}>
        <div className={style['end-game-popup']}>
          <div className={style['end-game-popup__header']}>
            <h2>CONGRATULATIONS!</h2>
          </div>                                            {/* uncomment below to display */}
          <div className={style['end-game-popup__summary']}>
            Your score:
          </div>
          <div className={style['end-game-popup__score']}>      
              {props.total}
          </div>
            <button className={style['end-game-popup__home-btn']} onClick={homeRedirect}>
              Home
            </button>
            <button className={style['end-game-popup__replay-btn']} onClick={leaderboardRedirect}>
              Save Score
            </button>
        </div>     
      </div>


      
    </section>
  );
};

export default EndGamePopUp;