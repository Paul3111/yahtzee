import { useState } from 'react';
import style from './CSS/Room.module.css'

const Fours = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Fours</button>
      <div>
        <p>20</p>
      </div>
    </div>
  );
};

export default Fours;