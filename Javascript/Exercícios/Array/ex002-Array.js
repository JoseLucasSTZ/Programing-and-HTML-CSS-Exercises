const pilotos = ['Vettel', 'alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop()// Retira o último elemento do vetor
console.log(pilotos)

pilotos.push('Verstappen') // coloca um elemento no final do vetor

pilotos.shift()// remove o primeiro elemento do vetor
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no início do vetor
console.log(pilotos)

const algunsPilotos2 = pilotos.slice(1,4) //slice serve para retirar uma parte de um vetor e colocá-lo noutro lugar
console.log(algunsPilotos2)