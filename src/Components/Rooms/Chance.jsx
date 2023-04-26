import { useState } from 'react';
import style from './CSS/Room.module.css'

const Chance = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Chance</button>
      <div>
        <p>21</p>
      </div>
    </div>
  );
};

export default Chance;