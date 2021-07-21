//funcao que calcula a area do quadrado
function areaQuadrado(lado){

    return lado * lado;
}

console.log(areaQuadrado(10));
//funcao para calcular o IMC 
function imc(peso,altura){
    var imc = peso/(altura*altura);
    return imc
}
console.log(imc(85,1.65));

// adicionando um evento pora quando clicar aparecer um oi
addEventListener("click", function(){console.log('Oi')});
//funcao para saber se a pessoa esta na teceira idade
function terceiraIdade(idade){
 // verifica se o que foi preenchido é um numero   
    console.log(typeof idade);
    if (typeof idade !== 'number'){
        return 'Por favor preencha um numero';
    }else if(idade>=60){
        return true;
    }else{
        return false;
    }
}
//ver o que retorna
console.log(terceiraIdade('oi'));

// Verificando quantos paises falta visitar

function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} paises`;


}

// criando uma funcao para ver se o valor é Truth 

function verifica(valor){
    return !!valor;
}
//funcao para saber o perimetro de um quadrado

function perimetro(lado2){
    return lado2*4;
}
//funcao que verifica se o numero é par 

function isEven(numero){
    var modulo = numero%2;
    if(modulo===0){
        return true;
    }else{
        return false;
    }
    
}
//funcao que retorna o tipo de dado

function tipoDado(dado){
    return typeof dado;
}
//usando o addEventListener para mostra meu nome no console quando o evento 'click' acontecer

addEventListener('click', function(){
    console.log('Silvia Luiza');
})