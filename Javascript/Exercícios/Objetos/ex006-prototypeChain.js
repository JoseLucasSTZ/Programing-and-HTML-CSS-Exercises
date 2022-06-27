//Cadeia de protótipos

Object.prototype.attrNAOFACAISSO = 'Z'

const avo = { attr1: 'A'} // O avô terá como prototype o object.prototype
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1) //puxou do avô

console.log(filho.attr0) // puxou do object.prototype

console.log(filho.attrNAOFACAISSO) // atribuímos uma propriedade diretamente ao object.prototype

const carro = {
    velAtual:0,
    velMax:200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
        this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing - é o que acontece quando você sobrescreve um atributo da classe pai
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

console.log(' ')

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

console.log(' ')

volvo.aceleraMais(100)
console.log(volvo.status())

console.log(' ')

ferrari.aceleraMais(300)
console.log(ferrari.status())