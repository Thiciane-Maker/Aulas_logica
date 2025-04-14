const prompt = require('prompt-sync')();

let dia = parseInt(prompt('digite a quantidade de dias que o carro foi alugado'))
let KmPercorrido = parseFloat(prompt("digite a quantidade de km percorrido"))

let custo = 60;
let custo2 = 0.15;
let custototal = (dia * custo) + (KmPercorrido * custo2)

console.log(`custo da viagem: ${custototal.toFixed(2)}`)