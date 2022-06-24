//A herança em javascript é baseada em protótipos
const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // Aqui cria um objeto novo, com o objeto pai como protótipo

console.log(filha1.nome)
filha1.nome='Ana'

console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable:false, enumerable: true}
})

console.log(filha2.nome)
//filha2.nome = Carla //perceba que não funcionará porque foi colocado "writable:False"
console.log (`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}

