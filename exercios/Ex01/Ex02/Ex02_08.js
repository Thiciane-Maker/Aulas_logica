const prompt = require('prompt-sync')();

let numero2 = Number(prompt("recebeu quanto por mês?"));
let n = numero2 * 5/100
let b = numero2 * 3/100
if (numero2 > 5000){
    console.log(`${n}`)
} else{
    console.log(`${b}`)
}
