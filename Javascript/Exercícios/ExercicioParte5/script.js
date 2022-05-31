function gerar(){
    let numero = window.document.getElementById('numero')
    let tab = window.document.getElementById('seltab')
    let n = Number(numero.value)
    
    if (n == 0){
        alert('[ERRO] Insira um valor válido')
    } else {
        tab.innerHTML=''
        for (let i=1; i<=10;i++){ 
                let item = document.createElement('option')
                item.text = `${n} x ${i} = ${n*i}`
                item.value = `tab${i}`
                tab.appendChild(item)
        }       
    }
}