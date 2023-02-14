function Postagem(titulo,texto,autor) {
    this.titulo = titulo,
    this.texto = texto,
    this.autor = autor,
    this.visualizacoes = 50,
    this.comentarios = [
        { autor: '',mensagem:''},
        { autor: '',mensagem:''}
    ],
    this.estaAoVivo = true
}

let postagem = new Postagem('a','b','c')

console.log(postagem);