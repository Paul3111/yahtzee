import style from '../CSS/StartPopup.module.css';
import { useNavigate } from 'react-router-dom';

const StartPopup = (props) => {
    const navigate = useNavigate();
    const cancelGame = () => {
        navigate('/home')
      }
  return (
    <section className={style['start-game-container']}>
      <div className={style['start-game-container__inner']}>
        <div className={style['start-game-popup']}>
          <div className={style['start-game-popup__header']}>
            <h2>Ready?</h2>
          </div>
            <div className={style['start-game-btn-container']}>
                <button onClick={props.start} className={style['start-game-popup__btn']}>Yes</button>   
                <button onClick={cancelGame} className={style['start-game-popup__btn']}>No</button>   
            </div>
        </div>     
      </div>
    </section>
  );
};

export default StartPopup;