import { useNavigate } from 'react-router-dom';
import style from '../CSS/Settings.module.css';

const Settings = () => {
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

export default Settings;