# Probabilidades de Generala, Poker y Full House
Calculo de la probabilidad de obtener Generala o Poker en el juego de dados del mismo nombre

El juego de dados [Generala](https://en.wikipedia.org/wiki/Generala) se juega con cinco (5) dados de seis lados. Cada jugador se turna para hacer un maximo de tres tiradas de dados mientras que puede ir guardando entre tiradas aquellos dados que le son utiles. 

Uno de los resultados mas dificiles es la Generala, que se logra cuando se obtienen cinco dados iguales.

El calculo analitico de esta probabilidad es complejo, ya que depende de contar correctamente todas las combinaciones posibles de dados tirados en las 3 tiradas. Por otro parte, los dados a tirar en la 2a o 3er tirada dependen de cuantos dados se van guardando de las tiradas previas. Esto conlleva a una gran cantidad de combinaciones, lo cual complica el calculo anlitico exacto de la probabilidad buscada.

En vez de buscar una solucion analitica exacta, lo que se puede hacer es una simulacion Monte Carlo. Esto consiste en realizar una gran cantidad de jugadas y contar en cuantas de ellas se obtuvo el resultado deseado.  

Este repositorio da una rutina en JavaScript que puede simular N jugadas y contar cuantas de ellas terminan con los 5 dados iguales (Generala) o 4 dados iguales (Poker). La probabilidad de cada resultado es cuantas veces ocurrio dividido la cantidad de simulaciones.

## Resultados
Efectuando 1,000,000 simulaciones, la probabilidades son:

|Tirada|probabilidad|porcentaje|1 en...|
|----|-----------:|-------:|---:|---:|
|Generala| 0.046 |4.6%|21.8|
|Poker| 0.244 |24.5%|4.1|
|Full house| 0.358 |35.9%|2.8|
|Escalera| 0.175 |17.5%|5.7|

### Archivos y estrategia:
#### Poker y Generala
*'Probabilidades - Generala - Five.js'*
- Reserva el grupo mas numeroso de dados con el mismo valor
- Puede descartar un grupo por otro si el nuevo grupo es mas numeroso

#### Full House
*'Probabilidades - Full.js'*
- Reserva los dos grupos mas numerosos
- No reserva mas de tres dados en un grupo 
- Si los grupos consisten de 3 y 1 dados (e.g. 5551) entonces solo tira un dado (no ambos porque es menos probable obtener el par deseado)

#### Escalera
*'Probabilidades - Escalera - Straight.js'*
- Reserva a lo sumo uno de cada resultado, los dados repetidos se vuelven a tirar
- Si aparecen el 1 y el 6 entonces se descarta el 6. Esto evita escaleras discontinuas.