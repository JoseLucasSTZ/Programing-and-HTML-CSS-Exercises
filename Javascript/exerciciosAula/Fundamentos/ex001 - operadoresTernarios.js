const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//Um operador ternário é aquele com 3 operandos. No caso acima "nota >= 7" "?" aprovado ":" Reprovado. Faz as vezes de um if/else
console.log(resultado(7.1))
console.log(resultado(6.7))