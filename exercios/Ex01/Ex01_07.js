const prompt = require('prompt-sync')();

let dinheiro = Number(prompt('digite um valor:'));
let dolar = dinheiro * 100

console.log(`dinheiro: ${dinheiro} em dolares: ${dolar}`)