import style from './CSS/Room.module.css'

const Chance = () => {
  return (
    <div className={`${style['room']} ${style['reverse']}`}>
      <button>Chance</button>
      <div>
        <p>21</p>
      </div>
    </div>
  );
};

export default Chance;