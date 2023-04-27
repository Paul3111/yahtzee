import style from '../CSS/HowToPlayPopUp.module.css';

const HowToPlayPopUp = (props) => {
  const yahtzeeRules = `
  Yahtzee is a popular dice game that is played with five dice. 
  The goal of the game is to score as many points as possible by 
  rolling specific combinations of numbers over the course of 13 rounds. 
  On each turn, a player is allowed up to three rolls to try and 
  achieve the highest-scoring combination. 
  After each roll, they can choose to save some of the dice and 
  re-roll the rest to increase their chances of getting a better combination.

  Each round has a different scoring category, 
  and players must choose which category to use based on the results of their roll. 
  For example, if a player rolls three fives, 
  they could choose to score those points under the "Fives" category. 
  However, if they already have a high score in the Fives category, 
  they might choose to score the roll under another category, 
  such as "Three of a Kind" or "Chance." 
  The ultimate goal is to score the highest possible number of points by the end of the 13 rounds.

  One of the most exciting aspects of Yahtzee is the possibility of getting a Yahtzee, 
  which is when all five dice show the same number. If a player rolls a Yahtzee, 
  they get 50 points, plus the ability to score additional points by using the Yahtzee as 
  a wild card in other categories. For example, if a player rolls a Yahtzee and chooses 
  to use it in the "Full House" category, they would score 25 points for the Full House, 
  plus an additional 50 points for the Yahtzee.

  In addition to the main scoring categories, 
  there are also bonus points available for players who score a high number of points in 
  the upper section of the scorecard. If a player scores at least 63 points in the upper section, 
  they get a bonus of 35 points, which can make a big difference in the final score.

  Overall, Yahtzee is a fun and exciting game that requires both luck and strategy. 
  With its simple rules and fast-paced gameplay, 
  it's no wonder that it has remained a popular game for generations.
  `
  return (
    <section className={style['how-to-play-container']}>
      <div className={style['how-to-play-container__inner']}>
        <div className={style['how-to-play-popup']}>
          <button className={style['how-to-play-popup__btn']} onClick={props.onCloseWindowClick}>X</button>
          <div className={style['how-to-play-popup__header']}>
            <h2>HOW TO PLAY</h2>
          </div>
                                                            {/* uncomment below to display */}
          <article className={style['how-to-play-popup__rules']}>{ /*yahtzeeRules */}</article> 
        </div>     
      </div>


      
    </section>
  );
};

export default HowToPlayPopUp;