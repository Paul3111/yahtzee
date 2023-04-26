import { useState } from 'react';
import style from './CSS/Room.module.css'

const Yahtzee = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const useRoom = () => {
    // ...
    setIsDisabled(true)
  }

  return (
    <div className={`${style['room']} ${style['reverse']} ${isDisabled && style['is-used']}`}>
      <button onClick={useRoom} disabled={isDisabled}>Yahtzee</button>
      <div>
        <p>50</p>
      </div>
    </div>
  );
};

export default Yahtzee;