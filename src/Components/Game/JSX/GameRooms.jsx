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

  const updateYahtzeeScore = (score) => {
    setYahtzee((prevTotal) => {
      return prevTotal += score
    })
  }

  return (
    <div className={style['rooms-main-container']}>
      <div className={style['rooms-halves-container']}>

        <div className={style['rooms-half']}>
          <Ones
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setOnes} savedScore={ones}
            updateTotal={props.updateTotal}
            updateSubTotal={updateSubTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <Twos
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setTwos}
            savedScore={twos}
            updateTotal={props.updateTotal}
            updateSubTotal={updateSubTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <Threes
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setThrees}
            savedScore={threes}
            updateTotal={props.updateTotal}
            updateSubTotal={updateSubTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <Fours
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setFours}
            savedScore={fours}
            updateTotal={props.updateTotal}
            updateSubTotal={updateSubTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <Fives
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setFives}
            savedScore={fives}
            updateTotal={props.updateTotal}
            updateSubTotal={updateSubTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <Sixes
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setSixes}
            savedScore={sixes}
            updateTotal={props.updateTotal}
            updateSubTotal={updateSubTotal}
            values={props.values}
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <Bonus
            startEffect={props.startEffect}
            onRollDice={setBonus}
            savedScore={bonus}
            updateTotal={props.updateTotal}
            subTotal={subTotal}
            values={props.values} />
        </div>

        <div className={style['rooms-half']}>
          <ThreeOfAKind
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setThreeOfAKind}
            savedScore={threeOfAKind}
            updateTotal={props.updateTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <FourOfAKind
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setFourOfAKind}
            savedScore={fourOfAKind}
            updateTotal={props.updateTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <FullHouse
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setfullHouse}
            savedScore={fullHouse}
            updateTotal={props.updateTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <SmallStraight
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setSMstraight}
            savedScore={SMstraight}
            updateTotal={props.updateTotal}
            values={props.values}
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <LargeStraight
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setLGstraight}
            savedScore={LGstraight}
            updateTotal={props.updateTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <Yahtzee
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setYahtzee}
            savedScore={yahtzee}
            updateTotal={props.updateTotal}
            values={props.values}
            triggerYahtzee={props.triggerYahtzee}
            updateYahtzeeScore={updateYahtzeeScore}
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
          
          <Chance
            startEffect={props.startEffect}
            disableLights={props.disableLights}
            resetDice={props.resetDice}
            rollCount={props.rollCount}
            resetRollCount={props.resetRollCount}
            onRollDice={setChance}
            savedScore={chance}
            updateTotal={props.updateTotal}
            values={props.values} 
            audioEnabled={props.audioEnabled}
            isBot={props.isBot}
            botPlayerRooms={props.botPlayerRooms}
            activePlayer={props.activePlayer}
            playerNumber={props.playerNumber}/>
        </div>

      </div>
    </div>
  );
};

export default GameRooms;
