const prompt = require('prompt-sync')();

let numero = Number(prompt("um numero de 1 a 10"));
if( numero/2==10 ){
    console.log("é positivo")
} else{
    console.log("é negativo")
}
