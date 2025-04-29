//Faça uma função que peça um valor e mostre na tela se o valor é positivo ou negativo.

const prompt = require('prompt-sync')();

let valor = Number(prompt('digite um valor:'));
switch (true){
    case valor > 10:
        console.log ("positivo");
        break;
        case valor < 0 && valor <= 10:
            console.log("negativo");
            break;

default:

}