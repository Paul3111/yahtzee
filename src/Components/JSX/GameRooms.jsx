import Ones from '../Rooms/Ones'; import Twos from '../Rooms/Ones';
import Threes from '../Rooms/Ones'; import Fours from '../Rooms/Ones';
import Fives from '../Rooms/Ones'; import Sixes from '../Rooms/Ones';
import Bonus from '../Rooms/Ones'; import ThreeOfAKind from '../Rooms/Ones';
import FourOfAKind from '../Rooms/Ones'; import FullHouse from '../Rooms/Ones';
import Yathzee from '../Rooms/Ones'; import Chance from '../Rooms/Ones';
import SmallStraight from '../Rooms/Ones';
import LargeStraight from '../Rooms/Ones';

const GameRooms = () => {
  return (
    <>
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
    </>
  );
};

export default GameRooms;