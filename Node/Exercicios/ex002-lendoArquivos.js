const fs = require('fs') //utiliza o módulo do node file system

const caminho = __dirname + '/ex002-arquivo.json'

//Leitura de forma síncrona - cuidado com arquivos pesados porque ele pode ficar travado o eventloop porque ele vai ficar parado de forma síncrona esperando ler o arquivo completamente

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assíncrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./ex002-arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})