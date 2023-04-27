import {useState, useEffect} from 'react'

import style from './Home.module.css';

const Home = () => {
  //const [isHovered, setIsHovered] = useState(false) 

  //const hoverHandler = () => {
   // setIsHovered(!isHovered)
  //}

  return (
    <div className={`${style['god-container']}`}>
        <div className={style['page-container']}>
          <button className={style['enter-to-start']}>
            Enter to start
          </button>
        </div>
    </div>
  );
};

export default Home;