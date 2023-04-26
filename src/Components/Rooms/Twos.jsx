import style from './CSS/Room.module.css'

const Twos = () => {
  return (
    <div className={style['room']}>
      <button>Twos</button>
      <div>
        <p>10</p>
      </div>
    </div>
  );
};

export default Twos;