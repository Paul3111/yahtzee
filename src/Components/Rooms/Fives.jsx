import { useState } from 'react';
import style from './CSS/Room.module.css'

const Fives = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Fives</button>
      <div>
        <p>25</p>
      </div>
    </div>
  );
};

export default Fives;