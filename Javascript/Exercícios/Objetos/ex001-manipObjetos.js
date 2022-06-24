//Objetos em JS são cole~çoes dinâmicas de pares chave/valor

const produto = new Object//aqui seusa a função Object junto À palavra new para criar um novo objeto
produto.nome = 'Cadeira' // Graças à tipagem dinâmica é possível incluir atributos simplificadamente
produto['marca do produto'] = 'Genérica'  // É ruim porque limita a forma de acesso
produto.preco = 220
//Também é possível excluir atributos do objeto a partir do delete
delete produto['marca do produto']

//Exemplo de objeto mais complexo
const carro = {
    modelo:'A4',
    valor:89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro:'Rua ABC',
            numero:123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade:19
    },
    {
        nome:'Ana',
        idade:42
    }],
    calcularValorSeguro: function(){
        //...
    }
}
carro.proprietario.endereco.numero=456
console.log(carro)
//Também é possível deletar objetos e funções, ec
delete carro
console.log(carro)

