function Aluno (nome, faltas, notas){

    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = calcularMedia;
    this.faltas = faltas;
   
    }

    function calcularMedia () {

        let quantidadeDeNotas = this.notas.lenght;
        let somaDeNotas = this.notas.reduce((acumulador,valorAtual) => {

            return acumulador + valorAtual;

        });

        return (somaDeNotas/this.notas.lenght)


    } 


    function faltas(){

        this.faltas += 1

    }


module.exports = Alunos;

