//Faça um algoritmo que receba 2 números inteiros armazenando-os em variáveis e
//exiba a divisão entre eles no console.
const prompt = require('prompt-sync')()
let numero = Number(prompt('digite um numero:'));
let numero2 = Number(prompt('digite outro numero:'));
let resolver = numero / numero2

console.log(`a divisao entre: ${numero} / ${numero2} e igual a: ${resolver}`)
