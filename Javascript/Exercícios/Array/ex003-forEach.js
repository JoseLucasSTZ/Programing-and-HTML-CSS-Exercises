const aprovados = ['joão', 'josé', 'lucas', 'karla']

aprovados.forEach (function (nome, indice){
    console.log(`${indice+1}) ${nome}`)
}) // O forEach trabalha com callBackFunction. Não é necessário passar todos os parâmetros

aprovados.forEach(nome=>console.log(nome))
console.log('   ')
//Também é possível ter uma função previamente definida e passá-la para a função
//ex:
const exibirAprovados = aprovado =>console.log(aprovado)
aprovados.forEach(exibirAprovados)