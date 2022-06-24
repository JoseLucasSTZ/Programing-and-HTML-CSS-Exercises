//Em javascript funções são "cidadãos de primeira linha"
//"High Order Function"
/*É importante lembrar que em Javascript as funções são tratadas como dados.
Por isso, elas podem ser passadas como parâmetros para outras funções, e também
podem retornar outras funções. Esse é um dos recursos mais importantes dos paradigmas funcionais*/

//Forma literal de criar uma função 
function fun1(){
}

//Você consegue armazenar funções em variáveis
const fun2 = function (){}

//Você consegue armazenar funções em arrays
const array = [function (a,b) {return a+b}, fun1, fun2]
//ex: 
console.log(array[0](2,3))

//Também é possível armazenar funções em atributos de objetos
const obj = {}
obj.falar = function () {return 'Opa'}
//ex:
console.log(obj.falar())

//armazenar funções em outras funções
function soma (a,b) {
    return function (c){
        console.log(a+b+c)
    }
}

//formas de se chamar a função dentro da função:
soma (2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)
