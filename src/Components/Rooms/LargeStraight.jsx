import { useState } from 'react';
import style from './CSS/Room.module.css'

const LargeStraight = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Large Straight</button>
      <div>
        <p>40</p>
      </div>
    </div>
  );
};

export default LargeStraight;