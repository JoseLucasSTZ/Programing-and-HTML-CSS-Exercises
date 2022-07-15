const gulp = require('gulp')
const series = gulp.series // também pode ser desse jeito: const{ series } = require('gulp') 

function copiar(cb) {
    console.log('Tarefa de copiar!')
    return cb()
}

module.exports.default = series(copiar) //o gulp espera o default