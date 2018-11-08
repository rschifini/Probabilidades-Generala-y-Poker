# Probabilidades de Generala y Poker
Calculo de la probabilidad de obtener Generala o Poker en el juego de dados del mismo nombre

El juego de dados Generala se juega con 5 dados de 6 lados. Cada jugador se turna para hacer un maximo de tres tiradas de dados, y de solo aquellos dados que no le sirven para la jugada que busca. Uno de los resultados mas dificiles es la Generala que se logra cuando los cinco dados son iguales.

El calculo de esta probabilidad no es sencillo, ya que el jugador va separando entre tirada y tirada aquellos dados de los que mas tiene. A veces las tiradas posteriores a la primera constan de 1 o mas dados. Esta variabilidad de dados tirados complica el calculo exacto de la probabilidad buscada.

En este repositorio se encuentra una rutina en JavaScript que puede simular N jugadas y contar cuantas de ellas terminan con los 5 dados iguales (Generala) o 4 dados iguales (Poker). La probabilidad de cada resultado es cuantas veces ocurrio dividido la cantidad de simulaciones. Este tipo de simulaciones al azar tienen el nombre de Metodo de Monte Carlo.

## Resultados
Efectuando 1,000,000 simulaciones, la probabilidades son:

p(Generala) = 0.046
p(Poker) = 0.244

