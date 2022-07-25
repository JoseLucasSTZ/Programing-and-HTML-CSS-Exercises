/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalInicial, taxaJuros, prazo) {
    Montante = capitalInicial*taxaJuros/100*prazo
    console.log(Montante)
}

function jurosCompostos(capitalInicial, taxaJurosMes, prazo) {
    Montante = capitalInicial * (1 + taxaJurosMes/100) ** prazo
    console.log(Montante)
}

jurosCompostos(10000, 15, 10)