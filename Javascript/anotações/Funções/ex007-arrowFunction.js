let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 1 * a
}

//A função arrow sempre é anônima

dobro = a => 2 * a //Quando só há um parâmetro é possível tirar os parênteses, e quando você tirar as chaves possui um retorno implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
//ou
ola = _ => 'Olá' //observe que aqui ainda há um parâmetro
console.log(ola())