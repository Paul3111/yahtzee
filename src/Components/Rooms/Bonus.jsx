import style from './CSS/Room.module.css'

const Bonus = () => {
  return (
    <div className={style['room']}>
      <button>Bonus</button>
      <div>
        <p>35</p>
      </div>
    </div>
  );
};

export default Bonus;