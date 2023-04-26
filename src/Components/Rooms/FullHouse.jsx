import style from './CSS/Room.module.css'

const FullHouse = () => {
  return (
    <div className={`${style['room']} ${style['reverse']}`}>
      <button>Full House</button>
      <div>
        <p>25</p>
      </div>
    </div>
  );
};

export default FullHouse;