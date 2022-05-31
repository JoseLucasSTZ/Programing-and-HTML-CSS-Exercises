// Com qual idade o voto é obrigatório?
var idade = 19
console.log(`Você tem ${idade} anos de idade`)
if (idade <=18 && idade >=16 || idade >=65)
    console.log('Seu voto é opcional')
    else if (idade <16){
        console.log('Você não pode votar')
    }else{
        console.log('Seu voto é obrigatório')
    }