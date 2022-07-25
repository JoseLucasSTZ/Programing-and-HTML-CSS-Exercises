// Callback: chamar de volta

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log (`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(a){
    console.log(a)
})

fabricantes.forEach(fabricante => console.log (fabricante))

//callback nada mais é do que passar uma função que será chamada quando um evento acontecer

console.log(' -------- // --------') //A seguir, exemplos:

const notas = [7.7, 7.5, 6.5, 5.2, 9, 3, 8.2]

//Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota <7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota=> nota <7)
console.log(notasBaixas3)

