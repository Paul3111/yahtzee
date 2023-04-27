import style from '../CSS/GameTotalScore.module.css'

const GameTotalScore = (props) => {


  return (
    <div className={style['score__container']}>
      <div className={style['score__inner-container']}>
        <div className={`${style['score__decoration']} ${props.isHovered && style['lights-up']}`}></div>
        <p>1357</p>
        <div className={`${style['score__decoration']} ${props.isHovered && style['lights-up']}`}></div>
      </div>
    </div>
  );
};

export default GameTotalScore;