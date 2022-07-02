// O "this" é uma palavra reservada utilizada para referenciar um objeto em detemrinado contexto. No mundo javascript ela é causa de conflito porque a linguagem foi construída em cima de uma filosofia funcional, apesar de possuir suporte à OO.

// Com efeito, torna-se importante possuir atenção para identificar para onde o "this" aponta em javascript, ou seu comportamento pode ser inesperado.

// Uma forma de solucionar o problema é utilizar as "arrow functions", criadas para reduzir a sintaxe e sanar o problema de referenciação. Quando utilizado o this dentro de uma arrow function, nunca ocorrerá erro de identificação

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //Aqui o "This" a saudação do objeto instanciado, e não da classe, "window" ou outro.  
    }
}

pessoa.falar()

const falar2 = pessoa.falar
falar2() //Conflito entre paradigma funcional e OO.

// Saudação começou a apontar para um "this" diferente que não é mais pessoa. Para contornar o problema é possível usar a função bind()

const falarDePessoa = pessoa.falar.bind(pessoa) // no bind você passa um objeto no qual quer que seja resolvido o "this". Observe que agora o problema está resolvido

falarDePessoa()
