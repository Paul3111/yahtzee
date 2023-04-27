import style from '../CSS/GameMenu.module.css'

const GameMenu = () => {
  return (
    <ul className={style['navbar-container']}>
      <li><a className={style['navbar-link']} href="/Home">Home</a></li>
      <li><a className={style['navbar-link']} href="/Scoreboard">Scoreboard</a></li>
      <li><a className={style['navbar-link']} href="/Settings">Settings</a></li>
      <li><a className={style['navbar-link']} href="/Signup">Signup</a></li>
    </ul>
  );
};

export default GameMenu;