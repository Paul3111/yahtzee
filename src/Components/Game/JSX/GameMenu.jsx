import style from '../CSS/GameMenu.module.css'

const GameMenu = () => {
  return (
    <ul className={style['navbar-container']}>
      <li><a className={style['navbar-link']} href="/home">Home</a></li>
      <li><a className={style['navbar-link']} href="/leaderboard">Leaderboard</a></li>
      <li><a className={style['navbar-link']} href="/multiplayer">Multiplayer(BETA)</a></li>
    </ul>
  );
};

export default GameMenu;