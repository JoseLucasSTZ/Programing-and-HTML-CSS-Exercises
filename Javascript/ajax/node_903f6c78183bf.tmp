const bodyParser = require('body-parser')
const express = require('express')
const app = express()


//funções middle
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true})) // transforma dados inseridos em formulários
app.use(bodyParser.json()) // transforma o json em obkjeto, se vier
app.get('/teste', (req,res) => res.send('Ok'))

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, ".")
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

app.listen(8080, () => console.log('Executando...')) // se a porta estiver ocupada, pegue outra

