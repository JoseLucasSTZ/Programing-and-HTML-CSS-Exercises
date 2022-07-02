function Aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}
//Quando você tem uma função construtora, quando você utiliza o operador new não só o fato de criar um novo objeto é feito, mas também o protótipo desse objeto criado aponta para a função objeto.prototype

//função em javascript faz as vezes de classes
const aula1 = new Aula ('Bem Vindo', 123)
const aula2 = new Aula ('Até Breve', 456)

console.log (aula1, aula2)