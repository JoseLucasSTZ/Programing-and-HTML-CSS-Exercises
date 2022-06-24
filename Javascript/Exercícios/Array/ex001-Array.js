/*console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana') //Forma não recomendada porque não é literal

console.log (aprovados)
aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[3]) //Repare que não dá erro. Ele aparece comm undefined (nada de indexOutOfBound)

aprovados[3] = 'Paulo' //forma válida de atribuir um valor (é mais comum para subsituir um elemento que já existe)

console.log(aprovados[3])
aprovados.push('João')// é mais apropriado para adicionarum novo elemento (repare que não houve necessidade de indicar o índice)

console.log (aprovados[4])
console.log(aprovados.length)
aprovados[9] = 'Rafael' // Neste caso todos os valores intermediários recebem "undefined"

console.log(aprovados.length)
console.log (aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort() //organizou o array
console.log(aprovados)
//Agora vamos reorganizar o array para lidar com o método "slice"
 */
aprovados = ['primeiro elemento', 'segundo elemento', 'terceiro elemento']
//splice serve para remover, adicionar ou remover e adicionar elementos ao mesmo tempo

aprovados.splice(1,2,'joão','quarto elemento')
console.log(aprovados)