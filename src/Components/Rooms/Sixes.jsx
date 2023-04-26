import style from './CSS/Room.module.css'

const Sixes = () => {
  return (
    <div className={style['room']}>
      <button>Sixes</button>
      <div>
        <p>30</p>
      </div>
    </div>
  );
};

export default Sixes;