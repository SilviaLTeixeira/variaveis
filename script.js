
var possuiGraduacao = false;
var possuiDoutorado = false;
if(possuiGraduacao){
    console.log('é verdadeiro');
    var x = 10;
} else if(possuiDoutorado){
    console.log('possui doutorado')
} else{
    console.log('nao possui nada')
}
var condicional = (5 - 10)&& (5 + 5);
if(condicional){
    console.log('Verdadeiro',condicional);
}else{
    console.log('false');
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
if(condicional2){
    console.log('Verdadeiro',condicional2);
}else{
    console.log('false');
}
var corFavorita = 'Amarelo';

switch(corFavorita){
    case 'Azul':
        console.log('Vai tomar no cu');
        break;
    default:
        console.log('Entao vai dormir');

}

var idade = 25;
var idadePai = 70;

if(idade > idadePai){
    console.log('é maior');
}else if(idade === idadePai){
    console.log('é igual');
}else{
    console.log('é menor');
}






