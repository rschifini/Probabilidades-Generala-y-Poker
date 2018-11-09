# Probabilidades de Generala, Poker y Full House
Calculo de la probabilidad de obtener Generala o Poker en el juego de dados del mismo nombre

El juego de dados [Generala](https://en.wikipedia.org/wiki/Generala) se juega con cinco (5) dados de seis lados. Cada jugador se turna para hacer un maximo de tres tiradas de dados mientras que puede ir guardando entre tiradas aquellos dados que le son utiles. 

Uno de los resultados mas dificiles es la Generala, que se logra cuando se obtienen cinco dados iguales.

El calculo analitico de esta probabilidad es complejo, ya que depende de contar correctamente todas las combinaciones posibles de dados tirados en las 3 tiradas. Por otro parte, los dados a tirar en la 2a o 3er tirada dependen de cuantos dados se van guardando de las tiradas previas. Esto conlleva a una gran cantidad de combinaciones, lo cual complica el calculo anlitico exacto de la probabilidad buscada.

En vez de buscar una solucion analitica exacta, lo que se puede hacer es una simulacion Monte Carlo. Esto consiste en realizar una gran cantidad de jugadas y contar en cuantas de ellas se obtuvo el resultado deseado.  

Este repositorio da una rutina en JavaScript que puede simular N jugadas y contar cuantas de ellas terminan con los 5 dados iguales (Generala) o 4 dados iguales (Poker). La probabilidad de cada resultado es cuantas veces ocurrio dividido la cantidad de simulaciones.

## Resultados
Efectuando 1,000,000 simulaciones, la probabilidades son:

|Tirada|probabilidad|porcentaje|
|----|-----------:|-------:|
|Generala| 0.046 |4.6%|
|Poker| 0.244 |24.4%|
|Full House| 0.358 |35.8%|

### Nota:
- La rutina permite cambiar la cantidad de dados con que se juega. Los resultados en este caso son la probabilidad que todos los dados muestren el mismo numero o todos menos uno. 
- 'Probabilidades Generala.js' simula Poker y Generala
- 'Probabilidades Full.js' simula Full House