// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

const divPor3 = (num) => {
                if (num % 3 == 0) {
                    console.log('É divisível por 3')
                } else {
                    console.log('não é divisível por 3')
                }
            }

divPor3(3)