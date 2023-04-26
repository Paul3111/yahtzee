import { useState } from 'react';
import style from './CSS/Room.module.css'

const SmallStraight = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Small Straight</button>
      <div>
        <p>30</p>
      </div>
    </div>
  );
};

export default SmallStraight;