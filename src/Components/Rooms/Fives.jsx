import style from './CSS/Room.module.css'

const Fives = () => {

  return (
    <div className={style['room']}>
      <button>Fives</button>
      <div>
        <p>25</p>
      </div>
    </div>
  );
};

export default Fives;