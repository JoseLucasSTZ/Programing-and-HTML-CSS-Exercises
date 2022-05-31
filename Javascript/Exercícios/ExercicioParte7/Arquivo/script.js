var listaNumeros = []
var InputNumero = window.document.getElementById('InputNumero')
var select = window.document.getElementById('Select')
var res = window.document.getElementById('res')

function adicionar(){
    let option = document.createElement('option')
    listaNumeros.push(Number(InputNumero.value))
    option.text = `Valor ${InputNumero.value} Adicionado`
    select.appendChild(option) 
    alert(listaNumeros)
}

function finalizar (){
    res.innerHTML= `Ao todo temos ${listaNumeros.length} números cadastrados`
    

}