const pessoa = {
    nome: 'Rebeca',
    idade: 2, 
    peso: 13
}
//Objetos em javascript são coleções dinâmicas de chaves e valores. Portanto temos o método "keys" que retorna as chaves, o "values", que retorna os valores, e o "entries" que retorna os registros (arrays)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))