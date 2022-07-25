function Pessoa () {
    this.idade = 0

    const self = this //Usa-se o self para armazenar a referência de "this"
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa

// Utilizando arrow function

function Pessoa () {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
