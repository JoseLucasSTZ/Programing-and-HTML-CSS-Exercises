/*Parâmetros e retornos são opcionais, embora possam surgir bugs daí.
Essa é uma forte diferença em relação às linguagens fortemente tipadas*/

function area (largura, altura) {
    const area = largura * altura
    if (area>20) {
        console.log(`Valor acima do permitido: ${area}m².`) //aqui não retorna valor
    } else {
        return area //aqui retorna
    }
}
//seguem exemplos passando vários parâmetros
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,2,2,2,2))
console.log(area(5,5))

// flexibilidade de poder utilizar funções que possuem, e não possuem, retorno ao mesmo tempo deve ser utilizada com cuidado porque o código se torna complexo e se torna muito fácil criar um código que se comporte de forma inesperada