//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.


function soma (parcela1, parcela2){
    let total = parcela1 + parcela2
    console.log(total) 
}

function subtracao (minuendo, subtraendo){
    let resto = minuendo - subtraendo
    console.log(resto) 
}

function divisao (dividendo, divisor){
    let quociente = dividendo / divisor
    console.log(quociente) 
}

function multiplicao (multiplicando, multiplicador){
    let produto = multiplicando * multiplicador
    console.log(produto) 
}

soma(1,2)

subtracao(2,1)

divisao(4,2)

multiplicao(3,2)