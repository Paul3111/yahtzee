import style from './RollDiceButton.module.css'

const RollDiceButton = (props) => {
  return (
    <div className={style['roll-dice-btn-container']}>
      <button className={style['roll-dice-btn']}
        onClick={props.onRoll}
        onMouseEnter={props.onBtnHover}
        onMouseLeave={props.onBtnHover}>
        ROLL
      </button>
      {/* dots */}
    </div>
  );
};

export default RollDiceButton;