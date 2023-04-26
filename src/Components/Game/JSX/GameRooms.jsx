import Ones from '../../Rooms/Ones'; import Twos from '../../Rooms/Twos';
import Threes from '../../Rooms/Threes'; import Fours from '../../Rooms/Fours';
import Fives from '../../Rooms/Fives'; import Sixes from '../../Rooms/Sixes';
import Bonus from '../../Rooms/Bonus'; import ThreeOfAKind from '../../Rooms/ThreeOfAKind';
import FourOfAKind from '../../Rooms/FourOfAKind'; import FullHouse from '../../Rooms/FullHouse';
import Yahtzee from '../../Rooms/Yahtzee'; import Chance from '../../Rooms/Chance';
import SmallStraight from '../../Rooms/SmallStraight';
import LargeStraight from '../../Rooms/LargeStraight';

import style from '../CSS/GameRooms.module.css'

const GameRooms = () => {
  return (
    <div className={style['rooms-main-container']}>
      <div className={style['rooms-halves-container']}>
        <div className={style['rooms-half']}>
          <Ones />
          <Twos />
          <Threes />
          <Fours />
          <Fives />
          <Sixes />
          <Bonus />
        </div>
        <div className={style['rooms-half']}>
          <ThreeOfAKind />
          <FourOfAKind />
          <FullHouse />
          <SmallStraight />
          <LargeStraight />
          <Yahtzee />
          <Chance />
        </div>
      </div>
    </div>
  );
};

export default GameRooms;