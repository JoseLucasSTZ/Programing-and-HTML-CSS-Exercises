//FORMAS DE SE CRIAR OBJETOS


//1ª forma de criar objetos: notação literal
const obj1 = {} //usa colchetes

//2ª forma de criar objetos: Função object
const obj2 = new Object //pode ou não passar parâmetros "Object", neste caso, é uma função.

//3ª Forma de criar objetos: Função Construtora
function Produto(nome, preco, desc) {
    this.nome = nome //neste caso o atributo nome tornou-se público pelo uso da palavra "this"
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// 4ª forma de criar objetos: função factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

//5ª Forma de criar objetos, pelo método Object.create
const filha = Object.create(null)
filha.nome = 'Ana'

//Exemplo de função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')
console.log(fromJSON.info)