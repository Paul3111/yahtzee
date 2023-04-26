import { useState } from 'react';
import style from './CSS/Room.module.css'

const Sixes = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Sixes</button>
      <div>
        <p>30</p>
      </div>
    </div>
  );
};

export default Sixes;