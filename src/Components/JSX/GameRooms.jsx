import Ones from '../Rooms/Ones'; import Twos from '../Rooms/Ones';
import Threes from '../Rooms/Ones'; import Fours from '../Rooms/Ones';
import Fives from '../Rooms/Ones'; import Sixes from '../Rooms/Ones';
import Bonus from '../Rooms/Ones'; import ThreeOfAKind from '../Rooms/Ones';
import FourOfAKind from '../Rooms/Ones'; import FullHouse from '../Rooms/Ones';
import Yathzee from '../Rooms/Ones'; import Chance from '../Rooms/Ones';
import SmallStraight from '../Rooms/Ones';
import LargeStraight from '../Rooms/Ones';

import style from '../CSS/GameRooms.module.css'

const GameRooms = () => {
  return (
    <div className={style['rooms-main-container']}>
      <Ones />
      <Twos />
      <Threes />
      <Fours />
      <Fives />
      <Sixes />
      <Bonus />
      <ThreeOfAKind />
      <FourOfAKind />
      <FullHouse />
      <SmallStraight />
      <LargeStraight />
      <Yathzee />
      <Chance />
    </div>
  );
};

export default GameRooms;