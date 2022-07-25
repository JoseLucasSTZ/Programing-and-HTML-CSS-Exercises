function Carro (velocidadeMaxima = 200, aceleracao = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //método público - para criar um método privado basta inserir const ou let ao invés do "this"
    this.acelerar = function () {
        if (velocidadeAtual + aceleracao <= velocidadeMaxima) {
            velocidadeAtual += aceleracao
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
