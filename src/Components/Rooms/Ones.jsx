import style from './CSS/Room.module.css'

const Ones = () => {
  return (
    <div className={style['room']}>
      <button>Ones</button>
      <div>
        <p>6</p>
      </div>
    </div>
  );
};

export default Ones;