
let faceValue = 4
var roll = [1, 4, 4, 4, 4];

function getNumberOfDice(faceValue, roll) {
  var numberOfDice = 0;

  for (var i = 0; i < roll.length; i++) {
      if (roll[i] == faceValue) numberOfDice++;
  }

  return numberOfDice;
}


function getOnePairScore(roll) {
  var highestPair = 0;

  for (var i = 1; i <= 6; i++) {
      if (getNumberOfDice(i, roll) >= 2) {
          highestPair = i;
      }
  }

  return highestPair * 2
}

function getFourOfAKindScore(roll) {
  for (var i = 1; i <= 6; i++) {
      if (getNumberOfDice(i, roll) >= 4) {
          return i * 4;
      }
  }

  return 0;
}

function ChanceScore(roll) {
  return roll.reduce(function(x, y) {
      return x + y;
  });
}




var score = getFourOfAKindScore(roll);
console.log("The score for a one-pair hand with this roll is " + score);
