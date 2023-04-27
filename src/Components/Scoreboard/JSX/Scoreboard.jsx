import { useNavigate } from 'react-router-dom';
import style from '../CSS/Scoreboard.module.css';

const Scoreboard = () => {
  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate('/home')
  }

  return (
    <div className={`${style['god-container']}`}>
        <div className={style['page-container']}>
          <button className={style['go-to-home']} 
          onClick={homeRedirect}>
            Home
          </button>
        </div>
    </div>
  );
};

export default Scoreboard;