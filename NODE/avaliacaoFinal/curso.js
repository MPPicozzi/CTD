let estudantes = require('./estudantes')

function Curso(nomeDoCurso, notaDeAprovacao, faltasMaximas, listaDeEstudantes){
   
    this.nomeDoCurso = nomeDoCurso,
    this.notaDeAprovacao = notaDeAprovacao,
    this.faltasMaximas = faltasMaximas,
    this.listaDeEstudantes = listaDeEstudantes
    
}

module.exports = Curso;