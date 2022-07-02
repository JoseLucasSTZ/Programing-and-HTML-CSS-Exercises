//A herança em javascript é baseada em protótipos. Assim, quando eu crio uma classe "neta" e passo um atributo que não esteja definido nela, ele buscará no objeto pai, se não houve na classe pai, ele buscará na classe avô e assim por diante. Se não achar o atributo em nenhum lugar da hierarquia de protótipos, ele dirá que é "undefined".

const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // Aqui cria um objeto novo, com o objeto pai como protótipo

console.log(filha1.nome)
filha1.nome='Ana'

console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
//filha2.nome = Carla //perceba que não funcionará porque foi colocado "writable:False"
console.log (`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
} // aqui é para verificar quais atributos vieram da classe pai

