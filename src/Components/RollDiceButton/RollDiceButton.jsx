import style from './RollDiceButton.module.css'

const RollDiceButton = (props) => {

  const isDisabled = props.rollCount === 3

  return (
    <div className={style['roll-dice-btn-container']}>
      <button className={`${style['roll-dice-btn']} ${isDisabled && style['is-disabled']}`}
        disabled={isDisabled}
        onClick={props.onRoll}
        onMouseEnter={props.onBtnHover}
        onMouseLeave={props.onBtnHover}
      >
        ROLL
      </button>
      {/* dots */}
    </div>
  );
};

export default RollDiceButton;