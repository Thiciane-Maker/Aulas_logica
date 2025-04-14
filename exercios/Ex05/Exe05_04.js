const prompt = require('prompt-sync')();

let i = 0;
let entrada;
let maior = 0
let menor;
let soma = 0;
while(i <= 10){
    entrada = Number(prompt("digite um numero:"));
    if(entrada > maior){
        maior = entrada;
    }
    if(entrada < menor){
        menor = entrada;
    }

    soma += entrada;
    i++;
}
let meedia = soma/10;
console.log(`maior valor:${maior}`)
console.log(`menor valor:${menor}`)
console.log(`media:${Media.toFixed(2)}`);