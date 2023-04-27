

function ThreeOfAKindScore(roll) {
  for (let i = 1; i <= 6; i++) {
    if (roll.filter(x => x === i).length >= 3) {
      return roll.reduce(function(x, y) {
        return x + y;
      });     
    }
  }
  return 0;
}

function FourOfAKindScore(roll) {
  for (let i = 1; i <= 6; i++) {
    if (roll.filter(x => x === i).length >= 4) {
      return roll.reduce(function(x, y) {
        return x + y;
      });     
    }
  }
  return 0;
}

function ChanceScore(roll) {
  return roll.reduce(function(x, y) {
      return x + y;
  });
}

function YahtzeeScore(roll) {
  for (let i = 1; i <= 6; i++) {
    if (roll.filter(x => x === i).length >= 6) {
      return 50
      } else {
        return 0 
    }
  }
}
 
function SMstraightScore(roll) {
  let uniqDice = [];
  roll.sort();
  for (let element of roll) {
    if(uniqDice.indexOf(element) === -1){
      uniqDice.push(element);
    }
  }
  if (uniqDice.length === 4) {
    return 20
  } else {
    return 0
  }
};

function LGstraightScore(roll) {
  roll.sort();
  for (let i = 1; i < roll.length; i++) {
    if (roll[i] !== roll[i - 1] + 1) {
      return 0;
    }
  }
  return 40;
}

function FullHouseScore(roll) {
  roll.sort()
    if (roll[0] === roll[1] && roll[4] === roll[3]) {
      if (roll[0] === roll[2] || roll[4] === roll[2]) {
        return 25
      }
    } else {
      return 0
    }
  
}

function OneScore(roll) {
  let one_score = 0
  for (let dice of roll) {
    if (dice === 1) {
      one_score ++
    }
  }
  return one_score
}


function TwoScore(roll) {
  let two_score = 0
  for (let dice of roll) {
    if (dice === 2) {
      two_score ++
    }
  }
  return two_score
}

function ThreeScore(roll) {
  let three_score = 0
  for (let dice of roll) {
    if (dice === 3) {
      three_score ++
    }
  }
  return three_score
}

function FourScore(roll) {
  let four_score = 0
  for (let dice of roll) {
    if (dice === 4) {
      four_score ++
    }
  }
  return four_score
}

function FiveScore(roll) {
  let five_score = 0
  for (let dice of roll) {
    if (dice === 5) {
      five_score ++
    }
  }
  return five_score
}

function SixScore(roll) {
  let six_score = 0
  for (let dice of roll) {
    if (dice === 6) {
      six_score ++
    }
  }
  return six_score
}



console.log("4OAK " + FourOfAKindScore(dice))
console.log("3OAK " + ThreeOfAKindScore(dice))
console.log("CHNCE " + ChanceScore(dice))
console.log("YTZEE " + YahtzeeScore(dice))
console.log("LGS " + LGstraightScore(dice))
console.log("SMS " + SMstraightScore(dice))
console.log("FH " + FullHouseScore(dice))
console.log("1 " + OneScore(dice))
console.log("2 " + TwoScore(dice))
console.log("3 " + ThreeScore(dice))
console.log("4 " + FourScore(dice))
console.log("5 " + FiveScore(dice))
console.log("6 " + SixScore(dice))
