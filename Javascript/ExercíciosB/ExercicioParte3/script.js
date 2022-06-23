function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoDig = window.document.getElementById('idade') 
    var RadSex = window.document.getElementsByName('RadSex')
    var idade = ano-Number(anoDig.value)
    var res = document.querySelector('div#res')
        
    if (anoDig.value.length == 0 || Number(anoDig.value) > ano) {
        alert('[ERRO] Digite um ano válido para calular sua idade') 
    }
        else {
            var imge = document.createElement('img')
            imge.setAttribute('id', 'foto')
            var genero= ''
            if (RadSex[0].checked) {
                genero = 'Homem'
                if (idade>=0 && idade <10){
                    imge.setAttribute('src','img/menino.png')
                } else if( idade <21){
                    imge.setAttribute('src','img/Adolescente-Homem.png')
                } else if (idade <50){
                    imge.setAttribute('src','img/Homem.png')
                } else{
                    imge.setAttribute('src','img/Idoso.png')
                }   
            } else if (RadSex[1].checked){
                    genero='Mulher'
                if (idade>=0 && idade <10){
                    imge.setAttribute('src','img/menina.png')
                } else if( idade <21){
                    imge.setAttribute('src','img/Adolescente-Mulher.png')
                } else if (idade <50){
                    imge.setAttribute('src','img/Mulher.png')
                } else{
                    imge.setAttribute('src','img/Idosa.png')
                }
                } 
            res.style.textAlign = 'center'
            res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(imge)
        }
        }