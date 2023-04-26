import style from './CSS/Room.module.css'

const Threes = () => {
  return (
    <div className={style['room']}>
      <button>Threes</button>
      <div>
        <p>15</p>
      </div>
    </div>
  );
};

export default Threes;