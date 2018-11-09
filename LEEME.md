# Probabilidades de Generala, Poker y Full House
Cálculo de las probabilidades de obtener Generala, Poker, Escalera o Full en el juego de dados Generala.

El juego de dados [Generala](https://en.wikipedia.org/wiki/Generala) se juega con cinco (5) dados de seis lados. Cada jugador se turna para hacer un máximo de tres tiradas de dados mientras que puede ir guardando entre éstas aquellos dados que son útiles. 

Uno de los resultados mas difíciles es la Generala, que se logra cuando se obtienen cinco dados iguales.

El cálculo analítico de la probabilidad de cualquier resultado es muy complejo debido a la mecánica del juego. Un cálculo analítico necesitaría tener en cuenta todas las posibles combinaciones de dados a lanzar en la 2a o 3er tirada. Y éstos dependen de cuántos dados se van guardando de tiradas previas.

Cuando buscar una solución analítica exacta se torna difícil, lo que se puede hacer es una simulación Monte Carlo. Esto consiste en simular una gran cantidad de jugadas y contar en cuantas de ellas se obtuvo el resultado deseado. La probabilidad de ese resultado es el cociente entre los éxitos y la cantidad de simulaciones.

Este repositorio contiene varias rutinas en JavaScript que simulan N jugadas y cuentan cuantas de ellas terminan con Generala (5 dados iguales), Poker (4 dados iguales), Full house (dos grupos con 3 y 2 dados) o Escalera (1 al 5 o 2 al 6).

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