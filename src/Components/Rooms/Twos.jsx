import { useState } from 'react';
import style from './CSS/Room.module.css'

const Twos = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Twos</button>
      <div>
        <p>10</p>
      </div>
    </div>
  );
};

export default Twos;