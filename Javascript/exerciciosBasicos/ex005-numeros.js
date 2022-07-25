/*05) Desenvolva uma função JavaScript para que ela receba a soma de dois números float e apresente um valor em reais, um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

console.log(0.1 + 0.2) //perceba que o número não dá o resultado correto, mas uma aproximação. Isso acontece por conta de uma especificação sobre binários da IEEE. Caso o resultado exato fosse apresentado o programa ficaria muito lento

function valorEmReais(parcela1,  parcela2) {
    resultado = parcela1 + parcela2
    
    console.log(`O resultado é ${resultado}`)
}
console.log(0.4 + 0.3)
valorEmReais(0.3,0.4)
//Alguém me explica que bruxaria é essa