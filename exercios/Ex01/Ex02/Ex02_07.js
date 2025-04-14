const prompt = require('prompt-sync')();

let numero2 = Number(prompt("qual a velocidade?"));
let numero = numero2 - 80
if (numero > 80){
    console.log(`${numero *7}`)
} else{
    console.log("nao ira levar muta")
}

