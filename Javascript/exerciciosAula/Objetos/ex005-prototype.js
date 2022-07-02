//A forma que você acessa um prototype numa função é assim: nomeDoObjeto.__proto__

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volto = {
    modelo: 'V40',
    velMax:200
}

console.log(ferrari.__proto__)

console.log(Object.prototype.__proto__) // Todo objeto terá um prototype que referenciará a função Objec.prototype