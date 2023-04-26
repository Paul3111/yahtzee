import {useState} from 'react'

import style from './HowToPlay.module.css'
import HowToPlayPopUp from './HowToPlayPopUp'

const HowToPlay = () => {
  const [isShown, setIsShown] = useState(false)

  const clickHandler = (event) => {
    event.preventDefault()
    setIsShown(!isShown)
  }

  return (
    <div className={style['link-container']}>
      {isShown && <HowToPlayPopUp onCloseWindowClick={clickHandler} />}
      <a href="" className={style['link']} onClick={clickHandler}>How to play</a>
    </div>
  );
};

export default HowToPlay;