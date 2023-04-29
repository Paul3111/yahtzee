import style from '../CSS/GameDots.module.css'

const GameDots = (props) => {
  return (
    <div className={style['dots-container']}>
      <div id='dot-1' className={`${style.dots} ${props.rollCount >= 1 && style['light-on']}`}></div>
      <div id='dot-2' className={`${style.dots} ${props.rollCount >= 2 && style['light-on']}`}></div>
      <div id='dot-3' className={`${style.dots} ${props.rollCount >= 3 && style['light-on']}`}></div>
    </div>
  );
};

export default GameDots;