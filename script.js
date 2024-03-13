//1-solicita usuario que insira dois numeros usando prompt
var numero1 = parseFloat(prompt("Digite o primeiro número: "));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

if (numero1 >numero2) {
    console.log("O primeiro número("+ numero1 +")é maior.");
}else if (numero2> numero1){
    console.log ("O segundo número ("+numero2+")é maior.");
}else { console.log("Os números são iguais."); }

//2-Solicita que usuario insira usando prompt
var numero = parseFloat(prompt("Digite um número."));
    if(numero>0){
        console.log("O número é positivo.");
    } else if (numero < 0){
        console.log("O número informado é negativo.");
    } else {console.log("O número informado é zero.");}
//3-le 3 valores e descreve maior
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));
var numero3 = parseFloat(prompt("Digite o terceiro número:"));

if (numero1>numero2&&numero1>numero3){
    console.log("O maior número é" + numero1);
} else if (numero2>numero1&&numero2>numero3){
    console.log("O maior número é:"+numero2);
}else{console.log("O aor número é:" + numero3);}

//4-lê três valores e soma os dois maiores
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));
var numero3 = parseFloat(prompt("Digite o terceiro número:"));

var maior,segundoMaior
if (numero1>numero2&&numero1>numero3){
    maior=numero1;
    SegundoMaior=Math.max(numero2,numero3);
}else if (numero2>numero1&&numero2>numero3){
    maior=numero2;
    segundoMaior=Math.max(numero1,numero2);
 }
 var somaDosMaiores=maior = segundoMaior;
console.log("A soma dos valores é:" +somaDosMaiores);

 //5-soma os valores e trás a méd aritmética
 var soma = 0;
 var valores = [];
 for(var i=1; i<=6; i++) {
    var numero=parseFloat(prompt("Digite o" +i+ "número:"))
    valores.push(numero);
    soma+=numero;
 }
 var media=soma/valores.length
 console,log("Números informados:"+valores.join(","));
 console.log("A média aritmética dos valores é:" + media);

//6-solicita 4 valores e aloca o primeiro, último e valor maior
function encontrarMaior(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
for (let i = 0; i < 4; i++) {
    let valor = parseFloat(prompt(`Informe o ${i + 1}º valor:`));
    valores.push(valor);
}
let primeiroValor = valores[0];
let ultimoValor = valores[valores.length - 1];
let maiorValor = encontrarMaior(valores);

console.log("O primeiro valor é:", primeiroValor);
console.log("O último valor é:", ultimoValor);
console.log("O maior valor é:", maiorValor);

//7-lê 6 números q user informa, valor inferior a 72 é somado, escrito valores final e valores informados
let numero = []
let soma = 0;

for(let i = 0; i <6; i++) {
    let numero =parseFloat(prompt('informe o ${i + 1}numero: '));
    numero.push(numero);
    if (numero < 72) {
        soma+= numero;
    }
}
console.log("soma inferior: ",soma);
console.log("todos os números foram:", numeros);

//8-med 4 numeros se maior que 0 e > 10. se maior q 5 passou, else tente novamente
let soma = 0;

for (let i = 0; i < 4; i++) {
    let numero = parseFloat(prompt("Informe o ${i + 1}numero:" ));
}   if (numero > 0 && numero < 10) {
    numeros.push(numero)
    soma +=numero;
} else {
    console.log("Numero inválido. tente novamente.");~
    i--;
}

let media = soma / numeros.lenght;

if (media>5){
    console.log("você passou no teste.");
}else {
    console.log("tente novamente.");
}

//9-lê o ano de nascimento e escreve se pode ou n executar ação
let anoNacimento = parseInt(prompt("Informe ano de nascimento: "));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade>=16) {
    console.log("apto.");
} else {
    console.log("inapto.");
}

//10-altura, sexo (m or f) com base em imc trás o peso ideal
function calcularpesoIdeal(altura, sexo) {
    let pesoIdeal;
    if(sexo===f){
        pesoIdeal= 21.75 * (altura*altura); 
    }else if (sexo===m) {
        pesoIdeal=23.75 * (altura*altura);
    } else {
        console.log("utilize F or M")
        return;
    }
    return pesoIdeal.toFixed(2);
}

let altura = parseFloat(prompt("informe alt em metros: "));
let sexo = parseFloat(prompt("informe sexo (F/M): "));
let pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== undefined) {
    crossOriginIsolated.log("O peso ideal com base no IMC é: ", pesoIdeal, "kg");
}

//11-lê 2 valores inteiros e verifica ação (sobre dois valores lidos 0-9)
function realizarOperacao(valor1, valor2, acao) {
    switch(acao) {
        case 0: return valor1 + valor2;
        case 1: return valor1 - valor2;
        case 2: return valor1 * valor2;
        case 3: return valor1 / valor2;
        case 4: return valor1 % valor2;
        case 5: return Math.pow(valor1,valor2); //valor elevado a potência
        case 6: return Math.sqrt(valor1); //raiz quadrada do valor 1
        case 7: return Math.sqrt(valor2); //raiz quadrada do valor 2
        case 8: return Math.max(valor1,valor2); //maior valor entre os operadores
        case 9: return Math.min(valor1 ,valor2); //menor valor entre operadores
        default: return "apenas 2 casas decimais.";
    }
}
let valor1 = parseInt(prompt("Insira o primeiro valor: "));
let valor2 = parseInt(prompt("Insira o segundo valor: "));
let acao = parseInt("Informa a ação desejada (0=+;1=-;2=*;3=/;4=%;5=valorelevadoapotência;6=raizv1;7=raizv2;8=maiorvalorentreoperação;9=menorvalorentreoperações): ");

let resultado = realizarOperacao(valor1, valor2, acao);
console.log("Resultado da operação: ", resultado);
