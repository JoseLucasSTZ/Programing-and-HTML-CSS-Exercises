//closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função
//Contexto léxico em ação!

const valor = 'Global'

function minhaFuncao()  {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// -------------------------------------------------------------------------------------//

console.log('---//---')

// -------------------------------------------------------------------------------------//

const valor2 = 'Global2'

function fora() {
    const valor2 = 'Local2'
    function dentro () {
        return valor2
    }
    return dentro
}

const minhaFuncao2 = fora()

console.log(minhaFuncao2())