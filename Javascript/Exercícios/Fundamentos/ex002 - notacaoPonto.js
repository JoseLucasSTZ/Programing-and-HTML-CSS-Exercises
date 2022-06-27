const obj1 = {} // notação literal
obj1.nome = 'Bola' //Você pode adicionar atributos dinamicamente por meio de "."
obj1['nome'] = 'Bola2' // Essa forma também é válida. Te dá flexibilidade porque você pode acessar o atributo por meio de um texto ou string
console.log(obj1.nome)

function obj (nome) {
    this.nome = nome //ATENÇÃO - UTILIZAR A PALAVRA 'THIS' torna a variável pública. Se houvesse se utilizado um "let" isso não aconteceria.
}

const obj2 = new obj('Cadeira') // perceba que a função obj funcionou como uma classe
console.log(obj2.nome)