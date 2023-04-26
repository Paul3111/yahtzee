import style from './RollDiceButton.module.css'

const RollDiceButton = (props) => {
  return (
    <div className={style['roll-dice-btn-container']}>
          <button className={style['roll-dice-btn']} onMouseEnter={props.onBtnHover} onMouseLeave={props.onBtnHover}>ROLL</button>
    </div>
  );
};

export default RollDiceButton;