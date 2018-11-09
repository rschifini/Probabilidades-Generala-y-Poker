# Poker Dice Probabilities for Five-of-a-Kind, Four-of-a-Kind and Full House

The game [Poker Dice](https://en.wikipedia.org/wiki/Poker_dice) is played with five six-sided dice. Each player may roll up to 3 times their dice while holding the best dice between throws. 

According to [Wikipedia](https://en.wikipedia.org/wiki/Poker_dice#Probabilities), the probability for the hardest roll (Five-of-a-Kind) is 0.08%. This probability is calculated when all five dice are thrown at the same time, and all of them roll the same face at once. This is not the real probability of this outcome when playing by the three roll rule while holding.

The real probability for the Five-of-a-Kind outcome is complex to calculate analitically. The number of dice to be thrown on the second and third roll depend on previous results. 

The approach given in this repository is to simulate N turns, each consisting of up to 3 rolls, while holding to the largest group of dice having the same face.  This Monte Carlo simulation is written in JavaScript.

The simulation parameters are the number of dice, faces and simulations.     

## Results
For 1,000,000 simulations, the probabilities are:

|Roll|probability|percent| 1 in ...|
|----|-----------:|-------:|---:|
|Five-of-a-Kind| 0.046 |4.6%|21.8|
|Four-of-a-Kind| 0.244 |24.5%|4.1|
|Full house| 0.358 |35.9%|2.8|
|Straight| 0.175 |17.5%|5.7|

## Simulation Files and Strategies:

#### Five-of-a-Kind and Four-of-a-Kind:
*'Probabilidades - Generala - Five.js'*
- Holds the most numerous dice result
- May change the held dice if a throw has a new more numerous group

#### Full house:
*'Probabilidades - Full.js'*
- Holds the two groups that are more numerous
- Keeps at most three dice in any one group
- If the groups consist of three and one dice (e.g. AAAJ), it will only reroll the last dice (not both because this has lower odds of getting the final pair)

#### Straight:
*'Probabilidades - Escalera - Straight.js'*
- Keeps one of each dice result, repeats are rerolled
- If both ends (A and 9) are present, the 9 is rerolled. This avoids broken straight