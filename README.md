# Yahtzee

<!-- ![test](https://img.shields.io/badge/test-100%25-brightgreen?style=flat-square&logo=github) -->
<!-- ![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen?style=flat-square&logo=github) -->

![test](https://img.shields.io/badge/React-blue?style=flat-square&logo=react)
![test](https://img.shields.io/badge/CSS3-blue?style=flat-square&logo=css3)
![test](https://img.shields.io/badge/mongodb-green?style=flat-square&logo=mongodb)
![test](https://img.shields.io/badge/express-lightgrey?style=flat-square&logo=express)
![test](https://img.shields.io/badge/node.js-grey?style=flat-square&logo=nodedotjs)


## Contents
  - [Our approach](#our-approach)
  - [Getting Started](#getting-started)
  - [How to play](#how-to-play)
---

## Our approach


![diagram](/support/designMockup.png)

---
## Getting started

Download or clone this repository and run the following commands:
> If you already have NVM and Node installed, jump to step 3
<br>

1. Install NVM - once done, restart your terminal
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. Install Node.js
```
nvm install node
nvm use node
```

3. Install dependencies in the root directory
```
npm install
```

4. Run the server
```
npm run start
```

5. Repeat step 3 in the API directory
```
cd api
npm install
```


6. Run the server and connect to the database
```
npm run start
```
<br/>

Alternatively, you can connect to the database test
```
npm run start:test
```
---
## How to play
<h3>Goal</h3>
The goal of the game is to score as many points as possible by 
rolling specific combinations of numbers over the course of 13 rounds

<h3>Turns</h3>
On each turn, a player is allowed up to three rolls to try and 
achieve the highest-scoring combination. 
After each roll, they can choose to save some of the dice and 
re-roll the rest to increase their chances of getting a better combination.

<h3>Rounds</h3>
Each round has a different scoring category, 
and players must choose which category to use based on the results of their roll. 
For example, if a player rolls three fives, 
they could choose to score those points under the "Fives" category. 
However, if they already have a high score in the Fives category, 
they might choose to score the roll under another category, 
such as "Three of a Kind" or "Chance." 
The ultimate goal is to score the highest possible number of points by the end of the 13 rounds.


<h3>Yahtzee</h3>
One of the most exciting aspects of Yahtzee is the possibility of getting a <b>Yahtzee</b>, 
which is when all five dice show the same number. If a player rolls a Yahtzee, 
they get 50 points, plus the ability to score additional points by using the Yahtzee as 
a wild card in other categories. 
For example, if a player rolls a Yahtzee and chooses 
to use it in the "Full House" category, they would score 25 points for the Full House, 
plus an additional 50 points for the Yahtzee.

<h3>Bonus</h3>
In addition to the main scoring categories, 
there are also bonus points available for players who score a high number of points in 
the upper section of the scorecard. If a player scores at least 63 points in the upper section, 
they get a bonus of 35 points, which can make a big difference in the final score.

<br/>
Overall, Yahtzee is a fun and exciting game that requires both luck and strategy. 
With its simple rules and fast-paced gameplay, 
it's no wonder that it has remained a popular game for generations.

<br/>

[Learn more about Yahtzee](https://en.wikipedia.org/wiki/Yahtzee)
