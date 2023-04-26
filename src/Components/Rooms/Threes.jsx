import { useState } from 'react';
import style from './CSS/Room.module.css'

const Threes = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Threes</button>
      <div>
        <p>15</p>
      </div>
    </div>
  );
};

export default Threes;