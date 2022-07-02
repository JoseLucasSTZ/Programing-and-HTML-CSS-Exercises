//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function exponenciacao(base, expoente) {
    let x = 0
    let potencia = base
    while (x <= expoente) {
        potencia = potencia * base
        x++
    }
    console.log('A potência é ' + potencia)
}

exponenciacao(2,8)

2**8



