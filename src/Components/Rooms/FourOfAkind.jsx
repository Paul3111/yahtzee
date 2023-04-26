import style from './CSS/Room.module.css'

const FourOfAkind = () => {
  return (
    <div className={`${style['room']} ${style['reverse']}`}>
      <button>Four of a kind</button>
      <div>
        <p>30</p>
      </div>
    </div>
  );
};

export default FourOfAkind;