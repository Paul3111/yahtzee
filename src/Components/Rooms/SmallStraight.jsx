import style from './CSS/Room.module.css'

const SmallStraight = () => {
  return (
    <div className={`${style['room']} ${style['reverse']}`}>
      <button>Small Straight</button>
      <div>
        <p>30</p>
      </div>
    </div>
  );
};

export default SmallStraight;