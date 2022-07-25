//"Içamento" - "jogar pra cima"
//Normalmente a sentença de código é lida de cima para baixo de forma sequencial, visto que para utilizar uma variável com var você normalmente deve declará-la. Em javascript isso é diferente, conforme o exemplo:

console.log('a =', a)
var a = 2 //experimente comentar esta linha para verificar o efeito içamento ("hoisting") em ação 
console.log('a =', a)

//ISSO NÃO ACONTECE COM