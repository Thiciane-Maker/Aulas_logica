const prompt = require('prompt-sync')();

let preco = Number(prompt('digite o preco do produto'));
let precoComDesconto = preco - preco * 0.05;
console.log(`preco sem desconto ${preco.toFixed(2)}`);
console.log(`preco com desconto ${precoComDesconto.toFixed(2)}`);