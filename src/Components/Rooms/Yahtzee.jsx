import style from './CSS/Room.module.css'

const Yahtzee = () => {
  return (
    <div className={`${style['room']} ${style['reverse']}`}>
      <button>Yahtzee</button>
      <div>
        <p>50</p>
      </div>
    </div>
  );
};

export default Yahtzee;