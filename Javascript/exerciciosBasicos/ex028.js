/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

const A = [2, 10, 16, 20, 7, 9]

function paresQuais(vetor) {
    let pares = []
    let impares = []
    vetor.forEach(element => {
        if(element % 2 == 0) {
            pares.push(element)  
        }
        else{
            impares.push(element)
        }
    });
    console.log(`Os números pares são ${pares.length} e ímpares são ${impares.length}`)
}

paresQuais(A)