function tirarDados(rolls, sides){
    var dice = [];
    for (let k = 0; k < rolls; k++) {
        dice.push(Math.floor(Math.random()*sides));        
    }
    return(dice)
}

function contarDados(roll, acum){
    for (const k of roll) {
        acum[k]++
    }
    return(acum)
}

function checkFlush(acum, sides){
    return( Math.max(...acum)==1 && acum.reduce((x,y)=>x+y,0)==5 && (acum[0]==0 || acum[sides-1]==0))
}

function vaciarAcumulado(dice) {
    var acum = [];
    for (let k = 0; k < dice; k++) {
        acum.push(0);
    }
    return(acum)
}


function agruparDados(tiro, acum){
    var acum = contarDados(tiro, acum);
    acum = acum.map(x => Math.min(x,1));
    if(acum[0]==1 && acum[5]==1){
        acum[5]==0;
    }
    return(acum)
}


var flush = 0;
var dados = 5;
var lados = 6;
var simulaciones = 1000000;

for (let k = 0; k < simulaciones; k++) {
    let tiradaAcumulada = vaciarAcumulado(lados);

    let primerTiro = tirarDados(dados, lados);
    tiradaAcumulada = agruparDados(primerTiro, tiradaAcumulada);
    let dadosGuardados = tiradaAcumulada.reduce((x,y)=>x+y,0);
    
    let segundoTiro = tirarDados(dados - dadosGuardados , lados);
    tiradaAcumulada = agruparDados(segundoTiro, tiradaAcumulada);
    dadosGuardados = tiradaAcumulada.reduce((x,y)=>x+y,0);
    
    let tercerTiro = tirarDados(dados - dadosGuardados , lados);
    tiradaAcumulada = agruparDados(tercerTiro, tiradaAcumulada);

    flush += checkFlush(tiradaAcumulada, lados)?1:0;
}
    
console.log("Escalera (Straight): " + (flush / simulaciones * 100));
console.log("Escalera (Straight):  1 in " + simulaciones/flush);