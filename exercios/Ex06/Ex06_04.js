const prompt = require('prompt-sync')()
let inicio = Number(prompt('digite o valordo inicio'))
let fim = Number(prompt('digite o valor do fim'))
let passo = Number(prompt('digite o valor do passo'))

for(inicio; inicio < fim; inicio += passo){
    console.log(`Valor inicial ${inicio}`);
    console.log(`Valor inicial ${fim}`);
    console.log(`Valor inicial ${passo}`);
    console.log(`===========================`);
    
}