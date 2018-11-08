function tirarDados(rolls, sides){
    var dice = [];
    for (let k = 0; k < rolls; k++) {
        dice.push(Math.floor(Math.random()*sides));        
    }
    return(dice)
}

function contarDados(roll, accum){
    for (const k of roll) {
        accum[k]++
    }
    return(accum)
}

function checkGenerala(accum, dice){
    return( accum.some(x=> x==dice) )
}

function checkPoker(accum, dice){
    return( accum.some(x=> x==(dice-1)) )
}

function vaciarAcumulado(dice) {
    var acum = [];
    for (let k = 0; k < dice; k++) {
        acum.push(0);
    }
    return(acum)
}

function encontrarMaximo(acum){
    var max = Math.max(...acum);
    return(acum.indexOf(max));
}

function agruparDados(tiro, acum){
    var acum = contarDados(tiro, acum);
    var dadoElegido = encontrarMaximo(acum);
    acum = acum.map((x,idx) => idx == dadoElegido?x:0);
    return(acum)
}


var generalas = 0;
var poker = 0;
var dados = 5;
var lados = 6;
var simulaciones = 1000000;

for (let k = 0; k < simulaciones; k++) {
    let tiradaAcumulada = vaciarAcumulado(lados);

    let primerTiro = tirarDados(dados, lados);
    tiradaAcumulada = agruparDados(primerTiro, tiradaAcumulada);
    
    let segundoTiro = tirarDados(dados - Math.max(...tiradaAcumulada) , lados);
    tiradaAcumulada = agruparDados(segundoTiro, tiradaAcumulada);
    
    let tercerTiro = tirarDados(dados - Math.max(...tiradaAcumulada) , lados);
    tiradaAcumulada = agruparDados(tercerTiro, tiradaAcumulada);
    
    generalas += checkGenerala(tiradaAcumulada, dados)?1:0;
    poker += checkPoker(tiradaAcumulada, dados)?1:0;
}
    
console.log("Generala: " + (generalas / simulaciones * 100));
console.log("Doble: "+ (generalas / simulaciones)*(generalas / simulaciones)*100);
console.log("Poker: " + poker / simulaciones * 100);
