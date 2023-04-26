import { useState } from 'react';
import style from './CSS/Room.module.css'

const Ones = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Ones</button>
      <div>
        <p>6</p>
      </div>
    </div>
  );
};

export default Ones;