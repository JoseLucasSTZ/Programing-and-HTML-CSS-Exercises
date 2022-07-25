/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch */
function diaUtil(dia) {
    switch(dia) {
        case 1:
            console.log('Domingo: Final de semana')
            break
        case 2:
            console.log('Segunda: Dia útil')
            break
        case 3:
            console.log('Terça: Dia útil')
            break
        case 4:
            console.log('Quarta: Dia útil')
            break
        case 5:
            console.log('Quinta: Dia útil')
            break
        case 6:
            console.log('Sexta: Dia útil')
            break
        case 7:
            console.log('Sábado: Dia útil')
            break
        default:
            console.log('Dia inválido')
    }
}

diaUtil(5)