import style from './CSS/Room.module.css'

const LargeStraight = () => {
  return (
    <div className={`${style['room']} ${style['reverse']}`}>
    <button>Large Straight</button>
    <div>
      <p>40</p>
    </div>
  </div>
  );
};

export default LargeStraight;