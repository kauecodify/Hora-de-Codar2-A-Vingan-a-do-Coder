var numero1 = parseFloat(prompt("Digite o primeiro número: "));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

if (numero1 >numero2) {
    console.log("O primeiro número("+ numero1 +")é maior.");
}else if (numero2> numero1){
    console.log ("O segundo número ("+numero2+")é maior.");
}else { console.log("Os números são iguais."); }
