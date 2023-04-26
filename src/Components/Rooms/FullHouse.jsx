import { useState } from 'react';
import style from './CSS/Room.module.css'

const FullHouse = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Full House</button>
      <div>
        <p>25</p>
      </div>
    </div>
  );
};

export default FullHouse;