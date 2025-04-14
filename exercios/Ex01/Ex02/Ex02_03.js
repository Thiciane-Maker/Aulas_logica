const prompt = require('prompt-sync')();

let numero = Number(prompt("qual o numero"));
if( numero%2==0){
    console.log("é par")
} else{
    console.log("é impar")
}

