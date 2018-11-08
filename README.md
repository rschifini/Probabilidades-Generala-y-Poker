# Poker Dice Probabilities for Five-of-a-Kind and Four-of-a-Kind

The game Poker dice is played with five six-sided dice. Each player may roll up to 3 times their dice while holding the best dice between throws. 

According to [Wikipedia](https://en.wikipedia.org/wiki/Poker_dice), the probability for the hardest roll (Five-of-a-Kind) is 0.08%. This probability is calculated when all five dice are thrown at the same time, and all of them roll the same face at once. This is not the real probability of this outcome when playing by the three roll rule while holding.

The real probability for the Five-of-a-Kind outcome is complex to calculate analitically. The number of dice to be thrown on the second and third roll depend on previous results. 

The approach given in this repository is to simulate N turns, each consisting of up to 3 rolls, while holding to the largest group of dice having the same face.  This Monte Carlo simulation is written in JavaScript.

The simulation parameters are the number of dice, faces and simulations.     

## Results
For 1,000,000 simulations, the probabilities are:

|Roll|probability|percent|
|----|-----------|-------|
|Five-of-a-Kind| 0.046 |4.6%|
|Four-of-a-Kind| 0.244 |24.4%|

### Note:
When changing the dice to be thrown to N, the resulting probabilities are for N-of-a-Kind and (N-1)-of-a-Kind.