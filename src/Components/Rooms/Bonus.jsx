import { useState } from 'react';
import style from './CSS/Room.module.css'

const Bonus = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Bonus</button>
      <div>
        <p>35</p>
      </div>
    </div>
  );
};

export default Bonus;