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

function checkFull(accum){
    return( accum.some(x=> x==3) && accum.some(x=> x==2) )
}

function vaciarAcumulado(dice) {
    var acum = [];
    for (let k = 0; k < dice; k++) {
        acum.push(0);
    }
    return(acum)
}

function encontrarDosMaximos(acum){
    var ind = [0,1,2,3,4,5];
    return(ind.sort((a,b)=> acum[a] < acum[b]?1:-1).slice(0,2))
}

function agruparDados(tiro, acum){
    var acum = contarDados(tiro, acum);
    var dadoElegido = encontrarDosMaximos(acum);
    acum = acum.map((x,idx) => (idx == dadoElegido[0] || idx== dadoElegido[1])?Math.min(x,3):0);
    return(acum)
}


var full = 0;
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
    
    full += checkFull(tiradaAcumulada)?1:0;
}
    
console.log("Full: " + (full / simulaciones * 100));