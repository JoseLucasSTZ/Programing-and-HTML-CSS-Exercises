//O fato de você não receber nenhum parâmetro não significa que você não pode passar nenhum parâmetro. Essa é uma das estranhaezas de javascript. Nesse caso, você pode reurperar os parâmetros utilizando o recurso "argument"

function soma (){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2,"Teste"))
