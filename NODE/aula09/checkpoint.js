// CHECKPOINT 1

// ------ Prática de Estruturas Condicionais ------ //

// 1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
// 	- ACESSO PERMITIDO caso a senha seja válida.
// 	- ACESSO NEGADO caso a senha seja inválida.

var pass;

pass = '1234';

if(pass === '1234') {

console.log ("ACESSO PERMITIDO");

} else{

    console.log("ACESSO NEGADO");
    
}

// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.

var a;
var b;

a = 5;
b = 5;

if((a === "") || (b === "")) {

    console.log("digite um valor para a & b");

}


else if(a>b){

    console.log("a maior que b");

}

else if(a<b){

    console.log("a menor que b");

}


else{

    console.log("a igual b");

}


// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
// 	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'

let mesDoano;

mesDoano = 9

switch(mesDoano){

        case 1:
        console.log("JANEIRO");
        break;

        case 2:
        console.log("FEVEREIRO");
        break;

        case 3:
        console.log("MARÇO");
        break;
    
        case 4:
        console.log("ABRIL");
        break;

        case 5:
        console.log("MAIO");
        break;

        case 6:
            console.log("JUNHO");
            break;
    
        case 7:
            console.log("JULHO");
            break;
    
        case 8:
            console.log("AGOSTO");
            break;
        
        case 9:
            console.log("SETEMBRO");
            break;
    
        case 10:
            console.log("OUTUBRO");
            break;
    
        case 11:
            console.log("NOVEMBRO");
            break;
        
        case 12:
            console.log("DEZEMBRO");
            break;

}


// 4 - Reescreva função do exercício 1, utilizando o operador ternário.

console.log (pass === '1234' ?  "ACESSO PERMITIDO" : "ACESSO NEGADO");


 
// ------ Projeto Microondas ------ //


// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário,
//      exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".




var prato
var tempo

prato="feijao"
tempo=12


if ((prato==="pipoca" && (tempo>=10 && tempo<21)) 
||(prato==="macarrao" && (tempo>=8 && tempo<17)) 
|| (prato==="carne" && (tempo>=15 && tempo<31)) 
|| (prato==="feijao" && (tempo>=12 && tempo<24)) 
|| (prato==="brigadeiro" && (tempo>=8 && tempo<17))){

    console.log("PRATO PRONTO, BOM APETITE!!!")

}

else if ((prato==="pipoca" && (tempo>=21 && tempo<30)) 
||(prato==="macarrao" && (tempo>=17 && tempo<24)) 
|| (prato==="carne" && (tempo>=31 && tempo<45)) 
|| (prato==="feijao" && (tempo>=25 && tempo<36)) 
|| (prato==="brigadeiro" && (tempo>=17 && tempo<24))){

    console.log("COMIDA QUEIMOU!")

}


else if ((prato==="pipoca" && tempo<10) 
||(prato==="macarrao" && tempo<8) 
|| (prato==="carne" && tempo<15) 
|| (prato==="feijao" && (tempo<12) 
|| (prato==="brigadeiro" && tempo<8))){



    console.log("TEMPO INSUFICIENTE")

}

else if((prato==="pipoca" && tempo>=30) 
||(prato==="macarrao" && tempo>=24) 
|| (prato==="carne" && tempo>=45) 
|| (prato==="feijao" && (tempo>=36) 
|| (prato==="brigadeiro" && tempo>=24))){


    console.log("KABUM")

}

else{

    console.log("INEXISTENTE")

}
