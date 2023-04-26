import style from './CSS/Room.module.css'

const ThreeOfAKind = () => {
  return (
    <div className={`${style['room']} ${style['reverse']}`}>
      <button>Three of a kind</button>
      <div>
        <p>25</p>
      </div>
    </div>
  );
};

export default ThreeOfAKind;