function contar(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let mensagem = window.document.getElementById('instrucoes')
    let ini = Number(inicio.value)
    let fi = Number(fim.value)
    let pas = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length ==0 || passo.value.length ==0) {
       window.alert('[ERRO] Faltam dados!')
    }
    else{
       mensagem.innerHTML = '<strong> Contabilizando... </strong></br>'
       for (let c=ini; c<=fi; c+=pas){
           mensagem.innerHTML+= `${c} \u{1F449}`
       }
           mensagem.innerHTML+= `\u{1F3F4}` 
    }
   
   
   
   
   /*
    while (ini < fi){
    ini = ini+pas
    mensagem = ini +   
    
    }*/   
}