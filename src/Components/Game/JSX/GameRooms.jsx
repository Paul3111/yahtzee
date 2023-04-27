import Ones from '../../Rooms/Ones'; import Twos from '../../Rooms/Twos';
import Threes from '../../Rooms/Threes'; import Fours from '../../Rooms/Fours';
import Fives from '../../Rooms/Fives'; import Sixes from '../../Rooms/Sixes';
import Bonus from '../../Rooms/Bonus'; import ThreeOfAKind from '../../Rooms/ThreeOfAKind';
import FourOfAKind from '../../Rooms/FourOfAkind'; import FullHouse from '../../Rooms/FullHouse';
import Yahtzee from '../../Rooms/Yahtzee'; import Chance from '../../Rooms/Chance';
import SmallStraight from '../../Rooms/SmallStraight';
import LargeStraight from '../../Rooms/LargeStraight';

import style from '../CSS/GameRooms.module.css'
import { useState } from 'react';

const GameRooms = (props) => {
  const [ones, setOnes] = useState(0)
  const [twos, setTwos] = useState(0)
  const [threes, setThrees] = useState(0)
  const [fours, setFours] = useState(0)
  const [fives, setFives] = useState(0)
  const [sixes, setSixes] = useState(0)
  const [bonus, setBonus] = useState(0)

  const [threeOfAKind, setThreeOfAKind] = useState(0)
  const [fourOfAKind, setFourOfAKind] = useState(0)
  const [fullHouse, setfullHouse] = useState(0)
  const [SMstraight, setSMstraight] = useState(0)
  const [LGstraight, setLGstraight] = useState(0)
  const [yahtzee, setYahtzee] = useState(0)
  const [chance, setChance] = useState(0)

  const [subTotal, setSubtotal] = useState(0)

  const updateSubTotal = (score) => {
    setSubtotal((prevSubTotal) => {
      return prevSubTotal += score
    })
  }

  return (
    <div className={style['rooms-main-container']}>
      <div className={style['rooms-halves-container']}>
        <div className={style['rooms-half']}>
          <Ones rollCount={props.rollCount} onRollDice={setOnes} savedScore={ones} updateTotal={props.updateTotal} updateSubTotal={updateSubTotal} values={props.values}  />
          <Twos rollCount={props.rollCount} onRollDice={setTwos} savedScore={twos} updateTotal={props.updateTotal} updateSubTotal={updateSubTotal} values={props.values} />
          <Threes rollCount={props.rollCount} onRollDice={setThrees} savedScore={threes} updateTotal={props.updateTotal} updateSubTotal={updateSubTotal} values={props.values} />
          <Fours rollCount={props.rollCount} onRollDice={setFours} savedScore={fours} updateTotal={props.updateTotal} updateSubTotal={updateSubTotal} values={props.values}/>
          <Fives rollCount={props.rollCount} onRollDice={setFives} savedScore={fives} updateTotal={props.updateTotal} updateSubTotal={updateSubTotal} values={props.values}/>
          <Sixes rollCount={props.rollCount} onRollDice={setSixes} savedScore={sixes} updateTotal={props.updateTotal} updateSubTotal={updateSubTotal} values={props.values}/>
          <Bonus onRollDice={setBonus} savedScore={bonus} updateTotal={props.updateTotal} subTotal={subTotal} values={props.values} />
        </div>
        <div className={style['rooms-half']}>
          <ThreeOfAKind rollCount={props.rollCount} onRollDice={setThreeOfAKind} savedScore={threeOfAKind} updateTotal={props.updateTotal} values={props.values}/>
          <FourOfAKind rollCount={props.rollCount} onRollDice={setFourOfAKind} savedScore={fourOfAKind} updateTotal={props.updateTotal} values={props.values}/>
          <FullHouse rollCount={props.rollCount} onRollDice={setfullHouse} savedScore={fullHouse} updateTotal={props.updateTotal} values={props.values} />
          <SmallStraight rollCount={props.rollCount} onRollDice={setSMstraight} savedScore={SMstraight} updateTotal={props.updateTotal} values={props.values}/>
          <LargeStraight rollCount={props.rollCount} onRollDice={setLGstraight} savedScore={LGstraight} updateTotal={props.updateTotal} values={props.values}/>
          <Yahtzee rollCount={props.rollCount} onRollDice={setYahtzee} savedScore={yahtzee} updateTotal={props.updateTotal} values={props.values} isYahtzee={props.isYahtzee}/>
          <Chance rollCount={props.rollCount} onRollDice={setChance} savedScore={chance} updateTotal={props.updateTotal} values={props.values}/>
        </div>
      </div>
    </div>
  );
};

export default GameRooms;
